"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGrade = void 0;
const data_percent_1 = require("./data.percent");
class DataGrade extends data_percent_1.DataPercent {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
exports.DataGrade = DataGrade;
DataGrade.type = 'Grade';
