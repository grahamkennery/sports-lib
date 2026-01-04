"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventLibError = void 0;
const lib_error_1 = require("./lib.error");
class EventLibError extends lib_error_1.LibError {
    constructor(message, event) {
        super(message);
        Object.setPrototypeOf(this, EventLibError.prototype); // Set the prototype explicitly.
        this.event = event;
    }
}
exports.EventLibError = EventLibError;
