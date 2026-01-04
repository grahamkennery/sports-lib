import getPreciseDistance from 'geolib/es/getPreciseDistance';
import getDistance from 'geolib/es/getDistance';
import findNearest from 'geolib/es/findNearest';
export class GeoLibAdapter {
    constructor() {
        this.findNearest = findNearest;
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
                ? getPreciseDistance(firstPositionAsDecimal, nextPositionAsDecimal, accuracy)
                : getDistance(firstPositionAsDecimal, nextPositionAsDecimal, accuracy);
            firstPosition = nextPosition;
        }
        return distance;
    }
}
