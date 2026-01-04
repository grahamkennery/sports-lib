"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGradeAdjustedPaceMinutesPerMile = exports.DataGradeAdjustedPace = void 0;
const helpers_1 = require("../events/utilities/helpers");
const data_pace_1 = require("./data.pace");
class DataGradeAdjustedPace extends data_pace_1.DataPace {
    getValue(formatForDataType) {
        switch (formatForDataType) {
            case DataGradeAdjustedPaceMinutesPerMile.type:
                return (0, helpers_1.convertPaceToPaceInMinutesPerMile)(this.value);
            default:
                return super.getValue(formatForDataType);
        }
    }
}
exports.DataGradeAdjustedPace = DataGradeAdjustedPace;
DataGradeAdjustedPace.type = 'Grade Adjusted Pace';
DataGradeAdjustedPace.unit = 'min/km';
class DataGradeAdjustedPaceMinutesPerMile extends DataGradeAdjustedPace {
    getValue(formatForDataType) {
        if (formatForDataType) {
            throw new Error(`Not implemented`);
        }
        return super.getValue(formatForDataType);
    }
}
exports.DataGradeAdjustedPaceMinutesPerMile = DataGradeAdjustedPaceMinutesPerMile;
DataGradeAdjustedPaceMinutesPerMile.type = 'Grade Adjusted Pace in minutes per mile';
DataGradeAdjustedPaceMinutesPerMile.displayType = DataGradeAdjustedPace.type;
DataGradeAdjustedPaceMinutesPerMile.unit = 'min/m';
