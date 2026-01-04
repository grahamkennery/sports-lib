"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBatteryCharge = void 0;
const data_number_1 = require("./data.number");
class DataBatteryCharge extends data_number_1.DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(3);
    }
}
exports.DataBatteryCharge = DataBatteryCharge;
DataBatteryCharge.type = 'Battery Charge';
DataBatteryCharge.unit = '%';
