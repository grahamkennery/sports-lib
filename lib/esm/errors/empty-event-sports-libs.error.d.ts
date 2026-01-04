import { EventLibError } from './event-lib.error';
export declare class EmptyEventLibError extends EventLibError {
    static readonly CODE: string;
    readonly code: string;
    constructor(message?: string);
}
