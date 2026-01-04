import { DataNumber } from './data.number';
// Due to legacy
export class DataLegStiffness extends DataNumber {
    getDisplayValue() {
        return this.value.toFixed(2);
    }
}
DataLegStiffness.type = 'Leg Stiffness';
DataLegStiffness.unit = '"KN/m"';
export class DataLegSpringStiffness extends DataNumber {
    getDisplayValue() {
        return this.value.toFixed(2);
    }
}
DataLegSpringStiffness.type = 'Leg Spring Stiffness';
DataLegSpringStiffness.unit = '"KN/m"';
