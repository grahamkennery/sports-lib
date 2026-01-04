import { DataEvent } from './data.event';
export class DataRiderPositionChangeEvent extends DataEvent {
    constructor(index, positionChange) {
        super(index);
        this.positionChange = positionChange;
    }
}
DataRiderPositionChangeEvent.type = 'Rider Position Change Event';
