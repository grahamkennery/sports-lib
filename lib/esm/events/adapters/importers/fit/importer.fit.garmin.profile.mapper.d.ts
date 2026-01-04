export declare class GarminProfileMapper {
    /**
     * Translates a Garmin Product ID to a readable device name
     */
    static getDeviceName(productId: number | string): string | null;
    /**
     * Translates a Manufacturer ID to a readable name
     */
    static getManufacturerName(manufacturerId: number | string): string | null;
    /**
     * Translates a Sport ID to a readable name
     */
    static getSportName(sportId: number | string): string | null;
    /**
     * Translates a Sub-Sport ID to a readable name
     */
    static getSubSportName(subSportId: number | string): string | null;
    /**
     * Formats internal Garmin names into pretty names (e.g. fr945 -> Forerunner 945)
     */
    private static formatDeviceName;
}
