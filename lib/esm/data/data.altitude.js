import { DataNumber } from './data.number';
export class DataAltitude extends DataNumber {
    getDisplayValue() {
        return Math.round(this.getValue());
    }
}
DataAltitude.type = 'Altitude';
DataAltitude.unit = 'm';
