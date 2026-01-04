"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsingEventLibError = void 0;
const event_lib_error_1 = require("./event-lib.error");
class ParsingEventLibError extends event_lib_error_1.EventLibError {
    constructor(message) {
        super(message, null);
        this.code = ParsingEventLibError.CODE;
        Object.setPrototypeOf(this, ParsingEventLibError.prototype); // Set the prototype explicitly.
    }
}
exports.ParsingEventLibError = ParsingEventLibError;
ParsingEventLibError.CODE = 'PARSING_LIB_ERROR';
