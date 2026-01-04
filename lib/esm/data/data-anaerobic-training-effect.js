import { DataNumber } from './data.number';
export class DataAnaerobicTrainingEffect extends DataNumber {
    getDisplayValue() {
        return this.value.toFixed(1);
    }
}
DataAnaerobicTrainingEffect.type = 'Anaerobic Training Effect';
DataAnaerobicTrainingEffect.displayType = DataAnaerobicTrainingEffect.type;
