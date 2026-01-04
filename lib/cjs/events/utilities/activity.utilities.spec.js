"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../event");
const activity_1 = require("../../activities/activity");
const data_heart_rate_1 = require("../../data/data.heart-rate");
const data_altitude_1 = require("../../data/data.altitude");
const data_distance_1 = require("../../data/data.distance");
const data_duration_1 = require("../../data/data.duration");
const creator_1 = require("../../creators/creator");
const activity_types_1 = require("../../activities/activity.types");
const stream_1 = require("../../streams/stream");
const activity_utilities_1 = require("./activity.utilities");
const data_speed_1 = require("../../data/data.speed");
const lap_1 = require("../../laps/lap");
const data_speed_avg_1 = require("../../data/data.speed-avg");
const lap_types_1 = require("../../laps/lap.types");
const data_time_1 = require("../../data/data.time");
const file_type_enum_1 = require("../adapters/file-type.enum");
const importer_json_1 = require("../adapters/importers/json/importer-json");
describe('Activity Utilities', () => {
    let event;
    beforeEach(() => {
        event = new event_1.Event('New name', new Date(0), new Date(200), file_type_enum_1.FileType.FIT);
        const activity = new activity_1.Activity(new Date(0), new Date(new Date(0).getTime() + 10000), activity_types_1.ActivityTypes.Running, new creator_1.Creator('Test'));
        activity.setDuration(new data_duration_1.DataDuration(10));
        activity.setDistance(new data_distance_1.DataDistance(10));
        event.addActivity(activity);
    });
    it('should get the correct minimum for a DataType', () => {
        event.getFirstActivity().addStream(new stream_1.Stream(data_heart_rate_1.DataHeartRate.type, [0, 50, 100]));
        event.getFirstActivity().addStream(new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, 300, 400]));
        expect(activity_utilities_1.ActivityUtilities.getDataTypeMin(event.getFirstActivity(), data_heart_rate_1.DataHeartRate.type)).toBe(0);
        expect(activity_utilities_1.ActivityUtilities.getDataTypeMin(event.getFirstActivity(), data_altitude_1.DataAltitude.type)).toBe(200);
    });
    it('should get the correct maximum for a DataType', () => {
        event.getFirstActivity().addStream(new stream_1.Stream(data_heart_rate_1.DataHeartRate.type, [0, 50, 100]));
        event.getFirstActivity().addStream(new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, 300, 400]));
        expect(activity_utilities_1.ActivityUtilities.getDataTypeMax(event.getFirstActivity(), data_heart_rate_1.DataHeartRate.type)).toBe(100);
        expect(activity_utilities_1.ActivityUtilities.getDataTypeMax(event.getFirstActivity(), data_altitude_1.DataAltitude.type)).toBe(400);
    });
    it('should get the correct difference for a DataType', () => {
        event.getFirstActivity().addStream(new stream_1.Stream(data_heart_rate_1.DataHeartRate.type, [0, 50, 100]));
        event.getFirstActivity().addStream(new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, 300, 400]));
        expect(activity_utilities_1.ActivityUtilities.getDataTypeMinToMaxDifference(event.getFirstActivity(), data_heart_rate_1.DataHeartRate.type)).toBe(100);
        expect(activity_utilities_1.ActivityUtilities.getDataTypeMinToMaxDifference(event.getFirstActivity(), data_altitude_1.DataAltitude.type)).toBe(200);
    });
    it('should get the correct average for a DataType', () => {
        event.getFirstActivity().addStream(new stream_1.Stream(data_heart_rate_1.DataHeartRate.type, [0, 50, 100]));
        event.getFirstActivity().addStream(new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, 300, 400]));
        expect(activity_utilities_1.ActivityUtilities.getDataTypeAvg(event.getFirstActivity(), data_heart_rate_1.DataHeartRate.type)).toBe(50);
        expect(activity_utilities_1.ActivityUtilities.getDataTypeAvg(event.getFirstActivity(), data_altitude_1.DataAltitude.type)).toBe(300);
    });
    it('should get the correct gain for a DataType', () => {
        event.getFirstActivity().addStream(new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, 300, 400]));
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type)).toBe(200);
        // Add more altitude data but this time descending so it would not affect the gain
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(400);
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(300);
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(200);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type)).toBe(200);
        // Add more for gain
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(400); // Gain 400 (from prev)
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(300);
        // Gain 400
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(400); // Gain 500
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type)).toBe(500);
    });
    it('should get the correct gain for a DataType with a changed min difference', () => {
        event.getFirstActivity().addStream(new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, 300, 400]));
        // With a diff of 100,200 the gain should be included
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 100)).toBe(200);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 200)).toBe(200);
        // with a diff of 201 it shouldn't
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 201)).toBe(0);
        // Add more
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(100);
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(101);
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(102);
        // Up to now we have 200m, 300m, 400m, 100m, 101m, 102m
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 100)).toBe(200);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 200)).toBe(200);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 300)).toBe(0);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 1)).toBe(202);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 2)).toBe(202);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 3)).toBe(200);
    });
    it('should get the correct gain for a DataType with a set of points of non data', () => {
        event.getFirstActivity().addStream(new stream_1.Stream(data_altitude_1.DataAltitude.type, [100, 300, 200, 400]));
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeGain(event.getFirstActivity(), data_altitude_1.DataAltitude.type)).toBe(400);
    });
    it('should get the correct loss for a DataType', () => {
        event.getFirstActivity().addStream(new stream_1.Stream(data_altitude_1.DataAltitude.type, [400, 300, 200]));
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type)).toBe(200);
        // Add more altitude data but this time ascenting so it would not affect the Loss
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(200); // Loss 0
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(300); // Loss 0
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(400); // Loss 0
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type)).toBe(200);
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(200); // loss 200
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(300); // loss 0
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(200); // Gain 100 a total (see above of 500)
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type)).toBe(500);
    });
    it('should get the correct loss for a DataType with a changed min difference', () => {
        event.getFirstActivity().addStream(new stream_1.Stream(data_altitude_1.DataAltitude.type, [400, 300, 200]));
        // With a diff of 100,200 the gain should be included
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 100)).toBe(200);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 200)).toBe(200);
        // with a diff of 201 it shouldn't
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 201)).toBe(0);
        // Add more
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(500);
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(499);
        event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).push(498);
        // 200m, 300m, 400m, 100m, 101m, 102m
        // Up to now we have 400m, 300m, 200m, 500m, 499m, 498m
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 100)).toBe(200);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 200)).toBe(200);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 300)).toBe(0);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 1)).toBe(202);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 2)).toBe(202);
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type, void 0, void 0, 3)).toBe(200);
    });
    it('should get the correct loss for a DataType with a set of points of non data', () => {
        event
            .getFirstActivity()
            .getAllStreams()
            .push(new stream_1.Stream(data_altitude_1.DataAltitude.type, [400, 200, 300, 100]) // loos 0, 200, 0, 400
        );
        expect(activity_utilities_1.ActivityUtilities.getActivityDataTypeLoss(event.getFirstActivity(), data_altitude_1.DataAltitude.type)).toBe(400);
    });
    it('should get the correct data length', () => {
        const activity = event.getFirstActivity(); // 10s
        // 10 seconds = 11 slugs; from second 1 eg
        // [1,2,3,4,5,6,7,8,9,10] ->
        // [0, 1, 2,3,4,5,6,7,8,9,10]
        expect(activity_utilities_1.ActivityUtilities.getDataLength(activity.startDate, activity.endDate)).toBe(11);
        // Change start / end date to <1s
        activity.startDate = new Date(0);
        activity.endDate = new Date(50); // 50ms
        // More than 0 = 1 slug
        expect(activity_utilities_1.ActivityUtilities.getDataLength(activity.startDate, activity.endDate)).toBe(2);
        // Change start / end date to >9999ms and <100000s
        activity.startDate = new Date(0);
        activity.endDate = new Date(9999); // 9.9 seconds
        // more than 9 is 10 slugs
        expect(activity_utilities_1.ActivityUtilities.getDataLength(activity.startDate, activity.endDate)).toBe(11);
    });
    it('should provide serialization/deserialization through toJSON', () => {
        var _a, _b;
        // Given
        const activity = event.getFirstActivity();
        activity.startDate = new Date();
        activity.endDate = new Date(activity.startDate.getTime() + 3000);
        event.getFirstActivity().addStream(new stream_1.Stream(data_distance_1.DataDistance.type, [0, 9, null, 30]));
        event.getFirstActivity().addStream(new stream_1.Stream(data_speed_1.DataSpeed.type, [0, 10, null, 15]));
        event.getFirstActivity().addStream(new stream_1.Stream(data_heart_rate_1.DataHeartRate.type, [0, 50, null, 100]));
        event.getFirstActivity().addStream(new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, 300, null, 400]));
        const lap1 = new lap_1.Lap(activity.startDate, activity.endDate, 1, lap_types_1.LapTypes.Autolap);
        lap1.addStat(new data_speed_avg_1.DataSpeedAvg(10));
        activity.addLap(lap1);
        const lap2 = new lap_1.Lap(activity.startDate, activity.endDate, 2, lap_types_1.LapTypes.Autolap);
        lap2.addStat(new data_speed_avg_1.DataSpeedAvg(15));
        activity.addLap(lap2);
        // When serialize
        const activitySerialized = activity.toJSON();
        // Then
        expect(activitySerialized.name).toBeNull();
        expect(activitySerialized.startDate).toEqual(activity.startDate.getTime());
        expect(activitySerialized.endDate).toEqual(activity.endDate.getTime());
        expect(activitySerialized.powerMeter).toBeFalsy();
        expect(activitySerialized.trainer).toBeFalsy();
        expect(activitySerialized.laps.length).toEqual(activity.getLaps().length);
        expect(activitySerialized.laps[0].startIndex).toEqual(0);
        expect(activitySerialized.laps[0].endIndex).toEqual(3);
        expect(activitySerialized.laps[0].stats[data_speed_avg_1.DataSpeedAvg.type]).toEqual(activity.getLaps()[0].getStat(data_speed_avg_1.DataSpeedAvg.type).getValue());
        expect(activitySerialized.streams.length).toEqual(activity.getAllStreams().length + 1); // +1 because we add time stream
        expect((_a = activitySerialized.streams.find(s => s.type == data_time_1.DataTime.type)) === null || _a === void 0 ? void 0 : _a.data.length).toEqual((_b = activitySerialized.streams.find(s => s.type == data_distance_1.DataDistance.type)) === null || _b === void 0 ? void 0 : _b.data.length);
        // When deserialize
        const activityDeserialized = importer_json_1.EventImporterJSON.getActivityFromJSON(activitySerialized);
        // Then
        expect(activityDeserialized.startDate).toEqual(activity.startDate);
        expect(activityDeserialized.endDate).toEqual(activity.endDate);
        expect(activityDeserialized.hasPowerMeter()).toEqual(activity.hasPowerMeter());
        expect(activityDeserialized.getLaps().length).toEqual(activity.getLaps().length);
        expect(activityDeserialized.getLaps()[0].getStat(data_speed_avg_1.DataSpeedAvg.type).getValue()).toEqual(activity.getLaps()[0].getStat(data_speed_avg_1.DataSpeedAvg.type).getValue());
        expect(activityDeserialized.getStream(data_distance_1.DataDistance.type).getData().length).toEqual(activity.getStream(data_distance_1.DataDistance.type).getData().length);
        expect(activityDeserialized.getStream(data_distance_1.DataDistance.type)).toEqual(activity.getStream(data_distance_1.DataDistance.type));
        expect(activityDeserialized.getStream(data_speed_1.DataSpeed.type)).toEqual(activity.getStream(data_speed_1.DataSpeed.type));
        expect(activityDeserialized.getStream(data_heart_rate_1.DataHeartRate.type)).toEqual(activity.getStream(data_heart_rate_1.DataHeartRate.type));
        expect(activityDeserialized.getStream(data_altitude_1.DataAltitude.type)).toEqual(activity.getStream(data_altitude_1.DataAltitude.type));
        expect(activityDeserialized.hasStreamData(data_time_1.DataTime.type)).toBeFalsy();
    });
    describe('Fill streams', () => {
        const createFakeActivityWithStreams = (lengthInSeconds, streams) => {
            const startDate = new Date();
            const endDate = new Date(startDate.getTime() + lengthInSeconds * 1000);
            const activity = new activity_1.Activity(startDate, endDate, activity_types_1.ActivityTypes.Running, new creator_1.Creator('creator'));
            streams.forEach(stream => {
                activity.addStream(new stream_1.Stream(stream.type).setData(stream.data));
            });
            return activity;
        };
        it('should add missing data to streams (1)', done => {
            // Given
            const timeData = [0, 1, 2, 3, 4, 5, 6]; // 6 seconds
            const seconds = timeData.length - 1;
            const distanceData = [0, 10, 20, 25, 40, 45, 55];
            const altitudeData = [null, 13, 10, null, 8, 7, null];
            const heartRateData = [123, 135, null, null, null, null, null];
            const expectedAltitudes = [13, 13, 10, 10, 8, 7, 7];
            const expectedHeartRates = [123, 135, 135, 135, 135, 135, 135];
            const activity = createFakeActivityWithStreams(seconds, [
                { type: data_distance_1.DataDistance.type, data: distanceData },
                { type: data_altitude_1.DataAltitude.type, data: altitudeData },
                { type: data_heart_rate_1.DataHeartRate.type, data: heartRateData }
            ]);
            // When
            activity_utilities_1.ActivityUtilities.addMissingDataToStreams(activity);
            // Then
            expect(activity.getStreamData(data_distance_1.DataDistance.type)).toEqual(distanceData);
            expect(activity.getStreamData(data_altitude_1.DataAltitude.type)).toEqual(expectedAltitudes);
            expect(activity.getStreamData(data_heart_rate_1.DataHeartRate.type)).toEqual(expectedHeartRates);
            done();
        });
    });
});
