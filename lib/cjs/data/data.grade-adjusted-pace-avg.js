"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGradeAdjustedPaceAvgMinutesPerMile = exports.DataGradeAdjustedPaceAvg = void 0;
const data_grade_adjusted_pace_1 = require("./data.grade-adjusted-pace");
class DataGradeAdjustedPaceAvg extends data_grade_adjusted_pace_1.DataGradeAdjustedPace {
}
exports.DataGradeAdjustedPaceAvg = DataGradeAdjustedPaceAvg;
DataGradeAdjustedPaceAvg.type = 'Average Grade Adjusted Pace';
class DataGradeAdjustedPaceAvgMinutesPerMile extends data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile {
    getValue(formatForDataType) {
        if (formatForDataType) {
            throw new Error(`Not implemented`);
        }
        return super.getValue(formatForDataType);
    }
}
exports.DataGradeAdjustedPaceAvgMinutesPerMile = DataGradeAdjustedPaceAvgMinutesPerMile;
DataGradeAdjustedPaceAvgMinutesPerMile.type = 'Average Grade Adjusted Pace in minutes per mile';
DataGradeAdjustedPaceAvgMinutesPerMile.displayType = DataGradeAdjustedPaceAvg.type;
DataGradeAdjustedPaceAvgMinutesPerMile.unit = 'min/m';
