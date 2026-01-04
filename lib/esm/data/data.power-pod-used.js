import { DataBoolean } from './data.boolean';
export class DataPowerPodUsed extends DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
DataPowerPodUsed.type = 'Power Pod';
