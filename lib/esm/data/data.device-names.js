import { DataArray } from './data.array';
export class DataDeviceNames extends DataArray {
    getDisplayValue() {
        return this.getValue().join(', ');
    }
}
DataDeviceNames.type = 'Device Names';
