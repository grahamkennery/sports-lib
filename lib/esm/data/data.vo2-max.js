import { DataNumber } from './data.number';
export class DataVO2Max extends DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(2);
    }
}
DataVO2Max.type = 'VO2 Max';
