"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_speed_1 = require("./data.speed");
const data_pace_1 = require("./data.pace");
const data_swim_pace_1 = require("./data.swim-pace");
const data_grade_adjusted_speed_1 = require("./data.grade-adjusted-speed");
const data_grade_adjusted_pace_1 = require("./data.grade-adjusted-pace");
const data_vertical_speed_1 = require("./data.vertical-speed");
const data_store_1 = require("./data.store");
const data_distance_1 = require("./data.distance");
describe('DataStore', () => {
    const unitDerivedDataTypes = [
        data_speed_1.DataSpeedKilometersPerHour.type,
        data_speed_1.DataSpeedMilesPerHour.type,
        data_speed_1.DataSpeedFeetPerSecond.type,
        data_speed_1.DataSpeedFeetPerMinute.type,
        data_speed_1.DataSpeedMetersPerMinute.type,
        data_speed_1.DataSpeedKnots.type,
        data_pace_1.DataPaceMinutesPerMile.type,
        data_swim_pace_1.DataSwimPaceMinutesPer100Yard.type,
        data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour.type,
        data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMilesPerHour.type,
        data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerSecond.type,
        data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerMinute.type,
        data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMetersPerMinute.type,
        data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKnots.type,
        data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile.type,
        data_vertical_speed_1.DataVerticalSpeedFeetPerSecond.type,
        data_vertical_speed_1.DataVerticalSpeedMetersPerMinute.type,
        data_vertical_speed_1.DataVerticalSpeedFeetPerMinute.type,
        data_vertical_speed_1.DataVerticalSpeedMetersPerHour.type,
        data_vertical_speed_1.DataVerticalSpeedFeetPerHour.type,
        data_vertical_speed_1.DataVerticalSpeedKilometerPerHour.type,
        data_vertical_speed_1.DataVerticalSpeedMilesPerHour.type,
        data_distance_1.DataDistanceMiles.type
    ];
    const speedDerivedDataTypes = [data_pace_1.DataPace.type, data_grade_adjusted_pace_1.DataGradeAdjustedPace.type, data_swim_pace_1.DataSwimPace.type];
    it('should get the correct unitbased datatypes', () => {
        // @todo here we should think
        expect(data_store_1.DynamicDataLoader.allUnitDerivedDataTypes.sort()).toEqual(unitDerivedDataTypes.sort());
    });
});
