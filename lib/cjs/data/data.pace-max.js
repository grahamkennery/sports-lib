"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPaceMaxMinutesPerMile = exports.DataPaceMax = void 0;
const data_pace_1 = require("./data.pace");
class DataPaceMax extends data_pace_1.DataPace {
}
exports.DataPaceMax = DataPaceMax;
DataPaceMax.type = 'Maximum Pace';
class DataPaceMaxMinutesPerMile extends data_pace_1.DataPaceMinutesPerMile {
}
exports.DataPaceMaxMinutesPerMile = DataPaceMaxMinutesPerMile;
DataPaceMaxMinutesPerMile.type = 'Maximum pace in minutes per mile';
DataPaceMaxMinutesPerMile.displayType = DataPaceMax.type;
