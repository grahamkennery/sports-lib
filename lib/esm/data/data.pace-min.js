import { DataPace, DataPaceMinutesPerMile } from './data.pace';
export class DataPaceMin extends DataPace {
}
DataPaceMin.type = 'Minimum Pace';
export class DataPaceMinMinutesPerMile extends DataPaceMinutesPerMile {
}
DataPaceMinMinutesPerMile.type = 'Minimum pace in minutes per mile';
DataPaceMinMinutesPerMile.displayType = DataPaceMin.type;
