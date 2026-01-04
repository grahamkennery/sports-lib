import { DataNumber } from './data.number';
import { convertPaceToPaceInMinutesPerMile, convertSpeedToPace, convertSpeedToSpeedInFeetPerMinute, convertSpeedToSpeedInFeetPerSecond, convertSpeedToSpeedInKilometersPerHour, convertSpeedToSpeedInKnots, convertSpeedToSpeedInMetersPerMinute, convertSpeedToSpeedInMilesPerHour, convertSpeedToSwimPace, convertSwimPaceToSwimPacePer100Yard } from '../events/utilities/helpers';
import { DataPace, DataPaceMinutesPerMile } from './data.pace';
import { DataSwimPace, DataSwimPaceMinutesPer100Yard } from './data.swim-pace';
export class DataSpeed extends DataNumber {
    getDisplayValue() {
        return this.getValue().toFixed(2);
    }
    getValue(formatForDataType) {
        switch (formatForDataType) {
            // Speed cases conversions
            case DataSpeedKilometersPerHour.type:
                return convertSpeedToSpeedInKilometersPerHour(this.value);
            case DataSpeedMilesPerHour.type:
                return convertSpeedToSpeedInMilesPerHour(this.value);
            case DataSpeedFeetPerSecond.type:
                return convertSpeedToSpeedInFeetPerSecond(this.value);
            case DataSpeedMetersPerMinute.type:
                return convertSpeedToSpeedInMetersPerMinute(this.value);
            case DataSpeedFeetPerMinute.type:
                return convertSpeedToSpeedInFeetPerMinute(this.value);
            case DataSpeedKnots.type:
                return convertSpeedToSpeedInKnots(this.value);
            // Pace
            case DataPace.type:
                return convertSpeedToPace(this.value);
            case DataPaceMinutesPerMile.type:
                return convertPaceToPaceInMinutesPerMile(convertSpeedToPace(this.value));
            // Swim pace
            case DataSwimPace.type:
                return convertSpeedToSwimPace(this.value);
            case DataSwimPaceMinutesPer100Yard.type:
                return convertSwimPaceToSwimPacePer100Yard(convertSpeedToSwimPace(this.value));
            default:
                return super.getValue(formatForDataType);
        }
    }
}
DataSpeed.type = 'Speed';
DataSpeed.unit = 'm/s';
export class DataSpeedKilometersPerHour extends DataSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedKilometersPerHour.type = 'Speed in kilometers per hour';
DataSpeedKilometersPerHour.displayType = DataSpeed.type;
DataSpeedKilometersPerHour.unit = 'km/h';
export class DataSpeedMilesPerHour extends DataSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMilesPerHour.type = 'Speed in miles per hour';
DataSpeedMilesPerHour.displayType = DataSpeed.type;
DataSpeedMilesPerHour.unit = 'mph';
export class DataSpeedFeetPerSecond extends DataSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedFeetPerSecond.type = 'Speed in feet per second';
DataSpeedFeetPerSecond.displayType = DataSpeed.type;
DataSpeedFeetPerSecond.unit = 'ft/s';
export class DataSpeedMetersPerMinute extends DataSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedMetersPerMinute.type = 'Speed in meters per minute';
DataSpeedMetersPerMinute.displayType = DataSpeed.type;
DataSpeedMetersPerMinute.unit = 'm/min';
export class DataSpeedFeetPerMinute extends DataSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedFeetPerMinute.type = 'Speed in feet per minute';
DataSpeedFeetPerMinute.displayType = DataSpeed.type;
DataSpeedFeetPerMinute.unit = 'ft/min';
export class DataSpeedKnots extends DataSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataSpeedKnots.type = 'Speed in knots';
DataSpeedKnots.displayType = DataSpeed.type;
DataSpeedKnots.unit = 'kn';
