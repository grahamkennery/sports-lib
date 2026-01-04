import { DataNumber } from './data.number';
import { convertSpeedToSpeedInFeetPerHour, convertSpeedToSpeedInFeetPerMinute, convertSpeedToSpeedInFeetPerSecond, convertSpeedToSpeedInKilometersPerHour, convertSpeedToSpeedInMetersPerHour, convertSpeedToSpeedInMetersPerMinute, convertSpeedToSpeedInMilesPerHour } from '../events/utilities/helpers';
export class DataVerticalSpeed extends DataNumber {
    getValue(formatForDataType) {
        switch (formatForDataType) {
            case DataVerticalSpeedKilometerPerHour.type:
                return convertSpeedToSpeedInKilometersPerHour(this.value);
            case DataVerticalSpeedMilesPerHour.type:
                return convertSpeedToSpeedInMilesPerHour(this.value);
            case DataVerticalSpeedFeetPerSecond.type:
                return convertSpeedToSpeedInFeetPerSecond(this.value);
            case DataVerticalSpeedMetersPerMinute.type:
                return convertSpeedToSpeedInMetersPerMinute(this.value);
            case DataVerticalSpeedFeetPerMinute.type:
                return convertSpeedToSpeedInFeetPerMinute(this.value);
            case DataVerticalSpeedFeetPerHour.type:
                return convertSpeedToSpeedInFeetPerHour(this.value);
            case DataVerticalSpeedMetersPerHour.type:
                return convertSpeedToSpeedInMetersPerHour(this.value);
            default:
                return super.getValue(formatForDataType);
        }
    }
    getDisplayValue() {
        return this.getValue().toFixed(2);
    }
}
DataVerticalSpeed.type = 'Vertical Speed';
DataVerticalSpeed.unit = 'm/s';
export class DataVerticalSpeedFeetPerSecond extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataVerticalSpeedFeetPerSecond.type = 'Vertical speed in feet per second';
DataVerticalSpeedFeetPerSecond.displayType = DataVerticalSpeed.type;
DataVerticalSpeedFeetPerSecond.unit = 'ft/s';
export class DataVerticalSpeedMetersPerMinute extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
    getDisplayValue() {
        return this.getValue().toFixed(1);
    }
}
DataVerticalSpeedMetersPerMinute.type = 'Vertical speed in meters per minute';
DataVerticalSpeedMetersPerMinute.displayType = DataVerticalSpeed.type;
DataVerticalSpeedMetersPerMinute.unit = 'm/min';
export class DataVerticalSpeedFeetPerMinute extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
    getDisplayValue() {
        return this.getValue().toFixed(1);
    }
}
DataVerticalSpeedFeetPerMinute.type = 'Vertical speed in feet per minute';
DataVerticalSpeedFeetPerMinute.displayType = DataVerticalSpeed.type;
DataVerticalSpeedFeetPerMinute.unit = 'ft/min';
export class DataVerticalSpeedMetersPerHour extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
    getDisplayValue() {
        return this.getValue().toFixed(0);
    }
}
DataVerticalSpeedMetersPerHour.type = 'Vertical speed in meters per hour';
DataVerticalSpeedMetersPerHour.displayType = DataVerticalSpeed.type;
DataVerticalSpeedMetersPerHour.unit = 'm/h';
export class DataVerticalSpeedFeetPerHour extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
    getDisplayValue() {
        return this.getValue().toFixed(0);
    }
}
DataVerticalSpeedFeetPerHour.type = 'Vertical speed in feet per hour';
DataVerticalSpeedFeetPerHour.displayType = DataVerticalSpeed.type;
DataVerticalSpeedFeetPerHour.unit = 'ft/h';
export class DataVerticalSpeedKilometerPerHour extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
    getDisplayValue() {
        return this.getValue().toFixed(2);
    }
}
DataVerticalSpeedKilometerPerHour.type = 'Vertical speed in kilometers per hour';
DataVerticalSpeedKilometerPerHour.displayType = DataVerticalSpeed.type;
DataVerticalSpeedKilometerPerHour.unit = 'km/h';
export class DataVerticalSpeedMilesPerHour extends DataVerticalSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
    getDisplayValue() {
        return this.getValue().toFixed(2);
    }
}
DataVerticalSpeedMilesPerHour.type = 'Vertical speed in miles per hour';
DataVerticalSpeedMilesPerHour.displayType = DataVerticalSpeed.type;
DataVerticalSpeedMilesPerHour.unit = 'mph';
