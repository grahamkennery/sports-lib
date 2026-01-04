import { DataVerticalSpeed, DataVerticalSpeedFeetPerHour, DataVerticalSpeedFeetPerMinute, DataVerticalSpeedFeetPerSecond, DataVerticalSpeedKilometerPerHour, DataVerticalSpeedMetersPerHour, DataVerticalSpeedMetersPerMinute, DataVerticalSpeedMilesPerHour } from './data.vertical-speed';
export class DataVerticalSpeedMin extends DataVerticalSpeed {
}
DataVerticalSpeedMin.type = 'Minimum Vertical Speed';
export class DataVerticalSpeedMinFeetPerSecond extends DataVerticalSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMinFeetPerSecond.type = 'Minimum vertical speed in feet per second';
DataVerticalSpeedMinFeetPerSecond.displayType = DataVerticalSpeedMin.type;
export class DataVerticalSpeedMinMetersPerMinute extends DataVerticalSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMinMetersPerMinute.type = 'Minimum vertical speed in meters per minute';
DataVerticalSpeedMinMetersPerMinute.displayType = DataVerticalSpeedMin.type;
export class DataVerticalSpeedMinFeetPerMinute extends DataVerticalSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMinFeetPerMinute.type = 'Minimum vertical speed in feet per minute';
DataVerticalSpeedMinFeetPerMinute.displayType = DataVerticalSpeedMin.type;
export class DataVerticalSpeedMinMetersPerHour extends DataVerticalSpeedMetersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMinMetersPerHour.type = 'Minimum vertical speed in meters per hour';
DataVerticalSpeedMinMetersPerHour.displayType = DataVerticalSpeedMin.type;
export class DataVerticalSpeedMinFeetPerHour extends DataVerticalSpeedFeetPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMinFeetPerHour.type = 'Minimum vertical speed in feet per hour';
DataVerticalSpeedMinFeetPerHour.displayType = DataVerticalSpeedMin.type;
export class DataVerticalSpeedMinKilometerPerHour extends DataVerticalSpeedKilometerPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMinKilometerPerHour.type = 'Minimum vertical speed in kilometers per hour';
DataVerticalSpeedMinKilometerPerHour.displayType = DataVerticalSpeedMin.type;
export class DataVerticalSpeedMinMilesPerHour extends DataVerticalSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMinMilesPerHour.type = 'Minimum vertical speed in miles per hour';
DataVerticalSpeedMinMilesPerHour.displayType = DataVerticalSpeedMin.type;
