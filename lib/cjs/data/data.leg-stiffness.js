"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLegSpringStiffness = exports.DataLegStiffness = void 0;
const data_number_1 = require("./data.number");
// Due to legacy
class DataLegStiffness extends data_number_1.DataNumber {
    getDisplayValue() {
        return this.value.toFixed(2);
    }
}
exports.DataLegStiffness = DataLegStiffness;
DataLegStiffness.type = 'Leg Stiffness';
DataLegStiffness.unit = '"KN/m"';
class DataLegSpringStiffness extends data_number_1.DataNumber {
    getDisplayValue() {
        return this.value.toFixed(2);
    }
}
exports.DataLegSpringStiffness = DataLegSpringStiffness;
DataLegSpringStiffness.type = 'Leg Spring Stiffness';
DataLegSpringStiffness.unit = '"KN/m"';
