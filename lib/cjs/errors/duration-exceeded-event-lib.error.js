"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DurationExceededEventLibError = void 0;
const event_lib_error_1 = require("./event-lib.error");
class DurationExceededEventLibError extends event_lib_error_1.EventLibError {
    constructor(message) {
        super(message, null);
        this.code = DurationExceededEventLibError.CODE;
        Object.setPrototypeOf(this, DurationExceededEventLibError.prototype); // Set the prototype explicitly.
    }
}
exports.DurationExceededEventLibError = DurationExceededEventLibError;
DurationExceededEventLibError.CODE = 'DURATION_EXCEEDED_EVENT_ERROR';
