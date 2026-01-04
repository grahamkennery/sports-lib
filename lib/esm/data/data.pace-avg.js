import { DataPace, DataPaceMinutesPerMile } from './data.pace';
export class DataPaceAvg extends DataPace {
}
DataPaceAvg.type = 'Average Pace';
export class DataPaceAvgMinutesPerMile extends DataPaceMinutesPerMile {
}
DataPaceAvgMinutesPerMile.type = 'Average pace in minutes per mile';
DataPaceAvgMinutesPerMile.displayType = DataPaceAvg.type;
