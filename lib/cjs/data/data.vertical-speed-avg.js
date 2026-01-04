"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataVerticalSpeedAvgMilesPerHour = exports.DataVerticalSpeedAvgKilometerPerHour = exports.DataVerticalSpeedAvgFeetPerHour = exports.DataVerticalSpeedAvgMetersPerHour = exports.DataVerticalSpeedAvgFeetPerMinute = exports.DataVerticalSpeedAvgMetersPerMinute = exports.DataVerticalSpeedAvgFeetPerSecond = exports.DataVerticalSpeedAvg = void 0;
const data_vertical_speed_1 = require("./data.vertical-speed");
class DataVerticalSpeedAvg extends data_vertical_speed_1.DataVerticalSpeed {
}
exports.DataVerticalSpeedAvg = DataVerticalSpeedAvg;
DataVerticalSpeedAvg.type = 'Average Vertical Speed';
class DataVerticalSpeedAvgFeetPerSecond extends data_vertical_speed_1.DataVerticalSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedAvgFeetPerSecond = DataVerticalSpeedAvgFeetPerSecond;
DataVerticalSpeedAvgFeetPerSecond.type = 'Average vertical speed in feet per second';
DataVerticalSpeedAvgFeetPerSecond.displayType = DataVerticalSpeedAvg.type;
class DataVerticalSpeedAvgMetersPerMinute extends data_vertical_speed_1.DataVerticalSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedAvgMetersPerMinute = DataVerticalSpeedAvgMetersPerMinute;
DataVerticalSpeedAvgMetersPerMinute.type = 'Average vertical speed in meters per minute';
DataVerticalSpeedAvgMetersPerMinute.displayType = DataVerticalSpeedAvg.type;
class DataVerticalSpeedAvgFeetPerMinute extends data_vertical_speed_1.DataVerticalSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedAvgFeetPerMinute = DataVerticalSpeedAvgFeetPerMinute;
DataVerticalSpeedAvgFeetPerMinute.type = 'Average vertical speed in feet per minute';
DataVerticalSpeedAvgFeetPerMinute.displayType = DataVerticalSpeedAvg.type;
class DataVerticalSpeedAvgMetersPerHour extends data_vertical_speed_1.DataVerticalSpeedMetersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedAvgMetersPerHour = DataVerticalSpeedAvgMetersPerHour;
DataVerticalSpeedAvgMetersPerHour.type = 'Average vertical speed in meters per hour';
DataVerticalSpeedAvgMetersPerHour.displayType = DataVerticalSpeedAvg.type;
class DataVerticalSpeedAvgFeetPerHour extends data_vertical_speed_1.DataVerticalSpeedFeetPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedAvgFeetPerHour = DataVerticalSpeedAvgFeetPerHour;
DataVerticalSpeedAvgFeetPerHour.type = 'Average vertical speed in feet per hour';
DataVerticalSpeedAvgFeetPerHour.displayType = DataVerticalSpeedAvg.type;
class DataVerticalSpeedAvgKilometerPerHour extends data_vertical_speed_1.DataVerticalSpeedKilometerPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedAvgKilometerPerHour = DataVerticalSpeedAvgKilometerPerHour;
DataVerticalSpeedAvgKilometerPerHour.type = 'Average vertical speed in kilometers per hour';
DataVerticalSpeedAvgKilometerPerHour.displayType = DataVerticalSpeedAvg.type;
class DataVerticalSpeedAvgMilesPerHour extends data_vertical_speed_1.DataVerticalSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataVerticalSpeedAvgMilesPerHour = DataVerticalSpeedAvgMilesPerHour;
DataVerticalSpeedAvgMilesPerHour.type = 'Average vertical speed in miles per hour';
DataVerticalSpeedAvgMilesPerHour.displayType = DataVerticalSpeedAvg.type;
