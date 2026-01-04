"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feelings = exports.DataFeeling = void 0;
const data_number_1 = require("./data.number");
class DataFeeling extends data_number_1.DataNumber {
    getDisplayValue() {
        return Feelings[Math.ceil(this.getValue())] ? Feelings[Math.ceil(this.getValue())] : ``;
    }
}
exports.DataFeeling = DataFeeling;
DataFeeling.type = 'Feeling';
var Feelings;
(function (Feelings) {
    Feelings[Feelings["Poor"] = 1] = "Poor";
    Feelings[Feelings["Average"] = 2] = "Average";
    Feelings[Feelings["Good"] = 3] = "Good";
    Feelings[Feelings["Very Good"] = 4] = "Very Good";
    Feelings[Feelings["Excellent"] = 5] = "Excellent";
})(Feelings = exports.Feelings || (exports.Feelings = {}));
