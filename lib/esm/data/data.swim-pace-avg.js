import { DataSwimPace, DataSwimPaceMinutesPer100Yard } from './data.swim-pace';
export class DataSwimPaceAvg extends DataSwimPace {
}
DataSwimPaceAvg.type = 'Average Swim Pace';
export class DataSwimPaceAvgMinutesPer100Yard extends DataSwimPaceMinutesPer100Yard {
}
DataSwimPaceAvgMinutesPer100Yard.type = 'Average swim pace in minutes per 100 yard';
DataSwimPaceAvgMinutesPer100Yard.displayType = DataSwimPaceAvg.type;
