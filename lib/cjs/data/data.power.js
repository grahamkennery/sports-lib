"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPower = void 0;
const data_number_1 = require("./data.number");
class DataPower extends data_number_1.DataNumber {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
exports.DataPower = DataPower;
DataPower.type = 'Power';
DataPower.unit = 'watt'; // See https://itknowledgeexchange.techtarget.com/writing-for-business/do-you-capitalize-units-of-measurement-named-for-people/
