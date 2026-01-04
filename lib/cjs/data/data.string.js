"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataString = void 0;
const data_bare_1 = require("./data.bare");
class DataString extends data_bare_1.DataBare {
    constructor(value) {
        super(value);
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    isValueTypeValid(value) {
        return typeof value === 'string';
    }
}
exports.DataString = DataString;
