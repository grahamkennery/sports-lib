import { DataNumber } from './data.number';
export class DataBatteryConsumption extends DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(2);
    }
}
DataBatteryConsumption.type = 'Battery Consumption';
DataBatteryConsumption.unit = '%';
