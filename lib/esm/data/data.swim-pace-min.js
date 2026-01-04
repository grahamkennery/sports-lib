import { DataSwimPace, DataSwimPaceMinutesPer100Yard } from './data.swim-pace';
export class DataSwimPaceMin extends DataSwimPace {
}
DataSwimPaceMin.type = 'Minimum Swim Pace';
export class DataSwimPaceMinMinutesPer100Yard extends DataSwimPaceMinutesPer100Yard {
}
DataSwimPaceMinMinutesPer100Yard.type = 'Minimum swim pace in minutes per 100 yard';
DataSwimPaceMinMinutesPer100Yard.displayType = DataSwimPaceMin.type;
