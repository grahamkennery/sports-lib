import { DataBare } from './data.bare';
export class DataNumber extends DataBare {
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
