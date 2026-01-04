import { DataArray } from './data.array';
export class DataActivityTypes extends DataArray {
    getDisplayValue() {
        return this.getValue().join(', ');
    }
}
DataActivityTypes.type = 'Activity Types';
