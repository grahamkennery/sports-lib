"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataVerticalSpeedMilesPerHour = exports.DataVerticalSpeedKilometerPerHour = exports.DataVerticalSpeedFeetPerHour = exports.DataVerticalSpeedMetersPerHour = exports.DataVerticalSpeedFeetPerMinute = exports.DataVerticalSpeedMetersPerMinute = exports.DataVerticalSpeedFeetPerSecond = exports.DataVerticalSpeed = void 0;
const data_number_1 = require("./data.number");
const helpers_1 = require("../events/utilities/helpers");
class DataVerticalSpeed extends data_number_1.DataNumber {
    getValue(formatForDataType) {
        switch (formatForDataType) {
            case DataVerticalSpeedKilometerPerHour.type:
                return (0, helpers_1.convertSpeedToSpeedInKilometersPerHour)(this.value);
            case DataVerticalSpeedMilesPerHour.type:
                return (0, helpers_1.convertSpeedToSpeedInMilesPerHour)(this.value);
            case DataVerticalSpeedFeetPerSecond.type:
                return (0, helpers_1.convertSpeedToSpeedInFeetPerSecond)(this.value);
            case DataVerticalSpeedMetersPerMinute.type:
                return (0, helpers_1.convertSpeedToSpeedInMetersPerMinute)(this.value);
            case DataVerticalSpeedFeetPerMinute.type:
                return (0, helpers_1.convertSpeedToSpeedInFeetPerMinute)(this.value);
            case DataVerticalSpeedFeetPerHour.type:
                return (0, helpers_1.convertSpeedToSpeedInFeetPerHour)(this.value);
            case DataVerticalSpeedMetersPerHour.type:
                return (0, helpers_1.convertSpeedToSpeedInMetersPerHour)(this.value);
            default:
                return super.getValue(formatForDataType);
        }
    }
    getDisplayValue() {
        return this.getValue().toFixed(2);
    }
}
exports.DataVerticalSpeed = DataVerticalSpeed;
DataVerticalSpeed.type = 'Vertical Speed';
DataVerticalSpeed.unit = 'm/s';
class DataVerticalSpeedFeetPerSecond extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedFeetPerSecond = DataVerticalSpeedFeetPerSecond;
DataVerticalSpeedFeetPerSecond.type = 'Vertical speed in feet per second';
DataVerticalSpeedFeetPerSecond.displayType = DataVerticalSpeed.type;
DataVerticalSpeedFeetPerSecond.unit = 'ft/s';
class DataVerticalSpeedMetersPerMinute extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
    getDisplayValue() {
        return this.getValue().toFixed(1);
    }
}
exports.DataVerticalSpeedMetersPerMinute = DataVerticalSpeedMetersPerMinute;
DataVerticalSpeedMetersPerMinute.type = 'Vertical speed in meters per minute';
DataVerticalSpeedMetersPerMinute.displayType = DataVerticalSpeed.type;
DataVerticalSpeedMetersPerMinute.unit = 'm/min';
class DataVerticalSpeedFeetPerMinute extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
    getDisplayValue() {
        return this.getValue().toFixed(1);
    }
}
exports.DataVerticalSpeedFeetPerMinute = DataVerticalSpeedFeetPerMinute;
DataVerticalSpeedFeetPerMinute.type = 'Vertical speed in feet per minute';
DataVerticalSpeedFeetPerMinute.displayType = DataVerticalSpeed.type;
DataVerticalSpeedFeetPerMinute.unit = 'ft/min';
class DataVerticalSpeedMetersPerHour extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
    getDisplayValue() {
        return this.getValue().toFixed(0);
    }
}
exports.DataVerticalSpeedMetersPerHour = DataVerticalSpeedMetersPerHour;
DataVerticalSpeedMetersPerHour.type = 'Vertical speed in meters per hour';
DataVerticalSpeedMetersPerHour.displayType = DataVerticalSpeed.type;
DataVerticalSpeedMetersPerHour.unit = 'm/h';
class DataVerticalSpeedFeetPerHour extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
    getDisplayValue() {
        return this.getValue().toFixed(0);
    }
}
exports.DataVerticalSpeedFeetPerHour = DataVerticalSpeedFeetPerHour;
DataVerticalSpeedFeetPerHour.type = 'Vertical speed in feet per hour';
DataVerticalSpeedFeetPerHour.displayType = DataVerticalSpeed.type;
DataVerticalSpeedFeetPerHour.unit = 'ft/h';
class DataVerticalSpeedKilometerPerHour extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
    getDisplayValue() {
        return this.getValue().toFixed(2);
    }
}
exports.DataVerticalSpeedKilometerPerHour = DataVerticalSpeedKilometerPerHour;
DataVerticalSpeedKilometerPerHour.type = 'Vertical speed in kilometers per hour';
DataVerticalSpeedKilometerPerHour.displayType = DataVerticalSpeed.type;
DataVerticalSpeedKilometerPerHour.unit = 'km/h';
class DataVerticalSpeedMilesPerHour extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
    getDisplayValue() {
        return this.getValue().toFixed(2);
    }
}
exports.DataVerticalSpeedMilesPerHour = DataVerticalSpeedMilesPerHour;
DataVerticalSpeedMilesPerHour.type = 'Vertical speed in miles per hour';
DataVerticalSpeedMilesPerHour.displayType = DataVerticalSpeed.type;
DataVerticalSpeedMilesPerHour.unit = 'mph';
