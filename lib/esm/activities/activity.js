import { ActivityTypes } from './activity.types';
import { DurationClassAbstract } from '../duration/duration.class.abstract';
import { DataLatitudeDegrees } from '../data/data.latitude-degrees';
import { DataLongitudeDegrees } from '../data/data.longitude-degrees';
import { Stream } from '../streams/stream';
import { isNumber } from '../events/utilities/helpers';
import { DataPower } from '../data/data.power';
import { DataStartEvent } from '../data/data.start-event';
import { DataStopEvent } from '../data/data.stop-event';
import { DataStopAllEvent } from '../data/data.stop-all-event';
import { DataTime } from '../data/data.time';
import { ActivityUtilities } from '../events/utilities/activity.utilities';
import { DataDistance } from '../data/data.distance';
import { DataDuration } from '../data/data.duration';
import { DataRiderPositionChangeEvent } from '../data/data.rider-position-change-event';
import { ActivityParsingOptions } from './activity-parsing-options';
import { ParsingEventLibError } from '../errors/parsing-event-lib.error';
import { DurationExceededEventLibError } from '../errors/duration-exceeded-event-lib.error';
export class Activity extends DurationClassAbstract {
    constructor(startDate, endDate, type, creator, options = ActivityParsingOptions.DEFAULT, name = '') {
        super(startDate, endDate);
        this.intensityZones = []; // maybe rename
        this.laps = [];
        this.streams = [];
        this.events = [];
        if (!startDate || !endDate) {
            throw new ParsingEventLibError('Start and end dates are required');
        }
        if (endDate < startDate) {
            throw new ParsingEventLibError('Activity end date is before the start date and that is not acceptable');
        }
        if (+endDate - +startDate > options.maxActivityDurationDays * 24 * 60 * 60 * 1000) {
            throw new DurationExceededEventLibError(`Activity duration exceeds ${options.maxActivityDurationDays} days. That is not supported`);
        }
        this.type = type;
        this.creator = creator;
        this.parseOptions = options;
        this.name = name;
    }
    createStream(type) {
        return new Stream(type, Array(ActivityUtilities.getDataLength(this.startDate, this.endDate)).fill(null));
    }
    addDataToStream(type, date, value) {
        this.getStreamData(type)[this.getDateIndex(date)] = value;
        return this;
    }
    addStream(stream) {
        if (this.streams.find(activityStream => activityStream.type === stream.type)) {
            throw new Error(`Duplicate type of stream when adding ${stream.type} to activity ${this.getID()}`);
        }
        this.streams.push(stream);
        return this;
    }
    clearStreams() {
        this.streams = [];
        return this;
    }
    removeStream(streamType) {
        const stream = streamType instanceof Stream ? streamType : this.getStream(streamType);
        this.streams = this.streams.filter(activityStream => stream !== activityStream);
        return this;
    }
    replaceStreamData(streamType, data) {
        this.removeStream(streamType);
        this.addStream(this.createStream(streamType).setData(data));
        return this;
    }
    addStreams(streams) {
        this.streams.push(...streams);
        return this;
    }
    getAllStreams() {
        return this.streams;
    }
    // @todo needs more logic improvement and transparency
    getAllExportableStreams() {
        return this.getAllStreams().filter(stream => stream.isExportable());
    }
    hasStreamData(streamType, startDate, endDate) {
        try {
            this.getStreamData(streamType, startDate, endDate);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    hasPositionData(startDate, endDate) {
        return (this.hasStreamData(DataLatitudeDegrees.type, startDate, endDate) &&
            this.hasStreamData(DataLongitudeDegrees.type, startDate, endDate));
    }
    isTrainer() {
        return Activity.TRAINER_TYPES.indexOf(this.type) !== -1;
    }
    hasPowerMeter() {
        return this.hasStreamData(DataPower.type);
    }
    getStream(streamType) {
        const find = this.streams.find(stream => stream.type === streamType);
        if (!find) {
            throw Error(`No stream found with type ${streamType}`);
        }
        return find;
    }
    getStreamData(streamType, startDate, endDate) {
        const stream = streamType instanceof Stream ? streamType : this.getStream(streamType);
        if (!startDate && !endDate) {
            return stream.getData();
        }
        if (startDate && endDate) {
            return stream
                .getData()
                .filter((value, index) => new Date(this.startDate.getTime() + index * 1000) <= endDate)
                .filter((value, index) => new Date(this.startDate.getTime() + index * 1000) >= startDate);
        }
        if (startDate) {
            return stream.getData().filter((value, index) => new Date(this.startDate.getTime() + index * 1000) > startDate);
        }
        if (endDate) {
            return stream.getData().filter((value, index) => new Date(this.startDate.getTime() + index * 1000) < endDate);
        }
        return [];
    }
    // @todo see how this fits with the filtering on the stream class
    /**
     * Gets the data array of an activity stream excluding the non numeric ones
     * @todo include strings and all data abstract types
     * @param streamType
     * @param startDate
     * @param endDate
     */
    getSquashedStreamData(streamType, startDate, endDate) {
        return this.getStreamData(streamType, startDate, endDate).filter(data => isNumber(data));
    }
    getPositionData(startDate, endDate) {
        const latitudeStreamData = this.getStreamData(DataLatitudeDegrees.type, startDate, endDate);
        const longitudeStreamData = this.getStreamData(DataLongitudeDegrees.type, startDate, endDate);
        return latitudeStreamData.reduce((positionArray, value, index, array) => {
            const currentLatitude = latitudeStreamData[index];
            const currentLongitude = longitudeStreamData[index];
            if (!isNumber(currentLatitude) || !isNumber(currentLongitude)) {
                positionArray.push(null);
                return positionArray;
            }
            positionArray.push({
                latitudeDegrees: currentLatitude,
                longitudeDegrees: currentLongitude
            });
            return positionArray;
        }, []);
    }
    getSquashedPositionData(startDate, endDate) {
        return this.getPositionData(startDate, endDate).filter(data => data !== null);
    }
    getStreamDataTypesBasedOnDataType(streamTypeToBaseOn, streamTypes) {
        return ActivityUtilities.getStreamDataTypesBasedOnDataType(this.getStream(streamTypeToBaseOn), this.getAllStreams()
            .filter(stream => stream.type !== streamTypeToBaseOn)
            .filter(stream => streamTypes.indexOf(stream.type) !== -1));
    }
    getStreamDataTypesBasedOnTime(streamTypes) {
        return ActivityUtilities.getStreamDataTypesBasedOnTime(this.startDate, this.endDate, !streamTypes
            ? this.getAllStreams()
            : this.getAllStreams().filter(stream => streamTypes.indexOf(stream.type) !== -1));
    }
    getStreamDataByTime(streamType, filterNull = false, filterInfinity = false) {
        return this.getStream(streamType).getStreamDataByTime(this.startDate, filterNull, filterInfinity);
    }
    getStreamDataByDuration(streamType, filterNull = false, filterInfinity = false) {
        return this.getStream(streamType).getStreamDataByDuration(0, filterNull, filterInfinity);
    }
    addLap(lap) {
        this.laps.push(lap);
        return this;
    }
    getLaps(activity) {
        return this.laps;
    }
    hasLaps() {
        return this.laps.length > 0;
    }
    getAllEvents() {
        return this.events;
    }
    getStartEvents() {
        return this.events.filter(event => event instanceof DataStartEvent);
    }
    getStopEvents() {
        return this.events.filter(event => event instanceof DataStopEvent);
    }
    getStopAllEvents() {
        return this.events.filter(event => event instanceof DataStopAllEvent);
    }
    getAllRiderPositionChangeEvents() {
        return this.events.filter(event => event instanceof DataRiderPositionChangeEvent);
    }
    addEvent(event) {
        this.events.push(event);
        return this;
    }
    setAllEvents(events) {
        this.events = events;
        return this;
    }
    generateTimeStream(streamTypes = []) {
        const timeStream = this.createStream(DataTime.type);
        let streams = this.getAllStreams();
        if (streamTypes.length) {
            streams = streams.filter(stream => streamTypes.indexOf(stream.type) !== -1);
        }
        streams.forEach(stream => {
            this.getStreamDataByDuration(stream.type, true, false).forEach((data) => {
                timeStream.getData()[data.time / 1000] = data.time / 1000;
            });
        });
        return timeStream;
    }
    generateDurationStream(streamTypes = []) {
        const timeStream = this.generateTimeStream(streamTypes);
        const durationStream = this.createStream(DataDuration.type);
        durationStream.setData(timeStream.getData());
        return durationStream;
    }
    getDateIndex(date) {
        // @todo ceil vs floor (still debatable)
        return Math.round((+date - +this.startDate) / 1000);
    }
    toJSON() {
        const intensityZones = [];
        this.intensityZones.forEach((value) => {
            intensityZones.push(value.toJSON());
        });
        const stats = {};
        this.stats.forEach((value, key) => {
            Object.assign(stats, value.toJSON());
        });
        // Fetch streams from activity
        const streams = this.getAllStreams().reduce((streams, stream) => {
            streams.push(stream.toJSON());
            return streams;
        }, []);
        // Now append missing time stream to JSON export
        if (streams === null || streams === void 0 ? void 0 : streams.length) {
            const stream = streams.find(s => s.type === DataDistance.type) || streams[0];
            const timeStream = this.generateTimeStream([stream.type]).toJSON();
            streams.push(timeStream);
        }
        return {
            name: this.name || null,
            startDate: this.startDate.getTime(),
            endDate: this.endDate.getTime(),
            type: this.type,
            creator: this.creator.toJSON(),
            intensityZones: intensityZones,
            powerMeter: this.hasPowerMeter(),
            trainer: this.isTrainer(),
            stats: stats,
            streams: streams,
            events: this.getAllEvents().reduce((eventsArray, event) => {
                eventsArray.push(event.toJSON());
                return eventsArray;
            }, []),
            laps: this.getLaps().reduce((jsonLapsArray, lap) => {
                jsonLapsArray.push(lap.toJSON(this));
                return jsonLapsArray;
            }, [])
        };
    }
}
Activity.TRAINER_TYPES = [
    ActivityTypes.VirtualRun,
    ActivityTypes.VirtualCycling,
    ActivityTypes.Treadmill,
    ActivityTypes.IndoorCycling,
    ActivityTypes.IndoorRunning,
    ActivityTypes.IndoorRowing,
    ActivityTypes.Crosstrainer,
    ActivityTypes.EllipticalTrainer,
    ActivityTypes.FitnessEquipment,
    ActivityTypes.StairStepper
];
