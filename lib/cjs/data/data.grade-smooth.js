"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGradeSmooth = void 0;
const data_percent_1 = require("./data.percent");
class DataGradeSmooth extends data_percent_1.DataPercent {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
exports.DataGradeSmooth = DataGradeSmooth;
DataGradeSmooth.type = 'Grade Smooth';
