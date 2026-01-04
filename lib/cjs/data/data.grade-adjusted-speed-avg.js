"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGradeAdjustedSpeedAvgKnots = exports.DataGradeAdjustedSpeedAvgFeetPerMinute = exports.DataGradeAdjustedSpeedAvgMetersPerMinute = exports.DataGradeAdjustedSpeedAvgFeetPerSecond = exports.DataGradeAdjustedSpeedAvgMilesPerHour = exports.DataGradeAdjustedSpeedAvgKilometersPerHour = exports.DataGradeAdjustedSpeedAvg = void 0;
const data_grade_adjusted_speed_1 = require("./data.grade-adjusted-speed");
class DataGradeAdjustedSpeedAvg extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeed {
}
exports.DataGradeAdjustedSpeedAvg = DataGradeAdjustedSpeedAvg;
DataGradeAdjustedSpeedAvg.type = 'Average Grade Adjusted Speed';
class DataGradeAdjustedSpeedAvgKilometersPerHour extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedAvgKilometersPerHour = DataGradeAdjustedSpeedAvgKilometersPerHour;
DataGradeAdjustedSpeedAvgKilometersPerHour.type = 'Average Grade Adjusted Speed in kilometers per hour';
DataGradeAdjustedSpeedAvgKilometersPerHour.displayType = DataGradeAdjustedSpeedAvg.type;
class DataGradeAdjustedSpeedAvgMilesPerHour extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedAvgMilesPerHour = DataGradeAdjustedSpeedAvgMilesPerHour;
DataGradeAdjustedSpeedAvgMilesPerHour.type = 'Average Grade Adjusted Speed in miles per hour';
DataGradeAdjustedSpeedAvgMilesPerHour.displayType = DataGradeAdjustedSpeedAvg.type;
class DataGradeAdjustedSpeedAvgFeetPerSecond extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedAvgFeetPerSecond = DataGradeAdjustedSpeedAvgFeetPerSecond;
DataGradeAdjustedSpeedAvgFeetPerSecond.type = 'Average Grade Adjusted Speed in feet per second';
DataGradeAdjustedSpeedAvgFeetPerSecond.displayType = DataGradeAdjustedSpeedAvg.type;
class DataGradeAdjustedSpeedAvgMetersPerMinute extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedAvgMetersPerMinute = DataGradeAdjustedSpeedAvgMetersPerMinute;
DataGradeAdjustedSpeedAvgMetersPerMinute.type = 'Average Grade Adjusted Speed in meters per minute';
DataGradeAdjustedSpeedAvgMetersPerMinute.displayType = DataGradeAdjustedSpeedAvg.type;
class DataGradeAdjustedSpeedAvgFeetPerMinute extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedAvgFeetPerMinute = DataGradeAdjustedSpeedAvgFeetPerMinute;
DataGradeAdjustedSpeedAvgFeetPerMinute.type = 'Average Grade Adjusted Speed in feet per minute';
DataGradeAdjustedSpeedAvgFeetPerMinute.displayType = DataGradeAdjustedSpeedAvg.type;
class DataGradeAdjustedSpeedAvgKnots extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKnots {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedAvgKnots = DataGradeAdjustedSpeedAvgKnots;
DataGradeAdjustedSpeedAvgKnots.type = 'Average Grade Adjusted Speed in knots';
DataGradeAdjustedSpeedAvgKnots.displayType = DataGradeAdjustedSpeedAvg.type;
