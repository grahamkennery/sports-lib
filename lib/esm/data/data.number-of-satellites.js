import { DataNumber } from './data.number';
export class DataNumberOfSatellites extends DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(0);
    }
}
DataNumberOfSatellites.type = 'Number of Satellites';
