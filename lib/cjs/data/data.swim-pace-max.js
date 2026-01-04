"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSwimPaceMaxMinutesPer100Yard = exports.DataSwimPaceMax = void 0;
const data_swim_pace_1 = require("./data.swim-pace");
class DataSwimPaceMax extends data_swim_pace_1.DataSwimPace {
}
exports.DataSwimPaceMax = DataSwimPaceMax;
DataSwimPaceMax.type = 'Maximum Swim Pace';
class DataSwimPaceMaxMinutesPer100Yard extends data_swim_pace_1.DataSwimPaceMinutesPer100Yard {
}
exports.DataSwimPaceMaxMinutesPer100Yard = DataSwimPaceMaxMinutesPer100Yard;
DataSwimPaceMaxMinutesPer100Yard.type = 'Maximum swim pace in minutes per 100 yard';
DataSwimPaceMaxMinutesPer100Yard.displayType = DataSwimPaceMax.type;
