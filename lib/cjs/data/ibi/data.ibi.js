"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBIData = void 0;
const data_ibi_filters_1 = require("./data.ibi.filters");
class IBIData {
    constructor(ibiDataArray) {
        /**
         * Key is time time since start of the array
         * value is the ibi
         * @type {Map<number, number>}
         */
        this.ibiDataMap = new Map();
        if (ibiDataArray) {
            this.parseIBIArray(ibiDataArray);
        }
    }
    /**
     * Parses an IBI data array
     * eg: [600, 600, 100] becomes a map of {600:600, 1200: 600, 1300:100}
     * @param {Array<number>} ibiArray
     */
    parseIBIArray(ibiArray) {
        ibiArray.reduce((totalTime, ibiData) => {
            if (ibiData > 0) {
                totalTime += ibiData;
                this.ibiDataMap.set(totalTime, ibiData);
            }
            return totalTime;
        }, 0);
    }
    /**
     * Sets the ibi for the specific time
     * @param time
     * @param ibi
     */
    setIBI(time, ibi) {
        this.ibiDataMap.set(time, ibi);
    }
    /**
     * Gets the IBI data map
     * @return {Map<number, number>}
     */
    getIBIDataMap() {
        return this.ibiDataMap;
    }
    /**
     * Gets the IBI data map but uses BPM units instead of IBI
     * @return {Map<number, number>}
     */
    getAsBPM() {
        const hrDataMap = new Map();
        this.ibiDataMap.forEach((value, key, map) => {
            hrDataMap.set(key, Math.round(60000 / value));
        });
        return hrDataMap;
    }
    getAsArray() {
        const ibi = [];
        this.ibiDataMap.forEach((value, key, map) => {
            ibi.push(value);
        });
        return ibi;
    }
    /**
     * Low Limit filter. Removes all hr values above limit
     * @param {number} bpmLowLimit in BPM
     */
    lowLimitBPMFilter(bpmLowLimit) {
        data_ibi_filters_1.IBIFilters.limitFilter(this, 60000 / (bpmLowLimit || 40), false); // Lower bpm higher IBI limit!
        return this;
    }
    /**
     * High limit filter. Removes all hr values above limit
     * @param bpmHighLimit
     */
    highLimitBPMFilter(bpmHighLimit) {
        data_ibi_filters_1.IBIFilters.limitFilter(this, 60000 / (bpmHighLimit || 220), true); // Higher bpm lower IBI limit!
        return this;
    }
    /**
     *  Low pass filter
     * @param windowSize
     */
    lowPassFilter(windowSize) {
        data_ibi_filters_1.IBIFilters.lowPassFilter(this, windowSize);
        return this;
    }
    /**
     * Moving median filter
     * @param {number} windowSize
     * @return {this}
     */
    movingMedianFilter(windowSize) {
        data_ibi_filters_1.IBIFilters.movingMedianFilter(this, windowSize);
        return this;
    }
    toJSON() {
        return Array.from(this.ibiDataMap.values());
    }
}
exports.IBIData = IBIData;
IBIData.type = 'IBI'; // @todo hcakc fix
