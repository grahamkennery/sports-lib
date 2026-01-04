import { DataGradeAdjustedPace, DataGradeAdjustedPaceMinutesPerMile } from './data.grade-adjusted-pace';
export class DataGradeAdjustedPaceAvg extends DataGradeAdjustedPace {
}
DataGradeAdjustedPaceAvg.type = 'Average Grade Adjusted Pace';
export class DataGradeAdjustedPaceAvgMinutesPerMile extends DataGradeAdjustedPaceMinutesPerMile {
    getValue(formatForDataType) {
        if (formatForDataType) {
            throw new Error(`Not implemented`);
        }
        return super.getValue(formatForDataType);
    }
}
DataGradeAdjustedPaceAvgMinutesPerMile.type = 'Average Grade Adjusted Pace in minutes per mile';
DataGradeAdjustedPaceAvgMinutesPerMile.displayType = DataGradeAdjustedPaceAvg.type;
DataGradeAdjustedPaceAvgMinutesPerMile.unit = 'min/m';
