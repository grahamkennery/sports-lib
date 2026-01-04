"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDistanceMiles = exports.DataDistance = void 0;
const data_number_1 = require("./data.number");
class DataDistance extends data_number_1.DataNumber {
    getDisplayValue() {
        return this.getValue() >= 1000 ? (this.getValue() / 1000).toFixed(2) : this.getValue().toFixed(1);
    }
    getDisplayUnit() {
        return this.getValue() >= 1000 ? 'Km' : 'm';
    }
}
exports.DataDistance = DataDistance;
DataDistance.type = 'Distance';
DataDistance.unit = 'm';
class DataDistanceMiles extends DataDistance {
}
exports.DataDistanceMiles = DataDistanceMiles;
DataDistanceMiles.type = 'Distance in miles';
DataDistanceMiles.unit = 'M';
