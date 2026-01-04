import { DataVerticalSpeed, DataVerticalSpeedFeetPerHour, DataVerticalSpeedFeetPerMinute, DataVerticalSpeedFeetPerSecond, DataVerticalSpeedKilometerPerHour, DataVerticalSpeedMetersPerHour, DataVerticalSpeedMetersPerMinute, DataVerticalSpeedMilesPerHour } from './data.vertical-speed';
export class DataVerticalSpeedAvg extends DataVerticalSpeed {
}
DataVerticalSpeedAvg.type = 'Average Vertical Speed';
export class DataVerticalSpeedAvgFeetPerSecond extends DataVerticalSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedAvgFeetPerSecond.type = 'Average vertical speed in feet per second';
DataVerticalSpeedAvgFeetPerSecond.displayType = DataVerticalSpeedAvg.type;
export class DataVerticalSpeedAvgMetersPerMinute extends DataVerticalSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedAvgMetersPerMinute.type = 'Average vertical speed in meters per minute';
DataVerticalSpeedAvgMetersPerMinute.displayType = DataVerticalSpeedAvg.type;
export class DataVerticalSpeedAvgFeetPerMinute extends DataVerticalSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedAvgFeetPerMinute.type = 'Average vertical speed in feet per minute';
DataVerticalSpeedAvgFeetPerMinute.displayType = DataVerticalSpeedAvg.type;
export class DataVerticalSpeedAvgMetersPerHour extends DataVerticalSpeedMetersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedAvgMetersPerHour.type = 'Average vertical speed in meters per hour';
DataVerticalSpeedAvgMetersPerHour.displayType = DataVerticalSpeedAvg.type;
export class DataVerticalSpeedAvgFeetPerHour extends DataVerticalSpeedFeetPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedAvgFeetPerHour.type = 'Average vertical speed in feet per hour';
DataVerticalSpeedAvgFeetPerHour.displayType = DataVerticalSpeedAvg.type;
export class DataVerticalSpeedAvgKilometerPerHour extends DataVerticalSpeedKilometerPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedAvgKilometerPerHour.type = 'Average vertical speed in kilometers per hour';
DataVerticalSpeedAvgKilometerPerHour.displayType = DataVerticalSpeedAvg.type;
export class DataVerticalSpeedAvgMilesPerHour extends DataVerticalSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedAvgMilesPerHour.type = 'Average vertical speed in miles per hour';
DataVerticalSpeedAvgMilesPerHour.displayType = DataVerticalSpeedAvg.type;
