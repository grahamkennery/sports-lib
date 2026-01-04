import { DataBoolean } from './data.boolean';
export class DataFusedLocation extends DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
DataFusedLocation.type = 'Fused Location';
