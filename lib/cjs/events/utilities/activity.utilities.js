"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityUtilities = void 0;
const data_heart_rate_1 = require("../../data/data.heart-rate");
const data_cadence_1 = require("../../data/data.cadence");
const data_speed_1 = require("../../data/data.speed");
const data_vertical_speed_1 = require("../../data/data.vertical-speed");
const data_temperature_1 = require("../../data/data.temperature");
const data_altitude_1 = require("../../data/data.altitude");
const data_power_1 = require("../../data/data.power");
const data_altitude_max_1 = require("../../data/data.altitude-max");
const data_altitude_min_1 = require("../../data/data.altitude-min");
const data_altitude_avg_1 = require("../../data/data.altitude-avg");
const data_heart_rate_max_1 = require("../../data/data.heart-rate-max");
const data_heart_rate_min_1 = require("../../data/data.heart-rate-min");
const data_heart_rate_avg_1 = require("../../data/data.heart-rate-avg");
const data_cadence_max_1 = require("../../data/data.cadence-max");
const data_cadence_min_1 = require("../../data/data.cadence-min");
const data_cadence_avg_1 = require("../../data/data.cadence-avg");
const data_speed_max_1 = require("../../data/data.speed-max");
const data_speed_min_1 = require("../../data/data.speed-min");
const data_speed_avg_1 = require("../../data/data.speed-avg");
const data_vertical_speed_max_1 = require("../../data/data.vertical-speed-max");
const data_vertical_speed_min_1 = require("../../data/data.vertical-speed-min");
const data_vertical_speed_avg_1 = require("../../data/data.vertical-speed-avg");
const data_power_max_1 = require("../../data/data.power-max");
const data_power_min_1 = require("../../data/data.power-min");
const data_power_avg_1 = require("../../data/data.power-avg");
const data_temperature_max_1 = require("../../data/data.temperature-max");
const data_temperature_min_1 = require("../../data/data.temperature-min");
const data_temperature_avg_1 = require("../../data/data.temperature-avg");
const data_distance_1 = require("../../data/data.distance");
const data_duration_1 = require("../../data/data.duration");
const data_pause_1 = require("../../data/data.pause");
const data_ascent_1 = require("../../data/data.ascent");
const data_descent_1 = require("../../data/data.descent");
const geolib_adapter_1 = require("../../geodesy/adapters/geolib.adapter");
const data_pace_max_1 = require("../../data/data.pace-max");
const data_pace_1 = require("../../data/data.pace");
const data_pace_min_1 = require("../../data/data.pace-min");
const data_pace_avg_1 = require("../../data/data.pace-avg");
const data_battery_charge_1 = require("../../data/data.battery-charge");
const data_battery_consumption_1 = require("../../data/data.battery-consumption");
const data_battery_life_estimation_1 = require("../../data/data.battery-life-estimation");
const data_latitude_degrees_1 = require("../../data/data.latitude-degrees");
const stream_1 = require("../../streams/stream");
const helpers_1 = require("./helpers");
const data_longitude_degrees_1 = require("../../data/data.longitude-degrees");
const data_energy_1 = require("../../data/data.energy");
const data_start_altitude_1 = require("../../data/data.start-altitude");
const data_end_altitude_1 = require("../../data/data.end-altitude");
const data_swim_pace_max_1 = require("../../data/data.swim-pace-max");
const data_swim_pace_1 = require("../../data/data.swim-pace");
const data_swim_pace_min_1 = require("../../data/data.swim-pace-min");
const data_swim_pace_avg_1 = require("../../data/data.swim-pace-avg");
const data_feeling_1 = require("../../data/data.feeling");
const data_power_left_1 = require("../../data/data.power-left");
const data_right_balance_1 = require("../../data/data.right-balance");
const data_left_balance_1 = require("../../data/data.left-balance");
const data_power_right_1 = require("../../data/data.power-right");
const data_air_power_min_1 = require("../../data/data.air-power-min");
const data_air_power_1 = require("../../data/data.air-power");
const data_air_power_max_1 = require("../../data/data.air-power-max");
const data_air_power_avg_1 = require("../../data/data.air-power-avg");
const data_rpe_1 = require("../../data/data.rpe");
const data_gnss_distance_1 = require("../../data/data.gnss-distance");
const data_heart_rate_zone_one_duration_1 = require("../../data/data.heart-rate-zone-one-duration");
const data_heart_rate_zone_two_duration_1 = require("../../data/data.heart-rate-zone-two-duration");
const data_heart_rate_zone_three_duration_1 = require("../../data/data.heart-rate-zone-three-duration");
const data_heart_rate_zone_four_duration_1 = require("../../data/data.heart-rate-zone-four-duration");
const data_heart_rate_zone_five_duration_1 = require("../../data/data.heart-rate-zone-five-duration");
const data_power_zone_one_duration_1 = require("../../data/data.power-zone-one-duration");
const data_power_zone_two_duration_1 = require("../../data/data.power-zone-two-duration");
const data_power_zone_three_duration_1 = require("../../data/data.power-zone-three-duration");
const data_power_zone_four_duration_1 = require("../../data/data.power-zone-four-duration");
const data_power_zone_five_duration_1 = require("../../data/data.power-zone-five-duration");
const data_speed_zone_one_duration_1 = require("../../data/data.speed-zone-one-duration");
const data_speed_zone_two_duration_1 = require("../../data/data.speed-zone-two-duration");
const data_speed_zone_three_duration_1 = require("../../data/data.speed-zone-three-duration");
const data_speed_zone_four_duration_1 = require("../../data/data.speed-zone-four-duration");
const data_speed_zone_five_duration_1 = require("../../data/data.speed-zone-five-duration");
const data_store_1 = require("../../data/data.store");
const data_start_position_1 = require("../../data/data.start-position");
const data_end_position_1 = require("../../data/data.end-position");
const data_grade_adjusted_speed_avg_1 = require("../../data/data.grade-adjusted-speed-avg");
const data_grade_adjusted_pace_avg_1 = require("../../data/data.grade-adjusted-pace-avg");
const data_grade_adjusted_speed_1 = require("../../data/data.grade-adjusted-speed");
const data_grade_adjusted_pace_1 = require("../../data/data.grade-adjusted-pace");
const data_grade_adjusted_speed_max_1 = require("../../data/data.grade-adjusted-speed-max");
const data_grade_adjusted_speed_min_1 = require("../../data/data.grade-adjusted-speed-min");
const data_grade_adjusted_pace_max_1 = require("../../data/data.grade-adjusted-pace-max");
const data_grade_adjusted_pace_min_1 = require("../../data/data.grade-adjusted-pace-min");
const data_grade_1 = require("../../data/data.grade");
const activity_types_1 = require("../../activities/activity.types");
const data_moving_time_1 = require("../../data/data.moving-time");
const data_timer_time_1 = require("../../data/data.timer-time");
const data_altitude_smooth_1 = require("../../data/data.altitude-smooth");
const data_grade_smooth_1 = require("../../data/data.grade-smooth");
const data_swolf_25m_1 = require("../../data/data.swolf-25m");
const data_swolf_50m_1 = require("../../data/data.swolf-50m");
const data_stance_time_balance_left_1 = require("../../data/data-stance-time-balance-left");
const data_stance_time_balance_right_1 = require("../../data/data-stance-time-balance-right");
const low_pass_filter_1 = require("./grade-calculator/low-pass-filter");
const data_power_normalized_1 = require("../../data/data.power-normalized");
const data_power_work_1 = require("../../data/data.power-work");
const grade_calculator_1 = require("./grade-calculator/grade-calculator");
const KalmanFilter = require('kalmanjs');
/* Configure filtering values */
// Altitude stream
const ALTITUDE_SPIKES_FILTER_WIN = 3;
// Fix abnormal streams
const SPEED_STREAM_STD_DEV_THRESHOLD_DEFAULT = 25 / 3.6; // Kph to mps
const SPEED_STREAM_STD_DEV_THRESHOLD_MAP = new Map([
    [activity_types_1.ActivityTypeGroups.Running, 15 / 3.6],
    [activity_types_1.ActivityTypeGroups.Cycling, 27 / 3.6],
    [activity_types_1.ActivityTypeGroups.Swimming, 5 / 3.6] // kph to m/s
]);
class ActivityUtilities {
    /**
     * Provide average from laps a given stat type
     */
    static getDataTypeAvgFromLaps(activity, statType, filterOver) {
        const data = activity
            .getLaps()
            .map(lap => { var _a; return (_a = lap.getStat(statType)) === null || _a === void 0 ? void 0 : _a.getValue(); })
            .filter(d => Number.isFinite(d) && (Number.isFinite(filterOver) ? d > filterOver : true));
        if (data.length > 0) {
            return this.getAverage(data);
        }
        return null;
    }
    /**
     * Provide average of a given stream type
     */
    static getDataTypeAvg(activity, streamType, startDate, endDate, filterOver) {
        const data = (activity
            .getSquashedStreamData(streamType, startDate, endDate)
            .filter(streamData => streamData !== Infinity &&
            streamData !== -Infinity &&
            (Number.isFinite(filterOver) ? streamData > filterOver : true)));
        return this.getAverage(data);
    }
    static round(value, decimals = 0) {
        const decimalsFactor = Math.pow(10, decimals);
        return Math.round(value * decimalsFactor) / decimalsFactor;
    }
    static getAverage(data) {
        return this.getSum(data) / data.length;
    }
    static getSum(data) {
        return data.reduce((sumbuff, value) => {
            sumbuff += value;
            return sumbuff;
        }, 0);
    }
    static getDataTypeMax(activity, streamType, startDate, endDate) {
        return this.getActivityDataTypeMinOrMax(activity, streamType, true, startDate, endDate);
    }
    static getDataTypeMin(activity, streamType, startDate, endDate, filterOver) {
        return this.getActivityDataTypeMinOrMax(activity, streamType, false, startDate, endDate, filterOver);
    }
    static getDataTypeMinToMaxDifference(activity, streamType, startDate, endDate) {
        return (this.getDataTypeMax(activity, streamType, startDate, endDate) -
            this.getDataTypeMin(activity, streamType, startDate, endDate));
    }
    static getDataTypeFirst(activity, streamType, startDate, endDate) {
        const data = activity.getSquashedStreamData(streamType, startDate, endDate);
        return data[0];
    }
    static getDataTypeLast(activity, streamType, startDate, endDate) {
        const data = activity.getSquashedStreamData(streamType, startDate, endDate);
        return data[data.length - 1];
    }
    static cropDistance(startDistance, endDistance, activity) {
        // Short to do the search just in case
        let startDistanceDate; // Does not sound right
        let endDistanceDate;
        // debugger;
        activity.getStreamData(data_distance_1.DataDistance.type).forEach((distanceFromData, index) => {
            // Find the index with greater dinstnce and convert it to time
            if (startDistance && !startDistanceDate && distanceFromData && distanceFromData >= startDistance) {
                startDistanceDate = new Date(activity.startDate.getTime() + index * 1000);
                return;
            }
            // Same for end
            if (endDistance && !endDistanceDate && distanceFromData && distanceFromData >= endDistance) {
                endDistanceDate = new Date(activity.startDate.getTime() + index * 1000);
                return;
            }
        });
        if (!startDistanceDate && !endDistanceDate) {
            return activity;
        }
        activity = this.cropTime(activity, startDistanceDate, endDistanceDate);
        // Remove because it is invalid, you cannot just offset the distance as a stream I think
        const distanceStream = activity.getAllStreams().find(s => data_distance_1.DataDistance.type === s.type);
        if (distanceStream) {
            activity.removeStream(distanceStream);
        }
        const gnssDistanceStream = activity.getAllStreams().find(s => data_gnss_distance_1.DataGNSSDistance.type === s.type);
        if (gnssDistanceStream) {
            activity.removeStream(gnssDistanceStream);
        }
        return activity;
    }
    /**
     * Crops left,right on time.
     * Start and end date need to be relative to the activity start / end time
     * @param activity
     * @param startDate
     * @param endDate
     */
    static cropTime(activity, startDate, endDate) {
        activity.getAllStreams().forEach(stream => {
            // Get the data for the range specified
            const trimmedStreamData = activity.getStreamData(stream.type, startDate, endDate);
            activity.removeStream(stream);
            activity.addStream(new stream_1.Stream(stream.type, trimmedStreamData));
        });
        activity.startDate = startDate || activity.startDate;
        activity.endDate = endDate || activity.endDate;
        // debugger
        return activity;
    }
    static getStreamDataTypesBasedOnDataType(streamToBaseOn, streams) {
        return streamToBaseOn.getData().reduce((accu, streamDataItem, index) => {
            if (!(0, helpers_1.isNumberOrString)(streamDataItem)) {
                return accu;
            }
            const dataItem = {
                [streamToBaseOn.type]: streamDataItem
            };
            streams.forEach(stream => {
                dataItem[stream.type] = stream.getData()[index];
            });
            accu.push(dataItem);
            return accu;
        }, []);
    }
    static getStreamDataTypesBasedOnTime(startDate, endDate, streams) {
        const streamDataBasedOnTime = {};
        for (let i = 0; i < this.getDataLength(startDate, endDate); i++) {
            // Perhaps this can be optimized with a search function
            streams.forEach((stream) => {
                if ((0, helpers_1.isNumber)(stream.getData()[i])) {
                    streamDataBasedOnTime[startDate.getTime() + i * 1000] =
                        streamDataBasedOnTime[startDate.getTime() + i * 1000] || {};
                    streamDataBasedOnTime[startDate.getTime() + i * 1000][stream.type] = stream.getData()[i];
                }
            });
        }
        return streamDataBasedOnTime;
    }
    static getDataLength(startDate, endDate) {
        return Math.ceil((+endDate - +startDate) / 1000) + 1;
    }
    static generateMissingStreamsAndStatsForActivity(activity) {
        this.generateMissingStreams(activity);
        this.fixAbnormalStreamData(activity);
        this.generateMissingStatsForActivity(activity);
        this.generateMissingSpeedDerivedStatsForActivity(activity);
        this.generateMissingUnitStatsForActivity(activity); // Perhaps this needs to happen on user level so needs to go out of here
    }
    static fixAbnormalStreamData(activity) {
        var _a, _b, _c;
        // Check if fix abnormal speed option has been enable and if we have stream data and position data (e.g. do not fix for swim pool activities)
        if (((_c = (_b = (_a = activity.parseOptions) === null || _a === void 0 ? void 0 : _a.streams) === null || _b === void 0 ? void 0 : _b.fixAbnormal) === null || _c === void 0 ? void 0 : _c.speed) &&
            activity.hasStreamData(data_speed_1.DataSpeed.type) &&
            activity.hasStreamData(data_latitude_degrees_1.DataLatitudeDegrees.type) &&
            activity.hasStreamData(data_longitude_degrees_1.DataLongitudeDegrees.type)) {
            // Check for speed data dispersion using standard deviation
            const speedStdDev = (0, helpers_1.standardDeviation)(activity.getSquashedStreamData(data_speed_1.DataSpeed.type));
            // Get speed standard deviation threshold at which we will attempt to fix the stream
            const stdDevThreshold = SPEED_STREAM_STD_DEV_THRESHOLD_MAP.get(activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity.type)) ||
                SPEED_STREAM_STD_DEV_THRESHOLD_DEFAULT;
            if (speedStdDev > stdDevThreshold) {
                // Fix/Predict speed stream through Kalman filtering
                this.shapeStream(data_speed_1.DataSpeed.type, activity, squashedSpeedData => {
                    // Grade stream
                    const SPEED_KALMAN_SMOOTHING = {
                        R: 0.01,
                        Q: speedStdDev * 2 // We intend to get a measurement error which can be under and over std dev (explaining the double factor)
                    };
                    // Apply kalman filter
                    const kf = new KalmanFilter(SPEED_KALMAN_SMOOTHING);
                    return squashedSpeedData.map(v => (v === null ? null : kf.filter(v)));
                });
            }
        }
    }
    static generateMissingStreams(activity) {
        // Compute missing streams
        this.generateMissingStreamsForActivity(activity);
        activity.addStreams(this.createUnitStreamsFromStreams(activity.getAllStreams(), activity.type));
    }
    static getSummaryStatsForActivities(activities) {
        const stats = [];
        // If only one
        if (activities.length === 1) {
            return activities[0].getStatsAsArray();
        }
        let duration = 0;
        let ascent = 0;
        let descent = 0;
        let energy = 0;
        let distance = 0;
        let pauseTime = 0;
        let averageHeartRate = 0;
        let averagePower = 0;
        let averageCadence = 0;
        let averageSpeed = 0;
        let averageGradeAdjustedSpeed = 0;
        let averagePace = 0;
        let averageGradeAdjustedPace = 0;
        let averageSwimPace = 0;
        let averageTemperature = 0;
        let averageFeeling = 0;
        let averageRPE = 0;
        // Sum Duration
        activities.forEach(activity => {
            duration += activity.getDuration().getValue();
        });
        stats.push(new data_duration_1.DataDuration(duration));
        // Sum pause time
        activities.forEach(activity => {
            pauseTime += activity.getPause().getValue();
        });
        stats.push(new data_pause_1.DataPause(pauseTime));
        // Sum Distance
        activities.forEach(activity => {
            distance += activity.getDistance().getValue();
        });
        stats.push(new data_distance_1.DataDistance(distance));
        // Sum ascent
        activities.forEach(activity => {
            const activityAscent = activity.getStat(data_ascent_1.DataAscent.type);
            if (activityAscent) {
                ascent += activityAscent.getValue();
            }
        });
        stats.push(new data_ascent_1.DataAscent(ascent));
        // Sum descent
        activities.forEach(activity => {
            const activityDescent = activity.getStat(data_descent_1.DataDescent.type);
            if (activityDescent) {
                descent += activityDescent.getValue();
            }
        });
        stats.push(new data_descent_1.DataDescent(descent));
        // Sum energy
        activities.forEach(activity => {
            const activityEnergy = activity.getStat(data_energy_1.DataEnergy.type);
            if (activityEnergy) {
                energy += activityEnergy.getValue();
            }
        });
        stats.push(new data_energy_1.DataEnergy(energy));
        // Avg Avg HR
        activities.forEach(activity => {
            const activityAvgHeartRate = activity.getStat(data_heart_rate_avg_1.DataHeartRateAvg.type);
            if (activityAvgHeartRate) {
                // The below will fallback for 0
                averageHeartRate = averageHeartRate
                    ? (averageHeartRate + activityAvgHeartRate.getValue()) / 2
                    : activityAvgHeartRate.getValue();
            }
        });
        if (averageHeartRate) {
            stats.push(new data_heart_rate_avg_1.DataHeartRateAvg(averageHeartRate));
        }
        // Avg Avg HR
        activities.forEach(activity => {
            const activityAvgHeartRate = activity.getStat(data_heart_rate_avg_1.DataHeartRateAvg.type);
            if (activityAvgHeartRate) {
                // The below will fallback for 0
                averageHeartRate = averageHeartRate
                    ? (averageHeartRate + activityAvgHeartRate.getValue()) / 2
                    : activityAvgHeartRate.getValue();
            }
        });
        if (averageHeartRate) {
            stats.push(new data_heart_rate_avg_1.DataHeartRateAvg(averageHeartRate));
        }
        // Avg Avg Power
        activities.forEach(activity => {
            const activityAvgPower = activity.getStat(data_power_avg_1.DataPowerAvg.type);
            if (activityAvgPower) {
                // The below will fallback for 0
                averagePower = averagePower
                    ? (averagePower + activityAvgPower.getValue()) / 2
                    : activityAvgPower.getValue();
            }
        });
        if (averagePower) {
            stats.push(new data_power_avg_1.DataPowerAvg(averagePower));
        }
        // Avg Avg Cadence
        activities.forEach(activity => {
            const activityAvgCadence = activity.getStat(data_cadence_avg_1.DataCadenceAvg.type);
            if (activityAvgCadence) {
                // The below will fallback for 0
                averageCadence = averageCadence
                    ? (averageCadence + activityAvgCadence.getValue()) / 2
                    : activityAvgCadence.getValue();
            }
        });
        if (averageCadence) {
            stats.push(new data_cadence_avg_1.DataCadenceAvg(averageCadence));
        }
        // Avg Avg Speed
        activities.forEach(activity => {
            const activityAvgSpeed = activity.getStat(data_speed_avg_1.DataSpeedAvg.type);
            if (activityAvgSpeed) {
                // The below will fallback for 0
                averageSpeed = averageSpeed
                    ? (averageSpeed + activityAvgSpeed.getValue()) / 2
                    : activityAvgSpeed.getValue();
            }
        });
        if (averageSpeed) {
            stats.push(new data_speed_avg_1.DataSpeedAvg(averageSpeed));
        }
        // Avg Avg Gap Speed
        activities.forEach(activity => {
            const activityAvgGradeAdjustedSpeed = activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg.type);
            if (activityAvgGradeAdjustedSpeed) {
                // The below will fallback for 0
                averageGradeAdjustedSpeed = averageGradeAdjustedSpeed
                    ? (averageGradeAdjustedSpeed + activityAvgGradeAdjustedSpeed.getValue()) / 2
                    : activityAvgGradeAdjustedSpeed.getValue();
            }
        });
        if (averageGradeAdjustedSpeed) {
            stats.push(new data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg(averageGradeAdjustedSpeed));
        }
        // Avg Avg Pace
        activities.forEach(activity => {
            const activityAvgPace = activity.getStat(data_pace_avg_1.DataPaceAvg.type);
            if (activityAvgPace) {
                // The below will fallback for 0
                averagePace = averagePace
                    ? (averagePace + activityAvgPace.getValue()) / 2
                    : activityAvgPace.getValue();
            }
        });
        if (averagePace) {
            stats.push(new data_pace_avg_1.DataPaceAvg(averagePace));
        }
        // Avg Avg GAP Pace
        activities.forEach(activity => {
            const activityAvgGradeAdjustedPace = activity.getStat(data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvg.type);
            if (activityAvgGradeAdjustedPace) {
                // The below will fallback for 0
                averageGradeAdjustedPace = averageGradeAdjustedPace
                    ? (averageGradeAdjustedPace + activityAvgGradeAdjustedPace.getValue()) / 2
                    : activityAvgGradeAdjustedPace.getValue();
            }
        });
        if (averageGradeAdjustedPace) {
            stats.push(new data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvg(averageGradeAdjustedPace));
        }
        // Avg Avg SwimPace
        activities.forEach(activity => {
            const activityAvgSwimPace = activity.getStat(data_swim_pace_avg_1.DataSwimPaceAvg.type);
            if (activityAvgSwimPace) {
                // The below will fallback for 0
                averageSwimPace = averageSwimPace
                    ? (averageSwimPace + activityAvgSwimPace.getValue()) / 2
                    : activityAvgSwimPace.getValue();
            }
        });
        if (averageSwimPace) {
            stats.push(new data_swim_pace_avg_1.DataSwimPaceAvg(averageSwimPace));
        }
        // Avg Avg Temperature
        activities.forEach(activity => {
            const activityAvgTemperature = activity.getStat(data_temperature_avg_1.DataTemperatureAvg.type);
            if (activityAvgTemperature) {
                // The below will fallback for 0
                averageTemperature = averageTemperature
                    ? (averageTemperature + activityAvgTemperature.getValue()) / 2
                    : activityAvgTemperature.getValue();
            }
        });
        if (averageTemperature) {
            stats.push(new data_temperature_avg_1.DataTemperatureAvg(averageTemperature));
        }
        // Avg Feeling
        activities.forEach(activity => {
            const activityAvgFeeling = activity.getStat(data_feeling_1.DataFeeling.type);
            if (activityAvgFeeling) {
                // The below will fallback for 0
                averageFeeling = averageFeeling
                    ? Math.ceil((averageFeeling + activityAvgFeeling.getValue()) / 2)
                    : activityAvgFeeling.getValue();
            }
        });
        if (averageFeeling) {
            stats.push(new data_feeling_1.DataFeeling(averageFeeling));
        }
        // Avg RPE
        activities.forEach(activity => {
            const activityAvgRPE = activity.getStat(data_feeling_1.DataFeeling.type);
            if (activityAvgRPE) {
                // The below will fallback for 0
                averageRPE = averageRPE
                    ? Math.ceil((averageRPE + activityAvgRPE.getValue()) / 2)
                    : activityAvgRPE.getValue();
            }
        });
        if (averageRPE) {
            stats.push(new data_rpe_1.DataRPE(averageRPE));
        }
        stats.push(...this.getIntensityZonesStatsAggregated(activities));
        // Add start and end position
        // This expects the to be sorted
        const activitiesWithStartPosition = activities.filter(activity => activity.getStat(data_start_position_1.DataStartPosition.type));
        const activitiesWithEndPosition = activities.filter(activity => activity.getStat(data_end_position_1.DataEndPosition.type));
        if (activitiesWithStartPosition && activitiesWithStartPosition.length) {
            const startPositionStat = activitiesWithStartPosition[0].getStat(data_start_position_1.DataStartPosition.type);
            stats.push(new data_start_position_1.DataStartPosition(startPositionStat.getValue()));
        }
        if (activitiesWithEndPosition && activitiesWithEndPosition.length) {
            const endPositionStat = (activitiesWithEndPosition[activitiesWithEndPosition.length - 1].getStat(data_end_position_1.DataEndPosition.type));
            stats.push(new data_end_position_1.DataEndPosition(endPositionStat.getValue()));
        }
        // debugger;
        return stats;
    }
    static getIntensityZonesStatsAggregated(statClassInstances) {
        return [
            data_heart_rate_zone_one_duration_1.DataHeartRateZoneOneDuration.type,
            data_heart_rate_zone_two_duration_1.DataHeartRateZoneTwoDuration.type,
            data_heart_rate_zone_three_duration_1.DataHeartRateZoneThreeDuration.type,
            data_heart_rate_zone_four_duration_1.DataHeartRateZoneFourDuration.type,
            data_heart_rate_zone_five_duration_1.DataHeartRateZoneFiveDuration.type,
            data_power_zone_one_duration_1.DataPowerZoneOneDuration.type,
            data_power_zone_two_duration_1.DataPowerZoneTwoDuration.type,
            data_power_zone_three_duration_1.DataPowerZoneThreeDuration.type,
            data_power_zone_four_duration_1.DataPowerZoneFourDuration.type,
            data_power_zone_five_duration_1.DataPowerZoneFiveDuration.type,
            data_speed_zone_one_duration_1.DataSpeedZoneOneDuration.type,
            data_speed_zone_two_duration_1.DataSpeedZoneTwoDuration.type,
            data_speed_zone_three_duration_1.DataSpeedZoneThreeDuration.type,
            data_speed_zone_four_duration_1.DataSpeedZoneFourDuration.type,
            data_speed_zone_five_duration_1.DataSpeedZoneFiveDuration.type
        ].reduce((statsArray, zone) => {
            const zoneDuration = statClassInstances.reduce((duration, statClassInstance) => {
                const durationStat = statClassInstance.getStat(zone);
                if (durationStat) {
                    duration = duration || 0;
                    duration += durationStat.getValue();
                }
                return duration;
            }, null);
            if ((0, helpers_1.isNumber)(zoneDuration)) {
                statsArray.push(data_store_1.DynamicDataLoader.getDataInstanceFromDataType(zone, zoneDuration));
            }
            return statsArray;
        }, []);
    }
    static getActivityDataTypeGain(activity, streamType, starDate, endDate, minDiff) {
        return this.getActivityDataTypeGainOrLoss(activity, streamType, true, starDate, endDate, minDiff);
    }
    static getActivityDataTypeLoss(activity, streamType, starDate, endDate, minDiff) {
        return this.getActivityDataTypeGainOrLoss(activity, streamType, false, starDate, endDate, minDiff);
    }
    static getGainOrLoss(data, gain, minDiff = 2) {
        let gainOrLoss = 0;
        if (!(data === null || data === void 0 ? void 0 : data.length)) {
            return null;
        }
        data.reduce((previousValue, nextValue) => {
            // For gain
            if (gain) {
                // Increase the gain if eligible first check to be greater plus diff  [200, 300, 400, 100, 101, 102]
                if (previousValue + minDiff <= nextValue) {
                    gainOrLoss += nextValue - previousValue;
                    return nextValue;
                }
                // if not eligible check if smaller without the diff and if yes do not register it and send it back as the last to check against
                if (previousValue < nextValue) {
                    return previousValue;
                }
                return nextValue;
            }
            // For Loss
            if (previousValue - minDiff >= nextValue) {
                gainOrLoss += previousValue - nextValue;
                return nextValue;
            }
            // if not eligible check if smaller without the diff and if yes do not register it and send it back as the last to check against
            if (previousValue > nextValue) {
                return previousValue;
            }
            return nextValue;
        }, data[0]);
        return gainOrLoss;
    }
    static getMax(data) {
        return data.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue), -Infinity);
    }
    static getMin(data) {
        return data.reduce((previousValue, currentValue) => Math.min(previousValue, currentValue), Infinity);
    }
    static calculateTotalDistanceForActivity(activity, startDate, endDate) {
        return this.geoLibAdapter.getDistance(activity.getPositionData(startDate, endDate).filter(position => position !== null));
    }
    /**
     * Returns streams that derive from speed based on the activity type
     * @param speedStream
     * @param activityType
     */
    static createByActivityTypeSpeedBasedStreams(speedStream, activityType) {
        return activity_types_1.ActivityTypesHelper.speedDerivedDataTypesToUseForActivityType(activityType).reduce((array, dataType) => {
            switch (dataType) {
                case data_pace_1.DataPace.type:
                    return array.concat([
                        new stream_1.Stream(data_pace_1.DataPace.type, speedStream.getData().map(dataValue => {
                            if (!(0, helpers_1.isNumber)(dataValue)) {
                                return null;
                            }
                            return (0, helpers_1.convertSpeedToPace)(dataValue);
                        }))
                    ]);
                case data_swim_pace_1.DataSwimPace.type:
                    return array.concat([
                        new stream_1.Stream(data_swim_pace_1.DataSwimPace.type, speedStream.getData().map(dataValue => {
                            if (!(0, helpers_1.isNumber)(dataValue)) {
                                return null;
                            }
                            return (0, helpers_1.convertSpeedToSwimPace)(dataValue);
                        }))
                    ]);
                case data_speed_1.DataSpeed.type:
                    return array.concat(speedStream);
                default:
                    return array;
            }
        }, []);
    }
    /**
     * Returns streams that derive from grade adjusted speed based on the activity type
     * @param gradeAdjustedSpeedStream
     * @param activityType
     */
    static createByActivityTypeAltiDistanceSpeedBasedStreams(gradeAdjustedSpeedStream, activityType) {
        return activity_types_1.ActivityTypesHelper.altiDistanceSpeedDerivedDataTypesToUseForActivityType(activityType).reduce((array, dataType) => {
            switch (dataType) {
                case data_grade_adjusted_pace_1.DataGradeAdjustedPace.type:
                    return array.concat([
                        new stream_1.Stream(data_grade_adjusted_pace_1.DataGradeAdjustedPace.type, gradeAdjustedSpeedStream.getData().map(dataValue => {
                            if (!(0, helpers_1.isNumber)(dataValue)) {
                                return null;
                            }
                            return (0, helpers_1.convertSpeedToPace)(dataValue);
                        }))
                    ]);
                case data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type:
                    return array.concat(gradeAdjustedSpeedStream);
                default:
                    return array;
            }
        }, []);
    }
    /**
     * @todo unit test (get the pun?)
     * This creates streams that are deriving as unit based streams
     * For example it will create pace from speed, swim pace from speed but also speed in km/h as a unitstream
     * @param streams
     * @param activityType
     * @param unitStreamTypes DynamicDataLoader.allUnitDerivedDataTypes this acts like a whitelist for the unit derived units ONLY!
     */
    static createUnitStreamsFromStreams(streams, activityType, unitStreamTypes) {
        // @todo perhaps check input to be unitStreamTypesStrictly
        const unitStreamTypesToCreate = unitStreamTypes || data_store_1.DynamicDataLoader.allUnitDerivedDataTypes;
        let baseUnitStreams = [];
        const speedStream = streams.find(stream => stream.type === data_speed_1.DataSpeed.type);
        if (speedStream) {
            baseUnitStreams = baseUnitStreams.concat(this.createByActivityTypeSpeedBasedStreams(speedStream, activityType));
        }
        const gradeAdjustedSpeedStream = streams.find(stream => stream.type === data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type);
        if (gradeAdjustedSpeedStream) {
            baseUnitStreams = baseUnitStreams.concat(this.createByActivityTypeAltiDistanceSpeedBasedStreams(gradeAdjustedSpeedStream, activityType));
        }
        const verticalSpeedStream = streams.find(stream => stream.type === data_vertical_speed_1.DataVerticalSpeed.type);
        if (verticalSpeedStream) {
            // For vertical speed (yet) we dont need a seperate function so just add the base that is the "derived" one
            baseUnitStreams = activity_types_1.ActivityTypesHelper.verticalSpeedDerivedDataTypesToUseForActivityType(activityType).length
                ? baseUnitStreams.concat(verticalSpeedStream)
                : baseUnitStreams;
        }
        // @todo add distance ?
        const startWith = baseUnitStreams.filter(baseUnitStream => unitStreamTypesToCreate.indexOf(baseUnitStream.type) !== -1 && streams.indexOf(baseUnitStream) === -1);
        return Object.keys(data_store_1.DynamicDataLoader.dataTypeUnitGroups).reduce((array, baseDataType) => {
            const baseStream = baseUnitStreams.find(stream => stream.type === baseDataType);
            if (!baseStream) {
                return array;
            }
            const unitStreams = Object.keys(data_store_1.DynamicDataLoader.dataTypeUnitGroups[baseDataType])
                .filter(unitBasedDataType => unitStreamTypesToCreate.indexOf(unitBasedDataType) !== -1) // @todo perhaps dont filter
                .map(unitBasedDataType => {
                return new stream_1.Stream(unitBasedDataType, baseStream.getData().map(dataValue => {
                    if (!(0, helpers_1.isNumber)(dataValue)) {
                        return null;
                    }
                    return data_store_1.DynamicDataLoader.dataTypeUnitGroups[baseDataType][unitBasedDataType](dataValue);
                }));
            });
            return array.concat(unitStreams);
        }, startWith);
    }
    /**
     * Generates missing streams for an activity such as distance etc if they are missing
     * This will always create a steam even if the distance is 0
     * @param activity
     */
    static generateMissingStreamsForActivity(activity) {
        var _a, _b, _c, _d, _e, _f;
        // Create derived primitive streams which will be needed for others streams & stats computations
        this.createDerivedStreams(activity);
        // First add any missing data to the streams via interpolating and extrapolating
        this.addMissingDataToStreams(activity);
        if (activity.hasStreamData(data_latitude_degrees_1.DataLatitudeDegrees.type) &&
            activity.hasStreamData(data_longitude_degrees_1.DataLongitudeDegrees.type) &&
            (!activity.hasStreamData(data_distance_1.DataDistance.type) || !activity.hasStreamData(data_gnss_distance_1.DataGNSSDistance.type))) {
            const streamData = activity.createStream(data_distance_1.DataDistance.type).getData(); // Creating does not add it to activity just presets the resolution to 1s
            let distance = 0;
            streamData[0] = distance; // Force first distance sample to be equal to 0 instead of null
            activity
                .getPositionData()
                .reduce((prevPosition, position, index) => {
                if (!position) {
                    return prevPosition;
                }
                if (prevPosition && position) {
                    distance += this.round(this.geoLibAdapter.getDistance([prevPosition, position]), 2);
                }
                streamData[index] = distance;
                return position;
            });
            if (!activity.hasStreamData(data_distance_1.DataDistance.type)) {
                activity.addStream(new stream_1.Stream(data_distance_1.DataDistance.type, streamData));
            }
            if (!activity.hasStreamData(data_gnss_distance_1.DataGNSSDistance.type)) {
                activity.addStream(new stream_1.Stream(data_gnss_distance_1.DataGNSSDistance.type, streamData));
            }
            if (!activity.hasStreamData(data_speed_1.DataSpeed.type)) {
                const speedStreamData = activity.createStream(data_speed_1.DataSpeed.type).getData();
                const distanceStream = activity.getStreamDataByDuration(data_distance_1.DataDistance.type);
                let previousDistanceItem;
                distanceStream.forEach((distanceItem, index) => {
                    // Use the first distance item value if previous distance is unknown
                    if (!previousDistanceItem) {
                        previousDistanceItem = distanceItem;
                    }
                    // If know distance then compute speed from last known distance item
                    if (Number.isFinite(distanceItem.value)) {
                        const deltaTime = (distanceItem.time - previousDistanceItem.time) / 1000;
                        const deltaDistance = (distanceItem === null || distanceItem === void 0 ? void 0 : distanceItem.value) ? distanceItem.value - ((previousDistanceItem === null || previousDistanceItem === void 0 ? void 0 : previousDistanceItem.value) || 0) : 0;
                        speedStreamData[index] = this.round(deltaTime > 0 ? deltaDistance / deltaTime : 0, 3);
                        // Keep tracking of last know distance item
                        previousDistanceItem = distanceItem;
                    }
                    else {
                        speedStreamData[index] = null;
                    }
                });
                activity.addStream(new stream_1.Stream(data_speed_1.DataSpeed.type, speedStreamData));
            }
        }
        // Check if we can get a grade stream
        if (((_c = (_b = (_a = activity.parseOptions) === null || _a === void 0 ? void 0 : _a.streams) === null || _b === void 0 ? void 0 : _b.smooth) === null || _c === void 0 ? void 0 : _c.grade) &&
            !activity.hasStreamData(data_grade_1.DataGrade.type) &&
            activity.hasStreamData(data_distance_1.DataDistance.type) &&
            (activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) || activity.hasStreamData(data_altitude_1.DataAltitude.type))) {
            const distanceData = activity.getStreamData(data_distance_1.DataDistance.type);
            const altitudeData = activity.getStreamData(activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) ? data_altitude_smooth_1.DataAltitudeSmooth.type : data_altitude_1.DataAltitude.type);
            // Create the grade stream from time, distance and altitude non-squashed streams
            const timeData = activity.generateTimeStream([data_distance_1.DataDistance.type]);
            const gradeStreamData = grade_calculator_1.GradeCalculator.computeGradeStream(timeData.getData(), distanceData, altitudeData);
            // Append new grade stream to activity
            activity.addStream(new stream_1.Stream(data_grade_1.DataGrade.type, gradeStreamData));
            if ((_f = (_e = (_d = activity.parseOptions) === null || _d === void 0 ? void 0 : _d.streams) === null || _e === void 0 ? void 0 : _e.smooth) === null || _f === void 0 ? void 0 : _f.gradeSmooth) {
                // Duplicate and create an altitude smooth stream (we want to keep original altitude stream available)
                // Activity stats and grade adjusted speed will be computed on the smoothed altitude stream
                this.cloneStream(activity, data_grade_1.DataGrade.type, data_grade_smooth_1.DataGradeSmooth.type);
                // Smooth grade computed stream
                this.shapeStream(data_grade_smooth_1.DataGradeSmooth.type, activity, squashedGradeData => {
                    // Grade stream
                    const GRADE_KALMAN_SMOOTHING = {
                        R: 0.01,
                        Q: 0.5 // Grade measurement error which can be expected
                    };
                    // Predict proper grade values
                    const kf = new KalmanFilter(GRADE_KALMAN_SMOOTHING);
                    return squashedGradeData.map(v => (v === null ? null : kf.filter(v)));
                });
            }
        }
        // Get a grade adjusted speed (the model applies to running only)
        if ((activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity.type) === activity_types_1.ActivityTypeGroups.Running ||
            activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity.type) === activity_types_1.ActivityTypeGroups.TrailRunning) &&
            !activity.hasStreamData(data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type) &&
            activity.hasStreamData(data_grade_smooth_1.DataGradeSmooth.type) &&
            activity.hasStreamData(data_speed_1.DataSpeed.type)) {
            const speedStreamData = activity.getStreamData(data_speed_1.DataSpeed.type);
            const gradeStreamData = activity.getStreamData(data_grade_smooth_1.DataGradeSmooth.type);
            const gradeAdjustedSpeedData = speedStreamData.map((value, index) => value === null ? null : this.round(grade_calculator_1.GradeCalculator.estimateAdjustedSpeed(value, gradeStreamData[index] || 0), 2));
            // Ensure first grade adjusted pace dont start with 0 (it's common) meaning infinity
            if (!gradeAdjustedSpeedData[0]) {
                const firstKnownValue = gradeAdjustedSpeedData.find(v => v > 0);
                gradeAdjustedSpeedData[0] = firstKnownValue ? firstKnownValue : gradeAdjustedSpeedData[0];
            }
            activity.addStream(new stream_1.Stream(data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type, gradeAdjustedSpeedData));
        }
        if (activity.hasStreamData(data_power_1.DataPower.type) &&
            activity.hasStreamData(data_right_balance_1.DataRightBalance.type) &&
            !activity.hasStreamData(data_power_right_1.DataPowerRight.type)) {
            const rightPowerStream = activity.createStream(data_power_right_1.DataPowerRight.type);
            const powerStreamData = activity.getStreamData(data_power_1.DataPower.type);
            const rightBalanceStreamData = activity.getStreamData(data_right_balance_1.DataRightBalance.type);
            rightPowerStream.setData(rightBalanceStreamData.reduce((accu, streamData, index) => {
                const powerStreamDataItem = powerStreamData[index];
                if (streamData === null || !powerStreamData || powerStreamDataItem === null) {
                    return accu;
                }
                accu[index] = (streamData / 100) * powerStreamDataItem;
                return accu;
            }, []));
            activity.addStream(rightPowerStream);
        }
        if (activity.hasStreamData(data_power_1.DataPower.type) &&
            activity.hasStreamData(data_left_balance_1.DataLeftBalance.type) &&
            !activity.hasStreamData(data_power_left_1.DataPowerLeft.type)) {
            const leftPowerStream = activity.createStream(data_power_left_1.DataPowerLeft.type);
            const powerStreamData = activity.getStreamData(data_power_1.DataPower.type);
            const leftBalanceStreamData = activity.getStreamData(data_left_balance_1.DataLeftBalance.type);
            leftPowerStream.setData(leftBalanceStreamData.reduce((accu, streamData, index) => {
                const powerStreamDataItem = powerStreamData[index];
                if (streamData === null || !powerStreamData || powerStreamDataItem === null) {
                    return accu;
                }
                accu[index] = (streamData / 100) * powerStreamDataItem;
                return accu;
            }, []));
            activity.addStream(leftPowerStream);
        }
        // If left stance time stream available, then add the right balance stream too
        if (activity.hasStreamData(data_stance_time_balance_left_1.DataStanceTimeBalanceLeft.type)) {
            const rightStanceBalanceTimeStream = activity.createStream(data_stance_time_balance_right_1.DataStanceTimeBalanceRight.type);
            const leftStanceBalanceTimeStream = activity.getStreamData(data_stance_time_balance_left_1.DataStanceTimeBalanceLeft.type);
            const rightStanceBalanceTimeData = leftStanceBalanceTimeStream.map(leftBalance => {
                return Number.isFinite(leftBalance) ? 100 - leftBalance : null;
            });
            rightStanceBalanceTimeStream.setData(rightStanceBalanceTimeData);
            activity.addStream(rightStanceBalanceTimeStream);
        }
        return activity;
    }
    /**
     * Provides squashed stream data through callback for data manipulation.
     * Then rebuild the stream based on duration including the missing values (null, Infinity, ...) like the source stream
     * @param streamType
     * @param activity
     * @param shapeStreamData
     */
    static shapeStream(streamType, activity, shapeStreamData) {
        let streamDataByDuration = activity.getStreamDataByDuration(streamType, true, true);
        // Shape data along function param
        const streamData = shapeStreamData(streamDataByDuration.map(item => item.value));
        // Update streamDataByDuration with shaped data
        streamDataByDuration = streamDataByDuration.map((item, index) => {
            item.value = streamData[index];
            return item;
        });
        // Rebuild/replace stream with new shaped value
        activity.removeStream(streamType);
        activity.addStream(activity.createStream(streamType));
        const activityStartTime = activity.startDate.getTime();
        streamDataByDuration.forEach(item => {
            activity.addDataToStream(streamType, new Date(activityStartTime + item.time), item.value);
        });
    }
    static cloneStream(activity, sourceStreamType, targetStreamType) {
        const sourceStream = activity.getStream(sourceStreamType);
        const targetStream = activity.createStream(targetStreamType);
        targetStream.setData(Array.from(sourceStream.getData())); // Shallow copy data to new stream
        activity.addStream(targetStream);
    }
    /**
     * Create derived primitive streams which will be needed for others streams & stats computations
     * @param activity
     */
    static createDerivedStreams(activity) {
        var _a, _b, _c;
        if (((_c = (_b = (_a = activity.parseOptions) === null || _a === void 0 ? void 0 : _a.streams) === null || _b === void 0 ? void 0 : _b.smooth) === null || _c === void 0 ? void 0 : _c.altitudeSmooth) &&
            activity.hasStreamData(data_altitude_1.DataAltitude.type) &&
            !activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type)) {
            // Duplicate and create an altitude smooth stream (we want to keep original altitude stream available)
            // Activity stats will be computed on the smoothed altitude stream
            this.cloneStream(activity, data_altitude_1.DataAltitude.type, data_altitude_smooth_1.DataAltitudeSmooth.type);
            // Remove spiky data altitudes
            this.shapeStream(data_altitude_smooth_1.DataAltitudeSmooth.type, activity, squashedAltData => {
                squashedAltData = (0, helpers_1.medianFilter)(squashedAltData, ALTITUDE_SPIKES_FILTER_WIN); // Remove data spikes
                squashedAltData = low_pass_filter_1.LowPassFilter.smooth(squashedAltData); // Remove too high altitude frequencies
                return squashedAltData;
            });
        }
        return activity;
    }
    /**
     * Back and forth fills an activity's stream data so they can be more "tree" like
     * It does this for:
     *
     *  [DataAltitude.type,
     * DataHeartRate.type,
     * DataCadence.type,
     * DataDistance.type]
     *
     * Example
     *
     * Distance[0, 10, 30, 40, 50,null,60] #null here is legit eg missing record
     * Altitude[100, 101, null, 103, null, null, 106]
     * Should be
     * Altitude[100,101,101,103,103,103,106]
     *
     * @param activity
     */
    static addMissingDataToStreams(activity) {
        /**
         * This tries to align data with Strava.
         * Strava fills HR alti cadence with the last value.
         * For Power and temperature it doesn't but keeps nulls.
         * However, if you keep nulls for paused portions then strava doens't give back null
         * that typically indicates a sensor disconnect I suppose.
         */
        const streamTypesToBackAndForthFill = [
            data_altitude_1.DataAltitude.type,
            data_heart_rate_1.DataHeartRate.type,
            data_cadence_1.DataCadence.type,
            data_distance_1.DataDistance.type
            // DataSpeed.type, @todo should we be backfilling speed?
        ];
        // First generate the time stream
        const timeStream = activity.generateTimeStream();
        /**
         * We do a second pass here and we add missing data on crossing time indexes
         * for example:
         * Time[0,1,2,3,4,5,7]
         * Distance[0, 10, 30, 40, 50,null,60] #null here is legit eg missing record
         * Altitude[100, 101, null, 103, null, null, 106]
         * Should be
         * Altitude[100,101,101,103,103,103,106]
         */
        activity
            .getAllStreams()
            .filter(stream => streamTypesToBackAndForthFill.indexOf(stream.type) !== -1)
            .forEach(stream => {
            // Find the first sample value
            let currentValue = stream.getData(true, true)[0];
            // The time stream will always have more length than each stream when not back/forthfilled
            const timeStreamData = timeStream.getData();
            stream.setData(timeStreamData.reduce((data, time, timeIndex) => {
                // If there is no timeslot put whatever was
                if (!(0, helpers_1.isNumber)(time)) {
                    data.push(stream.getData()[timeIndex]);
                    return data;
                }
                // We have a time slot here on ...  (for the first run, old is the very first next)
                // If it's a number set the current , else leave it to old to forth fill
                if ((0, helpers_1.isNumber)(stream.getData()[time])) {
                    currentValue = stream.getData()[time];
                }
                // Fill the current or old...
                data.push(currentValue);
                return data;
            }, []));
        });
        /**
         * @todo
         * Linear fill distance where:
         * a) There is not distance but it's not paused
         * b) There is no corespoding lat/long but there is distace (aka distance = not trusted)
         * About B I am not sure. That is because if there is for example an internal accelerometer
         * that reports better this can help with pace and other things. Even for GAP
         */
        // Fix activity having broken start lat/lng
        // Case: "fixtures/others/broken-start-latlng.fit"
        if (activity.hasStreamData(data_longitude_degrees_1.DataLongitudeDegrees.type)) {
            this.shapeStream(data_longitude_degrees_1.DataLongitudeDegrees.type, activity, (squashedData) => {
                const firstKnownCoord = squashedData.find(l => l != 0);
                if (firstKnownCoord != null) {
                    let index = 0;
                    while (squashedData[index] === 0) {
                        squashedData[index] = firstKnownCoord;
                        index++;
                    }
                }
                return squashedData;
            });
        }
        if (activity.hasStreamData(data_latitude_degrees_1.DataLatitudeDegrees.type)) {
            this.shapeStream(data_latitude_degrees_1.DataLatitudeDegrees.type, activity, (squashedData) => {
                const firstKnownCoord = squashedData.find(l => l != 0);
                if (firstKnownCoord != null) {
                    let index = 0;
                    while (squashedData[index] === 0) {
                        squashedData[index] = firstKnownCoord;
                        index++;
                    }
                }
                return squashedData;
            });
        }
    }
    /**
     *
     * @param secondsPer100m
     * @param avgStrokesPerMin
     * @param poolLength
     */
    static computeSwimSwolf(secondsPer100m, avgStrokesPerMin, poolLength) {
        const minutesPer100m = secondsPer100m / 60;
        const avgStrokePer100m = avgStrokesPerMin * minutesPer100m;
        const strokesPerMeter = avgStrokePer100m / 100;
        const secondsPerMeter = secondsPer100m / 100;
        return this.round((secondsPerMeter + strokesPerMeter) * poolLength, 1);
    }
    /**
     * Andrew Coggan weighted power compute method
     * 1) starting at the 30s mark, calculate a rolling 30 s average (of the preceding time points, obviously).
     * 2) raise all the values obtained in step #1 to the 4th power.
     * 3) take the average of all of the values obtained in step #2.
     * 4) take the 4th root of the value obtained in step #3.
     * (And when you get tired of exporting every file to, e.g., Excel to perform such calculations, help develop a program
     * like WKO+ to do the work for you <g>.)
     */
    static computeNormalizedPower(powerArray, timeArray) {
        const WEIGHTED_WATTS_TIME_BUFFER = 30; // Seconds
        const poweredWeightedWatts = [];
        let accumulatedTimeInBuffer = 0; // seconds
        let wattsInBuffer = [];
        for (const [index, current] of timeArray.entries()) {
            if (index === 0) {
                continue;
            }
            wattsInBuffer.push(powerArray[index]);
            if (accumulatedTimeInBuffer >= WEIGHTED_WATTS_TIME_BUFFER) {
                const meanWatts = this.getAverage(wattsInBuffer);
                if (Number.isFinite(meanWatts)) {
                    poweredWeightedWatts.push(Math.pow(meanWatts, 4));
                }
                // Reset
                accumulatedTimeInBuffer = 0;
                wattsInBuffer = [];
            }
            accumulatedTimeInBuffer += current - timeArray[index - 1];
        }
        return Math.sqrt(Math.sqrt(this.getAverage(poweredWeightedWatts)));
    }
    static getActivityDataTypeGainOrLoss(activity, streamType, gain, startDate, endDate, minDiff) {
        return this.getGainOrLoss(activity.getSquashedStreamData(streamType, startDate, endDate), gain, minDiff);
    }
    static getActivityDataTypeMinOrMax(activity, streamType, max, startDate, endDate, filterOver) {
        const data = activity
            .getSquashedStreamData(streamType, startDate, endDate)
            .filter(streamData => streamData !== Infinity &&
            streamData !== -Infinity &&
            (Number.isFinite(filterOver) ? streamData > filterOver : true));
        if (max) {
            return this.getMax(data);
        }
        return this.getMin(data);
    }
    /**
     * Generates the stats for an activity
     * @todo move to factory with next version
     * @param activity
     */
    static generateMissingStatsForActivity(activity) {
        // If there is no distance or distance for some reason is 0
        const activityDistanceStat = activity.getStat(data_distance_1.DataDistance.type);
        if (!activityDistanceStat || activityDistanceStat.getValue() === 0) {
            let distance = 0;
            if (activity.hasStreamData(data_distance_1.DataDistance.type)) {
                const distanceData = activity.getSquashedStreamData(data_distance_1.DataDistance.type);
                distance = distanceData[distanceData.length - 1] - distanceData[0] || 0;
            }
            else if (activity.hasStreamData(data_longitude_degrees_1.DataLongitudeDegrees.type) &&
                activity.hasStreamData(data_latitude_degrees_1.DataLatitudeDegrees.type)) {
                distance = this.calculateTotalDistanceForActivity(activity, activity.startDate, activity.endDate);
            }
            activity.addStat(new data_distance_1.DataDistance(distance));
        }
        if (!activity.getStat(data_gnss_distance_1.DataGNSSDistance.type) && activity.hasStreamData(data_gnss_distance_1.DataGNSSDistance.type)) {
            activity.addStat(new data_gnss_distance_1.DataGNSSDistance(activity.getSquashedStreamData(data_gnss_distance_1.DataGNSSDistance.type)[activity.getSquashedStreamData(data_gnss_distance_1.DataGNSSDistance.type).length - 1]));
        }
        // Ascent (altitude gain)
        if (!activity.getStat(data_ascent_1.DataAscent.type) &&
            (activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) || activity.hasStreamData(data_altitude_1.DataAltitude.type))) {
            const gain = this.getActivityDataTypeGain(activity, activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) ? data_altitude_smooth_1.DataAltitudeSmooth.type : data_altitude_1.DataAltitude.type);
            if (gain !== null) {
                activity.addStat(new data_ascent_1.DataAscent(gain));
            }
        }
        // Descent (altitude loss)
        if (!activity.getStat(data_descent_1.DataDescent.type) &&
            (activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) || activity.hasStreamData(data_altitude_1.DataAltitude.type))) {
            const loss = this.getActivityDataTypeLoss(activity, activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) ? data_altitude_smooth_1.DataAltitudeSmooth.type : data_altitude_1.DataAltitude.type);
            if (loss !== null) {
                activity.addStat(new data_descent_1.DataDescent(loss));
            }
        }
        // Altitude Max
        if (!activity.getStat(data_altitude_max_1.DataAltitudeMax.type) &&
            (activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) || activity.hasStreamData(data_altitude_1.DataAltitude.type))) {
            activity.addStat(new data_altitude_max_1.DataAltitudeMax(this.getDataTypeMax(activity, activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) ? data_altitude_smooth_1.DataAltitudeSmooth.type : data_altitude_1.DataAltitude.type)));
        }
        // Altitude Min
        if (!activity.getStat(data_altitude_min_1.DataAltitudeMin.type) &&
            (activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) || activity.hasStreamData(data_altitude_1.DataAltitude.type))) {
            activity.addStat(new data_altitude_min_1.DataAltitudeMin(this.getDataTypeMin(activity, activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) ? data_altitude_smooth_1.DataAltitudeSmooth.type : data_altitude_1.DataAltitude.type)));
        }
        // Altitude Avg
        if (!activity.getStat(data_altitude_avg_1.DataAltitudeAvg.type) &&
            (activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) || activity.hasStreamData(data_altitude_1.DataAltitude.type))) {
            activity.addStat(new data_altitude_avg_1.DataAltitudeAvg(this.getDataTypeAvg(activity, activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) ? data_altitude_smooth_1.DataAltitudeSmooth.type : data_altitude_1.DataAltitude.type)));
        }
        // Altitude start
        if (!activity.getStat(data_start_altitude_1.DataStartAltitude.type) &&
            (activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) || activity.hasStreamData(data_altitude_1.DataAltitude.type)) &&
            this.getDataTypeFirst(activity, activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) ? data_altitude_smooth_1.DataAltitudeSmooth.type : data_altitude_1.DataAltitude.type)) {
            activity.addStat(new data_start_altitude_1.DataStartAltitude(this.getDataTypeFirst(activity, activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) ? data_altitude_smooth_1.DataAltitudeSmooth.type : data_altitude_1.DataAltitude.type)));
        }
        // Altitude end
        if (!activity.getStat(data_end_altitude_1.DataEndAltitude.type) &&
            (activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) || activity.hasStreamData(data_altitude_1.DataAltitude.type)) &&
            this.getDataTypeLast(activity, activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) ? data_altitude_smooth_1.DataAltitudeSmooth.type : data_altitude_1.DataAltitude.type)) {
            activity.addStat(new data_end_altitude_1.DataEndAltitude(this.getDataTypeLast(activity, activity.hasStreamData(data_altitude_smooth_1.DataAltitudeSmooth.type) ? data_altitude_smooth_1.DataAltitudeSmooth.type : data_altitude_1.DataAltitude.type)));
        }
        // Heart Rate  Max
        if (!activity.getStat(data_heart_rate_max_1.DataHeartRateMax.type) && activity.hasStreamData(data_heart_rate_1.DataHeartRate.type)) {
            activity.addStat(new data_heart_rate_max_1.DataHeartRateMax(this.getDataTypeMax(activity, data_heart_rate_1.DataHeartRate.type)));
        }
        // Heart Rate Min
        if (!activity.getStat(data_heart_rate_min_1.DataHeartRateMin.type) && activity.hasStreamData(data_heart_rate_1.DataHeartRate.type)) {
            activity.addStat(new data_heart_rate_min_1.DataHeartRateMin(this.getDataTypeMin(activity, data_heart_rate_1.DataHeartRate.type)));
        }
        // Heart Rate Avg
        if (!activity.getStat(data_heart_rate_avg_1.DataHeartRateAvg.type) && activity.hasStreamData(data_heart_rate_1.DataHeartRate.type)) {
            activity.addStat(new data_heart_rate_avg_1.DataHeartRateAvg(this.round(this.getDataTypeAvg(activity, data_heart_rate_1.DataHeartRate.type))));
        }
        // Cadence Max
        if (!activity.getStat(data_cadence_max_1.DataCadenceMax.type) && activity.hasStreamData(data_cadence_1.DataCadence.type)) {
            activity.addStat(new data_cadence_max_1.DataCadenceMax(this.getDataTypeMax(activity, data_cadence_1.DataCadence.type)));
        }
        // Cadence Min
        if (!activity.getStat(data_cadence_min_1.DataCadenceMin.type) && activity.hasStreamData(data_cadence_1.DataCadence.type)) {
            // Get min cadence except 0. A 0 cadence is not meaningful.
            const minCadenceOver = 0;
            activity.addStat(new data_cadence_min_1.DataCadenceMin(this.getDataTypeMin(activity, data_cadence_1.DataCadence.type, undefined, undefined, minCadenceOver)));
        }
        // Cadence Avg
        if (!activity.getStat(data_cadence_avg_1.DataCadenceAvg.type) && activity.hasStreamData(data_cadence_1.DataCadence.type)) {
            // Get avg cadence except 0 values. Platforms like garmin/strava don't include 0 cadences in their averages.
            const avgCadenceOver = 0;
            const avgCadence = this.getDataTypeAvg(activity, data_cadence_1.DataCadence.type, undefined, undefined, avgCadenceOver);
            activity.addStat(new data_cadence_avg_1.DataCadenceAvg(this.round(avgCadence)));
        }
        // Speed Max
        if (!activity.getStat(data_speed_max_1.DataSpeedMax.type) && activity.hasStreamData(data_speed_1.DataSpeed.type)) {
            activity.addStat(new data_speed_max_1.DataSpeedMax(this.getDataTypeMax(activity, data_speed_1.DataSpeed.type)));
        }
        // Speed Min
        if (!activity.getStat(data_speed_min_1.DataSpeedMin.type) && activity.hasStreamData(data_speed_1.DataSpeed.type)) {
            activity.addStat(new data_speed_min_1.DataSpeedMin(this.getDataTypeMin(activity, data_speed_1.DataSpeed.type)));
        }
        // Speed Avg
        if (!activity.getStat(data_speed_avg_1.DataSpeedAvg.type) && activity.hasStreamData(data_speed_1.DataSpeed.type)) {
            activity.addStat(new data_speed_avg_1.DataSpeedAvg(this.getDataTypeAvg(activity, data_speed_1.DataSpeed.type)));
        }
        // Grade Adjusted Speed Max
        if (!activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax.type) && activity.hasStreamData(data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type)) {
            activity.addStat(new data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax(this.getDataTypeMax(activity, data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type)));
        }
        // Grade Adjusted Speed Min
        if (!activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin.type) && activity.hasStreamData(data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type)) {
            activity.addStat(new data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin(this.getDataTypeMin(activity, data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type)));
        }
        // Grade Adjusted Speed Avg
        if (!activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg.type) && activity.hasStreamData(data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type)) {
            activity.addStat(new data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg(this.getDataTypeAvg(activity, data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type)));
        }
        // Vertical Speed Max
        if (!activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMax.type) && activity.hasStreamData(data_vertical_speed_1.DataVerticalSpeed.type)) {
            activity.addStat(new data_vertical_speed_max_1.DataVerticalSpeedMax(this.getDataTypeMax(activity, data_vertical_speed_1.DataVerticalSpeed.type)));
        }
        // Vertical Speed Min
        if (!activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMin.type) && activity.hasStreamData(data_vertical_speed_1.DataVerticalSpeed.type)) {
            activity.addStat(new data_vertical_speed_min_1.DataVerticalSpeedMin(this.getDataTypeMin(activity, data_vertical_speed_1.DataVerticalSpeed.type)));
        }
        // Vertical Speed Avg
        if (!activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvg.type) && activity.hasStreamData(data_vertical_speed_1.DataVerticalSpeed.type)) {
            activity.addStat(new data_vertical_speed_avg_1.DataVerticalSpeedAvg(this.getDataTypeAvg(activity, data_vertical_speed_1.DataVerticalSpeed.type)));
        }
        // Power Max
        if (!activity.getStat(data_power_max_1.DataPowerMax.type) && activity.hasStreamData(data_power_1.DataPower.type)) {
            activity.addStat(new data_power_max_1.DataPowerMax(this.getDataTypeMax(activity, data_power_1.DataPower.type)));
        }
        // Power Min
        if (!activity.getStat(data_power_min_1.DataPowerMin.type) && activity.hasStreamData(data_power_1.DataPower.type)) {
            activity.addStat(new data_power_min_1.DataPowerMin(this.getDataTypeMin(activity, data_power_1.DataPower.type)));
        }
        // Power AVG
        if (!activity.getStat(data_power_avg_1.DataPowerAvg.type) && activity.hasStreamData(data_power_1.DataPower.type)) {
            activity.addStat(new data_power_avg_1.DataPowerAvg(this.getDataTypeAvg(activity, data_power_1.DataPower.type)));
        }
        // Power Normalized
        if (!activity.getStat(data_power_normalized_1.DataPowerNormalized.type) && activity.hasStreamData(data_power_1.DataPower.type)) {
            const powerDurationStream = activity.getStreamDataByDuration(data_power_1.DataPower.type, true, true);
            const timeStream = powerDurationStream.map(item => item.time / 1000);
            const powerStream = powerDurationStream.map(item => item.value);
            const normalizedPower = this.computeNormalizedPower(powerStream, timeStream);
            activity.addStat(new data_power_normalized_1.DataPowerNormalized(normalizedPower));
        }
        // Air AirPower Max
        if (!activity.getStat(data_air_power_max_1.DataAirPowerMax.type) && activity.hasStreamData(data_air_power_1.DataAirPower.type)) {
            activity.addStat(new data_air_power_max_1.DataAirPowerMax(this.getDataTypeMax(activity, data_air_power_1.DataAirPower.type)));
        }
        // Air AirPower Min
        if (!activity.getStat(data_air_power_min_1.DataAirPowerMin.type) && activity.hasStreamData(data_air_power_1.DataAirPower.type)) {
            activity.addStat(new data_air_power_min_1.DataAirPowerMin(this.getDataTypeMin(activity, data_air_power_1.DataAirPower.type)));
        }
        // Air AirPower AVG
        if (!activity.getStat(data_air_power_avg_1.DataAirPowerAvg.type) && activity.hasStreamData(data_air_power_1.DataAirPower.type)) {
            activity.addStat(new data_air_power_avg_1.DataAirPowerAvg(this.getDataTypeAvg(activity, data_air_power_1.DataAirPower.type)));
        }
        // Temperature Max
        if (!activity.getStat(data_temperature_max_1.DataTemperatureMax.type) && activity.hasStreamData(data_temperature_1.DataTemperature.type)) {
            activity.addStat(new data_temperature_max_1.DataTemperatureMax(this.getDataTypeMax(activity, data_temperature_1.DataTemperature.type)));
        }
        // Temperature Min
        if (!activity.getStat(data_temperature_min_1.DataTemperatureMin.type) && activity.hasStreamData(data_temperature_1.DataTemperature.type)) {
            activity.addStat(new data_temperature_min_1.DataTemperatureMin(this.getDataTypeMin(activity, data_temperature_1.DataTemperature.type)));
        }
        // Temperature Avg
        if (!activity.getStat(data_temperature_avg_1.DataTemperatureAvg.type) && activity.hasStreamData(data_temperature_1.DataTemperature.type)) {
            activity.addStat(new data_temperature_avg_1.DataTemperatureAvg(this.getDataTypeAvg(activity, data_temperature_1.DataTemperature.type)));
        }
        // Battery Consumption Avg
        if (!activity.getStat(data_battery_consumption_1.DataBatteryConsumption.type) && activity.hasStreamData(data_battery_charge_1.DataBatteryCharge.type)) {
            activity.addStat(new data_battery_consumption_1.DataBatteryConsumption(this.getDataTypeMinToMaxDifference(activity, data_battery_charge_1.DataBatteryCharge.type)));
        }
        // Battery Life Estimation based on Consumption
        if (!activity.getStat(data_battery_life_estimation_1.DataBatteryLifeEstimation.type)) {
            const consumption = activity.getStat(data_battery_consumption_1.DataBatteryConsumption.type);
            if (consumption && consumption.getValue()) {
                activity.addStat(new data_battery_life_estimation_1.DataBatteryLifeEstimation(Number(((+activity.endDate - +activity.startDate) / 1000) * 100) / Number(consumption.getValue())));
            }
        }
        // Start and end position
        if ((!activity.getStat(data_start_position_1.DataStartPosition.type) || !activity.getStat(data_end_position_1.DataEndPosition.type)) &&
            activity.hasPositionData()) {
            const activityPositionData = activity.getPositionData().filter(data => data !== null);
            const startPosition = activityPositionData[0];
            const endPosition = activityPositionData[activityPositionData.length - 1];
            if (startPosition && !activity.getStat(data_start_position_1.DataStartPosition.type)) {
                activity.addStat(new data_start_position_1.DataStartPosition(startPosition));
            }
            if (endPosition && !activity.getStat(data_end_position_1.DataEndPosition.type)) {
                activity.addStat(new data_end_position_1.DataEndPosition(endPosition));
            }
        }
        // Assign L/R balance from streams if exists
        if (!activity.getStat(data_right_balance_1.DataRightBalance.type) && activity.hasStreamData(data_right_balance_1.DataRightBalance.type)) {
            const avgRightBalance = this.round(this.getDataTypeAvg(activity, data_right_balance_1.DataRightBalance.type), 2);
            activity.addStat(new data_right_balance_1.DataRightBalance(avgRightBalance));
            activity.addStat(new data_left_balance_1.DataLeftBalance(100 - avgRightBalance));
        }
        // Assign L/R balance stance time from streams if exists
        if (!activity.getStat(data_stance_time_balance_left_1.DataStanceTimeBalanceLeft.type) && activity.hasStreamData(data_stance_time_balance_left_1.DataStanceTimeBalanceLeft.type)) {
            const avgStanceTimeLeftBalance = this.round(this.getDataTypeAvg(activity, data_stance_time_balance_left_1.DataStanceTimeBalanceLeft.type), 2);
            activity.addStat(new data_stance_time_balance_left_1.DataStanceTimeBalanceLeft(avgStanceTimeLeftBalance));
            activity.addStat(new data_stance_time_balance_right_1.DataStanceTimeBalanceRight(100 - avgStanceTimeLeftBalance));
        }
    }
    static generateMissingSpeedDerivedStatsForActivity(activity) {
        // Pace
        const speedMax = activity.getStat(data_speed_max_1.DataSpeedMax.type);
        if (speedMax && !activity.getStat(data_pace_max_1.DataPaceMax.type)) {
            activity.addStat(new data_pace_max_1.DataPaceMax((0, helpers_1.convertSpeedToPace)(speedMax.getValue())));
        }
        const speedMin = activity.getStat(data_speed_min_1.DataSpeedMin.type);
        if (speedMin && !activity.getStat(data_pace_min_1.DataPaceMin.type)) {
            activity.addStat(new data_pace_min_1.DataPaceMin((0, helpers_1.convertSpeedToPace)(speedMin.getValue())));
        }
        const speedAvg = activity.getStat(data_speed_avg_1.DataSpeedAvg.type);
        if (speedAvg && !activity.getStat(data_pace_avg_1.DataPaceAvg.type)) {
            activity.addStat(new data_pace_avg_1.DataPaceAvg((0, helpers_1.convertSpeedToPace)(speedAvg.getValue())));
        }
        // GAP
        const gradeAdjustedSpeedMax = activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax.type);
        if (gradeAdjustedSpeedMax && !activity.getStat(data_grade_adjusted_pace_max_1.DataGradeAdjustedPaceMax.type)) {
            const targetAdjustedSpeed = gradeAdjustedSpeedMax.getValue() < speedMax.getValue()
                ? speedMax.getValue()
                : gradeAdjustedSpeedMax.getValue();
            activity.addStat(new data_grade_adjusted_pace_max_1.DataGradeAdjustedPaceMax((0, helpers_1.convertSpeedToPace)(targetAdjustedSpeed)));
        }
        const gradeAdjustedSpeedMin = activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin.type);
        if (gradeAdjustedSpeedMin && !activity.getStat(data_grade_adjusted_pace_min_1.DataGradeAdjustedPaceMin.type)) {
            const targetAdjustedSpeed = gradeAdjustedSpeedMin.getValue() < speedMin.getValue()
                ? speedMin.getValue()
                : gradeAdjustedSpeedMin.getValue();
            activity.addStat(new data_grade_adjusted_pace_min_1.DataGradeAdjustedPaceMin((0, helpers_1.convertSpeedToPace)(targetAdjustedSpeed)));
        }
        const gradeAdjustedSpeedAvg = activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg.type);
        if (gradeAdjustedSpeedAvg && !activity.getStat(data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvg.type)) {
            const targetAdjustedSpeed = gradeAdjustedSpeedAvg.getValue() < speedAvg.getValue()
                ? speedAvg.getValue()
                : gradeAdjustedSpeedAvg.getValue();
            activity.addStat(new data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvg((0, helpers_1.convertSpeedToPace)(targetAdjustedSpeed)));
        }
        // Swim Pace
        if (speedMax && !activity.getStat(data_swim_pace_max_1.DataSwimPaceMax.type)) {
            activity.addStat(new data_swim_pace_max_1.DataSwimPaceMax((0, helpers_1.convertSpeedToSwimPace)(speedMax.getValue())));
        }
        if (speedMin && !activity.getStat(data_swim_pace_min_1.DataSwimPaceMin.type)) {
            activity.addStat(new data_swim_pace_min_1.DataSwimPaceMin((0, helpers_1.convertSpeedToSwimPace)(speedMin.getValue())));
        }
        if (speedAvg && !activity.getStat(data_swim_pace_avg_1.DataSwimPaceAvg.type)) {
            activity.addStat(new data_swim_pace_avg_1.DataSwimPaceAvg((0, helpers_1.convertSpeedToSwimPace)(speedAvg.getValue())));
        }
    }
    // @todo move to factory
    static generateMissingUnitStatsForActivity(activity) {
        var _a, _b, _c;
        // Pace
        if (!activity.getStat(data_pace_max_1.DataPaceMaxMinutesPerMile.type)) {
            const paceMax = activity.getStat(data_pace_max_1.DataPaceMax.type);
            if (paceMax) {
                activity.addStat(new data_pace_max_1.DataPaceMaxMinutesPerMile((0, helpers_1.convertPaceToPaceInMinutesPerMile)(paceMax.getValue())));
            }
        }
        if (!activity.getStat(data_pace_min_1.DataPaceMinMinutesPerMile.type)) {
            const paceMin = activity.getStat(data_pace_min_1.DataPaceMin.type);
            if (paceMin) {
                activity.addStat(new data_pace_min_1.DataPaceMinMinutesPerMile((0, helpers_1.convertPaceToPaceInMinutesPerMile)(paceMin.getValue())));
            }
        }
        if (!activity.getStat(data_pace_avg_1.DataPaceAvgMinutesPerMile.type)) {
            const paceAvg = activity.getStat(data_pace_avg_1.DataPaceAvg.type);
            if (paceAvg) {
                activity.addStat(new data_pace_avg_1.DataPaceAvgMinutesPerMile((0, helpers_1.convertPaceToPaceInMinutesPerMile)(paceAvg.getValue())));
            }
        }
        // Grade Adjusted Pace
        if (!activity.getStat(data_grade_adjusted_pace_max_1.DataGradeAdjustedPaceMaxMinutesPerMile.type)) {
            const gradeAdjustedPaceMax = activity.getStat(data_grade_adjusted_pace_max_1.DataGradeAdjustedPaceMax.type);
            if (gradeAdjustedPaceMax) {
                activity.addStat(new data_grade_adjusted_pace_max_1.DataGradeAdjustedPaceMaxMinutesPerMile((0, helpers_1.convertPaceToPaceInMinutesPerMile)(gradeAdjustedPaceMax.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_pace_min_1.DataGradeAdjustedPaceMinMinutesPerMile.type)) {
            const gradeAdjustedPaceMin = activity.getStat(data_grade_adjusted_pace_min_1.DataGradeAdjustedPaceMin.type);
            if (gradeAdjustedPaceMin) {
                activity.addStat(new data_grade_adjusted_pace_min_1.DataGradeAdjustedPaceMinMinutesPerMile((0, helpers_1.convertPaceToPaceInMinutesPerMile)(gradeAdjustedPaceMin.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvgMinutesPerMile.type)) {
            const gradeAdjustedPaceAvg = activity.getStat(data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvg.type);
            if (gradeAdjustedPaceAvg) {
                activity.addStat(new data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvgMinutesPerMile((0, helpers_1.convertPaceToPaceInMinutesPerMile)(gradeAdjustedPaceAvg.getValue())));
            }
        }
        // Swim Pace
        if (!activity.getStat(data_swim_pace_max_1.DataSwimPaceMaxMinutesPer100Yard.type)) {
            const swimPaceMax = activity.getStat(data_swim_pace_max_1.DataSwimPaceMax.type);
            if (swimPaceMax) {
                activity.addStat(new data_swim_pace_max_1.DataSwimPaceMaxMinutesPer100Yard((0, helpers_1.convertSwimPaceToSwimPacePer100Yard)(swimPaceMax.getValue())));
            }
        }
        if (!activity.getStat(data_swim_pace_min_1.DataSwimPaceMinMinutesPer100Yard.type)) {
            const swimPaceMin = activity.getStat(data_swim_pace_min_1.DataSwimPaceMin.type);
            if (swimPaceMin) {
                activity.addStat(new data_swim_pace_min_1.DataSwimPaceMinMinutesPer100Yard((0, helpers_1.convertSwimPaceToSwimPacePer100Yard)(swimPaceMin.getValue())));
            }
        }
        if (!activity.getStat(data_swim_pace_avg_1.DataSwimPaceAvgMinutesPer100Yard.type)) {
            const swimPaceAvg = activity.getStat(data_pace_avg_1.DataPaceAvg.type);
            if (swimPaceAvg) {
                activity.addStat(new data_swim_pace_avg_1.DataSwimPaceAvgMinutesPer100Yard((0, helpers_1.convertSwimPaceToSwimPacePer100Yard)(swimPaceAvg.getValue())));
            }
        }
        // Speed
        if (!activity.getStat(data_speed_max_1.DataSpeedMaxKilometersPerHour.type)) {
            const speedMax = activity.getStat(data_speed_max_1.DataSpeedMax.type);
            if (speedMax) {
                activity.addStat(new data_speed_max_1.DataSpeedMaxKilometersPerHour((0, helpers_1.convertSpeedToSpeedInKilometersPerHour)(speedMax.getValue())));
            }
        }
        if (!activity.getStat(data_speed_max_1.DataSpeedMaxMilesPerHour.type)) {
            const speedMax = activity.getStat(data_speed_max_1.DataSpeedMax.type);
            if (speedMax) {
                activity.addStat(new data_speed_max_1.DataSpeedMaxMilesPerHour((0, helpers_1.convertSpeedToSpeedInMilesPerHour)(speedMax.getValue())));
            }
        }
        if (!activity.getStat(data_speed_max_1.DataSpeedMaxFeetPerSecond.type)) {
            const speedMax = activity.getStat(data_speed_max_1.DataSpeedMax.type);
            if (speedMax) {
                activity.addStat(new data_speed_max_1.DataSpeedMaxFeetPerSecond((0, helpers_1.convertSpeedToSpeedInFeetPerSecond)(speedMax.getValue())));
            }
        }
        if (!activity.getStat(data_speed_max_1.DataSpeedMaxFeetPerMinute.type)) {
            const speedMax = activity.getStat(data_speed_max_1.DataSpeedMax.type);
            if (speedMax) {
                activity.addStat(new data_speed_max_1.DataSpeedMaxFeetPerMinute((0, helpers_1.convertSpeedToSpeedInFeetPerMinute)(speedMax.getValue())));
            }
        }
        if (!activity.getStat(data_speed_max_1.DataSpeedMaxMetersPerMinute.type)) {
            const speedMax = activity.getStat(data_speed_max_1.DataSpeedMax.type);
            if (speedMax) {
                activity.addStat(new data_speed_max_1.DataSpeedMaxMetersPerMinute((0, helpers_1.convertSpeedToSpeedInMetersPerMinute)(speedMax.getValue())));
            }
        }
        if (!activity.getStat(data_speed_max_1.DataSpeedMaxKnots.type)) {
            const speedMax = activity.getStat(data_speed_max_1.DataSpeedMax.type);
            if (speedMax) {
                activity.addStat(new data_speed_max_1.DataSpeedMaxKnots((0, helpers_1.convertSpeedToSpeedInKnots)(speedMax.getValue())));
            }
        }
        if (!activity.getStat(data_speed_min_1.DataSpeedMinKilometersPerHour.type)) {
            const speedMin = activity.getStat(data_speed_min_1.DataSpeedMin.type);
            if (speedMin) {
                activity.addStat(new data_speed_min_1.DataSpeedMinKilometersPerHour((0, helpers_1.convertSpeedToSpeedInKilometersPerHour)(speedMin.getValue())));
            }
        }
        if (!activity.getStat(data_speed_min_1.DataSpeedMinMilesPerHour.type)) {
            const speedMin = activity.getStat(data_speed_min_1.DataSpeedMin.type);
            if (speedMin) {
                activity.addStat(new data_speed_min_1.DataSpeedMinMilesPerHour((0, helpers_1.convertSpeedToSpeedInMilesPerHour)(speedMin.getValue())));
            }
        }
        if (!activity.getStat(data_speed_min_1.DataSpeedMinFeetPerSecond.type)) {
            const speedMin = activity.getStat(data_speed_min_1.DataSpeedMin.type);
            if (speedMin) {
                activity.addStat(new data_speed_min_1.DataSpeedMinFeetPerSecond((0, helpers_1.convertSpeedToSpeedInFeetPerSecond)(speedMin.getValue())));
            }
        }
        if (!activity.getStat(data_speed_min_1.DataSpeedMinFeetPerMinute.type)) {
            const speedMin = activity.getStat(data_speed_min_1.DataSpeedMin.type);
            if (speedMin) {
                activity.addStat(new data_speed_min_1.DataSpeedMinFeetPerMinute((0, helpers_1.convertSpeedToSpeedInFeetPerMinute)(speedMin.getValue())));
            }
        }
        if (!activity.getStat(data_speed_min_1.DataSpeedMinMetersPerMinute.type)) {
            const speedMin = activity.getStat(data_speed_min_1.DataSpeedMin.type);
            if (speedMin) {
                activity.addStat(new data_speed_min_1.DataSpeedMinMetersPerMinute((0, helpers_1.convertSpeedToSpeedInMetersPerMinute)(speedMin.getValue())));
            }
        }
        if (!activity.getStat(data_speed_min_1.DataSpeedMinKnots.type)) {
            const speedMin = activity.getStat(data_speed_min_1.DataSpeedMin.type);
            if (speedMin) {
                activity.addStat(new data_speed_min_1.DataSpeedMinKnots((0, helpers_1.convertSpeedToSpeedInKnots)(speedMin.getValue())));
            }
        }
        if (!activity.getStat(data_speed_avg_1.DataSpeedAvgKilometersPerHour.type)) {
            const speedAvg = activity.getStat(data_speed_avg_1.DataSpeedAvg.type);
            if (speedAvg) {
                activity.addStat(new data_speed_avg_1.DataSpeedAvgKilometersPerHour((0, helpers_1.convertSpeedToSpeedInKilometersPerHour)(speedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_speed_avg_1.DataSpeedAvgMilesPerHour.type)) {
            const speedAvg = activity.getStat(data_speed_avg_1.DataSpeedAvg.type);
            if (speedAvg) {
                activity.addStat(new data_speed_avg_1.DataSpeedAvgMilesPerHour((0, helpers_1.convertSpeedToSpeedInMilesPerHour)(speedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_speed_avg_1.DataSpeedAvgFeetPerSecond.type)) {
            const speedAvg = activity.getStat(data_speed_avg_1.DataSpeedAvg.type);
            if (speedAvg) {
                activity.addStat(new data_speed_avg_1.DataSpeedAvgFeetPerSecond((0, helpers_1.convertSpeedToSpeedInFeetPerSecond)(speedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_speed_avg_1.DataSpeedAvgFeetPerMinute.type)) {
            const speedAvg = activity.getStat(data_speed_avg_1.DataSpeedAvg.type);
            if (speedAvg) {
                activity.addStat(new data_speed_avg_1.DataSpeedAvgFeetPerMinute((0, helpers_1.convertSpeedToSpeedInFeetPerMinute)(speedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_speed_avg_1.DataSpeedAvgMetersPerMinute.type)) {
            const speedAvg = activity.getStat(data_speed_avg_1.DataSpeedAvg.type);
            if (speedAvg) {
                activity.addStat(new data_speed_avg_1.DataSpeedAvgMetersPerMinute((0, helpers_1.convertSpeedToSpeedInMetersPerMinute)(speedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_speed_avg_1.DataSpeedAvgKnots.type)) {
            const speedAvg = activity.getStat(data_speed_avg_1.DataSpeedAvg.type);
            if (speedAvg) {
                activity.addStat(new data_speed_avg_1.DataSpeedAvgKnots((0, helpers_1.convertSpeedToSpeedInKnots)(speedAvg.getValue())));
            }
        }
        // Grade Adjusted Speed
        if (!activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxKilometersPerHour.type)) {
            const speedMax = activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax.type);
            if (speedMax) {
                activity.addStat(new data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxKilometersPerHour((0, helpers_1.convertSpeedToSpeedInKilometersPerHour)(speedMax.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxMilesPerHour.type)) {
            const speedMax = activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax.type);
            if (speedMax) {
                activity.addStat(new data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxMilesPerHour((0, helpers_1.convertSpeedToSpeedInMilesPerHour)(speedMax.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxFeetPerSecond.type)) {
            const speedMax = activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax.type);
            if (speedMax) {
                activity.addStat(new data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxFeetPerSecond((0, helpers_1.convertSpeedToSpeedInFeetPerSecond)(speedMax.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxFeetPerMinute.type)) {
            const speedMax = activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax.type);
            if (speedMax) {
                activity.addStat(new data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxFeetPerMinute((0, helpers_1.convertSpeedToSpeedInFeetPerMinute)(speedMax.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxMetersPerMinute.type)) {
            const speedMax = activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax.type);
            if (speedMax) {
                activity.addStat(new data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxMetersPerMinute((0, helpers_1.convertSpeedToSpeedInMetersPerMinute)(speedMax.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxKnots.type)) {
            const speedMax = activity.getStat(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax.type);
            if (speedMax) {
                activity.addStat(new data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxKnots((0, helpers_1.convertSpeedToSpeedInKnots)(speedMax.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinKilometersPerHour.type)) {
            const speedMin = activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin.type);
            if (speedMin) {
                activity.addStat(new data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinKilometersPerHour((0, helpers_1.convertSpeedToSpeedInKilometersPerHour)(speedMin.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinMilesPerHour.type)) {
            const speedMin = activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin.type);
            if (speedMin) {
                activity.addStat(new data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinMilesPerHour((0, helpers_1.convertSpeedToSpeedInMilesPerHour)(speedMin.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinFeetPerSecond.type)) {
            const speedMin = activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin.type);
            if (speedMin) {
                activity.addStat(new data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinFeetPerSecond((0, helpers_1.convertSpeedToSpeedInFeetPerSecond)(speedMin.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinFeetPerMinute.type)) {
            const speedMin = activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin.type);
            if (speedMin) {
                activity.addStat(new data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinFeetPerMinute((0, helpers_1.convertSpeedToSpeedInFeetPerMinute)(speedMin.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinMetersPerMinute.type)) {
            const speedMin = activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin.type);
            if (speedMin) {
                activity.addStat(new data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinMetersPerMinute((0, helpers_1.convertSpeedToSpeedInMetersPerMinute)(speedMin.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinKnots.type)) {
            const speedMin = activity.getStat(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin.type);
            if (speedMin) {
                activity.addStat(new data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinKnots((0, helpers_1.convertSpeedToSpeedInKnots)(speedMin.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgKilometersPerHour.type)) {
            const speedAvg = activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg.type);
            if (speedAvg) {
                activity.addStat(new data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgKilometersPerHour((0, helpers_1.convertSpeedToSpeedInKilometersPerHour)(speedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgMilesPerHour.type)) {
            const speedAvg = activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg.type);
            if (speedAvg) {
                activity.addStat(new data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgMilesPerHour((0, helpers_1.convertSpeedToSpeedInMilesPerHour)(speedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgFeetPerSecond.type)) {
            const speedAvg = activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg.type);
            if (speedAvg) {
                activity.addStat(new data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgFeetPerSecond((0, helpers_1.convertSpeedToSpeedInFeetPerSecond)(speedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgFeetPerMinute.type)) {
            const speedAvg = activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg.type);
            if (speedAvg) {
                activity.addStat(new data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgFeetPerMinute((0, helpers_1.convertSpeedToSpeedInFeetPerMinute)(speedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgMetersPerMinute.type)) {
            const speedAvg = activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg.type);
            if (speedAvg) {
                activity.addStat(new data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgMetersPerMinute((0, helpers_1.convertSpeedToSpeedInMetersPerMinute)(speedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgKnots.type)) {
            const speedAvg = activity.getStat(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg.type);
            if (speedAvg) {
                activity.addStat(new data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgKnots((0, helpers_1.convertSpeedToSpeedInKnots)(speedAvg.getValue())));
            }
        }
        // Vertical speed
        if (!activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvgFeetPerSecond.type)) {
            const verticalSpeedAvg = activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvg.type);
            if (verticalSpeedAvg) {
                activity.addStat(new data_vertical_speed_avg_1.DataVerticalSpeedAvgFeetPerSecond((0, helpers_1.convertSpeedToSpeedInFeetPerSecond)(verticalSpeedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvgMetersPerMinute.type)) {
            const verticalSpeedAvg = activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvg.type);
            if (verticalSpeedAvg) {
                activity.addStat(new data_vertical_speed_avg_1.DataVerticalSpeedAvgMetersPerMinute((0, helpers_1.convertSpeedToSpeedInMetersPerMinute)(verticalSpeedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvgFeetPerMinute.type)) {
            const verticalSpeedAvg = activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvg.type);
            if (verticalSpeedAvg) {
                activity.addStat(new data_vertical_speed_avg_1.DataVerticalSpeedAvgFeetPerMinute((0, helpers_1.convertSpeedToSpeedInFeetPerMinute)(verticalSpeedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvgMetersPerHour.type)) {
            const verticalSpeedAvg = activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvg.type);
            if (verticalSpeedAvg) {
                activity.addStat(new data_vertical_speed_avg_1.DataVerticalSpeedAvgMetersPerHour((0, helpers_1.convertSpeedToSpeedInMetersPerHour)(verticalSpeedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvgFeetPerHour.type)) {
            const verticalSpeedAvg = activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvg.type);
            if (verticalSpeedAvg) {
                activity.addStat(new data_vertical_speed_avg_1.DataVerticalSpeedAvgFeetPerHour((0, helpers_1.convertSpeedToSpeedInFeetPerHour)(verticalSpeedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvgKilometerPerHour.type)) {
            const verticalSpeedAvg = activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvg.type);
            if (verticalSpeedAvg) {
                activity.addStat(new data_vertical_speed_avg_1.DataVerticalSpeedAvgKilometerPerHour((0, helpers_1.convertSpeedToSpeedInKilometersPerHour)(verticalSpeedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvgMilesPerHour.type)) {
            const verticalSpeedAvg = activity.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvg.type);
            if (verticalSpeedAvg) {
                activity.addStat(new data_vertical_speed_avg_1.DataVerticalSpeedAvgMilesPerHour((0, helpers_1.convertSpeedToSpeedInMilesPerHour)(verticalSpeedAvg.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMaxFeetPerSecond.type)) {
            const verticalSpeedMax = activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMax.type);
            if (verticalSpeedMax) {
                activity.addStat(new data_vertical_speed_max_1.DataVerticalSpeedMaxFeetPerSecond((0, helpers_1.convertSpeedToSpeedInFeetPerSecond)(verticalSpeedMax.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMaxMetersPerMinute.type)) {
            const verticalSpeedMax = activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMax.type);
            if (verticalSpeedMax) {
                activity.addStat(new data_vertical_speed_max_1.DataVerticalSpeedMaxMetersPerMinute((0, helpers_1.convertSpeedToSpeedInMetersPerMinute)(verticalSpeedMax.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMaxFeetPerMinute.type)) {
            const verticalSpeedMax = activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMax.type);
            if (verticalSpeedMax) {
                activity.addStat(new data_vertical_speed_max_1.DataVerticalSpeedMaxFeetPerMinute((0, helpers_1.convertSpeedToSpeedInFeetPerMinute)(verticalSpeedMax.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMaxMetersPerHour.type)) {
            const verticalSpeedMax = activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMax.type);
            if (verticalSpeedMax) {
                activity.addStat(new data_vertical_speed_max_1.DataVerticalSpeedMaxMetersPerHour((0, helpers_1.convertSpeedToSpeedInMetersPerHour)(verticalSpeedMax.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMaxFeetPerHour.type)) {
            const verticalSpeedMax = activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMax.type);
            if (verticalSpeedMax) {
                activity.addStat(new data_vertical_speed_max_1.DataVerticalSpeedMaxFeetPerHour((0, helpers_1.convertSpeedToSpeedInFeetPerHour)(verticalSpeedMax.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMaxKilometerPerHour.type)) {
            const verticalSpeedMax = activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMax.type);
            if (verticalSpeedMax) {
                activity.addStat(new data_vertical_speed_max_1.DataVerticalSpeedMaxKilometerPerHour((0, helpers_1.convertSpeedToSpeedInKilometersPerHour)(verticalSpeedMax.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMaxMilesPerHour.type)) {
            const verticalSpeedMax = activity.getStat(data_vertical_speed_max_1.DataVerticalSpeedMax.type);
            if (verticalSpeedMax) {
                activity.addStat(new data_vertical_speed_max_1.DataVerticalSpeedMaxMilesPerHour((0, helpers_1.convertSpeedToSpeedInMilesPerHour)(verticalSpeedMax.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMinFeetPerSecond.type)) {
            const verticalSpeedMin = activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMin.type);
            if (verticalSpeedMin) {
                activity.addStat(new data_vertical_speed_min_1.DataVerticalSpeedMinFeetPerSecond((0, helpers_1.convertSpeedToSpeedInFeetPerSecond)(verticalSpeedMin.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMinMetersPerMinute.type)) {
            const verticalSpeedMin = activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMin.type);
            if (verticalSpeedMin) {
                activity.addStat(new data_vertical_speed_min_1.DataVerticalSpeedMinMetersPerMinute((0, helpers_1.convertSpeedToSpeedInMetersPerMinute)(verticalSpeedMin.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMinFeetPerMinute.type)) {
            const verticalSpeedMin = activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMin.type);
            if (verticalSpeedMin) {
                activity.addStat(new data_vertical_speed_min_1.DataVerticalSpeedMinFeetPerMinute((0, helpers_1.convertSpeedToSpeedInFeetPerMinute)(verticalSpeedMin.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMinMetersPerHour.type)) {
            const verticalSpeedMin = activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMin.type);
            if (verticalSpeedMin) {
                activity.addStat(new data_vertical_speed_min_1.DataVerticalSpeedMinMetersPerHour((0, helpers_1.convertSpeedToSpeedInMetersPerHour)(verticalSpeedMin.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMinFeetPerHour.type)) {
            const verticalSpeedMin = activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMin.type);
            if (verticalSpeedMin) {
                activity.addStat(new data_vertical_speed_min_1.DataVerticalSpeedMinFeetPerHour((0, helpers_1.convertSpeedToSpeedInFeetPerHour)(verticalSpeedMin.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMinKilometerPerHour.type)) {
            const verticalSpeedMin = activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMin.type);
            if (verticalSpeedMin) {
                activity.addStat(new data_vertical_speed_min_1.DataVerticalSpeedMinKilometerPerHour((0, helpers_1.convertSpeedToSpeedInKilometersPerHour)(verticalSpeedMin.getValue())));
            }
        }
        if (!activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMinMilesPerHour.type)) {
            const verticalSpeedMin = activity.getStat(data_vertical_speed_min_1.DataVerticalSpeedMin.type);
            if (verticalSpeedMin) {
                activity.addStat(new data_vertical_speed_min_1.DataVerticalSpeedMinMilesPerHour((0, helpers_1.convertSpeedToSpeedInMilesPerHour)(verticalSpeedMin.getValue())));
            }
        }
        // Test SWOLF existence for swimming activities
        if ((activity.type === activity_types_1.ActivityTypes.Swimming || activity.type === activity_types_1.ActivityTypes.OpenWaterSwimming) &&
            (!activity.getStat(data_swolf_25m_1.DataSWOLF25m.type) || !activity.getStat(data_swolf_50m_1.DataSWOLF50m.type)) &&
            ((_a = activity.getStat(data_speed_avg_1.DataSpeedAvg.type)) === null || _a === void 0 ? void 0 : _a.getValue()) &&
            ((_b = activity.getStat(data_cadence_avg_1.DataCadenceAvg.type)) === null || _b === void 0 ? void 0 : _b.getValue())) {
            const avgPace100m = 100 / activity.getStat(data_speed_avg_1.DataSpeedAvg.type).getValue();
            const avgCadence = activity.getStat(data_cadence_avg_1.DataCadenceAvg.type).getValue();
            if (!activity.getStat(data_swolf_25m_1.DataSWOLF25m.type)) {
                const swolf25m = ActivityUtilities.computeSwimSwolf(avgPace100m, avgCadence, 25);
                activity.addStat(new data_swolf_25m_1.DataSWOLF25m(swolf25m));
            }
            if (!activity.getStat(data_swolf_50m_1.DataSWOLF50m.type)) {
                const swolf50m = ActivityUtilities.computeSwimSwolf(avgPace100m, avgCadence, 50);
                activity.addStat(new data_swolf_50m_1.DataSWOLF50m(swolf50m));
            }
        }
        if (!activity.getStat(data_duration_1.DataDuration.type)) {
            activity.addStat(new data_duration_1.DataDuration((activity.endDate.getTime() - activity.startDate.getTime()) / 1000));
        }
        // If timer time not set, then assign elapsed time by default (e.g. GPX file dont support timer time)
        if (!activity.getStat(data_timer_time_1.DataTimerTime.type)) {
            activity.addStat(new data_timer_time_1.DataTimerTime(this.round(activity.getDuration().getValue(), 2)));
        }
        // If missing moving time
        // Or moving time equals duration, then try to build real moving from laps if available
        if (!activity.getStat(data_moving_time_1.DataMovingTime.type)) {
            let movingTime = 0;
            // First try to compute moving time from laps
            const laps = activity.getLaps();
            if (laps && laps.length > 0) {
                activity.getLaps().forEach(lap => {
                    const stat = lap.getStat(data_moving_time_1.DataMovingTime.type);
                    if (stat) {
                        movingTime += stat.getValue();
                    }
                });
            }
            // Get timer time...
            const timerTime = (_c = activity.getStat(data_timer_time_1.DataTimerTime.type)) === null || _c === void 0 ? void 0 : _c.getValue();
            // ... and compare with moving time and determine if moving time is like "moving time"
            const isMovingTimeAlike = movingTime > 0 && movingTime < timerTime;
            // If moving time from laps is not valid
            if (!isMovingTimeAlike && activity.hasStreamData(data_speed_1.DataSpeed.type)) {
                // ...then re-compute moving time but using global records.
                movingTime = 0;
                const speedByDurationStream = activity.getStreamDataByDuration(data_speed_1.DataSpeed.type, true, true);
                const speedThreshold = activity_types_1.ActivityTypesMoving.getSpeedThreshold(activity.type);
                speedByDurationStream.forEach((speedItem, index) => {
                    var _a;
                    if (speedItem.value !== null && speedItem.value > speedThreshold) {
                        movingTime += (speedByDurationStream[index].time - (((_a = speedByDurationStream[index - 1]) === null || _a === void 0 ? void 0 : _a.time) || 0)) / 1000;
                    }
                });
            }
            // In case moving time would be invalid, set it to timer time "at max"
            if (!movingTime || movingTime > timerTime) {
                movingTime = timerTime;
            }
            activity.addStat(new data_moving_time_1.DataMovingTime(movingTime));
        }
        // Add Power Work if missing when avg power and moving time are available
        if (!activity.getStat(data_power_work_1.DataPowerWork.type) &&
            activity.getStat(data_power_avg_1.DataPowerAvg.type) &&
            activity.getStat(data_moving_time_1.DataMovingTime.type)) {
            const movingTime = activity.getStat(data_moving_time_1.DataMovingTime.type).getValue();
            const avgPower = activity.getStat(data_power_avg_1.DataPowerAvg.type).getValue();
            const powerWork = Math.round((avgPower * movingTime) / 1000);
            activity.addStat(new data_power_work_1.DataPowerWork(powerWork));
        }
        // If there is no pause defined then get it from duration and moving time (if available)
        if (!activity.getStat(data_pause_1.DataPause.type) || !activity.getStat(data_pause_1.DataPause.type).getValue()) {
            const movingTimeStat = activity.getStat(data_moving_time_1.DataMovingTime.type);
            const pauseTime = movingTimeStat && movingTimeStat.getValue() ? activity.getDuration().getValue() - movingTimeStat.getValue() : 0;
            activity.addStat(new data_pause_1.DataPause(this.round(pauseTime, 2)));
        }
    }
}
exports.ActivityUtilities = ActivityUtilities;
ActivityUtilities.geoLibAdapter = new geolib_adapter_1.GeoLibAdapter();
