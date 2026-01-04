import { DataBare } from './data.bare';
export class DataArray extends DataBare {
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
