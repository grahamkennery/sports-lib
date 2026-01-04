"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAerobicTrainingEffect = void 0;
const data_number_1 = require("./data.number");
class DataAerobicTrainingEffect extends data_number_1.DataNumber {
    getDisplayValue() {
        return this.value.toFixed(1);
    }
}
exports.DataAerobicTrainingEffect = DataAerobicTrainingEffect;
DataAerobicTrainingEffect.type = 'Aerobic Training Effect';
DataAerobicTrainingEffect.displayType = DataAerobicTrainingEffect.type;
