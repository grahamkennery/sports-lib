"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventImporterGPX = void 0;
const activity_1 = require("../../../../activities/activity");
const creator_1 = require("../../../../creators/creator");
const event_1 = require("../../../event");
const activity_types_1 = require("../../../../activities/activity.types");
const importer_gpx_mapper_1 = require("./importer.gpx.mapper");
const helpers_1 = require("../../../utilities/helpers");
const event_utilities_1 = require("../../../utilities/event.utilities");
const gx_parser_1 = require("./gx-parser");
const data_duration_1 = require("../../../../data/data.duration");
const data_timer_time_1 = require("../../../../data/data.timer-time");
const file_type_enum_1 = require("../../file-type.enum");
const activity_parsing_options_1 = require("../../../../activities/activity-parsing-options");
const empty_event_sports_libs_error_1 = require("../../../../errors/empty-event-sports-libs.error");
class EventImporterGPX {
    static getFromString(gpx, domParser, options = activity_parsing_options_1.ActivityParsingOptions.DEFAULT, name = 'New Event') {
        return new Promise((resolve, reject) => {
            // debugger
            const parsedGPX = new gx_parser_1.GXParser(gpx, domParser);
            const track = parsedGPX.trk || parsedGPX.rte;
            if (!(track === null || track === void 0 ? void 0 : track.length)) {
                reject(new empty_event_sports_libs_error_1.EmptyEventLibError());
            }
            const activities = track.reduce((activities, trackOrRoute) => {
                var _a, _b;
                // Get the samples
                let samples = [];
                let isActivity = false;
                if (trackOrRoute.trkseg) {
                    samples = trackOrRoute.trkseg.reduce((trkptArray, trkseg) => {
                        if (!trkseg.trkpt) {
                            return trkptArray;
                        }
                        return trkptArray.concat(trkseg.trkpt);
                    }, []);
                    // Determine if it's a route. The samples will most probably be missing the time
                    isActivity = !!((_a = samples[0]) === null || _a === void 0 ? void 0 : _a.time);
                }
                else if (trackOrRoute.rtept) {
                    samples = trackOrRoute.rtept;
                }
                // Sort the points if its only an activity
                if (isActivity) {
                    // Filter samples having time data only for upcoming sort
                    samples = samples.filter(sample => {
                        return !!sample.time;
                    });
                    // Sort samples !
                    samples.sort((sampleA, sampleB) => {
                        return +new Date(sampleA.time[0]) - +new Date(sampleB.time[0]);
                    });
                }
                // Create an activity. Set the dates depending on route etc
                const startDate = new Date(isActivity ? samples[0].time[0] : new Date());
                // @todo for routes add a separate parser
                const endDate = isActivity
                    ? new Date(samples[samples.length - 1].time[0])
                    : new Date(startDate.getTime() + samples.length * 1000);
                let activityType = isActivity ? activity_types_1.ActivityTypes.unknown : activity_types_1.ActivityTypes.route;
                if (trackOrRoute.type && activity_types_1.ActivityTypes[trackOrRoute.type]) {
                    activityType = activity_types_1.ActivityTypes[trackOrRoute.type];
                }
                else if (trackOrRoute.type && trackOrRoute.type[0] && parsedGPX.creator.match(/StravaGPX/gi) !== null) {
                    const stravaGpxTypeId = parseInt(trackOrRoute.type[0], 10);
                    const typeFound = activity_types_1.StravaGPXTypes.map.get(stravaGpxTypeId);
                    if (typeFound) {
                        activityType = typeFound;
                    }
                }
                const activityName = ((_b = trackOrRoute.name) === null || _b === void 0 ? void 0 : _b[0]) || '';
                const activity = new activity_1.Activity(startDate, endDate, activityType, new creator_1.Creator(parsedGPX.creator, undefined, parsedGPX.version), options, activityName);
                // Setup sample info which could be use when getting sample values
                const hasPowerMeter = samples.findIndex(sample => { var _a; return (_a = sample.extensions) === null || _a === void 0 ? void 0 : _a.find((ext) => { var _a; return (_a = ext.power) === null || _a === void 0 ? void 0 : _a.length; }); }) !== -1;
                const samplesInfo = { hasPowerMeter: hasPowerMeter };
                // Match
                importer_gpx_mapper_1.GPXSampleMapper.forEach(sampleMapping => {
                    const subjectSamples = (samples.filter((sample) => (0, helpers_1.isNumberOrString)(sampleMapping.getSampleValue(sample, samplesInfo))));
                    if (subjectSamples.length) {
                        activity.addStream(activity.createStream(sampleMapping.dataType));
                        subjectSamples.forEach((subjectSample, index) => {
                            activity.addDataToStream(sampleMapping.dataType, isActivity ? new Date(subjectSample.time[0]) : new Date(activity.startDate.getTime() + index * 1000), sampleMapping.getSampleValue(subjectSample, samplesInfo));
                        });
                    }
                });
                // Compute moving time, timer time and elapsed time
                const elapsedTime = (activity.endDate.getTime() - activity.startDate.getTime()) / 1000;
                const timerTime = elapsedTime;
                // Apply stats
                activity.addStat(new data_duration_1.DataDuration(elapsedTime));
                activity.addStat(new data_timer_time_1.DataTimerTime(timerTime));
                activities.push(activity);
                return activities;
            }, []);
            const event = new event_1.Event(name, activities[0].startDate, activities[activities.length - 1].endDate, file_type_enum_1.FileType.GPX);
            activities.forEach(activity => {
                event.addActivity(activity);
            });
            // generate global stats
            event_utilities_1.EventUtilities.generateStatsForAll(event);
            resolve(event);
        });
    }
}
exports.EventImporterGPX = EventImporterGPX;
