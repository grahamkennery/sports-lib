"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAnaerobicTrainingEffect = void 0;
const data_number_1 = require("./data.number");
class DataAnaerobicTrainingEffect extends data_number_1.DataNumber {
    getDisplayValue() {
        return this.value.toFixed(1);
    }
}
exports.DataAnaerobicTrainingEffect = DataAnaerobicTrainingEffect;
DataAnaerobicTrainingEffect.type = 'Anaerobic Training Effect';
DataAnaerobicTrainingEffect.displayType = DataAnaerobicTrainingEffect.type;
