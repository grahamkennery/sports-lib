"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAltitude = void 0;
const data_number_1 = require("./data.number");
class DataAltitude extends data_number_1.DataNumber {
    getDisplayValue() {
        return Math.round(this.getValue());
    }
}
exports.DataAltitude = DataAltitude;
DataAltitude.type = 'Altitude';
DataAltitude.unit = 'm';
