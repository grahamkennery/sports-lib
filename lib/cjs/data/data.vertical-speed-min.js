"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataVerticalSpeedMinMilesPerHour = exports.DataVerticalSpeedMinKilometerPerHour = exports.DataVerticalSpeedMinFeetPerHour = exports.DataVerticalSpeedMinMetersPerHour = exports.DataVerticalSpeedMinFeetPerMinute = exports.DataVerticalSpeedMinMetersPerMinute = exports.DataVerticalSpeedMinFeetPerSecond = exports.DataVerticalSpeedMin = void 0;
const data_vertical_speed_1 = require("./data.vertical-speed");
class DataVerticalSpeedMin extends data_vertical_speed_1.DataVerticalSpeed {
}
exports.DataVerticalSpeedMin = DataVerticalSpeedMin;
DataVerticalSpeedMin.type = 'Minimum Vertical Speed';
class DataVerticalSpeedMinFeetPerSecond extends data_vertical_speed_1.DataVerticalSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMinFeetPerSecond = DataVerticalSpeedMinFeetPerSecond;
DataVerticalSpeedMinFeetPerSecond.type = 'Minimum vertical speed in feet per second';
DataVerticalSpeedMinFeetPerSecond.displayType = DataVerticalSpeedMin.type;
class DataVerticalSpeedMinMetersPerMinute extends data_vertical_speed_1.DataVerticalSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMinMetersPerMinute = DataVerticalSpeedMinMetersPerMinute;
DataVerticalSpeedMinMetersPerMinute.type = 'Minimum vertical speed in meters per minute';
DataVerticalSpeedMinMetersPerMinute.displayType = DataVerticalSpeedMin.type;
class DataVerticalSpeedMinFeetPerMinute extends data_vertical_speed_1.DataVerticalSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMinFeetPerMinute = DataVerticalSpeedMinFeetPerMinute;
DataVerticalSpeedMinFeetPerMinute.type = 'Minimum vertical speed in feet per minute';
DataVerticalSpeedMinFeetPerMinute.displayType = DataVerticalSpeedMin.type;
class DataVerticalSpeedMinMetersPerHour extends data_vertical_speed_1.DataVerticalSpeedMetersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMinMetersPerHour = DataVerticalSpeedMinMetersPerHour;
DataVerticalSpeedMinMetersPerHour.type = 'Minimum vertical speed in meters per hour';
DataVerticalSpeedMinMetersPerHour.displayType = DataVerticalSpeedMin.type;
class DataVerticalSpeedMinFeetPerHour extends data_vertical_speed_1.DataVerticalSpeedFeetPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMinFeetPerHour = DataVerticalSpeedMinFeetPerHour;
DataVerticalSpeedMinFeetPerHour.type = 'Minimum vertical speed in feet per hour';
DataVerticalSpeedMinFeetPerHour.displayType = DataVerticalSpeedMin.type;
class DataVerticalSpeedMinKilometerPerHour extends data_vertical_speed_1.DataVerticalSpeedKilometerPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMinKilometerPerHour = DataVerticalSpeedMinKilometerPerHour;
DataVerticalSpeedMinKilometerPerHour.type = 'Minimum vertical speed in kilometers per hour';
DataVerticalSpeedMinKilometerPerHour.displayType = DataVerticalSpeedMin.type;
class DataVerticalSpeedMinMilesPerHour extends data_vertical_speed_1.DataVerticalSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedMinMilesPerHour = DataVerticalSpeedMinMilesPerHour;
DataVerticalSpeedMinMilesPerHour.type = 'Minimum vertical speed in miles per hour';
DataVerticalSpeedMinMilesPerHour.displayType = DataVerticalSpeedMin.type;
