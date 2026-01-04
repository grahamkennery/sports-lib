import { convertPaceToPaceInMinutesPerMile, convertSpeedToPace, convertSpeedToSpeedInFeetPerMinute, convertSpeedToSpeedInFeetPerSecond, convertSpeedToSpeedInKilometersPerHour, convertSpeedToSpeedInKnots, convertSpeedToSpeedInMetersPerMinute, convertSpeedToSpeedInMilesPerHour } from '../events/utilities/helpers';
import { DataGradeAdjustedPace, DataGradeAdjustedPaceMinutesPerMile } from './data.grade-adjusted-pace';
import { DataSpeed } from './data.speed';
export class DataGradeAdjustedSpeed extends DataSpeed {
    getValue(formatForDataType) {
        switch (formatForDataType) {
            // Speed cases conversions
            case DataGradeAdjustedSpeedKilometersPerHour.type:
                return convertSpeedToSpeedInKilometersPerHour(this.value);
            case DataGradeAdjustedSpeedMilesPerHour.type:
                return convertSpeedToSpeedInMilesPerHour(this.value);
            case DataGradeAdjustedSpeedFeetPerSecond.type:
                return convertSpeedToSpeedInFeetPerSecond(this.value);
            case DataGradeAdjustedSpeedMetersPerMinute.type:
                return convertSpeedToSpeedInMetersPerMinute(this.value);
            case DataGradeAdjustedSpeedFeetPerMinute.type:
                return convertSpeedToSpeedInFeetPerMinute(this.value);
            case DataGradeAdjustedSpeedKnots.type:
                return convertSpeedToSpeedInKnots(this.value);
            // Pace
            case DataGradeAdjustedPace.type:
                return convertSpeedToPace(this.value);
            case DataGradeAdjustedPaceMinutesPerMile.type:
                return convertPaceToPaceInMinutesPerMile(convertSpeedToPace(this.value));
            default:
                return super.getValue(formatForDataType);
        }
    }
}
DataGradeAdjustedSpeed.type = 'Grade Adjusted Speed';
export class DataGradeAdjustedSpeedKilometersPerHour extends DataGradeAdjustedSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedKilometersPerHour.type = 'Grade Adjusted Speed in kilometers per hour';
DataGradeAdjustedSpeedKilometersPerHour.displayType = DataGradeAdjustedSpeed.type;
DataGradeAdjustedSpeedKilometersPerHour.unit = 'km/h';
export class DataGradeAdjustedSpeedMilesPerHour extends DataGradeAdjustedSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMilesPerHour.type = 'Grade Adjusted Speed in miles per hour';
DataGradeAdjustedSpeedMilesPerHour.displayType = DataGradeAdjustedSpeed.type;
DataGradeAdjustedSpeedMilesPerHour.unit = 'mph';
export class DataGradeAdjustedSpeedFeetPerSecond extends DataGradeAdjustedSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedFeetPerSecond.type = 'Grade Adjusted Speed in feet per second';
DataGradeAdjustedSpeedFeetPerSecond.displayType = DataGradeAdjustedSpeed.type;
DataGradeAdjustedSpeedFeetPerSecond.unit = 'ft/s';
export class DataGradeAdjustedSpeedMetersPerMinute extends DataGradeAdjustedSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedMetersPerMinute.type = 'Grade Adjusted Speed in meters per minute';
DataGradeAdjustedSpeedMetersPerMinute.displayType = DataGradeAdjustedSpeed.type;
DataGradeAdjustedSpeedMetersPerMinute.unit = 'm/min';
export class DataGradeAdjustedSpeedFeetPerMinute extends DataGradeAdjustedSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedFeetPerMinute.type = 'Grade Adjusted Speed in feet per minute';
DataGradeAdjustedSpeedFeetPerMinute.displayType = DataGradeAdjustedSpeed.type;
DataGradeAdjustedSpeedFeetPerMinute.unit = 'ft/min';
export class DataGradeAdjustedSpeedKnots extends DataGradeAdjustedSpeed {
    getDisplayType() {
        return super.getDisplayType();
    }
}
DataGradeAdjustedSpeedKnots.type = 'Grade Adjusted Speed in knots';
DataGradeAdjustedSpeedKnots.displayType = DataGradeAdjustedSpeed.type;
DataGradeAdjustedSpeedKnots.unit = 'kn';
