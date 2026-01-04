"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSpeedMaxKnots = exports.DataSpeedMaxFeetPerMinute = exports.DataSpeedMaxMetersPerMinute = exports.DataSpeedMaxFeetPerSecond = exports.DataSpeedMaxMilesPerHour = exports.DataSpeedMaxKilometersPerHour = exports.DataSpeedMax = void 0;
const data_speed_1 = require("./data.speed");
class DataSpeedMax extends data_speed_1.DataSpeed {
}
exports.DataSpeedMax = DataSpeedMax;
DataSpeedMax.type = 'Maximum Speed';
class DataSpeedMaxKilometersPerHour extends data_speed_1.DataSpeedKilometersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMaxKilometersPerHour = DataSpeedMaxKilometersPerHour;
DataSpeedMaxKilometersPerHour.type = 'Maximum speed in kilometers per hour';
DataSpeedMaxKilometersPerHour.displayType = DataSpeedMax.type;
class DataSpeedMaxMilesPerHour extends data_speed_1.DataSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMaxMilesPerHour = DataSpeedMaxMilesPerHour;
DataSpeedMaxMilesPerHour.type = 'Maximum speed in miles per hour';
DataSpeedMaxMilesPerHour.displayType = DataSpeedMax.type;
class DataSpeedMaxFeetPerSecond extends data_speed_1.DataSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMaxFeetPerSecond = DataSpeedMaxFeetPerSecond;
DataSpeedMaxFeetPerSecond.type = 'Maximum speed in feet per second';
DataSpeedMaxFeetPerSecond.displayType = DataSpeedMax.type;
class DataSpeedMaxMetersPerMinute extends data_speed_1.DataSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMaxMetersPerMinute = DataSpeedMaxMetersPerMinute;
DataSpeedMaxMetersPerMinute.type = 'Maximum speed in meters per minute';
DataSpeedMaxMetersPerMinute.displayType = DataSpeedMax.type;
class DataSpeedMaxFeetPerMinute extends data_speed_1.DataSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMaxFeetPerMinute = DataSpeedMaxFeetPerMinute;
DataSpeedMaxFeetPerMinute.type = 'Maximum speed in feet per minute';
DataSpeedMaxFeetPerMinute.displayType = DataSpeedMax.type;
class DataSpeedMaxKnots extends data_speed_1.DataSpeedKnots {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedMaxKnots = DataSpeedMaxKnots;
DataSpeedMaxKnots.type = 'Maximum speed in knots';
DataSpeedMaxKnots.displayType = DataSpeedMax.type;
