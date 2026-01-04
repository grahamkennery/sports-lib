"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const data_interface_1 = require("./data.interface");
const helpers_1 = require("../events/utilities/helpers");
class Data {
    constructor(value) {
        if (!this.getType()) {
            throw new Error('Type not set');
        }
        if (!this.isValueTypeValid(value)) {
            throw new Error('Value is not boolean or number or string or Date or position');
        }
        this.value = value;
    }
    setValue(value) {
        if (!this.isValueTypeValid(value)) {
            throw new Error('Value is not boolean or number or string or Date or position');
        }
        this.value = value;
        return this;
    }
    getValue(formatForDataType) {
        return this.value;
    }
    getDisplayValue() {
        const value = this.getValue();
        switch (typeof value) {
            case 'string':
            case 'number':
                return value;
            default:
                return String(value);
        }
    }
    getType() {
        return this.constructor.type;
    }
    getUnit() {
        return this.constructor.unit;
    }
    getDisplayUnit() {
        return this.getUnit();
    }
    getDisplayType() {
        return this.constructor.displayType || this.constructor.type;
    }
    getUnitSystem() {
        return this.constructor.unitSystem;
    }
    isValueTypeValid(value) {
        return !(typeof value !== 'string' &&
            typeof value !== 'number' &&
            typeof value !== 'boolean' &&
            !Array.isArray(value) &&
            !(0, helpers_1.isNumber)(value.latitudeDegrees) &&
            !(0, helpers_1.isNumber)(value.longitudeDegrees));
    }
    toJSON() {
        return {
            [this.getType()]: this.getValue()
        };
    }
}
exports.Data = Data;
Data.unitSystem = data_interface_1.UnitSystem.Metric;
