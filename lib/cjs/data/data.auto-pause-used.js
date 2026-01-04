"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAutoPauseUsed = void 0;
const data_boolean_1 = require("./data.boolean");
class DataAutoPauseUsed extends data_boolean_1.DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
exports.DataAutoPauseUsed = DataAutoPauseUsed;
DataAutoPauseUsed.type = 'Auto Pause';
