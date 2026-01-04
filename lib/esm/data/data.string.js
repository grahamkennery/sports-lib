import { DataBare } from './data.bare';
export class DataString extends DataBare {
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
