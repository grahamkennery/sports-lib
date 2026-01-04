import { EventLibError } from './event-lib.error';
export class DurationExceededEventLibError extends EventLibError {
    constructor(message) {
        super(message, null);
        this.code = DurationExceededEventLibError.CODE;
        Object.setPrototypeOf(this, DurationExceededEventLibError.prototype); // Set the prototype explicitly.
    }
}
DurationExceededEventLibError.CODE = 'DURATION_EXCEEDED_EVENT_ERROR';
