"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCadence = void 0;
const data_number_1 = require("./data.number");
class DataCadence extends data_number_1.DataNumber {
    getDisplayValue() {
        return Math.round(this.getValue());
    }
}
exports.DataCadence = DataCadence;
DataCadence.type = 'Cadence';
DataCadence.unit = 'rpm';
