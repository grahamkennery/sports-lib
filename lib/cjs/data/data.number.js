"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataNumber = void 0;
const data_bare_1 = require("./data.bare");
class DataNumber extends data_bare_1.DataBare {
    constructor(value) {
        super(value);
        this.value = value;
    }
    getValue(formatForDataType) {
        return this.value;
    }
    isValueTypeValid(value) {
        return typeof value === 'number';
    }
}
exports.DataNumber = DataNumber;
