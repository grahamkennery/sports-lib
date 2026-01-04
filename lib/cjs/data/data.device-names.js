"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDeviceNames = void 0;
const data_array_1 = require("./data.array");
class DataDeviceNames extends data_array_1.DataArray {
    getDisplayValue() {
        return this.getValue().join(', ');
    }
}
exports.DataDeviceNames = DataDeviceNames;
DataDeviceNames.type = 'Device Names';
