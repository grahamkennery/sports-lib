import { convertSwimPaceToSwimPacePer100Yard } from '../events/utilities/helpers';
import { DataPace } from './data.pace';
export class DataSwimPace extends DataPace {
    getValue(formatForDataType) {
        switch (formatForDataType) {
            case DataSwimPaceMinutesPer100Yard.type:
                return convertSwimPaceToSwimPacePer100Yard(this.value);
            default:
                return super.getValue(formatForDataType);
        }
    }
}
DataSwimPace.type = 'Swim Pace';
DataSwimPace.unit = 'min/100m';
export class DataSwimPaceMinutesPer100Yard extends DataSwimPace {
}
DataSwimPaceMinutesPer100Yard.type = 'Swim Pace in minutes per 100 yard';
DataSwimPaceMinutesPer100Yard.displayType = DataSwimPace.type;
DataSwimPaceMinutesPer100Yard.unit = 'min/100yrd';
