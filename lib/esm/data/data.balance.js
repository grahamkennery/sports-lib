import { DataPercent } from './data.percent';
export class DataBalance extends DataPercent {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
