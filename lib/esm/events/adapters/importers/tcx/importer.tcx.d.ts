import { EventInterface } from '../../../event.interface';
import { ActivityParsingOptions } from '../../../../activities/activity-parsing-options';
export declare class EventImporterTCX {
    /**
     * Returns active or rest state of a lap. This is pretty use-full on swim pool activities which are decomposed of many active or rest laps
     */
    static isActiveLap(lapElement: HTMLElement): boolean;
    static getFromXML(xml: Document, options?: ActivityParsingOptions, name?: string): Promise<EventInterface>;
    private static updateActivityTypeCaseIndoor;
    /**
     * Extract activity stats from laps retrieved
     */
    private static extractAndAssignActivityStatsFromLaps;
    /**
     * Extract activity stats provided by the root tcx file
     */
    private static extractAndAssignActivityStatsFromTcxRootDef;
    private static getCreator;
    private static getLaps;
}
