"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBatteryVoltage = void 0;
const data_number_1 = require("./data.number");
class DataBatteryVoltage extends data_number_1.DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(3);
    }
}
exports.DataBatteryVoltage = DataBatteryVoltage;
DataBatteryVoltage.type = 'Battery Voltage';
DataBatteryVoltage.unit = 'V';
