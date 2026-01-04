import { DataBoolean } from './data.boolean';
export class DataBikePodUsed extends DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
DataBikePodUsed.type = 'Bike Pod';
