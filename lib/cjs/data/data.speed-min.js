"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSpeedMinKnots = exports.DataSpeedMinFeetPerMinute = exports.DataSpeedMinMetersPerMinute = exports.DataSpeedMinFeetPerSecond = exports.DataSpeedMinMilesPerHour = exports.DataSpeedMinKilometersPerHour = exports.DataSpeedMin = void 0;
const data_speed_1 = require("./data.speed");
class DataSpeedMin extends data_speed_1.DataSpeed {
}
exports.DataSpeedMin = DataSpeedMin;
DataSpeedMin.type = 'Minimum Speed';
class DataSpeedMinKilometersPerHour extends data_speed_1.DataSpeedKilometersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMinKilometersPerHour = DataSpeedMinKilometersPerHour;
DataSpeedMinKilometersPerHour.type = 'Minimum speed in kilometers per hour';
DataSpeedMinKilometersPerHour.displayType = DataSpeedMin.type;
class DataSpeedMinMilesPerHour extends data_speed_1.DataSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMinMilesPerHour = DataSpeedMinMilesPerHour;
DataSpeedMinMilesPerHour.type = 'Minimum speed in miles per hour';
DataSpeedMinMilesPerHour.displayType = DataSpeedMin.type;
class DataSpeedMinFeetPerSecond extends data_speed_1.DataSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMinFeetPerSecond = DataSpeedMinFeetPerSecond;
DataSpeedMinFeetPerSecond.type = 'Minimum speed in feet per second';
DataSpeedMinFeetPerSecond.displayType = DataSpeedMin.type;
class DataSpeedMinMetersPerMinute extends data_speed_1.DataSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMinMetersPerMinute = DataSpeedMinMetersPerMinute;
DataSpeedMinMetersPerMinute.type = 'Minimum speed in meters per minute';
DataSpeedMinMetersPerMinute.displayType = DataSpeedMin.type;
class DataSpeedMinFeetPerMinute extends data_speed_1.DataSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMinFeetPerMinute = DataSpeedMinFeetPerMinute;
DataSpeedMinFeetPerMinute.type = 'Minimum speed in feet per minute';
DataSpeedMinFeetPerMinute.displayType = DataSpeedMin.type;
class DataSpeedMinKnots extends data_speed_1.DataSpeedKnots {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMinKnots = DataSpeedMinKnots;
DataSpeedMinKnots.type = 'Minimum speed in knot';
DataSpeedMinKnots.displayType = DataSpeedMin.type;
