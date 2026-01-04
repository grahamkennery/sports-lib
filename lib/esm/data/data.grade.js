import { DataPercent } from './data.percent';
export class DataGrade extends DataPercent {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
DataGrade.type = 'Grade';
