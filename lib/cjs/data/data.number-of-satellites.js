"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataNumberOfSatellites = void 0;
const data_number_1 = require("./data.number");
class DataNumberOfSatellites extends data_number_1.DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(0);
    }
}
exports.DataNumberOfSatellites = DataNumberOfSatellites;
DataNumberOfSatellites.type = 'Number of Satellites';
