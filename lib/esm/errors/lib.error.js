export class LibError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, LibError.prototype); // Set the prototype explicitly.
    }
}
