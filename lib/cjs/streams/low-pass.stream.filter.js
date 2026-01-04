"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowPassStreamFilter = void 0;
const low_pass_filter_1 = require("../events/utilities/grade-calculator/low-pass-filter");
class LowPassStreamFilter {
    constructor() {
        this.lowPassFilter = new low_pass_filter_1.LowPassFilter(0.2);
    }
    filterData(data) {
        return this.lowPassFilter.smoothArray(data);
    }
}
exports.LowPassStreamFilter = LowPassStreamFilter;
