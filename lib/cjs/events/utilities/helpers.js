"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardDeviation = exports.medianFilter = exports.meanWindowSmoothing = exports.mean = exports.fillMissingValuesLinear = exports.getSizeFormated = exports.getSize = exports.convertSwimPaceToSwimPacePer100Yard = exports.convertMetersToMiles = exports.convertPaceToPaceInMinutesPerMile = exports.convertSpeedToSpeedInKnots = exports.convertSpeedToSpeedInMetersPerHour = exports.convertSpeedToSpeedInFeetPerHour = exports.convertSpeedToSpeedInFeetPerMinute = exports.convertSpeedToSpeedInMetersPerMinute = exports.convertSpeedToSpeedInFeetPerSecond = exports.convertSpeedToSpeedInMilesPerHour = exports.convertSpeedToSpeedInKilometersPerHour = exports.convertSpeedToSwimPace = exports.convertSpeedToPace = exports.isNumber = exports.isNumberOrString = void 0;
function isNumberOrString(property) {
    return typeof property === 'number' || typeof property === 'string';
}
exports.isNumberOrString = isNumberOrString;
function isNumber(property) {
    return typeof property === 'number' && !isNaN(property);
}
exports.isNumber = isNumber;
/**
 * Converts speed from m/s to pace as of seconds per km
 * @param {number} number
 * @return {number}
 */
function convertSpeedToPace(number) {
    return number === 0 ? Infinity : 1000 / number;
}
exports.convertSpeedToPace = convertSpeedToPace;
/**
 * Converts m/s to seconds per 100m
 * @param number
 */
function convertSpeedToSwimPace(number) {
    return number === 0 ? Infinity : 100 / number;
}
exports.convertSpeedToSwimPace = convertSpeedToSwimPace;
function convertSpeedToSpeedInKilometersPerHour(number) {
    return number * 3.6;
}
exports.convertSpeedToSpeedInKilometersPerHour = convertSpeedToSpeedInKilometersPerHour;
function convertSpeedToSpeedInMilesPerHour(number) {
    return number * 2.237;
}
exports.convertSpeedToSpeedInMilesPerHour = convertSpeedToSpeedInMilesPerHour;
function convertSpeedToSpeedInFeetPerSecond(number) {
    return number * 3.28084;
}
exports.convertSpeedToSpeedInFeetPerSecond = convertSpeedToSpeedInFeetPerSecond;
function convertSpeedToSpeedInMetersPerMinute(number) {
    return number * 60;
}
exports.convertSpeedToSpeedInMetersPerMinute = convertSpeedToSpeedInMetersPerMinute;
function convertSpeedToSpeedInFeetPerMinute(number) {
    return number * 196.85;
}
exports.convertSpeedToSpeedInFeetPerMinute = convertSpeedToSpeedInFeetPerMinute;
function convertSpeedToSpeedInFeetPerHour(number) {
    return number * 11811.024;
}
exports.convertSpeedToSpeedInFeetPerHour = convertSpeedToSpeedInFeetPerHour;
function convertSpeedToSpeedInMetersPerHour(number) {
    return number * 3600;
}
exports.convertSpeedToSpeedInMetersPerHour = convertSpeedToSpeedInMetersPerHour;
function convertSpeedToSpeedInKnots(number) {
    return number * 1.943844;
}
exports.convertSpeedToSpeedInKnots = convertSpeedToSpeedInKnots;
function convertPaceToPaceInMinutesPerMile(number) {
    return number * 1.60934;
}
exports.convertPaceToPaceInMinutesPerMile = convertPaceToPaceInMinutesPerMile;
function convertMetersToMiles(number) {
    return number === 0 ? 0 : number / 1609;
}
exports.convertMetersToMiles = convertMetersToMiles;
/**
 * Converts m/s to seconds per 100m
 * @param number
 */
function convertSwimPaceToSwimPacePer100Yard(number) {
    return number * 1.93613298;
}
exports.convertSwimPaceToSwimPacePer100Yard = convertSwimPaceToSwimPacePer100Yard;
function getSize(obj) {
    return getSizeWithOptionalFormat(obj, false);
}
exports.getSize = getSize;
function getSizeFormated(obj) {
    return getSizeWithOptionalFormat(obj, true);
}
exports.getSizeFormated = getSizeFormated;
function getSizeWithOptionalFormat(obj, format = true) {
    let size;
    try {
        size = new Blob([obj]).size;
    }
    catch (e) {
        size = Buffer.from(obj).length;
    }
    function formatByteSize(bytes) {
        if (bytes < 1024) {
            return bytes + ' bytes';
        }
        else if (bytes < 1048576) {
            return (bytes / 1024).toFixed(4) + ' KiB';
        }
        else if (bytes < 1073741824) {
            return (bytes / 1048576).toFixed(4) + ' MiB';
        }
        else {
            return (bytes / 1073741824).toFixed(4) + ' GiB';
        }
    }
    return format ? formatByteSize(size) : size;
}
/**
 * from https://stackoverflow.com/questions/48340403/fill-missing-numeric-values-in-an-array
 * Very badly written
 * @param array
 */
function fillMissingValuesLinear(array) {
    let i = 0, j, delta;
    while (i < array.length) {
        if (array[i] !== null) {
            i++;
            continue;
        }
        j = i;
        // eslint-disable-next-line no-empty
        while (array[++j] === null) { }
        // @ts-ignore
        delta = (array[j] - array[i - 1]) / (j - i + 1);
        do {
            // @ts-ignore
            array[i] = delta + array[i - 1];
            i++;
        } while (i < j);
    }
    return array;
}
exports.fillMissingValuesLinear = fillMissingValuesLinear;
const mean = (array) => {
    return array.reduce((a, b) => a + b, 0) / array.length;
};
exports.mean = mean;
const meanWindowSmoothing = (array, windowSize = 7, roundDecimals = 3) => {
    const roundDecimalsFactor = Math.pow(10, roundDecimals);
    return array.map((value, index) => {
        const window = array.slice(index, index + windowSize); // Get window
        return Math.round((0, exports.mean)(window) * roundDecimalsFactor) / roundDecimalsFactor; // Round and return
    });
};
exports.meanWindowSmoothing = meanWindowSmoothing;
const median = (inputArray) => {
    const s = inputArray.slice().sort((a, b) => {
        return a - b;
    });
    return s[Math.floor((s.length - 1) / 2)];
};
/**
 * Remove spikes into a vector (http://fourier.eng.hmc.edu/e161/lectures/smooth_sharpen/node2.html)
 * @param array to be filtered
 * @param window Window size (should be odd number)
 */
const medianFilter = (array, window = 11) => {
    if (window % 2 === 0) {
        throw new Error('Window size should be an odd number');
    }
    if (array.length < window) {
        return array;
    }
    const f = [];
    const w = [];
    let i;
    w.push(array[0]);
    for (i = 0; i < array.length; i++) {
        const midWindowIndex = Math.floor(window / 2);
        if (array.length - 1 >= i + midWindowIndex) {
            w.push(array[i + midWindowIndex]);
        }
        f.push(median(w));
        if (i >= midWindowIndex) {
            w.shift();
        }
    }
    return f;
};
exports.medianFilter = medianFilter;
const standardDeviation = (stream) => {
    const avg = (0, exports.mean)(stream);
    const variance = (0, exports.mean)(stream.map(value => Math.pow(value, 2))) - Math.pow(avg, 2);
    return variance > 0 ? Math.sqrt(variance) : 0;
};
exports.standardDeviation = standardDeviation;
