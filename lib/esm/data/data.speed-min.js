import { DataSpeed, DataSpeedFeetPerMinute, DataSpeedFeetPerSecond, DataSpeedKilometersPerHour, DataSpeedKnots, DataSpeedMetersPerMinute, DataSpeedMilesPerHour } from './data.speed';
export class DataSpeedMin extends DataSpeed {
}
DataSpeedMin.type = 'Minimum Speed';
export class DataSpeedMinKilometersPerHour extends DataSpeedKilometersPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMinKilometersPerHour.type = 'Minimum speed in kilometers per hour';
DataSpeedMinKilometersPerHour.displayType = DataSpeedMin.type;
export class DataSpeedMinMilesPerHour extends DataSpeedMilesPerHour {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMinMilesPerHour.type = 'Minimum speed in miles per hour';
DataSpeedMinMilesPerHour.displayType = DataSpeedMin.type;
export class DataSpeedMinFeetPerSecond extends DataSpeedFeetPerSecond {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMinFeetPerSecond.type = 'Minimum speed in feet per second';
DataSpeedMinFeetPerSecond.displayType = DataSpeedMin.type;
export class DataSpeedMinMetersPerMinute extends DataSpeedMetersPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMinMetersPerMinute.type = 'Minimum speed in meters per minute';
DataSpeedMinMetersPerMinute.displayType = DataSpeedMin.type;
export class DataSpeedMinFeetPerMinute extends DataSpeedFeetPerMinute {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMinFeetPerMinute.type = 'Minimum speed in feet per minute';
DataSpeedMinFeetPerMinute.displayType = DataSpeedMin.type;
export class DataSpeedMinKnots extends DataSpeedKnots {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMinKnots.type = 'Minimum speed in knot';
DataSpeedMinKnots.displayType = DataSpeedMin.type;
