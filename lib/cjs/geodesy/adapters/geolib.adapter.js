"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoLibAdapter = void 0;
const getPreciseDistance_1 = __importDefault(require("geolib/es/getPreciseDistance"));
const getDistance_1 = __importDefault(require("geolib/es/getDistance"));
const findNearest_1 = __importDefault(require("geolib/es/findNearest"));
class GeoLibAdapter {
    constructor() {
        this.findNearest = findNearest_1.default;
    }
    getDistance(positionArray, precise = false, accuracy = 0.1) {
        let distance = 0;
        const excludeFirstPointsArray = positionArray.slice(1);
        let firstPosition = positionArray[0];
        for (const nextPosition of excludeFirstPointsArray) {
            const firstPositionAsDecimal = {
                longitude: firstPosition.longitudeDegrees,
                latitude: firstPosition.latitudeDegrees
            };
            const nextPositionAsDecimal = {
                longitude: nextPosition.longitudeDegrees,
                latitude: nextPosition.latitudeDegrees
            };
            distance += precise
                ? (0, getPreciseDistance_1.default)(firstPositionAsDecimal, nextPositionAsDecimal, accuracy)
                : (0, getDistance_1.default)(firstPositionAsDecimal, nextPositionAsDecimal, accuracy);
            firstPosition = nextPosition;
        }
        return distance;
    }
}
exports.GeoLibAdapter = GeoLibAdapter;
