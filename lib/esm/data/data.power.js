import { DataNumber } from './data.number';
export class DataPower extends DataNumber {
    getDisplayValue() {
        return Math.round(this.value);
    }
}
DataPower.type = 'Power';
DataPower.unit = 'watt'; // See https://itknowledgeexchange.techtarget.com/writing-for-business/do-you-capitalize-units-of-measurement-named-for-people/
