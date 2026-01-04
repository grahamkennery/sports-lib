"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSwimPaceAvgMinutesPer100Yard = exports.DataSwimPaceAvg = void 0;
const data_swim_pace_1 = require("./data.swim-pace");
class DataSwimPaceAvg extends data_swim_pace_1.DataSwimPace {
}
exports.DataSwimPaceAvg = DataSwimPaceAvg;
DataSwimPaceAvg.type = 'Average Swim Pace';
class DataSwimPaceAvgMinutesPer100Yard extends data_swim_pace_1.DataSwimPaceMinutesPer100Yard {
}
exports.DataSwimPaceAvgMinutesPer100Yard = DataSwimPaceAvgMinutesPer100Yard;
DataSwimPaceAvgMinutesPer100Yard.type = 'Average swim pace in minutes per 100 yard';
DataSwimPaceAvgMinutesPer100Yard.displayType = DataSwimPaceAvg.type;
