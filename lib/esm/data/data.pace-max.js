import { DataPace, DataPaceMinutesPerMile } from './data.pace';
export class DataPaceMax extends DataPace {
}
DataPaceMax.type = 'Maximum Pace';
export class DataPaceMaxMinutesPerMile extends DataPaceMinutesPerMile {
}
DataPaceMaxMinutesPerMile.type = 'Maximum pace in minutes per mile';
DataPaceMaxMinutesPerMile.displayType = DataPaceMax.type;
