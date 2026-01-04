import { DataNumber } from './data.number';
export class DataBatteryVoltage extends DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(3);
    }
}
DataBatteryVoltage.type = 'Battery Voltage';
DataBatteryVoltage.unit = 'V';
