import { EventInterface } from '../../event.interface';
import { EventExporter } from './exporter.interface';
import { EventJSONInterface } from '../../event.json.interface';
export declare class EventExporterJSON implements EventExporter {
    fileType: string;
    fileExtension: string;
    static export(event: EventInterface): EventJSONInterface;
    static getAsString(event: EventInterface): Promise<string>;
    export(event: EventInterface): EventJSONInterface;
    getAsString(event: EventInterface): Promise<string>;
}
