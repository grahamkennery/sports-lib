import { UnitSystem } from './data.interface';
import { isNumber } from '../events/utilities/helpers';
export class Data {
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
            !isNumber(value.latitudeDegrees) &&
            !isNumber(value.longitudeDegrees));
    }
    toJSON() {
        return {
            [this.getType()]: this.getValue()
        };
    }
}
Data.unitSystem = UnitSystem.Metric;
