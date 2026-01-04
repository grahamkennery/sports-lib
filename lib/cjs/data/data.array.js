"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataArray = void 0;
const data_bare_1 = require("./data.bare");
class DataArray extends data_bare_1.DataBare {
    constructor(value) {
        super(value);
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    isValueTypeValid(value) {
        return Array.isArray(value);
    }
}
exports.DataArray = DataArray;
