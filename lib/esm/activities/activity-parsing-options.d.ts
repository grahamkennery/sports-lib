export declare class ActivityParsingOptions {
    static readonly DEFAULT: ActivityParsingOptions;
    /**
     * Enable/Disable streams calculations
     */
    streams: {
        smooth: {
            altitudeSmooth?: boolean;
            grade?: boolean;
            gradeSmooth?: boolean;
        };
        fixAbnormal: {
            speed?: boolean;
        };
    };
    maxActivityDurationDays: number;
    constructor(options: ActivityParsingOptions);
}
