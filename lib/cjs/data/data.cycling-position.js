"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCyclingPosition = exports.RiderPosition = void 0;
const data_cycling_dynamics_1 = require("./data.cycling-dynamics");
/**
 * Rider position "events" as described in FIT SDK "typedef FIT_ENUM FIT_RIDER_POSITION_TYPE;":
 */
var RiderPosition;
(function (RiderPosition) {
    RiderPosition[RiderPosition["SEATED"] = 0] = "SEATED";
    RiderPosition[RiderPosition["STANDING"] = 1] = "STANDING";
    RiderPosition[RiderPosition["TRANSITION_TO_SEATED"] = 2] = "TRANSITION_TO_SEATED";
    RiderPosition[RiderPosition["TRANSITION_TO_STANDING"] = 3] = "TRANSITION_TO_STANDING";
})(RiderPosition = exports.RiderPosition || (exports.RiderPosition = {}));
class DataCyclingPosition extends data_cycling_dynamics_1.DataCyclingDynamics {
}
exports.DataCyclingPosition = DataCyclingPosition;
// The below stats could be implemented based on RiderPosition events
/*
export class DataCyclingAvgStandingPower extends DataCyclingPosition {
  static type = 'Cycling Avg Standing Power';
  static unit = 'watt';
}

export class DataCyclingMaxStandingPower extends DataCyclingPosition {
  static type = 'Cycling Max Standing Power';
  static unit = 'watt';
}

// field: max_power_position
export class DataCyclingMaxSeatedPower extends DataCyclingPosition {
  static type = 'Cycling Max Seated Power';
  static unit = 'watt';
}

// field: avg_power_position
export class DataCyclingAvgSeatedPower extends DataCyclingPosition {
  static type = 'Cycling Avg Seated Power';
  static unit = 'watt';
}
*/
