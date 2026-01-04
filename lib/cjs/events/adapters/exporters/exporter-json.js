"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventExporterJSON = void 0;
class EventExporterJSON {
    constructor() {
        this.fileType = 'application/json';
        this.fileExtension = 'json';
    }
    static export(event) {
        return new EventExporterJSON().export(event);
    }
    static getAsString(event) {
        return new EventExporterJSON().getAsString(event);
    }
    export(event) {
        return event.toJSON();
    }
    getAsString(event) {
        return new Promise((resolve, reject) => {
            resolve(JSON.stringify(this.export));
        });
    }
}
exports.EventExporterJSON = EventExporterJSON;
