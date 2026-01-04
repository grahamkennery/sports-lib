"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPeakEPOC = void 0;
const data_epoc_1 = require("./data.epoc");
class DataPeakEPOC extends data_epoc_1.DataEPOC {
    getDisplayValue() {
        return this.value.toFixed(1);
    }
}
exports.DataPeakEPOC = DataPeakEPOC;
DataPeakEPOC.type = 'Peak EPOC';
