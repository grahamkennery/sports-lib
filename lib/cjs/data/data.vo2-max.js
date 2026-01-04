"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataVO2Max = void 0;
const data_number_1 = require("./data.number");
class DataVO2Max extends data_number_1.DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(2);
    }
}
exports.DataVO2Max = DataVO2Max;
DataVO2Max.type = 'VO2 Max';
