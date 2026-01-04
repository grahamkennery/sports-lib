"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TCXSampleMapper = void 0;
const data_latitude_degrees_1 = require("../../../../data/data.latitude-degrees");
const data_altitude_1 = require("../../../../data/data.altitude");
const data_heart_rate_1 = require("../../../../data/data.heart-rate");
const data_cadence_1 = require("../../../../data/data.cadence");
const data_distance_1 = require("../../../../data/data.distance");
const data_speed_1 = require("../../../../data/data.speed");
const data_pace_1 = require("../../../../data/data.pace");
const data_power_1 = require("../../../../data/data.power");
const data_longitude_degrees_1 = require("../../../../data/data.longitude-degrees");
const helpers_1 = require("../../../utilities/helpers");
const utils_tcx_1 = require("./utils.tcx");
exports.TCXSampleMapper = [
    {
        dataType: data_latitude_degrees_1.DataLatitudeDegrees.type,
        getSampleValue: (trackPointsElement) => {
            const positionChildNode = (0, utils_tcx_1.findChildNode)(trackPointsElement.childNodes, 'Position');
            if (!positionChildNode) {
                return null;
            }
            return (0, utils_tcx_1.findChildNodeValue)(positionChildNode.childNodes, 'LatitudeDegrees');
        }
    },
    {
        dataType: data_longitude_degrees_1.DataLongitudeDegrees.type,
        getSampleValue: (trackPointsElement) => {
            const positionChildNode = (0, utils_tcx_1.findChildNode)(trackPointsElement.childNodes, 'Position');
            if (!positionChildNode) {
                return null;
            }
            return (0, utils_tcx_1.findChildNodeValue)(positionChildNode.childNodes, 'LongitudeDegrees');
        }
    },
    {
        dataType: data_distance_1.DataDistance.type,
        getSampleValue: (trackPointsElement) => {
            return (0, utils_tcx_1.findChildNodeValue)(trackPointsElement.childNodes, 'DistanceMeters');
        }
    },
    {
        dataType: data_altitude_1.DataAltitude.type,
        getSampleValue: (trackPointsElement) => {
            return (0, utils_tcx_1.findChildNodeValue)(trackPointsElement.childNodes, 'AltitudeMeters');
        }
    },
    {
        dataType: data_cadence_1.DataCadence.type,
        getSampleValue: (trackPointsElement) => {
            return (0, utils_tcx_1.findChildNodeValue)(trackPointsElement.childNodes, 'Cadence');
        }
    },
    {
        dataType: data_heart_rate_1.DataHeartRate.type,
        getSampleValue: (trackPointsElement) => {
            const heartRateChildNode = (0, utils_tcx_1.findChildNode)(trackPointsElement.childNodes, 'HeartRateBpm');
            if (!heartRateChildNode) {
                return null;
            }
            return (0, utils_tcx_1.findChildNodeValue)(heartRateChildNode.childNodes, 'Value');
        }
    },
    {
        dataType: data_cadence_1.DataCadence.type,
        getSampleValue: (trackPointsElement) => {
            return (0, utils_tcx_1.findTrackPointExtensionValue)(trackPointsElement.childNodes, 'RunCadence');
        }
    },
    {
        dataType: data_speed_1.DataSpeed.type,
        getSampleValue: (trackPointsElement) => {
            return (0, utils_tcx_1.findTrackPointExtensionValue)(trackPointsElement.childNodes, 'Speed');
        }
    },
    {
        dataType: data_pace_1.DataPace.type,
        getSampleValue: (trackPointsElement) => {
            const speed = (0, utils_tcx_1.findTrackPointExtensionValue)(trackPointsElement.childNodes, 'Speed');
            return speed !== null ? (0, helpers_1.convertSpeedToPace)(speed) : null;
        }
    },
    {
        dataType: data_power_1.DataPower.type,
        getSampleValue: (trackPointsElement, sampleInfo) => {
            // Ensure power stream compliance when in some cases power sample field could be missing even if others samples have it
            // Just set watts to 0 when this happen
            // Case example: ride file "7555170032.tcx"  from integration tests
            return (sampleInfo === null || sampleInfo === void 0 ? void 0 : sampleInfo.hasPowerMeter)
                ? (0, utils_tcx_1.findTrackPointExtensionValue)(trackPointsElement.childNodes, 'Watts') || 0
                : null;
        }
    }
];
