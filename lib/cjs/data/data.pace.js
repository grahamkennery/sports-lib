"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPaceMinutesPerMile = exports.DataPace = void 0;
const data_duration_1 = require("./data.duration");
const helpers_1 = require("../events/utilities/helpers");
class DataPace extends data_duration_1.DataDuration {
    getDisplayValue() {
        if (this.getValue() === Infinity || this.getValue() === -Infinity) {
            return '00:00';
        }
        const d = this.getValue();
        const h = Math.floor(d / 3600);
        const m = Math.floor((d % 3600) / 60);
        const s = Math.floor((d % 3600) % 60);
        if (!m && !h) {
            return '00:' + ('0' + s).slice(-2);
        }
        else if (!h) {
            return ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
        }
        else {
            return ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
        }
    }
    getDisplayUnit() {
        return this.getUnit();
    }
    getValue(formatForDataType) {
        switch (formatForDataType) {
            case DataPaceMinutesPerMile.type:
                return (0, helpers_1.convertPaceToPaceInMinutesPerMile)(this.value);
            default:
                return super.getValue(formatForDataType);
        }
    }
}
exports.DataPace = DataPace;
DataPace.type = 'Pace';
DataPace.unit = 'min/km';
class DataPaceMinutesPerMile extends DataPace {
    getValue(formatForDataType) {
        if (formatForDataType) {
            throw new Error(`Not implemented`);
        }
        return super.getValue(formatForDataType);
    }
}
exports.DataPaceMinutesPerMile = DataPaceMinutesPerMile;
DataPaceMinutesPerMile.type = 'Pace in minutes per mile';
DataPaceMinutesPerMile.displayType = DataPace.type;
DataPaceMinutesPerMile.unit = 'min/m';
