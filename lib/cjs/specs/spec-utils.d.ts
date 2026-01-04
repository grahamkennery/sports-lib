export declare class SpecUtils {
    static DEBUG_ENABLED: boolean;
    static THROW_ON_ERROR: boolean;
    private static FAILED_ASSERTS;
    static assertEqual(actual: number, expected: number, decimals?: number): void;
    static assertNearEqual(actual: number, expected: number, decimals?: number, tolerancePercentage?: number): void;
    static assertNearEqualTime(actualTime: number | string, expectedTime: number | string, tolerancePercentage?: number): void;
    /**
     * Converts m/s to seconds/100m swim pace
     */
    static speedToSwimPace(mps: number): number | null;
    static startTrackAssertFailed(): void;
    /**
     * Converts mps to seconds/km
     */
    static speedToPace(mps: number): number | null;
    static endTrackAssertFailed(): void;
}
