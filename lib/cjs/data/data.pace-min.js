"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPaceMinMinutesPerMile = exports.DataPaceMin = void 0;
const data_pace_1 = require("./data.pace");
class DataPaceMin extends data_pace_1.DataPace {
}
exports.DataPaceMin = DataPaceMin;
DataPaceMin.type = 'Minimum Pace';
class DataPaceMinMinutesPerMile extends data_pace_1.DataPaceMinutesPerMile {
}
exports.DataPaceMinMinutesPerMile = DataPaceMinMinutesPerMile;
DataPaceMinMinutesPerMile.type = 'Minimum pace in minutes per mile';
DataPaceMinMinutesPerMile.displayType = DataPaceMin.type;
