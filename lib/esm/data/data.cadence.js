import { DataNumber } from './data.number';
export class DataCadence extends DataNumber {
    getDisplayValue() {
        return Math.round(this.getValue());
    }
}
DataCadence.type = 'Cadence';
DataCadence.unit = 'rpm';
