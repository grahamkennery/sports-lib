import { DataSwimPace, DataSwimPaceMinutesPer100Yard } from './data.swim-pace';
export class DataSwimPaceMax extends DataSwimPace {
}
DataSwimPaceMax.type = 'Maximum Swim Pace';
export class DataSwimPaceMaxMinutesPer100Yard extends DataSwimPaceMinutesPer100Yard {
}
DataSwimPaceMaxMinutesPer100Yard.type = 'Maximum swim pace in minutes per 100 yard';
DataSwimPaceMaxMinutesPer100Yard.displayType = DataSwimPaceMax.type;
