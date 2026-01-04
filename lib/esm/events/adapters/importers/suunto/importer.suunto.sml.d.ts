import { EventInterface } from '../../../event.interface';
import { ActivityParsingOptions } from '../../../../activities/activity-parsing-options';
export declare class EventImporterSuuntoSML {
    static getFromXML(contents: string, options?: ActivityParsingOptions, name?: string): Promise<EventInterface>;
    static getFromJSONString(jsonString: string, options?: ActivityParsingOptions): Promise<EventInterface>;
}
