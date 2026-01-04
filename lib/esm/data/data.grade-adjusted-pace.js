import { convertPaceToPaceInMinutesPerMile } from '../events/utilities/helpers';
import { DataPace } from './data.pace';
export class DataGradeAdjustedPace extends DataPace {
    getValue(formatForDataType) {
        switch (formatForDataType) {
            case DataGradeAdjustedPaceMinutesPerMile.type:
                return convertPaceToPaceInMinutesPerMile(this.value);
            default:
                return super.getValue(formatForDataType);
        }
    }
}
DataGradeAdjustedPace.type = 'Grade Adjusted Pace';
DataGradeAdjustedPace.unit = 'min/km';
export class DataGradeAdjustedPaceMinutesPerMile extends DataGradeAdjustedPace {
    getValue(formatForDataType) {
        if (formatForDataType) {
            throw new Error(`Not implemented`);
        }
        return super.getValue(formatForDataType);
    }
}
DataGradeAdjustedPaceMinutesPerMile.type = 'Grade Adjusted Pace in minutes per mile';
DataGradeAdjustedPaceMinutesPerMile.displayType = DataGradeAdjustedPace.type;
DataGradeAdjustedPaceMinutesPerMile.unit = 'min/m';
