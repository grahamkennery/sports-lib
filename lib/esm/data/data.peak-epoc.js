import { DataEPOC } from './data.epoc';
export class DataPeakEPOC extends DataEPOC {
    getDisplayValue() {
        return this.value.toFixed(1);
    }
}
DataPeakEPOC.type = 'Peak EPOC';
