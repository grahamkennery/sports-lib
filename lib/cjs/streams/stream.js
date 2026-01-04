"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stream = void 0;
const helpers_1 = require("../events/utilities/helpers");
const data_store_1 = require("../data/data.store");
class Stream {
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
        return (!data_store_1.DynamicDataLoader.isUnitDerivedDataType(this.type) &&
            !data_store_1.DynamicDataLoader.isSpeedDerivedDataType(this.type) &&
            !data_store_1.DynamicDataLoader.isBlackListedStream(this.type));
    }
    toJSON() {
        return {
            type: this.type,
            data: this.data // Exporting does/ should not use a filter
        };
    }
    shouldDataBeFiltered(data, onlyNumeric, filterInfinity) {
        return (onlyNumeric && !(0, helpers_1.isNumber)(data)) || (filterInfinity && (data === Infinity || data === -Infinity));
    }
}
exports.Stream = Stream;
