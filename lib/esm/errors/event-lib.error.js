import { LibError } from './lib.error';
export class EventLibError extends LibError {
    constructor(message, event) {
        super(message);
        Object.setPrototypeOf(this, EventLibError.prototype); // Set the prototype explicitly.
        this.event = event;
    }
}
