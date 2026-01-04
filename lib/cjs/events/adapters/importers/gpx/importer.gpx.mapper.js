"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPXSampleMapper = void 0;
const data_latitude_degrees_1 = require("../../../../data/data.latitude-degrees");
const data_altitude_1 = require("../../../../data/data.altitude");
const data_heart_rate_1 = require("../../../../data/data.heart-rate");
const data_cadence_1 = require("../../../../data/data.cadence");
const data_temperature_1 = require("../../../../data/data.temperature");
const data_distance_1 = require("../../../../data/data.distance");
const data_sea_level_pressure_1 = require("../../../../data/data.sea-level-pressure");
const data_speed_1 = require("../../../../data/data.speed");
const data_vertical_speed_1 = require("../../../../data/data.vertical-speed");
const data_power_1 = require("../../../../data/data.power");
const data_longitude_degrees_1 = require("../../../../data/data.longitude-degrees");
const helpers_1 = require("../../../utilities/helpers");
exports.GPXSampleMapper = [
    {
        dataType: data_latitude_degrees_1.DataLatitudeDegrees.type,
        getSampleValue: sample => Number(sample.lat)
    },
    {
        dataType: data_longitude_degrees_1.DataLongitudeDegrees.type,
        getSampleValue: sample => Number(sample.lon)
    },
    {
        dataType: data_altitude_1.DataAltitude.type,
        getSampleValue: sample => (sample.ele ? Number(sample.ele[0]) : null)
    },
    {
        dataType: data_heart_rate_1.DataHeartRate.type,
        getSampleValue: sample => {
            // debugger;
            if (!sample.extensions || !sample.extensions.length) {
                return null;
            }
            if (sample.extensions[0].heartrate && (0, helpers_1.isNumberOrString)(sample.extensions[0].heartrate[0])) {
                return Number(sample.extensions[0].heartrate[0]);
            }
            if (sample.extensions[0].TrackPointExtension &&
                sample.extensions[0].TrackPointExtension[0] &&
                sample.extensions[0].TrackPointExtension[0].hr) {
                return Number(sample.extensions[0].TrackPointExtension[0].hr[0]);
            }
            return null;
        }
    },
    {
        dataType: data_cadence_1.DataCadence.type,
        getSampleValue: sample => {
            // debugger;
            if (!sample.extensions || !sample.extensions.length) {
                return null;
            }
            if (sample.extensions[0].cadence && (0, helpers_1.isNumberOrString)(sample.extensions[0].cadence[0])) {
                return Number(sample.extensions[0].cadence[0]);
            }
            if (sample.extensions[0].TrackPointExtension &&
                sample.extensions[0].TrackPointExtension[0] &&
                sample.extensions[0].TrackPointExtension[0].cad) {
                return Number(sample.extensions[0].TrackPointExtension[0].cad[0]);
            }
            return null;
        }
    },
    {
        dataType: data_temperature_1.DataTemperature.type,
        getSampleValue: sample => {
            // debugger;
            if (!sample.extensions || !sample.extensions.length) {
                return null;
            }
            if (sample.extensions[0].temp && (0, helpers_1.isNumberOrString)(sample.extensions[0].temp[0])) {
                return Number(sample.extensions[0].temp[0]);
            }
            if (sample.extensions[0].TrackPointExtension &&
                sample.extensions[0].TrackPointExtension[0] &&
                sample.extensions[0].TrackPointExtension[0].atemp) {
                return Number(sample.extensions[0].TrackPointExtension[0].atemp[0]);
            }
            return null;
        }
    },
    {
        dataType: data_distance_1.DataDistance.type,
        getSampleValue: sample => {
            if (!sample.extensions || !sample.extensions.length) {
                return null;
            }
            if (sample.extensions[0].distance && (0, helpers_1.isNumberOrString)(sample.extensions[0].distance[0])) {
                return Number(sample.extensions[0].distance[0]);
            }
            return null;
        }
    },
    {
        dataType: data_sea_level_pressure_1.DataSeaLevelPressure.type,
        getSampleValue: sample => {
            if (!sample.extensions || !sample.extensions.length) {
                return null;
            }
            if (sample.extensions[0].seaLevelPressure && (0, helpers_1.isNumberOrString)(sample.extensions[0].seaLevelPressure[0])) {
                return Number(sample.extensions[0].seaLevelPressure[0]);
            }
            return null;
        }
    },
    {
        dataType: data_speed_1.DataSpeed.type,
        getSampleValue: sample => {
            if (!sample.extensions || !sample.extensions.length) {
                return null;
            }
            if (sample.extensions[0].speed && (0, helpers_1.isNumberOrString)(sample.extensions[0].speed[0])) {
                return Number(sample.extensions[0].speed[0]);
            }
            return null;
        }
    },
    {
        dataType: data_vertical_speed_1.DataVerticalSpeed.type,
        getSampleValue: sample => {
            if (!sample.extensions || !sample.extensions.length) {
                return null;
            }
            if (sample.extensions[0].verticalSpeed && (0, helpers_1.isNumberOrString)(sample.extensions[0].verticalSpeed[0])) {
                return Number(sample.extensions[0].verticalSpeed[0]);
            }
            return null;
        }
    },
    {
        dataType: data_power_1.DataPower.type,
        getSampleValue: (sample, sampleInfo) => {
            var _a;
            let watts = null;
            if (((_a = sample.extensions) === null || _a === void 0 ? void 0 : _a.length) && sample.extensions[0].power && (0, helpers_1.isNumberOrString)(sample.extensions[0].power[0])) {
                watts = Number(sample.extensions[0].power[0]);
            }
            // Ensure power stream compliance when in some cases power sample field could be missing even if others samples have it
            // Just set watts to 0 when this happen
            // Case example: ride file "7555261629.gpx"  from integration tests
            return (sampleInfo === null || sampleInfo === void 0 ? void 0 : sampleInfo.hasPowerMeter) ? watts || 0 : null;
        }
    }
];
