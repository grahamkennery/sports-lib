"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBatteryConsumption = void 0;
const data_number_1 = require("./data.number");
class DataBatteryConsumption extends data_number_1.DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(2);
    }
}
exports.DataBatteryConsumption = DataBatteryConsumption;
DataBatteryConsumption.type = 'Battery Consumption';
DataBatteryConsumption.unit = '%';
