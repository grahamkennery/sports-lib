import { DataDuration } from './data.duration';
export class DataGroundTime extends DataDuration {
    getValue() {
        return this.value * 1000;
    }
}
DataGroundTime.type = 'Ground Time';
DataGroundTime.unit = 'ms';
