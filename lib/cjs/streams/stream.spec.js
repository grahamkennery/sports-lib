"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_altitude_1 = require("../data/data.altitude");
const stream_1 = require("./stream");
const data_pace_1 = require("../data/data.pace");
const data_swim_pace_1 = require("../data/data.swim-pace");
const data_speed_1 = require("../data/data.speed");
const data_gnss_distance_1 = require("../data/data.gnss-distance");
const data_grade_adjusted_speed_1 = require("../data/data.grade-adjusted-speed");
const data_time_1 = require("../data/data.time");
const data_grade_adjusted_pace_1 = require("../data/data.grade-adjusted-pace");
const data_vertical_speed_1 = require("../data/data.vertical-speed");
describe('Stream', () => {
    beforeEach(() => { });
    it('should get data', () => {
        const stream = new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, null, 502, Infinity, -Infinity, NaN, 0]);
        expect(stream.getData()).toEqual([200, null, 502, Infinity, -Infinity, NaN, 0]);
        expect(stream.getData(true)).toEqual([200, 502, Infinity, -Infinity, 0]);
        expect(stream.getData(false, true)).toEqual([200, null, 502, NaN, 0]);
        expect(stream.getData(true, true)).toEqual([200, 502, 0]);
    });
    it('should if it can be exported', () => {
        let stream;
        // Pace not exportable
        stream = new stream_1.Stream(data_pace_1.DataPace.type);
        expect(stream.isExportable()).toBe(false);
        stream = new stream_1.Stream(data_pace_1.DataPaceMinutesPerMile.type);
        expect(stream.isExportable()).toBe(false);
        // Swim pace not exportable
        stream = new stream_1.Stream(data_swim_pace_1.DataSwimPace.type);
        expect(stream.isExportable()).toBe(false);
        stream = new stream_1.Stream(data_swim_pace_1.DataSwimPaceMinutesPer100Yard.type);
        expect(stream.isExportable()).toBe(false);
        // Speed exportable
        stream = new stream_1.Stream(data_speed_1.DataSpeed.type);
        expect(stream.isExportable()).toBe(true);
        // Speed unit not
        stream = new stream_1.Stream(data_speed_1.DataSpeedKilometersPerHour.type);
        expect(stream.isExportable()).toBe(false);
        // Black listed ones
        stream = new stream_1.Stream(data_gnss_distance_1.DataGNSSDistance.type);
        expect(stream.isExportable()).toBe(false);
        stream = new stream_1.Stream(data_time_1.DataTime.type);
        expect(stream.isExportable()).toBe(false);
        // Grade one
        stream = new stream_1.Stream(data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type);
        expect(stream.isExportable()).toBe(true);
        stream = new stream_1.Stream(data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour.type);
        expect(stream.isExportable()).toBe(false);
        // GAP should not be exportable
        stream = new stream_1.Stream(data_grade_adjusted_pace_1.DataGradeAdjustedPace.type);
        expect(stream.isExportable()).toBe(false);
        stream = new stream_1.Stream(data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile.type);
        expect(stream.isExportable()).toBe(false);
        // Verticalos
        stream = new stream_1.Stream(data_vertical_speed_1.DataVerticalSpeed.type);
        expect(stream.isExportable()).toBe(true);
        stream = new stream_1.Stream(data_vertical_speed_1.DataVerticalSpeedFeetPerHour.type);
        expect(stream.isExportable()).toBe(false);
    });
    it('should get stream data by time', () => {
        const stream = new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, null, 502, Infinity, -Infinity, NaN, 0]);
        const date = new Date();
        expect(stream.getStreamDataByTime(date)).toEqual([
            {
                time: date.getTime(),
                value: 200
            },
            {
                time: date.getTime() + 1000,
                value: null
            },
            {
                time: date.getTime() + 2000,
                value: 502
            },
            {
                time: date.getTime() + 3000,
                value: Infinity
            },
            {
                time: date.getTime() + 4000,
                value: -Infinity
            },
            {
                time: date.getTime() + 5000,
                value: NaN
            },
            {
                time: date.getTime() + 6000,
                value: 0
            }
        ]);
        expect(stream.getStreamDataByTime(date, true, true)).toEqual([
            {
                time: date.getTime(),
                value: 200
            },
            {
                time: date.getTime() + 2000,
                value: 502
            },
            {
                time: date.getTime() + 6000,
                value: 0
            }
        ]);
    });
    it('should get stream data by duration', () => {
        const stream = new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, null, 502, Infinity, -Infinity, NaN, 0]);
        expect(stream.getStreamDataByDuration(0)).toEqual([
            {
                time: 0,
                value: 200
            },
            {
                time: 1000,
                value: null
            },
            {
                time: 2000,
                value: 502
            },
            {
                time: 3000,
                value: Infinity
            },
            {
                time: 4000,
                value: -Infinity
            },
            {
                time: 5000,
                value: NaN
            },
            {
                time: 6000,
                value: 0
            }
        ]);
        expect(stream.getStreamDataByDuration(0, true, true)).toEqual([
            {
                time: 0,
                value: 200
            },
            {
                time: 2000,
                value: 502
            },
            {
                time: 6000,
                value: 0
            }
        ]);
        expect(stream.getStreamDataByDuration(33, true, true)).toEqual([
            {
                time: 33,
                value: 200
            },
            {
                time: 2033,
                value: 502
            },
            {
                time: 6033,
                value: 0
            }
        ]);
    });
});
