"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFootPodUsed = void 0;
const data_boolean_1 = require("./data.boolean");
class DataFootPodUsed extends data_boolean_1.DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
exports.DataFootPodUsed = DataFootPodUsed;
DataFootPodUsed.type = 'Foot Pod';
