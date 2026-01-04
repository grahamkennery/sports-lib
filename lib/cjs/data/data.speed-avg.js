"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSpeedAvgKnots = exports.DataSpeedAvgFeetPerMinute = exports.DataSpeedAvgMetersPerMinute = exports.DataSpeedAvgFeetPerSecond = exports.DataSpeedAvgMilesPerHour = exports.DataSpeedAvgKilometersPerHour = exports.DataSpeedAvg = void 0;
const data_speed_1 = require("./data.speed");
class DataSpeedAvg extends data_speed_1.DataSpeed {
}
exports.DataSpeedAvg = DataSpeedAvg;
DataSpeedAvg.type = 'Average Speed';
class DataSpeedAvgKilometersPerHour extends data_speed_1.DataSpeedKilometersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedAvgKilometersPerHour = DataSpeedAvgKilometersPerHour;
DataSpeedAvgKilometersPerHour.type = 'Average speed in kilometers per hour';
DataSpeedAvgKilometersPerHour.displayType = DataSpeedAvg.type;
class DataSpeedAvgMilesPerHour extends data_speed_1.DataSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedAvgMilesPerHour = DataSpeedAvgMilesPerHour;
DataSpeedAvgMilesPerHour.type = 'Average speed in miles per hour';
DataSpeedAvgMilesPerHour.displayType = DataSpeedAvg.type;
class DataSpeedAvgFeetPerSecond extends data_speed_1.DataSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedAvgFeetPerSecond = DataSpeedAvgFeetPerSecond;
DataSpeedAvgFeetPerSecond.type = 'Average speed in feet per second';
DataSpeedAvgFeetPerSecond.displayType = DataSpeedAvg.type;
class DataSpeedAvgMetersPerMinute extends data_speed_1.DataSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedAvgMetersPerMinute = DataSpeedAvgMetersPerMinute;
DataSpeedAvgMetersPerMinute.type = 'Average speed in meters per minute';
DataSpeedAvgMetersPerMinute.displayType = DataSpeedAvg.type;
class DataSpeedAvgFeetPerMinute extends data_speed_1.DataSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedAvgFeetPerMinute = DataSpeedAvgFeetPerMinute;
DataSpeedAvgFeetPerMinute.type = 'Average speed in feet per minute';
DataSpeedAvgFeetPerMinute.displayType = DataSpeedAvg.type;
class DataSpeedAvgKnots extends data_speed_1.DataSpeedKnots {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataSpeedAvgKnots = DataSpeedAvgKnots;
DataSpeedAvgKnots.type = 'Average speed in knots';
DataSpeedAvgKnots.displayType = DataSpeedAvg.type;
