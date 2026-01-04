import { DataEvent } from './data.event';
import { RiderPosition } from './data.cycling-position';
export declare class DataRiderPositionChangeEvent extends DataEvent {
    static type: string;
    positionChange: RiderPosition;
    constructor(index: number, positionChange: RiderPosition);
}
