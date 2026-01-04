import { DataGradeAdjustedSpeed, DataGradeAdjustedSpeedFeetPerMinute, DataGradeAdjustedSpeedFeetPerSecond, DataGradeAdjustedSpeedKilometersPerHour, DataGradeAdjustedSpeedKnots, DataGradeAdjustedSpeedMetersPerMinute, DataGradeAdjustedSpeedMilesPerHour } from './data.grade-adjusted-speed';
export class DataGradeAdjustedSpeedMax extends DataGradeAdjustedSpeed {
}
DataGradeAdjustedSpeedMax.type = 'Maximum Grade Adjusted Speed';
export class DataGradeAdjustedSpeedMaxKilometersPerHour extends DataGradeAdjustedSpeedKilometersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMaxKilometersPerHour.type = 'Maximum Grade Adjusted Speed in kilometers per hour';
DataGradeAdjustedSpeedMaxKilometersPerHour.displayType = DataGradeAdjustedSpeedMax.type;
export class DataGradeAdjustedSpeedMaxMilesPerHour extends DataGradeAdjustedSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMaxMilesPerHour.type = 'Maximum Grade Adjusted Speed in miles per hour';
DataGradeAdjustedSpeedMaxMilesPerHour.displayType = DataGradeAdjustedSpeedMax.type;
export class DataGradeAdjustedSpeedMaxFeetPerSecond extends DataGradeAdjustedSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMaxFeetPerSecond.type = 'Maximum Grade Adjusted Speed in feet per second';
DataGradeAdjustedSpeedMaxFeetPerSecond.displayType = DataGradeAdjustedSpeedMax.type;
export class DataGradeAdjustedSpeedMaxMetersPerMinute extends DataGradeAdjustedSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMaxMetersPerMinute.type = 'Maximum Grade Adjusted Speed in meters per minute';
DataGradeAdjustedSpeedMaxMetersPerMinute.displayType = DataGradeAdjustedSpeedMax.type;
export class DataGradeAdjustedSpeedMaxFeetPerMinute extends DataGradeAdjustedSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMaxFeetPerMinute.type = 'Maximum Grade Adjusted Speed in feet per minute';
DataGradeAdjustedSpeedMaxFeetPerMinute.displayType = DataGradeAdjustedSpeedMax.type;
export class DataGradeAdjustedSpeedMaxKnots extends DataGradeAdjustedSpeedKnots {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMaxKnots.type = 'Maximum Grade Adjusted Speed in knots';
DataGradeAdjustedSpeedMaxKnots.displayType = DataGradeAdjustedSpeedMax.type;
