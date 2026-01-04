"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataHeartRate = void 0;
const data_number_1 = require("./data.number");
class DataHeartRate extends data_number_1.DataNumber {
    getDisplayValue() {
        return Math.round(this.getValue());
    }
}
exports.DataHeartRate = DataHeartRate;
DataHeartRate.type = 'Heart Rate';
DataHeartRate.unit = 'bpm';
