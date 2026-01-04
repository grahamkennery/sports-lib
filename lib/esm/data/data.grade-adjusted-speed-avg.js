import { DataGradeAdjustedSpeed, DataGradeAdjustedSpeedFeetPerMinute, DataGradeAdjustedSpeedFeetPerSecond, DataGradeAdjustedSpeedKilometersPerHour, DataGradeAdjustedSpeedKnots, DataGradeAdjustedSpeedMetersPerMinute, DataGradeAdjustedSpeedMilesPerHour } from './data.grade-adjusted-speed';
export class DataGradeAdjustedSpeedAvg extends DataGradeAdjustedSpeed {
}
DataGradeAdjustedSpeedAvg.type = 'Average Grade Adjusted Speed';
export class DataGradeAdjustedSpeedAvgKilometersPerHour extends DataGradeAdjustedSpeedKilometersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedAvgKilometersPerHour.type = 'Average Grade Adjusted Speed in kilometers per hour';
DataGradeAdjustedSpeedAvgKilometersPerHour.displayType = DataGradeAdjustedSpeedAvg.type;
export class DataGradeAdjustedSpeedAvgMilesPerHour extends DataGradeAdjustedSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedAvgMilesPerHour.type = 'Average Grade Adjusted Speed in miles per hour';
DataGradeAdjustedSpeedAvgMilesPerHour.displayType = DataGradeAdjustedSpeedAvg.type;
export class DataGradeAdjustedSpeedAvgFeetPerSecond extends DataGradeAdjustedSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedAvgFeetPerSecond.type = 'Average Grade Adjusted Speed in feet per second';
DataGradeAdjustedSpeedAvgFeetPerSecond.displayType = DataGradeAdjustedSpeedAvg.type;
export class DataGradeAdjustedSpeedAvgMetersPerMinute extends DataGradeAdjustedSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedAvgMetersPerMinute.type = 'Average Grade Adjusted Speed in meters per minute';
DataGradeAdjustedSpeedAvgMetersPerMinute.displayType = DataGradeAdjustedSpeedAvg.type;
export class DataGradeAdjustedSpeedAvgFeetPerMinute extends DataGradeAdjustedSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedAvgFeetPerMinute.type = 'Average Grade Adjusted Speed in feet per minute';
DataGradeAdjustedSpeedAvgFeetPerMinute.displayType = DataGradeAdjustedSpeedAvg.type;
export class DataGradeAdjustedSpeedAvgKnots extends DataGradeAdjustedSpeedKnots {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedAvgKnots.type = 'Average Grade Adjusted Speed in knots';
DataGradeAdjustedSpeedAvgKnots.displayType = DataGradeAdjustedSpeedAvg.type;
