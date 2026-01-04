"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTemperature = void 0;
const data_number_1 = require("./data.number");
class DataTemperature extends data_number_1.DataNumber {
    getDisplayValue() {
        return Math.round(this.getValue());
    }
}
exports.DataTemperature = DataTemperature;
DataTemperature.type = 'Temperature';
DataTemperature.unit = '°C';
