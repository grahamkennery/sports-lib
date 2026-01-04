import { EventLibError } from './event-lib.error';
export class ParsingEventLibError extends EventLibError {
    constructor(message) {
        super(message, null);
        this.code = ParsingEventLibError.CODE;
        Object.setPrototypeOf(this, ParsingEventLibError.prototype); // Set the prototype explicitly.
    }
}
ParsingEventLibError.CODE = 'PARSING_LIB_ERROR';
