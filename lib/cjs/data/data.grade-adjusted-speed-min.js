"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGradeAdjustedSpeedMinKnots = exports.DataGradeAdjustedSpeedMinFeetPerMinute = exports.DataGradeAdjustedSpeedMinMetersPerMinute = exports.DataGradeAdjustedSpeedMinFeetPerSecond = exports.DataGradeAdjustedSpeedMinMilesPerHour = exports.DataGradeAdjustedSpeedMinKilometersPerHour = exports.DataGradeAdjustedSpeedMin = void 0;
const data_grade_adjusted_speed_1 = require("./data.grade-adjusted-speed");
class DataGradeAdjustedSpeedMin extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeed {
}
exports.DataGradeAdjustedSpeedMin = DataGradeAdjustedSpeedMin;
DataGradeAdjustedSpeedMin.type = 'Minimum Grade Adjusted Speed';
class DataGradeAdjustedSpeedMinKilometersPerHour extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMinKilometersPerHour = DataGradeAdjustedSpeedMinKilometersPerHour;
DataGradeAdjustedSpeedMinKilometersPerHour.type = 'Minimum Grade Adjusted Speed in kilometers per hour';
DataGradeAdjustedSpeedMinKilometersPerHour.displayType = DataGradeAdjustedSpeedMin.type;
class DataGradeAdjustedSpeedMinMilesPerHour extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMinMilesPerHour = DataGradeAdjustedSpeedMinMilesPerHour;
DataGradeAdjustedSpeedMinMilesPerHour.type = 'Minimum Grade Adjusted Speed in miles per hour';
DataGradeAdjustedSpeedMinMilesPerHour.displayType = DataGradeAdjustedSpeedMin.type;
class DataGradeAdjustedSpeedMinFeetPerSecond extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMinFeetPerSecond = DataGradeAdjustedSpeedMinFeetPerSecond;
DataGradeAdjustedSpeedMinFeetPerSecond.type = 'Minimum Grade Adjusted Speed in feet per second';
DataGradeAdjustedSpeedMinFeetPerSecond.displayType = DataGradeAdjustedSpeedMin.type;
class DataGradeAdjustedSpeedMinMetersPerMinute extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMinMetersPerMinute = DataGradeAdjustedSpeedMinMetersPerMinute;
DataGradeAdjustedSpeedMinMetersPerMinute.type = 'Minimum Grade Adjusted Speed in meters per minute';
DataGradeAdjustedSpeedMinMetersPerMinute.displayType = DataGradeAdjustedSpeedMin.type;
class DataGradeAdjustedSpeedMinFeetPerMinute extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMinFeetPerMinute = DataGradeAdjustedSpeedMinFeetPerMinute;
DataGradeAdjustedSpeedMinFeetPerMinute.type = 'Minimum Grade Adjusted Speed in feet per minute';
DataGradeAdjustedSpeedMinFeetPerMinute.displayType = DataGradeAdjustedSpeedMin.type;
class DataGradeAdjustedSpeedMinKnots extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKnots {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMinKnots = DataGradeAdjustedSpeedMinKnots;
DataGradeAdjustedSpeedMinKnots.type = 'Minimum Grade Adjusted Speed in knots';
DataGradeAdjustedSpeedMinKnots.displayType = DataGradeAdjustedSpeedMin.type;
