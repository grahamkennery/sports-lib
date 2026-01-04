import { DataNumber } from './data.number';
export class DataBatteryCharge extends DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(3);
    }
}
DataBatteryCharge.type = 'Battery Charge';
DataBatteryCharge.unit = '%';
