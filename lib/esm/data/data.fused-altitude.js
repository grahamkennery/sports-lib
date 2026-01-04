import { DataBoolean } from './data.boolean';
export class DataFusedAltitude extends DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
DataFusedAltitude.type = 'Fused Altitude';
