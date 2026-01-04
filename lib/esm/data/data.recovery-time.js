import { DataDuration } from './data.duration';
export class DataRecoveryTime extends DataDuration {
    getDisplayValue(showDays = true, showSeconds = false) {
        return super.getDisplayValue(showDays, showSeconds);
    }
}
DataRecoveryTime.type = 'Recovery Time';
