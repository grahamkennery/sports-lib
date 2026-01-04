"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAirPower = void 0;
const data_number_1 = require("./data.number");
class DataAirPower extends data_number_1.DataNumber {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
exports.DataAirPower = DataAirPower;
DataAirPower.type = 'Air Power';
DataAirPower.unit = 'watt'; // See https://itknowledgeexchange.techtarget.com/writing-for-business/do-you-capitalize-units-of-measurement-named-for-people/
