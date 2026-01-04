export class ActivityParsingOptions {
    constructor(options) {
        this.streams = options.streams;
        this.maxActivityDurationDays = options.maxActivityDurationDays;
    }
}
ActivityParsingOptions.DEFAULT = new ActivityParsingOptions({
    streams: {
        smooth: { altitudeSmooth: true, grade: true, gradeSmooth: true },
        fixAbnormal: { speed: false }
    },
    maxActivityDurationDays: 14
});
