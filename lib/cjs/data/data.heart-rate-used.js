"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataHeartRateUsed = void 0;
const data_boolean_1 = require("./data.boolean");
class DataHeartRateUsed extends data_boolean_1.DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
exports.DataHeartRateUsed = DataHeartRateUsed;
DataHeartRateUsed.type = 'Heart Rate Used';
