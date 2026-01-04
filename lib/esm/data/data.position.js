import { DataBare } from './data.bare';
import { isNumber } from '../events/utilities/helpers';
export class DataPosition extends DataBare {
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
        return isNumber(value.longitudeDegrees) && isNumber(value.latitudeDegrees);
    }
}
DataPosition.type = 'Position';
