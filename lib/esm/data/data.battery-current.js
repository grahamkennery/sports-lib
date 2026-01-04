import { DataNumber } from './data.number';
export class DataBatteryCurrent extends DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(3);
    }
}
DataBatteryCurrent.type = 'Battery Current';
DataBatteryCurrent.unit = 'mA';
