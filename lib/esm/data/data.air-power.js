import { DataNumber } from './data.number';
export class DataAirPower extends DataNumber {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
DataAirPower.type = 'Air Power';
DataAirPower.unit = 'watt'; // See https://itknowledgeexchange.techtarget.com/writing-for-business/do-you-capitalize-units-of-measurement-named-for-people/
