import { LapInterface } from './lap.interface';
import { DurationClassAbstract } from '../duration/duration.class.abstract';
import { LapTypes } from './lap.types';
import { LapJSONInterface } from './lap.json.interface';
import { ActivityInterface } from '../activities/activity.interface';
export declare class Lap extends DurationClassAbstract implements LapInterface {
    lapId: number;
    type: LapTypes;
    constructor(startDate: Date, endDate: Date, lapId: number, type: LapTypes);
    getStartIndex(activity: ActivityInterface): number;
    getEndIndex(activity: ActivityInterface): number;
    toJSON(activity?: ActivityInterface): LapJSONInterface;
}
