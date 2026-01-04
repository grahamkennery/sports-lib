"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBoolean = void 0;
const data_bare_1 = require("./data.bare");
class DataBoolean extends data_bare_1.DataBare {
    constructor(value) {
        super(value);
    }
    isValueTypeValid(value) {
        return typeof value === 'boolean';
    }
}
exports.DataBoolean = DataBoolean;
