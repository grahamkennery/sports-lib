import { DataNumber } from './data.number';
export class DataAerobicTrainingEffect extends DataNumber {
    getDisplayValue() {
        return this.value.toFixed(1);
    }
}
DataAerobicTrainingEffect.type = 'Aerobic Training Effect';
DataAerobicTrainingEffect.displayType = DataAerobicTrainingEffect.type;
