"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRADE_TOLERANCE = void 0;
const fs_1 = __importDefault(require("fs"));
const index_1 = require("../index");
const strava_3156040843 = __importStar(require("./fixtures/streams/strava/runs/3156040843.json"));
const strava_3182900697 = __importStar(require("./fixtures/streams/strava/runs/3182900697.json"));
const strava_2451375851 = __importStar(require("./fixtures/streams/strava/runs/2451375851.json"));
const strava_3183465494 = __importStar(require("./fixtures/streams/strava/runs/3183465494.json"));
const strava_3183490558 = __importStar(require("./fixtures/streams/strava/runs/3183490558.json"));
const strava_2709634581 = __importStar(require("./fixtures/streams/strava/runs/2709634581.json"));
const strava_343080886 = __importStar(require("./fixtures/streams/strava/rides/343080886.json"));
const strava_5910143591 = __importStar(require("./fixtures/streams/strava/rides/5910143591.json"));
const strava_3171438371_gpx = __importStar(require("./fixtures/streams/strava/rides/3171472783.json"));
const strava_3171487458_tcx = __importStar(require("./fixtures/streams/strava/rides/3171487458.json"));
const data_altitude_1 = require("../data/data.altitude");
const data_heart_rate_1 = require("../data/data.heart-rate");
const data_cadence_1 = require("../data/data.cadence");
const data_temperature_1 = require("../data/data.temperature");
const data_power_1 = require("../data/data.power");
const data_distance_1 = require("../data/data.distance");
const xmldom_1 = __importDefault(require("@xmldom/xmldom"));
const data_grade_1 = require("../data/data.grade");
exports.GRADE_TOLERANCE = 1.7;
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
describe('Strava stream compliance', () => {
    const domParser = new xmldom_1.default.DOMParser();
    const averageDeltaBetweenStreams = (actualStream, expectedStream) => {
        let deltaSum = 0;
        actualStream.forEach((value, index) => {
            deltaSum += Math.abs(value - expectedStream[index]);
        });
        return deltaSum / actualStream.length;
    };
    describe('Compliance with garmin edge export (hilly activity)', () => {
        // Given https://connect.garmin.com/modern/activity/7432332116 OR https://www.strava.com/activities/5910143591 (FTP 201 w @ Weight 78.3 kg)
        const path = __dirname + '/fixtures/rides/fit/7432332116.fit';
        const buffer = fs_1.default.readFileSync(path);
        it(`should have an average grade diff lower than ${exports.GRADE_TOLERANCE}%`, done => {
            // Given
            const toleranceAvgGradeDelta = exports.GRADE_TOLERANCE;
            const stravaGradeStream = clone(strava_5910143591.grade_smooth);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                const streamData = event
                    .getFirstActivity()
                    .getSquashedStreamData(data_grade_1.DataGrade.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10));
                expect(stravaGradeStream.length).toEqual(streamData.length);
                const deltaBetweenStreams = averageDeltaBetweenStreams(streamData, stravaGradeStream);
                console.log(`Delta is ${deltaBetweenStreams}`);
                expect(deltaBetweenStreams).toBeLessThan(toleranceAvgGradeDelta);
                done();
            });
        });
    });
    describe('Compliance with garmin Forerunner 945 export (hilly activity)', () => {
        // Given: https://connect.garmin.com/modern/activity/6782987395 OR https://www.strava.com/activities/2451375851
        const path = __dirname + '/fixtures/runs/fit/6782987395.fit';
        const buffer = fs_1.default.readFileSync(path);
        it(`should have an average grade diff lower than 2.1%`, done => {
            // Given
            const toleranceAvgGradeDelta = 2.1;
            const stravaGradeStream = clone(strava_2451375851.grade_smooth);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                const streamData = event
                    .getFirstActivity()
                    .getSquashedStreamData(data_grade_1.DataGrade.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10));
                expect(stravaGradeStream.length).toEqual(streamData.length);
                const deltaBetweenStreams = averageDeltaBetweenStreams(streamData, stravaGradeStream);
                console.log(`Delta is ${deltaBetweenStreams}`);
                expect(deltaBetweenStreams).toBeLessThan(toleranceAvgGradeDelta);
                done();
            });
        });
    });
    /*
    describe('Compliance with garmin fenix 6S Pro export (hilly activity)', () => {
      // Given: https://connect.garmin.com/modern/activity/7428153946 OR https://www.strava.com/activities/5889573727
      const path = __dirname + '/fixtures/runs/fit/7428153946.fit';
      const buffer = fs.readFileSync(path);
  
      it(`should have an average grade diff lower than ${GRADE_TOLERANCE}%`, done => {
        // Given
        const toleranceAvgGradeDelta = GRADE_TOLERANCE;
  
        const stravaGradeStream = clone(strava_5889573727.grade_smooth);
  
        // When
        const eventInterfacePromise = SportsLib.importFromFit(buffer);
  
        // Then
        eventInterfacePromise.then((event: EventInterface) => {
          const streamData = <number[]>event.getFirstActivity().getSquashedStreamData(DataGrade.type);
          // .map(value => (value === null ? null : Math.round(value * 10) / 10));
          // expect(stravaGradeStream.length).toEqual(streamData.length);
          const deltaBetweenStreams = averageDeltaBetweenStreams(stravaGradeStream, streamData);
          console.log(`Delta is ${deltaBetweenStreams}`);
          expect(deltaBetweenStreams).toBeLessThan(toleranceAvgGradeDelta);
          done();
        });
      });
    });
  */
    describe('Compliance with suunto export (flat activity)', () => {
        // Given FIT Source (Suunto export): https://connect.garmin.com/modern/activity/6909950168 OR https://www.strava.com/activities/5423646653
        const path = __dirname + '/fixtures/runs/fit/6909950168.fit';
        const buffer = fs_1.default.readFileSync(path);
        it(`should match time`, done => {
            // Given
            const stravaCadenceStream = clone(strava_3156040843.time);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true).length);
                expect(stravaCadenceStream).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true));
                done();
            });
        });
        it(`should match altitude`, done => {
            // Given
            const stravaAltitudeStream = clone(strava_3156040843.altitude);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaAltitudeStream.length).toEqual(event.getFirstActivity().getStreamData(data_altitude_1.DataAltitude.type).length);
                expect(stravaAltitudeStream).toEqual(event
                    .getFirstActivity()
                    .getStreamData(data_altitude_1.DataAltitude.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match heart rate`, done => {
            // Given
            const stravaHeartRateStream = clone(strava_3156040843.heartrate);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaHeartRateStream.length).toEqual(event.getFirstActivity().getStreamData(data_heart_rate_1.DataHeartRate.type).length);
                expect(stravaHeartRateStream).toEqual(event
                    .getFirstActivity()
                    .getStreamData(data_heart_rate_1.DataHeartRate.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match cadence`, done => {
            // Given
            const stravaCadenceStream = clone(strava_3156040843.cadence);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().getStreamData(data_cadence_1.DataCadence.type).length);
                expect(stravaCadenceStream).toEqual(event
                    .getFirstActivity()
                    .getStreamData(data_cadence_1.DataCadence.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match temperature`, done => {
            // Given
            const stravaTemperatureStream = clone(strava_3156040843.temp);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaTemperatureStream.length).toEqual(event.getFirstActivity().getStreamData(data_temperature_1.DataTemperature.type).length);
                expect(stravaTemperatureStream).toEqual(event
                    .getFirstActivity()
                    .getStreamData(data_temperature_1.DataTemperature.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        /**
         * This test has not sense anymore since null watts provided from a squashed streams should considered as 0 watts
         */
        xit(`should match power`, done => {
            // Given
            const stravaPowerStream = clone(strava_3156040843.watts);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaPowerStream.length).toEqual(event.getFirstActivity().getStreamData(data_power_1.DataPower.type).length);
                expect(stravaPowerStream).toEqual(event
                    .getFirstActivity()
                    .getStreamData(data_power_1.DataPower.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match distance with x% error max`, done => {
            // Given
            const tolerance = 0.6; // percent
            const stravaDistanceStream = clone(strava_3156040843.distance);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                const streamData = event
                    .getFirstActivity()
                    .getStreamData(data_distance_1.DataDistance.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10));
                expect(stravaDistanceStream.length).toEqual(streamData.length);
                const commonCount = stravaDistanceStream.filter((value) => streamData.indexOf(value) !== -1).length;
                expect(commonCount + Math.ceil((stravaDistanceStream.length * tolerance) / 100)).toBeGreaterThanOrEqual(stravaDistanceStream.length);
                // expect(stravaDistanceStream).toEqual(streamData);
                done();
            });
        });
        it(`should have an average grade diff lower than ${exports.GRADE_TOLERANCE}%`, done => {
            // Given
            const toleranceAvgGradeDelta = exports.GRADE_TOLERANCE;
            const stravaGradeStream = clone(strava_3156040843.grade_smooth);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                const streamData = event
                    .getFirstActivity()
                    .getStreamData(data_grade_1.DataGrade.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10));
                expect(stravaGradeStream.length).toEqual(streamData.length);
                const deltaBetweenStreams = averageDeltaBetweenStreams(streamData, stravaGradeStream);
                console.log(`Delta is ${deltaBetweenStreams}`);
                expect(deltaBetweenStreams).toBeLessThan(toleranceAvgGradeDelta);
                done();
            });
        });
    });
    describe('Compliance with suunto export (flat activity) without paused records', () => {
        // Given FIT Source (Suunto export): https://connect.garmin.com/modern/activity/6909950168 OR https://www.strava.com/activities/5423646653
        const path = __dirname + '/fixtures/runs/fit/6909950168-no-pause-records.fit';
        const buffer = fs_1.default.readFileSync(path);
        it(`should match time`, done => {
            // Given
            const stravaCadenceStream = clone(strava_3182900697.time);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true).length);
                expect(stravaCadenceStream).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true));
                done();
            });
        });
        it(`should match altitude`, done => {
            // Given
            const stravaAltitudeStream = clone(strava_3182900697.altitude);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaAltitudeStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_altitude_1.DataAltitude.type).length);
                expect(stravaAltitudeStream).toEqual(event
                    .getFirstActivity()
                    .getSquashedStreamData(data_altitude_1.DataAltitude.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match heart rate`, done => {
            // Given
            const stravaHeartRateStream = clone(strava_3182900697.heartrate);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaHeartRateStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_heart_rate_1.DataHeartRate.type).length);
                expect(stravaHeartRateStream).toEqual(event
                    .getFirstActivity()
                    .getSquashedStreamData(data_heart_rate_1.DataHeartRate.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match cadence`, done => {
            // Given
            const stravaCadenceStream = clone(strava_3182900697.cadence);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_cadence_1.DataCadence.type).length);
                expect(stravaCadenceStream).toEqual(event
                    .getFirstActivity()
                    .getSquashedStreamData(data_cadence_1.DataCadence.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match distance with x% error max`, done => {
            // Given
            const tolerance = 0.6; // percent
            const stravaDistanceStream = clone(strava_3182900697.distance);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                const streamData = event
                    .getFirstActivity()
                    .getSquashedStreamData(data_distance_1.DataDistance.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10));
                expect(stravaDistanceStream.length).toEqual(streamData.length);
                const commonCount = stravaDistanceStream.filter((value) => streamData.indexOf(value) !== -1).length;
                expect(commonCount + Math.ceil((stravaDistanceStream.length * tolerance) / 100)).toBeGreaterThanOrEqual(stravaDistanceStream.length);
                // expect(stravaDistanceStream).toEqual(streamData);
                done();
            });
        });
        it(`should have an average grade diff lower than ${exports.GRADE_TOLERANCE}%`, done => {
            // Given
            const toleranceAvgGradeDelta = exports.GRADE_TOLERANCE;
            const stravaGradeStream = clone(strava_3182900697.grade_smooth);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                const streamData = event
                    .getFirstActivity()
                    .getSquashedStreamData(data_grade_1.DataGrade.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10));
                expect(stravaGradeStream.length).toEqual(streamData.length);
                const deltaBetweenStreams = averageDeltaBetweenStreams(streamData, stravaGradeStream);
                console.log(`Delta is ${deltaBetweenStreams}`);
                expect(deltaBetweenStreams).toBeLessThan(toleranceAvgGradeDelta);
                done();
            });
        });
    });
    describe('Compliance with suunto export (uphill 1800 activity) without paused records ', () => {
        // Given FIT Source (Suunto export): https://connect.garmin.com/modern/activity/6910052863 OR https://www.strava.com/activities/5423660493
        const path = __dirname + '/fixtures/runs/fit/6910052863.fit';
        const buffer = fs_1.default.readFileSync(path);
        it(`should match time`, done => {
            // Given
            const stravaCadenceStream = clone(strava_2709634581.time);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().generateTimeStream().getData(true).length);
                expect(stravaCadenceStream).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true));
                done();
            });
        });
        it(`should match altitude`, done => {
            // Given
            const stravaAltitudeStream = clone(strava_2709634581.altitude);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaAltitudeStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_altitude_1.DataAltitude.type).length);
                expect(stravaAltitudeStream).toEqual(event
                    .getFirstActivity()
                    .getSquashedStreamData(data_altitude_1.DataAltitude.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match heart rate`, done => {
            // Given
            const stravaHeartRateStream = clone(strava_2709634581.heartrate);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaHeartRateStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_heart_rate_1.DataHeartRate.type).length);
                expect(stravaHeartRateStream).toEqual(event
                    .getFirstActivity()
                    .getSquashedStreamData(data_heart_rate_1.DataHeartRate.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match cadence`, done => {
            // Given
            const stravaCadenceStream = clone(strava_2709634581.cadence);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_cadence_1.DataCadence.type).length);
                expect(stravaCadenceStream).toEqual(event
                    .getFirstActivity()
                    .getSquashedStreamData(data_cadence_1.DataCadence.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it.skip(`should match distance with x% error max`, done => {
            // Given
            const tolerance = 0.6; // percent
            const stravaDistanceStream = clone(strava_2709634581.distance);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                const streamData = event
                    .getFirstActivity()
                    .getSquashedStreamData(data_distance_1.DataDistance.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10));
                // expect(stravaDistanceStream.length).toEqual(streamData.length);
                const commonCount = stravaDistanceStream.filter((value) => streamData.indexOf(value) !== -1).length;
                // expect(commonCount + Math.ceil((stravaDistanceStream.length * tolerance) / 100)).toBeGreaterThanOrEqual(stravaDistanceStream.length);
                expect(stravaDistanceStream).toEqual(streamData);
                done();
            });
        });
        it.skip(`should have an average grade diff lower than ${exports.GRADE_TOLERANCE}%`, done => {
            // Given
            const toleranceAvgGradeDelta = exports.GRADE_TOLERANCE;
            const stravaGradeStream = clone(strava_3182900697.grade_smooth);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                const streamData = event
                    .getFirstActivity()
                    .getSquashedStreamData(data_grade_1.DataGrade.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10));
                expect(stravaGradeStream.length).toEqual(streamData.length);
                const deltaBetweenStreams = averageDeltaBetweenStreams(streamData, stravaGradeStream);
                console.log(`Delta is ${deltaBetweenStreams}`);
                expect(deltaBetweenStreams).toBeLessThan(toleranceAvgGradeDelta);
                done();
            });
        });
    });
    describe('Compliance with COROS export', () => {
        // Given FIT Source (Coros export): https://connect.garmin.com/modern/activity/6916663933 OR https://www.strava.com/activities/5429996380
        const path = __dirname + '/fixtures/runs/fit/6916663933.fit';
        const buffer = fs_1.default.readFileSync(path);
        it(`should match time`, done => {
            // Given
            const stravaCadenceStream = clone(strava_3183465494.time);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true).length);
                expect(stravaCadenceStream).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true));
                done();
            });
        });
        it(`should match altitude`, done => {
            // Given
            const stravaAltitudeStream = clone(strava_3183465494.altitude);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaAltitudeStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_altitude_1.DataAltitude.type).length);
                expect(stravaAltitudeStream).toEqual(event
                    .getFirstActivity()
                    .getSquashedStreamData(data_altitude_1.DataAltitude.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match heart rate`, done => {
            // Given
            const stravaHeartRateStream = clone(strava_3183465494.heartrate);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaHeartRateStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_heart_rate_1.DataHeartRate.type).length);
                expect(stravaHeartRateStream).toEqual(event
                    .getFirstActivity()
                    .getSquashedStreamData(data_heart_rate_1.DataHeartRate.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match cadence`, done => {
            // Given
            const stravaCadenceStream = clone(strava_3183465494.cadence);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_cadence_1.DataCadence.type).length);
                expect(stravaCadenceStream).toEqual(event
                    .getFirstActivity()
                    .getSquashedStreamData(data_cadence_1.DataCadence.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match distance`, done => {
            // Given
            const tolerance = 0.6; // percent
            const stravaDistanceStream = clone(strava_3183465494.distance);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                const streamData = event
                    .getFirstActivity()
                    .getSquashedStreamData(data_distance_1.DataDistance.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10));
                expect(stravaDistanceStream.length).toEqual(streamData.length);
                expect(stravaDistanceStream).toEqual(streamData);
                done();
            });
        });
        it(`should have an average grade diff lower than ${exports.GRADE_TOLERANCE}%`, done => {
            // Given
            const toleranceAvgGradeDelta = exports.GRADE_TOLERANCE;
            const stravaGradeStream = clone(strava_3183465494.grade_smooth);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                const streamData = event
                    .getFirstActivity()
                    .getSquashedStreamData(data_grade_1.DataGrade.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10));
                expect(stravaGradeStream.length).toEqual(streamData.length);
                const deltaBetweenStreams = averageDeltaBetweenStreams(streamData, stravaGradeStream);
                console.log(`Delta is ${deltaBetweenStreams}`);
                expect(deltaBetweenStreams).toBeLessThan(toleranceAvgGradeDelta);
                done();
            });
        });
    });
    describe('Compliance with COROS export trail', () => {
        // Given FIT Source (Coros export): https://connect.garmin.com/modern/activity/6916728382 OR https://www.strava.com/activities/5430055225
        const path = __dirname + '/fixtures/runs/fit/6916728382.fit';
        const buffer = fs_1.default.readFileSync(path);
        it(`should match time`, done => {
            // Given
            const stravaCadenceStream = clone(strava_3183490558.time);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true).length);
                expect(stravaCadenceStream).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true));
                done();
            });
        });
        it(`should match altitude`, done => {
            // Given
            const stravaAltitudeStream = clone(strava_3183490558.altitude);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaAltitudeStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_altitude_1.DataAltitude.type).length);
                expect(stravaAltitudeStream).toEqual(event
                    .getFirstActivity()
                    .getSquashedStreamData(data_altitude_1.DataAltitude.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match heart rate`, done => {
            // Given
            const stravaHeartRateStream = clone(strava_3183490558.heartrate);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaHeartRateStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_heart_rate_1.DataHeartRate.type).length);
                expect(stravaHeartRateStream).toEqual(event
                    .getFirstActivity()
                    .getSquashedStreamData(data_heart_rate_1.DataHeartRate.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it(`should match cadence`, done => {
            // Given
            const stravaCadenceStream = clone(strava_3183490558.cadence);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_cadence_1.DataCadence.type).length);
                // @todo leaving this to fail to investigate how to fill linear as seen with Suunto
                expect(stravaCadenceStream).toEqual(event
                    .getFirstActivity()
                    .getSquashedStreamData(data_cadence_1.DataCadence.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                done();
            });
        });
        it.skip(`should match distance`, done => {
            // Given
            const tolerance = 0.6; // percent
            const stravaDistanceStream = clone(strava_3183490558.distance);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                const streamData = event
                    .getFirstActivity()
                    .getSquashedStreamData(data_distance_1.DataDistance.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10));
                expect(stravaDistanceStream.length).toEqual(streamData.length);
                expect(stravaDistanceStream).toEqual(streamData);
                done();
            });
        });
        it.skip(`should have an average grade diff lower than ${exports.GRADE_TOLERANCE}%`, done => {
            // Given
            const toleranceAvgGradeDelta = exports.GRADE_TOLERANCE;
            const stravaGradeStream = clone(strava_3183490558.grade_smooth);
            // When
            const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
            // Then
            eventInterfacePromise.then((event) => {
                const streamData = event
                    .getFirstActivity()
                    .getSquashedStreamData(data_grade_1.DataGrade.type)
                    .map(value => (value === null ? null : Math.round(value * 10) / 10));
                expect(stravaGradeStream.length).toEqual(streamData.length);
                const deltaBetweenStreams = averageDeltaBetweenStreams(streamData, stravaGradeStream);
                console.log(`Delta is ${deltaBetweenStreams}`);
                expect(deltaBetweenStreams).toBeLessThan(toleranceAvgGradeDelta);
                done();
            });
        });
    });
    describe('Compliance with garmin export (hilly activity: https://connect.garmin.com/modern/activity/828989227 / https://www.strava.com/activities/343080886)', () => {
        describe('Fit file version', () => {
            // Given FIT Source: https://connect.garmin.com/modern/activity/828989227 OR https://www.strava.com/activities/343080886
            const path = __dirname + '/fixtures/rides/fit/828989227.fit';
            const buffer = fs_1.default.readFileSync(path);
            it(`should match time`, done => {
                // Given
                const stravaCadenceStream = clone(strava_343080886.time);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
                // Then
                eventInterfacePromise.then((event) => {
                    expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true).length);
                    expect(stravaCadenceStream).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true));
                    done();
                });
            });
            it(`should match altitude`, done => {
                // Given
                const stravaAltitudeStream = clone(strava_343080886.altitude);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
                // Then
                eventInterfacePromise.then((event) => {
                    expect(stravaAltitudeStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_altitude_1.DataAltitude.type).length);
                    expect(stravaAltitudeStream).toEqual(event
                        .getFirstActivity()
                        .getSquashedStreamData(data_altitude_1.DataAltitude.type)
                        .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                    done();
                });
            });
            it(`should match heart rate`, done => {
                // Given
                const stravaHeartRateStream = clone(strava_343080886.heartrate);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
                // Then
                eventInterfacePromise.then((event) => {
                    expect(stravaHeartRateStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_heart_rate_1.DataHeartRate.type).length);
                    expect(stravaHeartRateStream).toEqual(event
                        .getFirstActivity()
                        .getSquashedStreamData(data_heart_rate_1.DataHeartRate.type)
                        .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                    done();
                });
            });
            it(`should match cadence`, done => {
                // Given
                const stravaCadenceStream = clone(strava_343080886.cadence);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
                // Then
                eventInterfacePromise.then((event) => {
                    expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_cadence_1.DataCadence.type).length);
                    expect(stravaCadenceStream).toEqual(event
                        .getFirstActivity()
                        .getSquashedStreamData(data_cadence_1.DataCadence.type)
                        .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                    done();
                });
            });
            it(`should match distance with x% error max`, done => {
                // Given
                const tolerance = 0.0; // percent
                const stravaDistanceStream = clone(strava_343080886.distance);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
                // Then
                eventInterfacePromise.then((event) => {
                    expect(stravaDistanceStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_distance_1.DataDistance.type).length);
                    const streamData = event
                        .getFirstActivity()
                        .getSquashedStreamData(data_distance_1.DataDistance.type)
                        .map(value => (value === null ? null : Math.round(value * 10) / 10));
                    expect(stravaDistanceStream).toEqual(streamData);
                    done();
                });
            });
            it(`should have an average grade diff lower than ${exports.GRADE_TOLERANCE}%`, done => {
                // Given
                const toleranceAvgGradeDelta = exports.GRADE_TOLERANCE;
                const stravaGradeStream = clone(strava_343080886.grade_smooth);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromFit(buffer);
                // Then
                eventInterfacePromise.then((event) => {
                    const streamData = event
                        .getFirstActivity()
                        .getSquashedStreamData(data_grade_1.DataGrade.type)
                        .map(value => (value === null ? null : Math.round(value * 10) / 10));
                    expect(stravaGradeStream.length).toEqual(streamData.length);
                    const deltaBetweenStreams = averageDeltaBetweenStreams(streamData, stravaGradeStream);
                    console.log(`Delta is ${deltaBetweenStreams}`);
                    expect(deltaBetweenStreams).toBeLessThan(toleranceAvgGradeDelta);
                    done();
                });
            });
        });
        describe('Tcx file version', () => {
            // Given FIT Source: https://connect.garmin.com/modern/activity/828989227 OR https://www.strava.com/activities/343080886
            const path = __dirname + '/fixtures/rides/tcx/828989227.tcx';
            const doc = domParser.parseFromString(fs_1.default.readFileSync(path).toString(), 'application/xml');
            it(`should match time`, done => {
                // Given
                const stravaCadenceStream = clone(strava_3171487458_tcx.time);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromTCX(doc);
                // Then
                eventInterfacePromise.then((event) => {
                    expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true).length);
                    expect(stravaCadenceStream).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true));
                    done();
                });
            });
            it(`should match altitude`, done => {
                // Given
                const stravaAltitudeStream = clone(strava_3171487458_tcx.altitude);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromTCX(doc);
                // Then
                eventInterfacePromise.then((event) => {
                    expect(stravaAltitudeStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_altitude_1.DataAltitude.type).length);
                    expect(stravaAltitudeStream).toEqual(event
                        .getFirstActivity()
                        .getSquashedStreamData(data_altitude_1.DataAltitude.type)
                        .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                    done();
                });
            });
            it(`should match heart rate`, done => {
                // Given
                const stravaHeartRateStream = clone(strava_3171487458_tcx.heartrate);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromTCX(doc);
                // Then
                eventInterfacePromise.then((event) => {
                    expect(stravaHeartRateStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_heart_rate_1.DataHeartRate.type).length);
                    expect(stravaHeartRateStream).toEqual(event
                        .getFirstActivity()
                        .getSquashedStreamData(data_heart_rate_1.DataHeartRate.type)
                        .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                    done();
                });
            });
            it(`should match cadence`, done => {
                // Given
                const stravaCadenceStream = clone(strava_3171487458_tcx.cadence);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromTCX(doc);
                // Then
                eventInterfacePromise.then((event) => {
                    expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(data_cadence_1.DataCadence.type).length);
                    expect(stravaCadenceStream).toEqual(event
                        .getFirstActivity()
                        .getSquashedStreamData(data_cadence_1.DataCadence.type)
                        .map(value => (value === null ? null : Math.round(value * 10) / 10)));
                    done();
                });
            });
            it(`should match distance with x% error max`, done => {
                // Given
                const tolerance = 2.6; // percent
                const toleranceDelta = 0.1;
                const stravaDistanceStream = clone(strava_3171487458_tcx.distance);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromTCX(doc);
                // Then
                eventInterfacePromise.then((event) => {
                    const streamData = event
                        .getFirstActivity()
                        .getSquashedStreamData(data_distance_1.DataDistance.type)
                        .map(value => (value === null ? null : Math.round(value * 10) / 10));
                    expect(stravaDistanceStream.length).toEqual(streamData.length);
                    // const commonCount = stravaDistanceStream
                    //   .filter((value: number) => streamData.indexOf(value) !== -1).length;
                    // We find the common then add the % tolerance and we check if its more than equal to the "strava" stream
                    // expect(commonCount + Math.ceil((stravaDistanceStream.length * tolerance) / 100)).toBeGreaterThanOrEqual(stravaDistanceStream.length);
                    expect(stravaDistanceStream).toMatchObject(streamData);
                    // const deltaBetweenStreams = averageDeltaBetweenStreams(streamData, stravaDistanceStream);
                    // expect(deltaBetweenStreams).toBeLessThan(toleranceDelta);
                    done();
                });
            });
            it(`should have an average grade diff lower than ${exports.GRADE_TOLERANCE}%`, done => {
                // Given
                const toleranceAvgGradeDelta = exports.GRADE_TOLERANCE;
                const stravaGradeStream = clone(strava_343080886.grade_smooth);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromTCX(doc);
                // Then
                eventInterfacePromise.then((event) => {
                    const streamData = event
                        .getFirstActivity()
                        .getSquashedStreamData(data_grade_1.DataGrade.type)
                        .map(value => (value === null ? null : Math.round(value * 10) / 10));
                    expect(stravaGradeStream.length).toEqual(streamData.length);
                    const deltaBetweenStreams = averageDeltaBetweenStreams(streamData, stravaGradeStream);
                    console.log(`Delta is ${deltaBetweenStreams}`);
                    expect(deltaBetweenStreams).toBeLessThan(toleranceAvgGradeDelta);
                    done();
                });
            });
        });
        describe('GPX file version', () => {
            // Given GPX Source: https://connect.garmin.com/modern/activity/6870692308 OR https://www.strava.com/activities/5385683390
            // Given FIT Source: https://connect.garmin.com/modern/activity/828989227 OR https://www.strava.com/activities/343080886
            const path = __dirname + '/fixtures/rides/gpx/828989227.gpx';
            const gpxString = fs_1.default.readFileSync(path).toString();
            it(`should match time`, done => {
                // Given
                const stravaTimeStream = clone(strava_3171438371_gpx.time);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromGPX(gpxString, xmldom_1.default.DOMParser);
                // Then
                eventInterfacePromise.then((event) => {
                    expect(stravaTimeStream.length).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true).length);
                    expect(stravaTimeStream).toEqual(event.getFirstActivity().generateTimeStream([data_distance_1.DataDistance.type, data_altitude_1.DataAltitude.type]).getData(true));
                    done();
                });
            });
            // Strava adds their own altitude so no go from here
            // it(`should match altitude`, done => {
            //
            //   // Given
            //   const stravaAltitudeStream = clone(strava_3171438371_gpx.altitude);
            //
            //   // When
            //   const eventInterfacePromise = SportsLib.importFromGPX(gpxString);
            //
            //   // Then
            //   eventInterfacePromise.then((event: EventInterface) => {
            //     expect(stravaAltitudeStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(DataAltitude.type).length);
            //     expect(stravaAltitudeStream).toEqual(event.getFirstActivity().getSquashedStreamData(DataAltitude.type).map(value => value === null ? null : Math.round(value * 10) / 10));
            //     done();
            //   });
            // });
            // we skip this because https://support.strava.com/hc/en-us/community/posts/360054808092-Not-getting-Garmin-heart-rate-data-into-Strava
            // it(`should match heart rate`, done => {
            //
            //   // Given
            //   const stravaHeartRateStream = clone(strava_3171438371.heartrate);
            //
            //   // When
            //   const eventInterfacePromise = SportsLib.importFromGPX(gpxString);
            //
            //   // Then
            //   eventInterfacePromise.then((event: EventInterface) => {
            //     expect(stravaHeartRateStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(DataHeartRate.type).length);
            //     expect(stravaHeartRateStream).toEqual(event.getFirstActivity().getSquashedStreamData(DataHeartRate.type).map(value => value === null ? null : Math.round(value * 10) / 10));
            //     done();
            //   });
            // });
            // we skip this because https://support.strava.com/hc/en-us/community/posts/360054808092-Not-getting-Garmin-heart-rate-data-into-Strava
            // it(`should match cadence`, done => {
            //
            //   // Given
            //   const stravaCadenceStream = clone(strava_3171438371.cadence);
            //
            //   // When
            //   const eventInterfacePromise = SportsLib.importFromGPX(gpxString);
            //
            //   // Then
            //   eventInterfacePromise.then((event: EventInterface) => {
            //     expect(stravaCadenceStream.length).toEqual(event.getFirstActivity().getSquashedStreamData(DataCadence.type).length);
            //     expect(stravaCadenceStream).toEqual(event.getFirstActivity().getSquashedStreamData(DataCadence.type).map(value => value === null ? null : Math.round(value * 10) / 10));
            //     done();
            //   });
            // });
            // @todo try different geolib adapters etc to make this diff smaller or investigate more on how strava
            // Bumps the distance
            it(`should match distance with x% error max`, done => {
                // Given
                const deltaTolerance = 15; // percent
                const stravaDistanceStream = clone(strava_3171438371_gpx.distance);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromGPX(gpxString, xmldom_1.default.DOMParser);
                // Then
                eventInterfacePromise.then((event) => {
                    const streamData = event
                        .getFirstActivity()
                        .getSquashedStreamData(data_distance_1.DataDistance.type)
                        .map(value => (value === null ? null : Math.round(value * 10) / 10));
                    expect(stravaDistanceStream.length).toEqual(streamData.length);
                    const deltaBetweenStreams = averageDeltaBetweenStreams(streamData, stravaDistanceStream);
                    expect(deltaBetweenStreams).toBeLessThan(deltaTolerance);
                    done();
                });
            });
            // Tolerance is higher since distance is different unfortunately (see above test)
            it(`should have an average grade diff lower than 3.2%`, done => {
                // Given
                const toleranceAvgGradeDelta = 3.2;
                const stravaGradeStream = clone(strava_3171438371_gpx.grade_smooth);
                // When
                const eventInterfacePromise = index_1.SportsLib.importFromGPX(gpxString, xmldom_1.default.DOMParser);
                // Then
                eventInterfacePromise.then((event) => {
                    const streamData = event
                        .getFirstActivity()
                        .getSquashedStreamData(data_grade_1.DataGrade.type)
                        .map(value => (value === null ? null : Math.round(value * 10) / 10));
                    expect(stravaGradeStream.length).toEqual(streamData.length);
                    const deltaBetweenStreams = averageDeltaBetweenStreams(streamData, stravaGradeStream);
                    console.log(`Delta is ${deltaBetweenStreams}`);
                    expect(deltaBetweenStreams).toBeLessThan(toleranceAvgGradeDelta);
                    done();
                });
            });
        });
    });
});
