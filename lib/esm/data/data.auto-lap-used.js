import { DataBoolean } from './data.boolean';
export class DataAutoLapUsed extends DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
DataAutoLapUsed.type = 'Auto Lap';
