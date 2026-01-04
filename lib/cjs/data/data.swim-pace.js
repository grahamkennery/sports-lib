"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSwimPaceMinutesPer100Yard = exports.DataSwimPace = void 0;
const helpers_1 = require("../events/utilities/helpers");
const data_pace_1 = require("./data.pace");
class DataSwimPace extends data_pace_1.DataPace {
    getValue(formatForDataType) {
        switch (formatForDataType) {
            case DataSwimPaceMinutesPer100Yard.type:
                return (0, helpers_1.convertSwimPaceToSwimPacePer100Yard)(this.value);
            default:
                return super.getValue(formatForDataType);
        }
    }
}
exports.DataSwimPace = DataSwimPace;
DataSwimPace.type = 'Swim Pace';
DataSwimPace.unit = 'min/100m';
class DataSwimPaceMinutesPer100Yard extends DataSwimPace {
}
exports.DataSwimPaceMinutesPer100Yard = DataSwimPaceMinutesPer100Yard;
DataSwimPaceMinutesPer100Yard.type = 'Swim Pace in minutes per 100 yard';
DataSwimPaceMinutesPer100Yard.displayType = DataSwimPace.type;
DataSwimPaceMinutesPer100Yard.unit = 'min/100yrd';
