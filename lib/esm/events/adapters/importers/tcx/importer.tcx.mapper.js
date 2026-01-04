import { DataLatitudeDegrees } from '../../../../data/data.latitude-degrees';
import { DataAltitude } from '../../../../data/data.altitude';
import { DataHeartRate } from '../../../../data/data.heart-rate';
import { DataCadence } from '../../../../data/data.cadence';
import { DataDistance } from '../../../../data/data.distance';
import { DataSpeed } from '../../../../data/data.speed';
import { DataPace } from '../../../../data/data.pace';
import { DataPower } from '../../../../data/data.power';
import { DataLongitudeDegrees } from '../../../../data/data.longitude-degrees';
import { convertSpeedToPace } from '../../../utilities/helpers';
import { findChildNode, findChildNodeValue, findTrackPointExtensionValue } from './utils.tcx';
export const TCXSampleMapper = [
    {
        dataType: DataLatitudeDegrees.type,
        getSampleValue: (trackPointsElement) => {
            const positionChildNode = findChildNode(trackPointsElement.childNodes, 'Position');
            if (!positionChildNode) {
                return null;
            }
            return findChildNodeValue(positionChildNode.childNodes, 'LatitudeDegrees');
        }
    },
    {
        dataType: DataLongitudeDegrees.type,
        getSampleValue: (trackPointsElement) => {
            const positionChildNode = findChildNode(trackPointsElement.childNodes, 'Position');
            if (!positionChildNode) {
                return null;
            }
            return findChildNodeValue(positionChildNode.childNodes, 'LongitudeDegrees');
        }
    },
    {
        dataType: DataDistance.type,
        getSampleValue: (trackPointsElement) => {
            return findChildNodeValue(trackPointsElement.childNodes, 'DistanceMeters');
        }
    },
    {
        dataType: DataAltitude.type,
        getSampleValue: (trackPointsElement) => {
            return findChildNodeValue(trackPointsElement.childNodes, 'AltitudeMeters');
        }
    },
    {
        dataType: DataCadence.type,
        getSampleValue: (trackPointsElement) => {
            return findChildNodeValue(trackPointsElement.childNodes, 'Cadence');
        }
    },
    {
        dataType: DataHeartRate.type,
        getSampleValue: (trackPointsElement) => {
            const heartRateChildNode = findChildNode(trackPointsElement.childNodes, 'HeartRateBpm');
            if (!heartRateChildNode) {
                return null;
            }
            return findChildNodeValue(heartRateChildNode.childNodes, 'Value');
        }
    },
    {
        dataType: DataCadence.type,
        getSampleValue: (trackPointsElement) => {
            return findTrackPointExtensionValue(trackPointsElement.childNodes, 'RunCadence');
        }
    },
    {
        dataType: DataSpeed.type,
        getSampleValue: (trackPointsElement) => {
            return findTrackPointExtensionValue(trackPointsElement.childNodes, 'Speed');
        }
    },
    {
        dataType: DataPace.type,
        getSampleValue: (trackPointsElement) => {
            const speed = findTrackPointExtensionValue(trackPointsElement.childNodes, 'Speed');
            return speed !== null ? convertSpeedToPace(speed) : null;
        }
    },
    {
        dataType: DataPower.type,
        getSampleValue: (trackPointsElement, sampleInfo) => {
            // Ensure power stream compliance when in some cases power sample field could be missing even if others samples have it
            // Just set watts to 0 when this happen
            // Case example: ride file "7555170032.tcx"  from integration tests
            return (sampleInfo === null || sampleInfo === void 0 ? void 0 : sampleInfo.hasPowerMeter)
                ? findTrackPointExtensionValue(trackPointsElement.childNodes, 'Watts') || 0
                : null;
        }
    }
];
