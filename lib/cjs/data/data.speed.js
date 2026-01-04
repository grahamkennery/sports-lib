"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSpeedKnots = exports.DataSpeedFeetPerMinute = exports.DataSpeedMetersPerMinute = exports.DataSpeedFeetPerSecond = exports.DataSpeedMilesPerHour = exports.DataSpeedKilometersPerHour = exports.DataSpeed = void 0;
const data_number_1 = require("./data.number");
const helpers_1 = require("../events/utilities/helpers");
const data_pace_1 = require("./data.pace");
const data_swim_pace_1 = require("./data.swim-pace");
class DataSpeed extends data_number_1.DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(2);
    }
    getValue(formatForDataType) {
        switch (formatForDataType) {
            // Speed cases conversions
            case DataSpeedKilometersPerHour.type:
                return (0, helpers_1.convertSpeedToSpeedInKilometersPerHour)(this.value);
            case DataSpeedMilesPerHour.type:
                return (0, helpers_1.convertSpeedToSpeedInMilesPerHour)(this.value);
            case DataSpeedFeetPerSecond.type:
                return (0, helpers_1.convertSpeedToSpeedInFeetPerSecond)(this.value);
            case DataSpeedMetersPerMinute.type:
                return (0, helpers_1.convertSpeedToSpeedInMetersPerMinute)(this.value);
            case DataSpeedFeetPerMinute.type:
                return (0, helpers_1.convertSpeedToSpeedInFeetPerMinute)(this.value);
            case DataSpeedKnots.type:
                return (0, helpers_1.convertSpeedToSpeedInKnots)(this.value);
            // Pace
            case data_pace_1.DataPace.type:
                return (0, helpers_1.convertSpeedToPace)(this.value);
            case data_pace_1.DataPaceMinutesPerMile.type:
                return (0, helpers_1.convertPaceToPaceInMinutesPerMile)((0, helpers_1.convertSpeedToPace)(this.value));
            // Swim pace
            case data_swim_pace_1.DataSwimPace.type:
                return (0, helpers_1.convertSpeedToSwimPace)(this.value);
            case data_swim_pace_1.DataSwimPaceMinutesPer100Yard.type:
                return (0, helpers_1.convertSwimPaceToSwimPacePer100Yard)((0, helpers_1.convertSpeedToSwimPace)(this.value));
            default:
                return super.getValue(formatForDataType);
        }
    }
}
exports.DataSpeed = DataSpeed;
DataSpeed.type = 'Speed';
DataSpeed.unit = 'm/s';
class DataSpeedKilometersPerHour extends DataSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedKilometersPerHour = DataSpeedKilometersPerHour;
DataSpeedKilometersPerHour.type = 'Speed in kilometers per hour';
DataSpeedKilometersPerHour.displayType = DataSpeed.type;
DataSpeedKilometersPerHour.unit = 'km/h';
class DataSpeedMilesPerHour extends DataSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMilesPerHour = DataSpeedMilesPerHour;
DataSpeedMilesPerHour.type = 'Speed in miles per hour';
DataSpeedMilesPerHour.displayType = DataSpeed.type;
DataSpeedMilesPerHour.unit = 'mph';
class DataSpeedFeetPerSecond extends DataSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedFeetPerSecond = DataSpeedFeetPerSecond;
DataSpeedFeetPerSecond.type = 'Speed in feet per second';
DataSpeedFeetPerSecond.displayType = DataSpeed.type;
DataSpeedFeetPerSecond.unit = 'ft/s';
class DataSpeedMetersPerMinute extends DataSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMetersPerMinute = DataSpeedMetersPerMinute;
DataSpeedMetersPerMinute.type = 'Speed in meters per minute';
DataSpeedMetersPerMinute.displayType = DataSpeed.type;
DataSpeedMetersPerMinute.unit = 'm/min';
class DataSpeedFeetPerMinute extends DataSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedFeetPerMinute = DataSpeedFeetPerMinute;
DataSpeedFeetPerMinute.type = 'Speed in feet per minute';
DataSpeedFeetPerMinute.displayType = DataSpeed.type;
DataSpeedFeetPerMinute.unit = 'ft/min';
class DataSpeedKnots extends DataSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedKnots = DataSpeedKnots;
DataSpeedKnots.type = 'Speed in knots';
DataSpeedKnots.displayType = DataSpeed.type;
DataSpeedKnots.unit = 'kn';
