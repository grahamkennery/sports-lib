"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGroundTime = void 0;
const data_duration_1 = require("./data.duration");
class DataGroundTime extends data_duration_1.DataDuration {
    getValue() {
        return this.value * 1000;
    }
}
exports.DataGroundTime = DataGroundTime;
DataGroundTime.type = 'Ground Time';
DataGroundTime.unit = 'ms';
