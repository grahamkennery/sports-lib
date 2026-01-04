"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGradeAdjustedPaceMaxMinutesPerMile = exports.DataGradeAdjustedPaceMax = void 0;
const data_grade_adjusted_pace_1 = require("./data.grade-adjusted-pace");
class DataGradeAdjustedPaceMax extends data_grade_adjusted_pace_1.DataGradeAdjustedPace {
}
exports.DataGradeAdjustedPaceMax = DataGradeAdjustedPaceMax;
DataGradeAdjustedPaceMax.type = 'Maximum Grade Adjusted Pace';
class DataGradeAdjustedPaceMaxMinutesPerMile extends data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile {
    getValue(formatForDataType) {
        if (formatForDataType) {
            throw new Error(`Not implemented`);
        }
        return super.getValue(formatForDataType);
    }
}
exports.DataGradeAdjustedPaceMaxMinutesPerMile = DataGradeAdjustedPaceMaxMinutesPerMile;
DataGradeAdjustedPaceMaxMinutesPerMile.type = 'Maximum Grade Adjusted Pace in minutes per mile';
DataGradeAdjustedPaceMaxMinutesPerMile.displayType = DataGradeAdjustedPaceMax.type;
DataGradeAdjustedPaceMaxMinutesPerMile.unit = 'min/m';
