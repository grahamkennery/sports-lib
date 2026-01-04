import { EventInterface } from '../../../event.interface';
import { CreatorInterface } from '../../../../creators/creator.interface';
import { ActivityParsingOptions } from '../../../../activities/activity-parsing-options';
export declare class EventImporterFIT {
    static getFromArrayBuffer(arrayBuffer: ArrayBuffer, options?: ActivityParsingOptions, name?: string): Promise<EventInterface>;
    /**
     * Tell if an activity is lengths based (e.g. Pool swimming activities)
     * @param sessionObject
     * @private
     */
    private static isLengthsBased;
    /**
     * Generate streams samples based on lengths on an activity
     * When based on lengths, an activity do not provides sample under records object
     * @param sessionObject
     * @private
     */
    private static generateSamplesFromLengths;
    private static getDeviceInfos;
    private static getLapFromSessionLapObject;
    private static getActivityFromSessionObject;
    /**
     * For some unknown reasons... the fit provided total_timer_time & total_elapsed_time could be inverted..
     * Just swap them if that's the case
     */
    private static swapTimesIfRequired;
    private static getActivityTypeFromSessionObject;
    private static getStatsFromObject;
    static getCreatorFromFitDataObject(fitDataObject: any): CreatorInterface;
}
export interface FITFileActivityEvent {
    event: string;
    timestamp: Date;
    event_type: 'start' | 'stop' | 'stop_all';
    data: number;
}
