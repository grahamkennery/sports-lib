import { DataNumber } from './data.number';
export class DataAccumulatedPower extends DataNumber {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
DataAccumulatedPower.type = 'Accumulated Power';
DataAccumulatedPower.unit = 'watts';
