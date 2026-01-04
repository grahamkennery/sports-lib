import { DataGradeAdjustedPace, DataGradeAdjustedPaceMinutesPerMile } from './data.grade-adjusted-pace';
export class DataGradeAdjustedPaceMax extends DataGradeAdjustedPace {
}
DataGradeAdjustedPaceMax.type = 'Maximum Grade Adjusted Pace';
export class DataGradeAdjustedPaceMaxMinutesPerMile extends DataGradeAdjustedPaceMinutesPerMile {
    getValue(formatForDataType) {
        if (formatForDataType) {
            throw new Error(`Not implemented`);
        }
        return super.getValue(formatForDataType);
    }
}
DataGradeAdjustedPaceMaxMinutesPerMile.type = 'Maximum Grade Adjusted Pace in minutes per mile';
DataGradeAdjustedPaceMaxMinutesPerMile.displayType = DataGradeAdjustedPaceMax.type;
DataGradeAdjustedPaceMaxMinutesPerMile.unit = 'min/m';
