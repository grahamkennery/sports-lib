import { EventLibError } from './event-lib.error';
export class EmptyEventLibError extends EventLibError {
    constructor(message = 'No activities found') {
        super(message, null);
        this.code = EmptyEventLibError.CODE;
        Object.setPrototypeOf(this, EmptyEventLibError.prototype); // Set the prototype explicitly.
    }
}
EmptyEventLibError.CODE = 'EVENT_EMPTY_ERROR';
