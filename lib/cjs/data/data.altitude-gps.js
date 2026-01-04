"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGPSAltitude = void 0;
const data_altitude_1 = require("./data.altitude");
class DataGPSAltitude extends data_altitude_1.DataAltitude {
}
exports.DataGPSAltitude = DataGPSAltitude;
DataGPSAltitude.type = 'Altitude GPS';
DataGPSAltitude.unit = 'm';
