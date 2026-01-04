"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAutoLapUsed = void 0;
const data_boolean_1 = require("./data.boolean");
class DataAutoLapUsed extends data_boolean_1.DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
exports.DataAutoLapUsed = DataAutoLapUsed;
DataAutoLapUsed.type = 'Auto Lap';
