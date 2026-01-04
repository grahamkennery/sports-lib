"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibError = void 0;
class LibError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, LibError.prototype); // Set the prototype explicitly.
    }
}
exports.LibError = LibError;
