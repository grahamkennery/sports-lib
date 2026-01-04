"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGradeAdjustedSpeedMaxKnots = exports.DataGradeAdjustedSpeedMaxFeetPerMinute = exports.DataGradeAdjustedSpeedMaxMetersPerMinute = exports.DataGradeAdjustedSpeedMaxFeetPerSecond = exports.DataGradeAdjustedSpeedMaxMilesPerHour = exports.DataGradeAdjustedSpeedMaxKilometersPerHour = exports.DataGradeAdjustedSpeedMax = void 0;
const data_grade_adjusted_speed_1 = require("./data.grade-adjusted-speed");
class DataGradeAdjustedSpeedMax extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeed {
}
exports.DataGradeAdjustedSpeedMax = DataGradeAdjustedSpeedMax;
DataGradeAdjustedSpeedMax.type = 'Maximum Grade Adjusted Speed';
class DataGradeAdjustedSpeedMaxKilometersPerHour extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMaxKilometersPerHour = DataGradeAdjustedSpeedMaxKilometersPerHour;
DataGradeAdjustedSpeedMaxKilometersPerHour.type = 'Maximum Grade Adjusted Speed in kilometers per hour';
DataGradeAdjustedSpeedMaxKilometersPerHour.displayType = DataGradeAdjustedSpeedMax.type;
class DataGradeAdjustedSpeedMaxMilesPerHour extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMaxMilesPerHour = DataGradeAdjustedSpeedMaxMilesPerHour;
DataGradeAdjustedSpeedMaxMilesPerHour.type = 'Maximum Grade Adjusted Speed in miles per hour';
DataGradeAdjustedSpeedMaxMilesPerHour.displayType = DataGradeAdjustedSpeedMax.type;
class DataGradeAdjustedSpeedMaxFeetPerSecond extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMaxFeetPerSecond = DataGradeAdjustedSpeedMaxFeetPerSecond;
DataGradeAdjustedSpeedMaxFeetPerSecond.type = 'Maximum Grade Adjusted Speed in feet per second';
DataGradeAdjustedSpeedMaxFeetPerSecond.displayType = DataGradeAdjustedSpeedMax.type;
class DataGradeAdjustedSpeedMaxMetersPerMinute extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMaxMetersPerMinute = DataGradeAdjustedSpeedMaxMetersPerMinute;
DataGradeAdjustedSpeedMaxMetersPerMinute.type = 'Maximum Grade Adjusted Speed in meters per minute';
DataGradeAdjustedSpeedMaxMetersPerMinute.displayType = DataGradeAdjustedSpeedMax.type;
class DataGradeAdjustedSpeedMaxFeetPerMinute extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMaxFeetPerMinute = DataGradeAdjustedSpeedMaxFeetPerMinute;
DataGradeAdjustedSpeedMaxFeetPerMinute.type = 'Maximum Grade Adjusted Speed in feet per minute';
DataGradeAdjustedSpeedMaxFeetPerMinute.displayType = DataGradeAdjustedSpeedMax.type;
class DataGradeAdjustedSpeedMaxKnots extends data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKnots {
    getDisplayType() {
        return super.getDisplayType();
    }
}
exports.DataGradeAdjustedSpeedMaxKnots = DataGradeAdjustedSpeedMaxKnots;
DataGradeAdjustedSpeedMaxKnots.type = 'Maximum Grade Adjusted Speed in knots';
DataGradeAdjustedSpeedMaxKnots.displayType = DataGradeAdjustedSpeedMax.type;
