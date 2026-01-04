"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyEventLibError = void 0;
const event_lib_error_1 = require("./event-lib.error");
class EmptyEventLibError extends event_lib_error_1.EventLibError {
    constructor(message = 'No activities found') {
        super(message, null);
        this.code = EmptyEventLibError.CODE;
        Object.setPrototypeOf(this, EmptyEventLibError.prototype); // Set the prototype explicitly.
    }
}
exports.EmptyEventLibError = EmptyEventLibError;
EmptyEventLibError.CODE = 'EVENT_EMPTY_ERROR';
