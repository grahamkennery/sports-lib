"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRecoveryTime = void 0;
const data_duration_1 = require("./data.duration");
class DataRecoveryTime extends data_duration_1.DataDuration {
    getDisplayValue(showDays = true, showSeconds = false) {
        return super.getDisplayValue(showDays, showSeconds);
    }
}
exports.DataRecoveryTime = DataRecoveryTime;
DataRecoveryTime.type = 'Recovery Time';
