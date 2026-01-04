"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityParsingOptions = void 0;
class ActivityParsingOptions {
    constructor(options) {
        this.streams = options.streams;
        this.maxActivityDurationDays = options.maxActivityDurationDays;
    }
}
exports.ActivityParsingOptions = ActivityParsingOptions;
ActivityParsingOptions.DEFAULT = new ActivityParsingOptions({
    streams: {
        smooth: { altitudeSmooth: true, grade: true, gradeSmooth: true },
        fixAbnormal: { speed: false }
    },
    maxActivityDurationDays: 14
});
