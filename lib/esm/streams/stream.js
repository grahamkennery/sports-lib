import { isNumber } from '../events/utilities/helpers';
import { DynamicDataLoader } from '../data/data.store';
export class Stream {
    constructor(type, data) {
        this.data = [];
        this.filter = null;
        this.type = type;
        if (data) {
            this.data = data;
        }
    }
    clearFilters() {
        this.filter = null;
        return this;
    }
    useFilter(filter) {
        this.filter = filter;
        return this;
    }
    hasFilter() {
        return !!this.filter;
    }
    getData(onlyNumeric = false, filterInfinity = false) {
        const data = this.filter ? this.filter.filterData(this.data) : this.data;
        if (!onlyNumeric && !filterInfinity) {
            return data;
        }
        return data.filter(dataItem => !this.shouldDataBeFiltered(dataItem, onlyNumeric, filterInfinity));
    }
    setData(data) {
        this.data = data;
        return this;
    }
    getStreamDataByTime(startDate, onlyNumeric = false, filterInfinity = false) {
        return this.getData().reduce((accu, dataItem, index) => {
            if (this.shouldDataBeFiltered(dataItem, onlyNumeric, filterInfinity)) {
                return accu;
            }
            accu.push({
                time: startDate.getTime() + index * 1000,
                value: dataItem
            });
            return accu;
        }, []);
    }
    getStreamDataByDuration(offset = 0, onlyNumeric = false, filterInfinity = false) {
        return this.getData().reduce((accu, dataItem, index) => {
            if (this.shouldDataBeFiltered(dataItem, onlyNumeric, filterInfinity)) {
                return accu;
            }
            accu.push({
                time: index * 1000 + (offset || 0),
                value: dataItem
            });
            return accu;
        }, []);
    }
    isExportable() {
        return (!DynamicDataLoader.isUnitDerivedDataType(this.type) &&
            !DynamicDataLoader.isSpeedDerivedDataType(this.type) &&
            !DynamicDataLoader.isBlackListedStream(this.type));
    }
    toJSON() {
        return {
            type: this.type,
            data: this.data // Exporting does/ should not use a filter
        };
    }
    shouldDataBeFiltered(data, onlyNumeric, filterInfinity) {
        return (onlyNumeric && !isNumber(data)) || (filterInfinity && (data === Infinity || data === -Infinity));
    }
}
