import { EventInterface } from '../../../event.interface';
import { ActivityParsingOptions } from '../../../../activities/activity-parsing-options';
export declare class EventImporterGPX {
    static getFromString(gpx: string, domParser?: any, options?: ActivityParsingOptions, name?: string): Promise<EventInterface>;
}
