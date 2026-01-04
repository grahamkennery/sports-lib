import { DataCyclingDynamics } from './data.cycling-dynamics';
/**
 * Rider position "events" as described in FIT SDK "typedef FIT_ENUM FIT_RIDER_POSITION_TYPE;":
 */
export declare enum RiderPosition {
    SEATED = 0,
    STANDING = 1,
    TRANSITION_TO_SEATED = 2,
    TRANSITION_TO_STANDING = 3
}
export declare abstract class DataCyclingPosition extends DataCyclingDynamics {
}
