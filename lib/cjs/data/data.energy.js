"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataEnergy = void 0;
const data_number_1 = require("./data.number");
class DataEnergy extends data_number_1.DataNumber {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
exports.DataEnergy = DataEnergy;
DataEnergy.type = 'Energy';
DataEnergy.unit = 'KCal';
