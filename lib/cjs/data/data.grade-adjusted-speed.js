"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGradeAdjustedSpeedKnots = exports.DataGradeAdjustedSpeedFeetPerMinute = exports.DataGradeAdjustedSpeedMetersPerMinute = exports.DataGradeAdjustedSpeedFeetPerSecond = exports.DataGradeAdjustedSpeedMilesPerHour = exports.DataGradeAdjustedSpeedKilometersPerHour = exports.DataGradeAdjustedSpeed = void 0;
const helpers_1 = require("../events/utilities/helpers");
const data_grade_adjusted_pace_1 = require("./data.grade-adjusted-pace");
const data_speed_1 = require("./data.speed");
class DataGradeAdjustedSpeed extends data_speed_1.DataSpeed {
    getValue(formatForDataType) {
        switch (formatForDataType) {
            // Speed cases conversions
            case DataGradeAdjustedSpeedKilometersPerHour.type:
                return (0, helpers_1.convertSpeedToSpeedInKilometersPerHour)(this.value);
            case DataGradeAdjustedSpeedMilesPerHour.type:
                return (0, helpers_1.convertSpeedToSpeedInMilesPerHour)(this.value);
            case DataGradeAdjustedSpeedFeetPerSecond.type:
                return (0, helpers_1.convertSpeedToSpeedInFeetPerSecond)(this.value);
            case DataGradeAdjustedSpeedMetersPerMinute.type:
                return (0, helpers_1.convertSpeedToSpeedInMetersPerMinute)(this.value);
            case DataGradeAdjustedSpeedFeetPerMinute.type:
                return (0, helpers_1.convertSpeedToSpeedInFeetPerMinute)(this.value);
            case DataGradeAdjustedSpeedKnots.type:
                return (0, helpers_1.convertSpeedToSpeedInKnots)(this.value);
            // Pace
            case data_grade_adjusted_pace_1.DataGradeAdjustedPace.type:
                return (0, helpers_1.convertSpeedToPace)(this.value);
            case data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile.type:
                return (0, helpers_1.convertPaceToPaceInMinutesPerMile)((0, helpers_1.convertSpeedToPace)(this.value));
            default:
                return super.getValue(formatForDataType);
        }
    }
}
exports.DataGradeAdjustedSpeed = DataGradeAdjustedSpeed;
DataGradeAdjustedSpeed.type = 'Grade Adjusted Speed';
class DataGradeAdjustedSpeedKilometersPerHour extends DataGradeAdjustedSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedKilometersPerHour = DataGradeAdjustedSpeedKilometersPerHour;
DataGradeAdjustedSpeedKilometersPerHour.type = 'Grade Adjusted Speed in kilometers per hour';
DataGradeAdjustedSpeedKilometersPerHour.displayType = DataGradeAdjustedSpeed.type;
DataGradeAdjustedSpeedKilometersPerHour.unit = 'km/h';
class DataGradeAdjustedSpeedMilesPerHour extends DataGradeAdjustedSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMilesPerHour = DataGradeAdjustedSpeedMilesPerHour;
DataGradeAdjustedSpeedMilesPerHour.type = 'Grade Adjusted Speed in miles per hour';
DataGradeAdjustedSpeedMilesPerHour.displayType = DataGradeAdjustedSpeed.type;
DataGradeAdjustedSpeedMilesPerHour.unit = 'mph';
class DataGradeAdjustedSpeedFeetPerSecond extends DataGradeAdjustedSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedFeetPerSecond = DataGradeAdjustedSpeedFeetPerSecond;
DataGradeAdjustedSpeedFeetPerSecond.type = 'Grade Adjusted Speed in feet per second';
DataGradeAdjustedSpeedFeetPerSecond.displayType = DataGradeAdjustedSpeed.type;
DataGradeAdjustedSpeedFeetPerSecond.unit = 'ft/s';
class DataGradeAdjustedSpeedMetersPerMinute extends DataGradeAdjustedSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMetersPerMinute = DataGradeAdjustedSpeedMetersPerMinute;
DataGradeAdjustedSpeedMetersPerMinute.type = 'Grade Adjusted Speed in meters per minute';
DataGradeAdjustedSpeedMetersPerMinute.displayType = DataGradeAdjustedSpeed.type;
DataGradeAdjustedSpeedMetersPerMinute.unit = 'm/min';
class DataGradeAdjustedSpeedFeetPerMinute extends DataGradeAdjustedSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedFeetPerMinute = DataGradeAdjustedSpeedFeetPerMinute;
DataGradeAdjustedSpeedFeetPerMinute.type = 'Grade Adjusted Speed in feet per minute';
DataGradeAdjustedSpeedFeetPerMinute.displayType = DataGradeAdjustedSpeed.type;
DataGradeAdjustedSpeedFeetPerMinute.unit = 'ft/min';
class DataGradeAdjustedSpeedKnots extends DataGradeAdjustedSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedKnots = DataGradeAdjustedSpeedKnots;
DataGradeAdjustedSpeedKnots.type = 'Grade Adjusted Speed in knots';
DataGradeAdjustedSpeedKnots.displayType = DataGradeAdjustedSpeed.type;
DataGradeAdjustedSpeedKnots.unit = 'kn';
