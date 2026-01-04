import { DataNumber } from './data.number';
export class DataFeeling extends DataNumber {
    getDisplayValue() {
        return Feelings[Math.ceil(this.getValue())] ? Feelings[Math.ceil(this.getValue())] : ``;
    }
}
DataFeeling.type = 'Feeling';
export var Feelings;
(function (Feelings) {
    Feelings[Feelings["Poor"] = 1] = "Poor";
    Feelings[Feelings["Average"] = 2] = "Average";
    Feelings[Feelings["Good"] = 3] = "Good";
    Feelings[Feelings["Very Good"] = 4] = "Very Good";
    Feelings[Feelings["Excellent"] = 5] = "Excellent";
})(Feelings || (Feelings = {}));
