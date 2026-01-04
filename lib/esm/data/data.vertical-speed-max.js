import { DataVerticalSpeed, DataVerticalSpeedFeetPerHour, DataVerticalSpeedFeetPerMinute, DataVerticalSpeedFeetPerSecond, DataVerticalSpeedKilometerPerHour, DataVerticalSpeedMetersPerHour, DataVerticalSpeedMetersPerMinute, DataVerticalSpeedMilesPerHour } from './data.vertical-speed';
export class DataVerticalSpeedMax extends DataVerticalSpeed {
}
DataVerticalSpeedMax.type = 'Maximum Vertical Speed';
export class DataVerticalSpeedMaxFeetPerSecond extends DataVerticalSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMaxFeetPerSecond.type = 'Maximum vertical speed in feet per second';
DataVerticalSpeedMaxFeetPerSecond.displayType = DataVerticalSpeedMax.type;
export class DataVerticalSpeedMaxMetersPerMinute extends DataVerticalSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMaxMetersPerMinute.type = 'Maximum vertical speed in meters per minute';
DataVerticalSpeedMaxMetersPerMinute.displayType = DataVerticalSpeedMax.type;
export class DataVerticalSpeedMaxFeetPerMinute extends DataVerticalSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMaxFeetPerMinute.type = 'Maximum vertical speed in feet per minute';
DataVerticalSpeedMaxFeetPerMinute.displayType = DataVerticalSpeedMax.type;
export class DataVerticalSpeedMaxMetersPerHour extends DataVerticalSpeedMetersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMaxMetersPerHour.type = 'Maximum vertical speed in meters per hour';
DataVerticalSpeedMaxMetersPerHour.displayType = DataVerticalSpeedMax.type;
export class DataVerticalSpeedMaxFeetPerHour extends DataVerticalSpeedFeetPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMaxFeetPerHour.type = 'Maximum vertical speed in feet per hour';
DataVerticalSpeedMaxFeetPerHour.displayType = DataVerticalSpeedMax.type;
export class DataVerticalSpeedMaxKilometerPerHour extends DataVerticalSpeedKilometerPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMaxKilometerPerHour.type = 'Maximum vertical speed in kilometers per hour';
DataVerticalSpeedMaxKilometerPerHour.displayType = DataVerticalSpeedMax.type;
export class DataVerticalSpeedMaxMilesPerHour extends DataVerticalSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedMaxMilesPerHour.type = 'Maximum vertical speed in miles per hour';
DataVerticalSpeedMaxMilesPerHour.displayType = DataVerticalSpeedMax.type;
