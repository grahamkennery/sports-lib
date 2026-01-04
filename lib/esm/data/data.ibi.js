import { DataDuration } from './data.duration';
export class DataIBI extends DataDuration {
    getDisplayValue() {
        return this.value.toFixed(0);
    }
}
DataIBI.type = 'IBI';
DataIBI.unit = 'ms';
