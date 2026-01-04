import { DataNumber } from './data.number';
export class DataHeartRate extends DataNumber {
    getDisplayValue() {
        return Math.round(this.getValue());
    }
}
DataHeartRate.type = 'Heart Rate';
DataHeartRate.unit = 'bpm';
