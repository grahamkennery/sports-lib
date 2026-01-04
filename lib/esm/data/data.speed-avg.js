import { DataSpeed, DataSpeedFeetPerMinute, DataSpeedFeetPerSecond, DataSpeedKilometersPerHour, DataSpeedKnots, DataSpeedMetersPerMinute, DataSpeedMilesPerHour } from './data.speed';
export class DataSpeedAvg extends DataSpeed {
}
DataSpeedAvg.type = 'Average Speed';
export class DataSpeedAvgKilometersPerHour extends DataSpeedKilometersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedAvgKilometersPerHour.type = 'Average speed in kilometers per hour';
DataSpeedAvgKilometersPerHour.displayType = DataSpeedAvg.type;
export class DataSpeedAvgMilesPerHour extends DataSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedAvgMilesPerHour.type = 'Average speed in miles per hour';
DataSpeedAvgMilesPerHour.displayType = DataSpeedAvg.type;
export class DataSpeedAvgFeetPerSecond extends DataSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedAvgFeetPerSecond.type = 'Average speed in feet per second';
DataSpeedAvgFeetPerSecond.displayType = DataSpeedAvg.type;
export class DataSpeedAvgMetersPerMinute extends DataSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedAvgMetersPerMinute.type = 'Average speed in meters per minute';
DataSpeedAvgMetersPerMinute.displayType = DataSpeedAvg.type;
export class DataSpeedAvgFeetPerMinute extends DataSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedAvgFeetPerMinute.type = 'Average speed in feet per minute';
DataSpeedAvgFeetPerMinute.displayType = DataSpeedAvg.type;
export class DataSpeedAvgKnots extends DataSpeedKnots {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedAvgKnots.type = 'Average speed in knots';
DataSpeedAvgKnots.displayType = DataSpeedAvg.type;
