"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBikePodUsed = void 0;
const data_boolean_1 = require("./data.boolean");
class DataBikePodUsed extends data_boolean_1.DataBoolean {
    getDisplayValue() {
        return this.getValue() ? 'Yes' : 'No';
    }
}
exports.DataBikePodUsed = DataBikePodUsed;
DataBikePodUsed.type = 'Bike Pod';
