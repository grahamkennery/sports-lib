import { Stream } from './stream';
export class IBIStream extends Stream {
    constructor(data) {
        super('IBI');
        if (data) {
            this.data = data;
        }
    }
    getStreamDataByTime(startDate, filterNull = false) {
        let time = 0;
        return this.data.reduce((accu, dataItem, index) => {
            time += dataItem;
            if (filterNull && dataItem === null) {
                return accu;
            }
            accu.push({
                time: startDate.getTime() + time,
                value: dataItem
            });
            return accu;
        }, []);
    }
    //
    getStreamDataByDuration(offset, filterNull = false) {
        // let data = (new IBIData(<number[]>this.data))
        //   .lowLimitBPMFilter()
        //   .lowPassFilter()
        //   .highLimitBPMFilter().getAsArray();
        const data = this.data;
        let time = offset || 0;
        return data.reduce((accu, dataItem, index) => {
            time += dataItem;
            if (filterNull && dataItem === null) {
                return accu;
            }
            accu.push({
                time: time,
                value: dataItem
            });
            return accu;
        }, []);
    }
}
