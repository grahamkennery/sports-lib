import { DataGradeAdjustedPace, DataGradeAdjustedPaceMinutesPerMile } from './data.grade-adjusted-pace';
export class DataGradeAdjustedPaceMin extends DataGradeAdjustedPace {
}
DataGradeAdjustedPaceMin.type = 'Minimum Grade Adjusted Pace';
export class DataGradeAdjustedPaceMinMinutesPerMile extends DataGradeAdjustedPaceMinutesPerMile {
    getValue(formatForDataType) {
        if (formatForDataType) {
            throw new Error(`Not implemented`);
        }
        return super.getValue(formatForDataType);
    }
}
DataGradeAdjustedPaceMinMinutesPerMile.type = 'Minimum Grade Adjusted pace in minutes per mile';
DataGradeAdjustedPaceMinMinutesPerMile.displayType = DataGradeAdjustedPaceMin.type;
DataGradeAdjustedPaceMinMinutesPerMile.unit = 'min/m';
