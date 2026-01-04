import { DataPercent } from './data.percent';
export class DataGradeSmooth extends DataPercent {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
DataGradeSmooth.type = 'Grade Smooth';
