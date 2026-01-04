import { DataNumber } from './data.number';
export class DataEnergy extends DataNumber {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
DataEnergy.type = 'Energy';
DataEnergy.unit = 'KCal';
