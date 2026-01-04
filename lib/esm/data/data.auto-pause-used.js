import { DataBoolean } from './data.boolean';
export class DataAutoPauseUsed extends DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
DataAutoPauseUsed.type = 'Auto Pause';
