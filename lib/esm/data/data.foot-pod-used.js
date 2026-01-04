import { DataBoolean } from './data.boolean';
export class DataFootPodUsed extends DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
DataFootPodUsed.type = 'Foot Pod';
