export declare const CLAMP = 50;
export declare const LOOK_AHEAD_IN_METERS = 10;
export declare class GradeCalculator {
    static computeGradeStream(timeStream: (number | null)[], distanceStream: (number | null)[], altitudeStream: (number | null)[], aheadMeters?: number, clamp?: number): (number | null)[];
    /**
     * Repair distance and altitude streams based on time streams
     * @param timeData
     * @param distanceData
     * @param altitudeData
     */
    static squashAlignStreams(timeData: (number | null)[], distanceData: (number | null)[], altitudeData: (number | null)[]): number[][];
    /**
     * Contains a 5th order equation which models the Strava GAP behavior described on picture "./strava_gap_modelization.png"
     * ------------------------------------------------------------------------------------
     * Get Real Strava Premium Grade Adjusted Pace on every strava activities with below gist
     * https://gist.github.com/thomaschampagne/2781dce212d12cd048728e70ae791a30
     * ------------------------------------------------------------------------------------
     *
     * This Strava GAP behavior is described by the below data
     * [{ grade: -34, speedFactor: 1.7 }, { grade: -32, speedFactor: 1.6 }, { grade: -30, speedFactor: 1.5 },
     * { grade: -28, speedFactor: 1.4 }, { grade: -26, speedFactor: 1.3 }, { grade: -24, speedFactor: 1.235 },
     * { grade: -22, speedFactor: 1.15 }, { grade: -20, speedFactor: 1.09 }, { grade: -18, speedFactor: 1.02 },
     * { grade: -16, speedFactor: 0.95 }, { grade: -14, speedFactor: 0.91 }, { grade: -12, speedFactor: 0.89 },
     * { grade: -10, speedFactor: 0.88 }, { grade: -8, speedFactor: 0.88 }, { grade: -6, speedFactor: 0.89 },
     * { grade: -4, speedFactor: 0.91 }, { grade: -2, speedFactor: 0.95 }, { grade: 0, speedFactor: 1 },
     * { grade: 2, speedFactor: 1.05 }, { grade: 4, speedFactor: 1.14 }, { grade: 6, speedFactor: 1.24 },
     * { grade: 8, speedFactor: 1.34 }, { grade: 10, speedFactor: 1.47 }, { grade: 12, speedFactor: 1.5 },
     * { grade: 14, speedFactor: 1.76 }, { grade: 16, speedFactor: 1.94 }, { grade: 18, speedFactor: 2.11 },
     * { grade: 20, speedFactor: 2.3 }, { grade: 22, speedFactor: 2.4 }, { grade: 24, speedFactor: 2.48 },
     * { grade: 26, speedFactor: 2.81 }, { grade: 28, speedFactor: 3 }, { grade: 30, speedFactor: 3.16 },
     * { grade: 32, speedFactor: 3.31 }, { grade: 34, speedFactor: 3.49 } ]
     *
     * The 5th order equation has been curve fitted using plot.ly
     */
    static estimateAdjustedSpeed(speedMeterSeconds: number, grade: number): number;
}
