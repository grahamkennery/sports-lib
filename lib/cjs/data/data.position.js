"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPosition = void 0;
const data_bare_1 = require("./data.bare");
const helpers_1 = require("../events/utilities/helpers");
class DataPosition extends data_bare_1.DataBare {
    constructor(value) {
        super(value);
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    getDisplayValue() {
        return `${this.getValue().latitudeDegrees.toString()}, ${this.getValue().longitudeDegrees.toString()}`;
    }
    isValueTypeValid(value) {
        return (0, helpers_1.isNumber)(value.longitudeDegrees) && (0, helpers_1.isNumber)(value.latitudeDegrees);
    }
}
exports.DataPosition = DataPosition;
DataPosition.type = 'Position';
