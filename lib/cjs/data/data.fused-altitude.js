"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFusedAltitude = void 0;
const data_boolean_1 = require("./data.boolean");
class DataFusedAltitude extends data_boolean_1.DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
exports.DataFusedAltitude = DataFusedAltitude;
DataFusedAltitude.type = 'Fused Altitude';
