import { EventInterface } from '../../../event.interface';
import { ActivityParsingOptions } from '../../../../activities/activity-parsing-options';
export declare class EventImporterSuuntoJSON {
    static getFromJSONString(jsonString: string, options?: ActivityParsingOptions): Promise<EventInterface>;
    private static hasFusedLocData;
    private static setIntensityZones;
    private static getHRSamplesFromIBIData;
    private static setStreamsForActivity;
    private static getSettings;
    private static getStats;
}
export declare const SuuntoSettingsMapper: {
    dataType: string;
    getValue: (settings: any) => any;
}[];
export declare const SuuntoIntensityZonesMapper: {
    dataType: string;
    sampleField: string;
    convertSampleValue: (value: number) => number;
}[];
export declare const SuuntoSampleMapper: {
    dataType: string;
    sampleField: string;
    convertSampleValue(value: number): number;
}[];
