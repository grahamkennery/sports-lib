"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDClass = void 0;
class IDClass {
    getID() {
        return this.id || null;
    }
    setID(id) {
        this.id = id;
        return this;
    }
}
exports.IDClass = IDClass;
