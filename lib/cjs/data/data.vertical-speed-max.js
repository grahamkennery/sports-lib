"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataVerticalSpeedMaxMilesPerHour = exports.DataVerticalSpeedMaxKilometerPerHour = exports.DataVerticalSpeedMaxFeetPerHour = exports.DataVerticalSpeedMaxMetersPerHour = exports.DataVerticalSpeedMaxFeetPerMinute = exports.DataVerticalSpeedMaxMetersPerMinute = exports.DataVerticalSpeedMaxFeetPerSecond = exports.DataVerticalSpeedMax = void 0;
const data_vertical_speed_1 = require("./data.vertical-speed");
class DataVerticalSpeedMax extends data_vertical_speed_1.DataVerticalSpeed {
}
exports.DataVerticalSpeedMax = DataVerticalSpeedMax;
DataVerticalSpeedMax.type = 'Maximum Vertical Speed';
class DataVerticalSpeedMaxFeetPerSecond extends data_vertical_speed_1.DataVerticalSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMaxFeetPerSecond = DataVerticalSpeedMaxFeetPerSecond;
DataVerticalSpeedMaxFeetPerSecond.type = 'Maximum vertical speed in feet per second';
DataVerticalSpeedMaxFeetPerSecond.displayType = DataVerticalSpeedMax.type;
class DataVerticalSpeedMaxMetersPerMinute extends data_vertical_speed_1.DataVerticalSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMaxMetersPerMinute = DataVerticalSpeedMaxMetersPerMinute;
DataVerticalSpeedMaxMetersPerMinute.type = 'Maximum vertical speed in meters per minute';
DataVerticalSpeedMaxMetersPerMinute.displayType = DataVerticalSpeedMax.type;
class DataVerticalSpeedMaxFeetPerMinute extends data_vertical_speed_1.DataVerticalSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMaxFeetPerMinute = DataVerticalSpeedMaxFeetPerMinute;
DataVerticalSpeedMaxFeetPerMinute.type = 'Maximum vertical speed in feet per minute';
DataVerticalSpeedMaxFeetPerMinute.displayType = DataVerticalSpeedMax.type;
class DataVerticalSpeedMaxMetersPerHour extends data_vertical_speed_1.DataVerticalSpeedMetersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMaxMetersPerHour = DataVerticalSpeedMaxMetersPerHour;
DataVerticalSpeedMaxMetersPerHour.type = 'Maximum vertical speed in meters per hour';
DataVerticalSpeedMaxMetersPerHour.displayType = DataVerticalSpeedMax.type;
class DataVerticalSpeedMaxFeetPerHour extends data_vertical_speed_1.DataVerticalSpeedFeetPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMaxFeetPerHour = DataVerticalSpeedMaxFeetPerHour;
DataVerticalSpeedMaxFeetPerHour.type = 'Maximum vertical speed in feet per hour';
DataVerticalSpeedMaxFeetPerHour.displayType = DataVerticalSpeedMax.type;
class DataVerticalSpeedMaxKilometerPerHour extends data_vertical_speed_1.DataVerticalSpeedKilometerPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMaxKilometerPerHour = DataVerticalSpeedMaxKilometerPerHour;
DataVerticalSpeedMaxKilometerPerHour.type = 'Maximum vertical speed in kilometers per hour';
DataVerticalSpeedMaxKilometerPerHour.displayType = DataVerticalSpeedMax.type;
class DataVerticalSpeedMaxMilesPerHour extends data_vertical_speed_1.DataVerticalSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMaxMilesPerHour = DataVerticalSpeedMaxMilesPerHour;
DataVerticalSpeedMaxMilesPerHour.type = 'Maximum vertical speed in miles per hour';
DataVerticalSpeedMaxMilesPerHour.displayType = DataVerticalSpeedMax.type;
