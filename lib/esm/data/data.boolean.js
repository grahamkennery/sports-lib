import { DataBare } from './data.bare';
export class DataBoolean extends DataBare {
    constructor(value) {
        super(value);
    }
    isValueTypeValid(value) {
        return typeof value === 'boolean';
    }
}
