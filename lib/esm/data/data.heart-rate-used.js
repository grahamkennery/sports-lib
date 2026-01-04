import { DataBoolean } from './data.boolean';
export class DataHeartRateUsed extends DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
DataHeartRateUsed.type = 'Heart Rate Used';
