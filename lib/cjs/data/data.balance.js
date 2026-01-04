"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBalance = void 0;
const data_percent_1 = require("./data.percent");
class DataBalance extends data_percent_1.DataPercent {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
exports.DataBalance = DataBalance;
