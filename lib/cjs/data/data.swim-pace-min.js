"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSwimPaceMinMinutesPer100Yard = exports.DataSwimPaceMin = void 0;
const data_swim_pace_1 = require("./data.swim-pace");
class DataSwimPaceMin extends data_swim_pace_1.DataSwimPace {
}
exports.DataSwimPaceMin = DataSwimPaceMin;
DataSwimPaceMin.type = 'Minimum Swim Pace';
class DataSwimPaceMinMinutesPer100Yard extends data_swim_pace_1.DataSwimPaceMinutesPer100Yard {
}
exports.DataSwimPaceMinMinutesPer100Yard = DataSwimPaceMinMinutesPer100Yard;
DataSwimPaceMinMinutesPer100Yard.type = 'Minimum swim pace in minutes per 100 yard';
DataSwimPaceMinMinutesPer100Yard.displayType = DataSwimPaceMin.type;
