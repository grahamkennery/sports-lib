"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAccumulatedPower = void 0;
const data_number_1 = require("./data.number");
class DataAccumulatedPower extends data_number_1.DataNumber {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
exports.DataAccumulatedPower = DataAccumulatedPower;
DataAccumulatedPower.type = 'Accumulated Power';
DataAccumulatedPower.unit = 'watts';
