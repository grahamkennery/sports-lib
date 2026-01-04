"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPowerPodUsed = void 0;
const data_boolean_1 = require("./data.boolean");
class DataPowerPodUsed extends data_boolean_1.DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
exports.DataPowerPodUsed = DataPowerPodUsed;
DataPowerPodUsed.type = 'Power Pod';
