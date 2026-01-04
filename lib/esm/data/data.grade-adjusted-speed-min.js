import { DataGradeAdjustedSpeed, DataGradeAdjustedSpeedFeetPerMinute, DataGradeAdjustedSpeedFeetPerSecond, DataGradeAdjustedSpeedKilometersPerHour, DataGradeAdjustedSpeedKnots, DataGradeAdjustedSpeedMetersPerMinute, DataGradeAdjustedSpeedMilesPerHour } from './data.grade-adjusted-speed';
export class DataGradeAdjustedSpeedMin extends DataGradeAdjustedSpeed {
}
DataGradeAdjustedSpeedMin.type = 'Minimum Grade Adjusted Speed';
export class DataGradeAdjustedSpeedMinKilometersPerHour extends DataGradeAdjustedSpeedKilometersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMinKilometersPerHour.type = 'Minimum Grade Adjusted Speed in kilometers per hour';
DataGradeAdjustedSpeedMinKilometersPerHour.displayType = DataGradeAdjustedSpeedMin.type;
export class DataGradeAdjustedSpeedMinMilesPerHour extends DataGradeAdjustedSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMinMilesPerHour.type = 'Minimum Grade Adjusted Speed in miles per hour';
DataGradeAdjustedSpeedMinMilesPerHour.displayType = DataGradeAdjustedSpeedMin.type;
export class DataGradeAdjustedSpeedMinFeetPerSecond extends DataGradeAdjustedSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMinFeetPerSecond.type = 'Minimum Grade Adjusted Speed in feet per second';
DataGradeAdjustedSpeedMinFeetPerSecond.displayType = DataGradeAdjustedSpeedMin.type;
export class DataGradeAdjustedSpeedMinMetersPerMinute extends DataGradeAdjustedSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMinMetersPerMinute.type = 'Minimum Grade Adjusted Speed in meters per minute';
DataGradeAdjustedSpeedMinMetersPerMinute.displayType = DataGradeAdjustedSpeedMin.type;
export class DataGradeAdjustedSpeedMinFeetPerMinute extends DataGradeAdjustedSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMinFeetPerMinute.type = 'Minimum Grade Adjusted Speed in feet per minute';
DataGradeAdjustedSpeedMinFeetPerMinute.displayType = DataGradeAdjustedSpeedMin.type;
export class DataGradeAdjustedSpeedMinKnots extends DataGradeAdjustedSpeedKnots {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMinKnots.type = 'Minimum Grade Adjusted Speed in knots';
DataGradeAdjustedSpeedMinKnots.displayType = DataGradeAdjustedSpeedMin.type;
