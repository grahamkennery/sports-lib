import { DataSpeed, DataSpeedFeetPerMinute, DataSpeedFeetPerSecond, DataSpeedKilometersPerHour, DataSpeedKnots, DataSpeedMetersPerMinute, DataSpeedMilesPerHour } from './data.speed';
export class DataSpeedMax extends DataSpeed {
}
DataSpeedMax.type = 'Maximum Speed';
export class DataSpeedMaxKilometersPerHour extends DataSpeedKilometersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMaxKilometersPerHour.type = 'Maximum speed in kilometers per hour';
DataSpeedMaxKilometersPerHour.displayType = DataSpeedMax.type;
export class DataSpeedMaxMilesPerHour extends DataSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMaxMilesPerHour.type = 'Maximum speed in miles per hour';
DataSpeedMaxMilesPerHour.displayType = DataSpeedMax.type;
export class DataSpeedMaxFeetPerSecond extends DataSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMaxFeetPerSecond.type = 'Maximum speed in feet per second';
DataSpeedMaxFeetPerSecond.displayType = DataSpeedMax.type;
export class DataSpeedMaxMetersPerMinute extends DataSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMaxMetersPerMinute.type = 'Maximum speed in meters per minute';
DataSpeedMaxMetersPerMinute.displayType = DataSpeedMax.type;
export class DataSpeedMaxFeetPerMinute extends DataSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMaxFeetPerMinute.type = 'Maximum speed in feet per minute';
DataSpeedMaxFeetPerMinute.displayType = DataSpeedMax.type;
export class DataSpeedMaxKnots extends DataSpeedKnots {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMaxKnots.type = 'Maximum speed in knots';
DataSpeedMaxKnots.displayType = DataSpeedMax.type;
