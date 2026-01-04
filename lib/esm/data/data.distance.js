import { DataNumber } from './data.number';
export class DataDistance extends DataNumber {
    getDisplayValue() {
        return this.getValue() >= 1000 ? (this.getValue() / 1000).toFixed(2) : this.getValue().toFixed(1);
    }
    getDisplayUnit() {
        return this.getValue() >= 1000 ? 'Km' : 'm';
    }
}
DataDistance.type = 'Distance';
DataDistance.unit = 'm';
export class DataDistanceMiles extends DataDistance {
}
DataDistanceMiles.type = 'Distance in miles';
DataDistanceMiles.unit = 'M';
