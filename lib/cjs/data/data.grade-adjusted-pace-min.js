"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGradeAdjustedPaceMinMinutesPerMile = exports.DataGradeAdjustedPaceMin = void 0;
const data_grade_adjusted_pace_1 = require("./data.grade-adjusted-pace");
class DataGradeAdjustedPaceMin extends data_grade_adjusted_pace_1.DataGradeAdjustedPace {
}
exports.DataGradeAdjustedPaceMin = DataGradeAdjustedPaceMin;
DataGradeAdjustedPaceMin.type = 'Minimum Grade Adjusted Pace';
class DataGradeAdjustedPaceMinMinutesPerMile extends data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile {
    getValue(formatForDataType) {
        if (formatForDataType) {
            throw new Error(`Not implemented`);
        }
        return super.getValue(formatForDataType);
    }
}
exports.DataGradeAdjustedPaceMinMinutesPerMile = DataGradeAdjustedPaceMinMinutesPerMile;
DataGradeAdjustedPaceMinMinutesPerMile.type = 'Minimum Grade Adjusted pace in minutes per mile';
DataGradeAdjustedPaceMinMinutesPerMile.displayType = DataGradeAdjustedPaceMin.type;
DataGradeAdjustedPaceMinMinutesPerMile.unit = 'min/m';
