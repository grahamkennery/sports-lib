import { DataNumber } from './data.number';
export class DataTemperature extends DataNumber {
    getDisplayValue() {
        return Math.round(this.getValue());
    }
}
DataTemperature.type = 'Temperature';
DataTemperature.unit = '°C';
