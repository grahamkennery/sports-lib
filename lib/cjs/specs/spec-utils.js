"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecUtils = void 0;
class Time {
    /**
     * Converts seconds to military time (HH:MM:SS)
     */
    static secToMilitary(secondsParam, trimZeros = false) {
        const hours = Math.floor(secondsParam / 3600);
        const minutes = Math.floor(secondsParam / 60) % 60;
        const seconds = Math.round(secondsParam % 60);
        const resultAsArray = [hours, minutes, seconds];
        const militaryTime = resultAsArray
            .map(value => (value < 10 ? '0' + value : value))
            .filter((value, index) => value !== '00' || index > 0)
            .join(':');
        if (trimZeros && militaryTime[0] === '0') {
            return militaryTime.slice(1);
        }
        return militaryTime;
    }
    /**
     * Converts military time (HH:MM:SS) to seconds
     */
    static militaryToSec(hhMmSs) {
        const p = hhMmSs.split(':');
        let s = 0;
        let m = 1;
        while (p.length > 0) {
            s += m * parseInt(p.pop(), 10);
            m *= 60;
        }
        return s;
    }
}
function round(value, decimals = 1) {
    const decimalsFactor = Math.pow(10, decimals);
    return Math.round(value * decimalsFactor) / decimalsFactor;
}
class SpecUtils {
    static assertEqual(actual, expected, decimals = 0) {
        return this.assertNearEqual(actual, expected, decimals, 0);
    }
    static assertNearEqual(actual, expected, decimals = 0, tolerancePercentage = 1) {
        if (actual === null || actual === undefined) {
            throw new Error('actual cannot be null or undefined');
        }
        const actualRounded = round(actual, decimals);
        const expectedRounded = round(expected, decimals);
        if (!Number.isFinite(actualRounded)) {
            const message = `Actual is not a number. Can't compare with expected value of "${expectedRounded}"`;
            if (SpecUtils.THROW_ON_ERROR) {
                throw new Error(message);
            }
            else {
                console.error(message);
            }
            SpecUtils.FAILED_ASSERTS.push(new Error(message));
            return;
        }
        if (actualRounded !== expectedRounded) {
            if (tolerancePercentage === 0) {
                throw new Error(`Actual "${actualRounded}" don't comply with expected "${expectedRounded}"`);
            }
            else {
                const tolerance = (expected * tolerancePercentage) / 100;
                const minExpected = round(expected - tolerance, decimals);
                const maxExpected = round(expected + tolerance, decimals);
                if (actualRounded < minExpected) {
                    const message = `Actual "${actualRounded}" BELOW MIN expected value: "${minExpected}" for an expected value of "${expectedRounded}"`;
                    if (SpecUtils.THROW_ON_ERROR) {
                        throw new Error(message);
                    }
                    else {
                        console.error(message);
                    }
                    SpecUtils.FAILED_ASSERTS.push(new Error(message));
                    return;
                }
                if (actualRounded > maxExpected) {
                    const message = `Actual "${actualRounded}" ABOVE MAX expected value: "${maxExpected}" for an expected value of "${expectedRounded}"`;
                    if (SpecUtils.THROW_ON_ERROR) {
                        throw new Error(message);
                    }
                    else {
                        console.error(message);
                    }
                    SpecUtils.FAILED_ASSERTS.push(new Error(message));
                    return;
                }
                if (SpecUtils.DEBUG_ENABLED) {
                    console.log(`[PASS] Actual "${actualRounded}" complies expected "${expectedRounded}" with "${minExpected} < ${actualRounded} < ${maxExpected}" and tolerance "${tolerance}"`);
                }
            }
        }
        else {
            if (SpecUtils.DEBUG_ENABLED) {
                console.log(`[PASS] Actual "${actual}" complies expected "${expected}"`);
            }
        }
    }
    static assertNearEqualTime(actualTime, expectedTime, tolerancePercentage = 0.5) {
        if (actualTime === null || actualTime === undefined) {
            throw new Error('actual cannot be null or undefined');
        }
        const expectedSeconds = typeof expectedTime === 'string' ? Time.militaryToSec(expectedTime) : expectedTime;
        const actualSeconds = typeof actualTime === 'string' ? Time.militaryToSec(actualTime) : actualTime;
        const deltaTolerance = (expectedSeconds * tolerancePercentage) / 100;
        const lowerTolerance = expectedSeconds - deltaTolerance;
        if (actualSeconds < lowerTolerance) {
            const message = `Actual time of "${Time.secToMilitary(actualSeconds)}" (or ${actualSeconds}s) IS LOWER THAN "${Time.secToMilitary(expectedSeconds)}" Min possible value: "${Time.secToMilitary(lowerTolerance)}" (or ${lowerTolerance}s); Delta seconds: ${deltaTolerance}`;
            if (SpecUtils.THROW_ON_ERROR) {
                throw new Error(message);
            }
            else {
                console.error(message);
            }
            SpecUtils.FAILED_ASSERTS.push(new Error(message));
        }
        const highTolerance = expectedSeconds + deltaTolerance;
        if (actualSeconds > highTolerance) {
            const message = `Actual time of "${Time.secToMilitary(actualSeconds)}" (or ${actualSeconds}s) IS HIGHER THAN "${Time.secToMilitary(expectedSeconds)}". Max possible value: "${Time.secToMilitary(highTolerance)}" (or ${highTolerance}s); Delta seconds: ${deltaTolerance}`;
            if (SpecUtils.THROW_ON_ERROR) {
                throw new Error(message);
            }
            else {
                console.error(message);
            }
            SpecUtils.FAILED_ASSERTS.push(new Error(message));
        }
        if (SpecUtils.DEBUG_ENABLED) {
            console.log(`[PASS] Actual time matches expected time tolerance (${tolerancePercentage}%) : "${Time.secToMilitary(lowerTolerance)}" < "${Time.secToMilitary(actualSeconds)}" < "${Time.secToMilitary(highTolerance)}". Expected was "${Time.secToMilitary(expectedSeconds)}"`);
        }
    }
    /**
     * Converts m/s to seconds/100m swim pace
     */
    static speedToSwimPace(mps) {
        // then to s/100m
        return mps > 0 ? 100 / mps : null;
    }
    static startTrackAssertFailed() {
        SpecUtils.FAILED_ASSERTS = [];
    }
    /**
     * Converts mps to seconds/km
     */
    static speedToPace(mps) {
        return Number.isFinite(mps) && mps > 0 ? (1 / mps) * 1000 : null;
    }
    static endTrackAssertFailed() {
        if (SpecUtils.DEBUG_ENABLED) {
            console.error(`FAILED_ASSERTS count: ${SpecUtils.FAILED_ASSERTS.length}`);
        }
        SpecUtils.FAILED_ASSERTS = [];
    }
}
exports.SpecUtils = SpecUtils;
// Must be committed as "false"
SpecUtils.DEBUG_ENABLED = false;
// Must be committed as "true"
SpecUtils.THROW_ON_ERROR = true;
SpecUtils.FAILED_ASSERTS = [];
