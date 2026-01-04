"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFusedLocation = void 0;
const data_boolean_1 = require("./data.boolean");
class DataFusedLocation extends data_boolean_1.DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
exports.DataFusedLocation = DataFusedLocation;
DataFusedLocation.type = 'Fused Location';
