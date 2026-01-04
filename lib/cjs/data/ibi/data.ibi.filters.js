"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBIFilters = void 0;
const CreateMedianFilter = require('moving-median');
const LowPassFilter = require('lowpassf');
/**
 * Collection of filters parsers and converters for IBI (R-R) data
 */
class IBIFilters {
    /**
     * A limit filter. It removes all values outside the limit
     * @param {IBIData} ibiData
     * @param {number} limit
     * @param {boolean} lowLimit
     */
    static limitFilter(ibiData, limit, lowLimit) {
        ibiData.getIBIDataMap().forEach((value, key, map) => {
            if (value < limit && lowLimit) {
                map.delete(key);
            }
            else if (value > limit && !lowLimit) {
                map.delete(key);
            }
        });
    }
    /**
     * Running median filter
     * @param {IBIData} ibiData
     * @param {number} windowSize
     */
    static movingMedianFilter(ibiData, windowSize) {
        windowSize = windowSize || 5;
        const medianFilter = CreateMedianFilter(windowSize);
        ibiData.getIBIDataMap().forEach((ibi, elapsedTime) => {
            ibiData.setIBI(elapsedTime, Math.round(medianFilter(ibi)));
        });
    }
    /**
     * Low pass filter
     * @param {IBIData} ibiData
     * @param {number} windowSize
     * @param linearWeight
     */
    static lowPassFilter(ibiData, windowSize, linearWeight) {
        const lowPassFilter = new LowPassFilter();
        windowSize = windowSize || 5;
        linearWeight = linearWeight ? lowPassFilter.LinearWeightAverage : lowPassFilter.SimpleAverage;
        lowPassFilter.setLogic(linearWeight);
        lowPassFilter.setSamplingRange(windowSize);
        ibiData.getIBIDataMap().forEach((ibi, elapsedTime) => {
            lowPassFilter.putValue(ibi);
            ibiData.setIBI(elapsedTime, Math.round(lowPassFilter.getFilteredValue()));
        });
    }
}
exports.IBIFilters = IBIFilters;
