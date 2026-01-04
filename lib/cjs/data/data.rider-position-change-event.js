"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRiderPositionChangeEvent = void 0;
const data_event_1 = require("./data.event");
class DataRiderPositionChangeEvent extends data_event_1.DataEvent {
    constructor(index, positionChange) {
        super(index);
        this.positionChange = positionChange;
    }
}
exports.DataRiderPositionChangeEvent = DataRiderPositionChangeEvent;
DataRiderPositionChangeEvent.type = 'Rider Position Change Event';
