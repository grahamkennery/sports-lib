"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBatteryCurrent = void 0;
const data_number_1 = require("./data.number");
class DataBatteryCurrent extends data_number_1.DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(3);
    }
}
exports.DataBatteryCurrent = DataBatteryCurrent;
DataBatteryCurrent.type = 'Battery Current';
DataBatteryCurrent.unit = 'mA';
