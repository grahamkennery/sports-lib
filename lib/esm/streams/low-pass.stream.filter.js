import { LowPassFilter } from '../events/utilities/grade-calculator/low-pass-filter';
export class LowPassStreamFilter {
    constructor() {
        this.lowPassFilter = new LowPassFilter(0.2);
    }
    filterData(data) {
        return this.lowPassFilter.smoothArray(data);
    }
}
