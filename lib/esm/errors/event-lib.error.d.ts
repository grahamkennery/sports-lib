import { LibError } from './lib.error';
import { EventInterface } from '../events/event.interface';
export declare abstract class EventLibError extends LibError {
    event: EventInterface | null;
    protected constructor(message: string, event: EventInterface | null);
}
