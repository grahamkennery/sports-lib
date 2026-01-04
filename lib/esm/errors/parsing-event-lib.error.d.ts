import { EventLibError } from './event-lib.error';
export declare class ParsingEventLibError extends EventLibError {
    static readonly CODE: string;
    readonly code: string;
    constructor(message: string);
}
