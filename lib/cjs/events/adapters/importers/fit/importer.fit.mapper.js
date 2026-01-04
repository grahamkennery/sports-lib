"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FITSampleMapper = void 0;
const data_latitude_degrees_1 = require("../../../../data/data.latitude-degrees");
const data_altitude_1 = require("../../../../data/data.altitude");
const data_heart_rate_1 = require("../../../../data/data.heart-rate");
const data_cadence_1 = require("../../../../data/data.cadence");
const data_temperature_1 = require("../../../../data/data.temperature");
const data_distance_1 = require("../../../../data/data.distance");
const data_speed_1 = require("../../../../data/data.speed");
const data_vertical_speed_1 = require("../../../../data/data.vertical-speed");
const data_power_1 = require("../../../../data/data.power");
const data_longitude_degrees_1 = require("../../../../data/data.longitude-degrees");
const data_form_power_1 = require("../../../../data/data.form-power");
const data_leg_stiffness_1 = require("../../../../data/data.leg-stiffness");
const data_vertical_oscillation_1 = require("../../../../data/data.vertical-oscillation");
const helpers_1 = require("../../../utilities/helpers");
const data_accumulated_power_1 = require("../../../../data/data.accumulated-power");
const data_stryd_altitude_1 = require("../../../../data/data.stryd-altitude");
const data_stryd_distance_1 = require("../../../../data/data.stryd-distance");
const data_stryd_speed_1 = require("../../../../data/data.stryd-speed");
const data_right_balance_1 = require("../../../../data/data.right-balance");
const data_left_balance_1 = require("../../../../data/data.left-balance");
const data_stance_time_1 = require("../../../../data/data.stance-time");
const data_stance_time_balance_left_1 = require("../../../../data/data-stance-time-balance-left");
const data_step_length_1 = require("../../../../data/data.step-length");
const data_vertical_ratio_1 = require("../../../../data/data.vertical-ratio");
const data_ground_time_1 = require("../../../../data/data.ground-time");
const data_air_power_1 = require("../../../../data/data.air-power");
const constants_1 = require("../../../../constants/constants");
exports.FITSampleMapper = [
    {
        dataType: data_latitude_degrees_1.DataLatitudeDegrees.type,
        getSampleValue: (sample) => {
            return (0, helpers_1.isNumber)(sample.position_lat)
                ? Math.round(sample.position_lat * Math.pow(10, constants_1.GNSS_DEGREES_PRECISION_NUMBER_OF_DECIMAL_PLACES)) /
                    Math.pow(10, constants_1.GNSS_DEGREES_PRECISION_NUMBER_OF_DECIMAL_PLACES)
                : sample.position_lat;
        }
    },
    {
        dataType: data_longitude_degrees_1.DataLongitudeDegrees.type,
        getSampleValue: (sample) => {
            return (0, helpers_1.isNumber)(sample.position_long)
                ? Math.round(sample.position_long * Math.pow(10, constants_1.GNSS_DEGREES_PRECISION_NUMBER_OF_DECIMAL_PLACES)) /
                    Math.pow(10, constants_1.GNSS_DEGREES_PRECISION_NUMBER_OF_DECIMAL_PLACES)
                : sample.position_long;
        }
    },
    {
        dataType: data_distance_1.DataDistance.type,
        getSampleValue: (sample) => {
            return sample.distance;
        }
    },
    {
        dataType: data_heart_rate_1.DataHeartRate.type,
        getSampleValue: (sample) => {
            return sample.heart_rate;
        }
    },
    {
        dataType: data_altitude_1.DataAltitude.type,
        getSampleValue: (sample) => {
            return (0, helpers_1.isNumber)(sample.enhanced_altitude)
                ? Math.round(sample.enhanced_altitude * Math.pow(10, constants_1.ALTITUDE_PRECISION_NUMBER_OF_DECIMAL_PLACES)) /
                    Math.pow(10, constants_1.ALTITUDE_PRECISION_NUMBER_OF_DECIMAL_PLACES)
                : (0, helpers_1.isNumber)(sample.altitude)
                    ? Math.round(sample.altitude * Math.pow(10, constants_1.ALTITUDE_PRECISION_NUMBER_OF_DECIMAL_PLACES)) /
                        Math.pow(10, constants_1.ALTITUDE_PRECISION_NUMBER_OF_DECIMAL_PLACES)
                    : sample.altitude;
        }
    },
    {
        dataType: data_stryd_altitude_1.DataStrydAltitude.type,
        getSampleValue: (sample) => {
            return (0, helpers_1.isNumber)(sample.Elevation)
                ? Math.round(sample.Elevation * Math.pow(10, constants_1.ALTITUDE_PRECISION_NUMBER_OF_DECIMAL_PLACES)) /
                    Math.pow(10, constants_1.ALTITUDE_PRECISION_NUMBER_OF_DECIMAL_PLACES)
                : sample.Elevation;
        }
    },
    {
        dataType: data_stryd_distance_1.DataStrydDistance.type,
        getSampleValue: (sample) => {
            return sample.Distance;
        }
    },
    {
        dataType: data_stryd_speed_1.DataStrydSpeed.type,
        getSampleValue: (sample) => {
            return sample.Speed;
        }
    },
    {
        dataType: data_cadence_1.DataCadence.type,
        getSampleValue: (sample) => {
            let cadenceValue = sample.cadence;
            if ((0, helpers_1.isNumber)(sample.fractional_cadence)) {
                cadenceValue += sample.fractional_cadence;
            }
            return cadenceValue;
        }
    },
    {
        dataType: data_speed_1.DataSpeed.type,
        getSampleValue: (sample) => {
            if (Number.isFinite(sample.enhanced_speed)) {
                return sample.enhanced_speed;
            }
            if (Number.isFinite(sample.speed)) {
                return sample.speed;
            }
            return null;
        }
    },
    {
        dataType: data_vertical_speed_1.DataVerticalSpeed.type,
        getSampleValue: (sample) => {
            return sample.vertical_speed;
        }
    },
    {
        dataType: data_power_1.DataPower.type,
        getSampleValue: (sample, sampleInfo) => {
            // Ensure power stream compliance when in some cases power sample field could be missing even if others samples have it
            // Just set watts to 0 when this happen
            // Case example: ride file "7432332116.fit"  from integration tests
            const watts = (0, helpers_1.isNumber)(sample.power) ? sample.power : (0, helpers_1.isNumber)(sample.Power) ? sample.Power : sample.RP_Power;
            return (sampleInfo === null || sampleInfo === void 0 ? void 0 : sampleInfo.hasPowerMeter) ? watts || 0 : null;
        }
    },
    {
        dataType: data_accumulated_power_1.DataAccumulatedPower.type,
        getSampleValue: (sample) => {
            return sample.accumulated_power;
        }
    },
    {
        dataType: data_temperature_1.DataTemperature.type,
        getSampleValue: (sample) => {
            return sample.temperature;
        }
    },
    {
        dataType: data_form_power_1.DataFormPower.type,
        getSampleValue: (sample) => {
            return sample['Form Power'];
        }
    },
    {
        dataType: data_air_power_1.DataAirPower.type,
        getSampleValue: (sample) => {
            return sample['Air Power'];
        }
    },
    {
        dataType: data_ground_time_1.DataGroundTime.type,
        getSampleValue: (sample) => {
            return sample['Ground Time'] / 1000;
        }
    },
    {
        dataType: data_leg_stiffness_1.DataLegStiffness.type,
        getSampleValue: (sample) => {
            return sample['Leg Spring Stiffness'];
        }
    },
    {
        dataType: data_vertical_oscillation_1.DataVerticalOscillation.type,
        getSampleValue: (sample) => {
            return sample.vertical_oscillation;
        }
    },
    {
        dataType: data_right_balance_1.DataRightBalance.type,
        getSampleValue: (sample) => {
            if (!sample.left_right_balance) {
                return null;
            }
            return sample.left_right_balance.right === true
                ? sample.left_right_balance.value
                : 100 - sample.left_right_balance.value;
        }
    },
    // @todo if conservation of data is needed this can be taken of and generated on the fly
    {
        dataType: data_left_balance_1.DataLeftBalance.type,
        getSampleValue: (sample) => {
            if (!sample.left_right_balance) {
                return null;
            }
            return sample.left_right_balance.right === false
                ? sample.left_right_balance.value
                : 100 - sample.left_right_balance.value;
        }
    },
    {
        dataType: data_stance_time_1.DataStanceTime.type,
        getSampleValue: (sample) => {
            return sample.stance_time;
        }
    },
    {
        dataType: data_stance_time_balance_left_1.DataStanceTimeBalanceLeft.type,
        getSampleValue: (sample) => {
            return sample.stance_time_balance; // The field sample refers to the balance on left leg
        }
    },
    {
        dataType: data_step_length_1.DataStepLength.type,
        getSampleValue: (sample) => {
            return sample.step_length / 1000;
        }
    },
    {
        dataType: data_vertical_ratio_1.DataVerticalRatio.type,
        getSampleValue: (sample) => {
            return sample.vertical_ratio;
        }
    }
];
