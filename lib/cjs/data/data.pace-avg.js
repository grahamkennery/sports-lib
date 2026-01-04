"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPaceAvgMinutesPerMile = exports.DataPaceAvg = void 0;
const data_pace_1 = require("./data.pace");
class DataPaceAvg extends data_pace_1.DataPace {
}
exports.DataPaceAvg = DataPaceAvg;
DataPaceAvg.type = 'Average Pace';
class DataPaceAvgMinutesPerMile extends data_pace_1.DataPaceMinutesPerMile {
}
exports.DataPaceAvgMinutesPerMile = DataPaceAvgMinutesPerMile;
DataPaceAvgMinutesPerMile.type = 'Average pace in minutes per mile';
DataPaceAvgMinutesPerMile.displayType = DataPaceAvg.type;
