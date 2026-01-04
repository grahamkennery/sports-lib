"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataIBI = void 0;
const data_duration_1 = require("./data.duration");
class DataIBI extends data_duration_1.DataDuration {
    getDisplayValue() {
        return this.value.toFixed(0);
    }
}
exports.DataIBI = DataIBI;
DataIBI.type = 'IBI';
DataIBI.unit = 'ms';
