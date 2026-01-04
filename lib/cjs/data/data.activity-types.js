"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataActivityTypes = void 0;
const data_array_1 = require("./data.array");
class DataActivityTypes extends data_array_1.DataArray {
    getDisplayValue() {
        return this.getValue().join(', ');
    }
}
exports.DataActivityTypes = DataActivityTypes;
DataActivityTypes.type = 'Activity Types';
