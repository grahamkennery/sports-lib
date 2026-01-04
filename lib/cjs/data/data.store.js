"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicDataLoader = exports.DataStore = exports.DataTotalTrainingEffectLegacy = void 0;
const data_vertical_speed_1 = require("./data.vertical-speed");
const data_temperature_1 = require("./data.temperature");
const data_speed_1 = require("./data.speed");
const data_sea_level_pressure_1 = require("./data.sea-level-pressure");
const data_satellite_5_best_snr_1 = require("./data.satellite-5-best-snr");
const data_absolute_pressure_1 = require("./data.absolute-pressure");
const data_altitude_1 = require("./data.altitude");
const data_cadence_1 = require("./data.cadence");
const data_distance_1 = require("./data.distance");
const data_duration_1 = require("./data.duration");
const data_ehpe_1 = require("./data.ehpe");
const data_evpe_1 = require("./data.evpe");
const data_heart_rate_1 = require("./data.heart-rate");
const data_latitude_degrees_1 = require("./data.latitude-degrees");
const data_longitude_degrees_1 = require("./data.longitude-degrees");
const data_number_of_satellites_1 = require("./data.number-of-satellites");
const data_power_1 = require("./data.power");
const data_altitude_gps_1 = require("./data.altitude-gps");
const data_altitude_min_1 = require("./data.altitude-min");
const data_altitude_max_1 = require("./data.altitude-max");
const data_vo2_max_1 = require("./data.vo2-max");
const data_vertical_speed_min_1 = require("./data.vertical-speed-min");
const data_vertical_speed_max_1 = require("./data.vertical-speed-max");
const data_vertical_speed_avg_1 = require("./data.vertical-speed-avg");
const data_temperature_min_1 = require("./data.temperature-min");
const data_temperature_max_1 = require("./data.temperature-max");
const data_temperature_avg_1 = require("./data.temperature-avg");
const data_speed_min_1 = require("./data.speed-min");
const data_speed_max_1 = require("./data.speed-max");
const data_speed_avg_1 = require("./data.speed-avg");
const data_recovery_time_1 = require("./data.recovery-time");
const data_power_min_1 = require("./data.power-min");
const data_power_max_1 = require("./data.power-max");
const data_power_avg_1 = require("./data.power-avg");
const data_peak_training_effect_1 = require("./data.peak-training-effect");
const data_pause_1 = require("./data.pause");
const data_heart_rate_min_1 = require("./data.heart-rate-min");
const data_heart_rate_max_1 = require("./data.heart-rate-max");
const data_heart_rate_avg_1 = require("./data.heart-rate-avg");
const data_feeling_1 = require("./data.feeling");
const data_epoc_1 = require("./data.epoc");
const data_energy_1 = require("./data.energy");
const data_descent_time_1 = require("./data.descent-time");
const data_descent_1 = require("./data.descent");
const data_cadence_min_1 = require("./data.cadence-min");
const data_cadence_max_1 = require("./data.cadence-max");
const data_cadence_avg_1 = require("./data.cadence-avg");
const data_ascent_time_1 = require("./data.ascent-time");
const data_ascent_1 = require("./data.ascent");
const data_altitude_avg_1 = require("./data.altitude-avg");
const data_fused_location_1 = require("./data.fused-location");
const data_pace_min_1 = require("./data.pace-min");
const data_pace_max_1 = require("./data.pace-max");
const data_pace_avg_1 = require("./data.pace-avg");
const data_pace_1 = require("./data.pace");
const data_fused_altitude_1 = require("./data.fused-altitude");
const data_battery_charge_1 = require("./data.battery-charge");
const data_battery_current_1 = require("./data.battery-current");
const data_battery_voltage_1 = require("./data.battery-voltage");
const data_battery_consumption_1 = require("./data.battery-consumption");
const data_battery_life_estimation_1 = require("./data.battery-life-estimation");
const data_form_power_1 = require("./data.form-power");
const data_leg_stiffness_1 = require("./data.leg-stiffness");
const data_vertical_oscillation_1 = require("./data.vertical-oscillation");
const data_aerobic_training_effect_1 = require("./data-aerobic-training-effect");
const data_number_of_samples_1 = require("./data.number-of.samples");
const data_foot_pod_used_1 = require("./data.foot-pod-used");
const data_auto_pause_used_1 = require("./data.auto-pause-used");
const data_auto_lap_duration_1 = require("./data.auto-lap-duration");
const data_auto_lap_distance_1 = require("./data.auto-lap-distance");
const data_auto_lap_used_1 = require("./data.auto-lap-used");
const data_bike_pod_used_1 = require("./data.bike-pod-used");
const data_enabled_navigation_systems_1 = require("./data.enabled-navigation-systems");
const data_heart_rate_used_1 = require("./data.heart-rate-used");
const data_power_pod_used_1 = require("./data.power-pod-used");
const data_alti_baro_profile_1 = require("./data.alti-baro-profile");
const data_ibi_1 = require("./data.ibi");
const data_steps_1 = require("./data.steps");
const data_pool_length_1 = require("./data.pool-length");
const data_device_location_1 = require("./data.device-location");
const data_peak_epoc_1 = require("./data.peak-epoc");
const data_device_names_1 = require("./data.device-names");
const data_activity_types_1 = require("./data.activity-types");
const data_start_altitude_1 = require("./data.start-altitude");
const data_end_altitude_1 = require("./data.end-altitude");
const data_swim_pace_1 = require("./data.swim-pace");
const data_swim_pace_avg_1 = require("./data.swim-pace-avg");
const data_swim_pace_max_1 = require("./data.swim-pace-max");
const data_swim_pace_min_1 = require("./data.swim-pace-min");
const data_swolf_25m_1 = require("./data.swolf-25m");
const data_accumulated_power_1 = require("./data.accumulated-power");
const data_stryd_distance_1 = require("./data.stryd-distance");
const data_stryd_speed_1 = require("./data.stryd-speed");
const data_stryd_altitude_1 = require("./data.stryd-altitude");
const data_left_balance_1 = require("./data.left-balance");
const data_right_balance_1 = require("./data.right-balance");
const data_rpe_1 = require("./data.rpe");
const data_power_right_1 = require("./data.power-right");
const data_power_left_1 = require("./data.power-left");
const data_stance_time_1 = require("./data.stance-time");
const data_stance_time_balance_left_1 = require("./data-stance-time-balance-left");
const data_step_length_1 = require("./data.step-length");
const data_vertical_ratio_1 = require("./data.vertical-ratio");
const data_description_1 = require("./data.description");
const data_air_power_1 = require("./data.air-power");
const data_ground_time_1 = require("./data.ground-time");
const data_air_power_max_1 = require("./data.air-power-max");
const data_air_power_min_1 = require("./data.air-power-min");
const data_air_power_avg_1 = require("./data.air-power-avg");
const data_gnss_distance_1 = require("./data.gnss-distance");
const data_heart_rate_zone_one_duration_1 = require("./data.heart-rate-zone-one-duration");
const data_heart_rate_zone_two_duration_1 = require("./data.heart-rate-zone-two-duration");
const data_heart_rate_zone_three_duration_1 = require("./data.heart-rate-zone-three-duration");
const data_heart_rate_zone_four_duration_1 = require("./data.heart-rate-zone-four-duration");
const data_heart_rate_zone_five_duration_1 = require("./data.heart-rate-zone-five-duration");
const data_speed_zone_one_duration_1 = require("./data.speed-zone-one-duration");
const data_speed_zone_two_duration_1 = require("./data.speed-zone-two-duration");
const data_speed_zone_three_duration_1 = require("./data.speed-zone-three-duration");
const data_speed_zone_four_duration_1 = require("./data.speed-zone-four-duration");
const data_speed_zone_five_duration_1 = require("./data.speed-zone-five-duration");
const data_power_zone_one_duration_1 = require("./data.power-zone-one-duration");
const data_power_zone_two_duration_1 = require("./data.power-zone-two-duration");
const data_power_zone_three_duration_1 = require("./data.power-zone-three-duration");
const data_power_zone_five_duration_1 = require("./data.power-zone-five-duration");
const data_power_zone_four_duration_1 = require("./data.power-zone-four-duration");
const data_position_1 = require("./data.position");
const data_start_position_1 = require("./data.start-position");
const data_end_position_1 = require("./data.end-position");
const data_grade_1 = require("./data.grade");
const data_grade_adjusted_speed_1 = require("./data.grade-adjusted-speed");
const data_grade_adjusted_pace_1 = require("./data.grade-adjusted-pace");
const data_grade_adjusted_speed_max_1 = require("./data.grade-adjusted-speed-max");
const data_grade_adjusted_speed_min_1 = require("./data.grade-adjusted-speed-min");
const data_grade_adjusted_speed_avg_1 = require("./data.grade-adjusted-speed-avg");
const data_grade_adjusted_pace_avg_1 = require("./data.grade-adjusted-pace-avg");
const data_grade_adjusted_pace_max_1 = require("./data.grade-adjusted-pace-max");
const data_grade_adjusted_pace_min_1 = require("./data.grade-adjusted-pace-min");
const data_steps_old_1 = require("./data.steps-old");
const data_stop_event_1 = require("./data.stop-event");
const data_start_event_1 = require("./data.start-event");
const data_stop_all_event_1 = require("./data.stop-all-event");
const data_time_1 = require("./data.time");
const helpers_1 = require("../events/utilities/helpers");
const data_moving_time_1 = require("./data.moving-time");
const data_swolf_50m_1 = require("./data.swolf-50m");
const data_timer_time_1 = require("./data.timer-time");
const data_active_lap_1 = require("./data-active-lap");
const data_active_lengths_1 = require("./data-active-lengths");
const data_anaerobic_training_effect_1 = require("./data-anaerobic-training-effect");
const data_total_cycles_1 = require("./data-total-cycles");
const data_power_intensity_factor_1 = require("./data.power-intensity-factor");
const data_power_normalized_1 = require("./data.power-normalized");
const data_power_pedal_smoothness_left_1 = require("./data.power-pedal-smoothness-left");
const data_power_pedal_smoothness_right_1 = require("./data.power-pedal-smoothness-right");
const data_power_torque_effectiveness_left_1 = require("./data.power-torque-effectiveness-left");
const data_power_torque_effectiveness_right_1 = require("./data.power-torque-effectiveness-right");
const data_power_training_stress_score_1 = require("./data.power-training-stress-score");
const data_power_work_1 = require("./data.power-work");
const data_power_down_1 = require("./data.power-down");
const data_power_up_1 = require("./data.power-up");
const data_target_power_zone_1 = require("./data.target-power-zone");
const data_target_heart_rate_zone_1 = require("./data.target-heart-rate-zone");
const data_target_speed_zone_1 = require("./data.target-speed-zone");
const data_target_distance_1 = require("./data.target-distance");
const data_target_time_1 = require("./data.target-time");
const data_stance_time_balance_right_1 = require("./data-stance-time-balance-right");
const data_rider_position_change_event_1 = require("./data.rider-position-change-event");
const data_sport_profile_name_1 = require("./data.sport-profile-name");
const data_balance_1 = require("./data.balance");
const data_altitude_smooth_1 = require("./data.altitude-smooth");
const data_avg_stride_length_1 = require("./data.avg-stride-length");
const data_cycling_seated_time_1 = require("./data.cycling-seated-time");
const data_cycling_standing_time_1 = require("./data.cycling-standing-time");
const data_grade_smooth_1 = require("./data.grade-smooth");
// "Total Training effect" was renamed to "Aerobic Training Effect" in sports-lib 6.0
class DataTotalTrainingEffectLegacy extends data_aerobic_training_effect_1.DataAerobicTrainingEffect {
}
exports.DataTotalTrainingEffectLegacy = DataTotalTrainingEffectLegacy;
DataTotalTrainingEffectLegacy.type = 'Total Training effect';
/**
 * Only concrete classes no abstracts
 */
exports.DataStore = {
    DataVerticalSpeed: data_vertical_speed_1.DataVerticalSpeed,
    DataTemperature: data_temperature_1.DataTemperature,
    DataSpeed: data_speed_1.DataSpeed,
    DataGradeAdjustedSpeed: data_grade_adjusted_speed_1.DataGradeAdjustedSpeed,
    DataSeaLevelPressure: data_sea_level_pressure_1.DataSeaLevelPressure,
    DataSatellite5BestSNR: data_satellite_5_best_snr_1.DataSatellite5BestSNR,
    DataPower: data_power_1.DataPower,
    DataNumberOfSatellites: data_number_of_satellites_1.DataNumberOfSatellites,
    DataLongitudeDegrees: data_longitude_degrees_1.DataLongitudeDegrees,
    DataLatitudeDegrees: data_latitude_degrees_1.DataLatitudeDegrees,
    DataHeartRate: data_heart_rate_1.DataHeartRate,
    DataEVPE: data_evpe_1.DataEVPE,
    DataEHPE: data_ehpe_1.DataEHPE,
    DataDuration: data_duration_1.DataDuration,
    DataDistance: data_distance_1.DataDistance,
    DataCadence: data_cadence_1.DataCadence,
    DataGPSAltitude: data_altitude_gps_1.DataGPSAltitude,
    DataAltitude: data_altitude_1.DataAltitude,
    DataAbsolutePressure: data_absolute_pressure_1.DataAbsolutePressure,
    DataVO2Max: data_vo2_max_1.DataVO2Max,
    DataVerticalSpeedMin: data_vertical_speed_min_1.DataVerticalSpeedMin,
    DataVerticalSpeedMax: data_vertical_speed_max_1.DataVerticalSpeedMax,
    DataVerticalSpeedAvg: data_vertical_speed_avg_1.DataVerticalSpeedAvg,
    DataTemperatureMin: data_temperature_min_1.DataTemperatureMin,
    DataTemperatureMax: data_temperature_max_1.DataTemperatureMax,
    DataTemperatureAvg: data_temperature_avg_1.DataTemperatureAvg,
    DataSpeedMin: data_speed_min_1.DataSpeedMin,
    DataSpeedMax: data_speed_max_1.DataSpeedMax,
    DataSpeedAvg: data_speed_avg_1.DataSpeedAvg,
    DataGradeAdjustedSpeedMin: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin,
    DataGradeAdjustedSpeedMax: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax,
    DataGradeAdjustedSpeedAvg: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg,
    DataRecoveryTime: data_recovery_time_1.DataRecoveryTime,
    DataPowerMin: data_power_min_1.DataPowerMin,
    DataPowerMax: data_power_max_1.DataPowerMax,
    DataPowerAvg: data_power_avg_1.DataPowerAvg,
    DataPeakTrainingEffect: data_peak_training_effect_1.DataPeakTrainingEffect,
    DataPause: data_pause_1.DataPause,
    DataHeartRateMin: data_heart_rate_min_1.DataHeartRateMin,
    DataHeartRateMax: data_heart_rate_max_1.DataHeartRateMax,
    DataHeartRateAvg: data_heart_rate_avg_1.DataHeartRateAvg,
    DataFeeling: data_feeling_1.DataFeeling,
    DataEPOC: data_epoc_1.DataEPOC,
    DataEnergy: data_energy_1.DataEnergy,
    DataDescentTime: data_descent_time_1.DataDescentTime,
    DataDescent: data_descent_1.DataDescent,
    DataCadenceMin: data_cadence_min_1.DataCadenceMin,
    DataCadenceMax: data_cadence_max_1.DataCadenceMax,
    DataCadenceAvg: data_cadence_avg_1.DataCadenceAvg,
    DataAscentTime: data_ascent_time_1.DataAscentTime,
    DataAscent: data_ascent_1.DataAscent,
    DataAltitudeMin: data_altitude_min_1.DataAltitudeMin,
    DataAltitudeMax: data_altitude_max_1.DataAltitudeMax,
    DataAltitudeAvg: data_altitude_avg_1.DataAltitudeAvg,
    DataFusedLocation: data_fused_location_1.DataFusedLocation,
    DataFusedAltitude: data_fused_altitude_1.DataFusedAltitude,
    DataPace: data_pace_1.DataPace,
    DataPaceMin: data_pace_min_1.DataPaceMin,
    DataPaceMax: data_pace_max_1.DataPaceMax,
    DataPaceAvg: data_pace_avg_1.DataPaceAvg,
    DataGradeAdjustedPace: data_grade_adjusted_pace_1.DataGradeAdjustedPace,
    DataGradeAdjustedPaceMin: data_grade_adjusted_pace_min_1.DataGradeAdjustedPaceMin,
    DataGradeAdjustedPaceMax: data_grade_adjusted_pace_max_1.DataGradeAdjustedPaceMax,
    DataGradeAdjustedPaceAvg: data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvg,
    DataSwimPace: data_swim_pace_1.DataSwimPace,
    DataSwimPaceMin: data_swim_pace_min_1.DataSwimPaceMin,
    DataSwimPaceMax: data_swim_pace_max_1.DataSwimPaceMax,
    DataSwimPaceAvg: data_swim_pace_avg_1.DataSwimPaceAvg,
    DataNumberOfSamples: data_number_of_samples_1.DataNumberOfSamples,
    DataBatteryCharge: data_battery_charge_1.DataBatteryCharge,
    DataBatteryCurrent: data_battery_current_1.DataBatteryCurrent,
    DataBatteryVoltage: data_battery_voltage_1.DataBatteryVoltage,
    DataBatteryConsumption: data_battery_consumption_1.DataBatteryConsumption,
    DataBatteryLifeEstimation: data_battery_life_estimation_1.DataBatteryLifeEstimation,
    DataFormPower: data_form_power_1.DataFormPower,
    DataLegStiffness: data_leg_stiffness_1.DataLegStiffness,
    DataLegSpringStiffness: data_leg_stiffness_1.DataLegSpringStiffness,
    DataVerticalOscillation: data_vertical_oscillation_1.DataVerticalOscillation,
    DataAerobicTrainingEffect: data_aerobic_training_effect_1.DataAerobicTrainingEffect,
    DataFootPodUsed: data_foot_pod_used_1.DataFootPodUsed,
    DataAltiBaroProfile: data_alti_baro_profile_1.DataAltiBaroProfile,
    DataAutoPauseUsed: data_auto_pause_used_1.DataAutoPauseUsed,
    DataAutoLapDuration: data_auto_lap_duration_1.DataAutoLapDuration,
    DataAutoLapDistance: data_auto_lap_distance_1.DataAutoLapDistance,
    DataAutoLapUsed: data_auto_lap_used_1.DataAutoLapUsed,
    DataBikePodUsed: data_bike_pod_used_1.DataBikePodUsed,
    DataEnabledNavigationSystems: data_enabled_navigation_systems_1.DataEnabledNavigationSystems,
    DataHeartRateUsed: data_heart_rate_used_1.DataHeartRateUsed,
    DataPowerPodUsed: data_power_pod_used_1.DataPowerPodUsed,
    DataSpeedKilometersPerHour: data_speed_1.DataSpeedKilometersPerHour,
    DataSpeedMilesPerHour: data_speed_1.DataSpeedMilesPerHour,
    DataSpeedFeetPerSecond: data_speed_1.DataSpeedFeetPerSecond,
    DataSpeedMetersPerMinute: data_speed_1.DataSpeedMetersPerMinute,
    DataSpeedFeetPerMinute: data_speed_1.DataSpeedFeetPerMinute,
    DataSpeedAvgKilometersPerHour: data_speed_avg_1.DataSpeedAvgKilometersPerHour,
    DataSpeedAvgMilesPerHour: data_speed_avg_1.DataSpeedAvgMilesPerHour,
    DataSpeedAvgFeetPerSecond: data_speed_avg_1.DataSpeedAvgFeetPerSecond,
    DataSpeedAvgMetersPerMinute: data_speed_avg_1.DataSpeedAvgMetersPerMinute,
    DataSpeedAvgFeetPerMinute: data_speed_avg_1.DataSpeedAvgFeetPerMinute,
    DataSpeedMinKilometersPerHour: data_speed_min_1.DataSpeedMinKilometersPerHour,
    DataSpeedMinMilesPerHour: data_speed_min_1.DataSpeedMinMilesPerHour,
    DataSpeedMinFeetPerSecond: data_speed_min_1.DataSpeedMinFeetPerSecond,
    DataSpeedMinMetersPerMinute: data_speed_min_1.DataSpeedMinMetersPerMinute,
    DataSpeedMinFeetPerMinute: data_speed_min_1.DataSpeedMinFeetPerMinute,
    DataSpeedMaxKilometersPerHour: data_speed_max_1.DataSpeedMaxKilometersPerHour,
    DataSpeedMaxMilesPerHour: data_speed_max_1.DataSpeedMaxMilesPerHour,
    DataSpeedMaxFeetPerSecond: data_speed_max_1.DataSpeedMaxFeetPerSecond,
    DataSpeedMaxMetersPerMinute: data_speed_max_1.DataSpeedMaxMetersPerMinute,
    DataSpeedMaxFeetPerMinute: data_speed_max_1.DataSpeedMaxFeetPerMinute,
    DataSpeedKnots: data_speed_1.DataSpeedKnots,
    DataSpeedAvgKnots: data_speed_avg_1.DataSpeedAvgKnots,
    DataSpeedMinKnots: data_speed_min_1.DataSpeedMinKnots,
    DataSpeedMaxKnots: data_speed_max_1.DataSpeedMaxKnots,
    DataGradeAdjustedSpeedKilometersPerHour: data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour,
    DataGradeAdjustedSpeedMilesPerHour: data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMilesPerHour,
    DataGradeAdjustedSpeedFeetPerSecond: data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerSecond,
    DataGradeAdjustedSpeedMetersPerMinute: data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMetersPerMinute,
    DataGradeAdjustedSpeedFeetPerMinute: data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerMinute,
    DataGradeAdjustedSpeedAvgKilometersPerHour: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgKilometersPerHour,
    DataGradeAdjustedSpeedAvgMilesPerHour: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgMilesPerHour,
    DataGradeAdjustedSpeedAvgFeetPerSecond: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgFeetPerSecond,
    DataGradeAdjustedSpeedAvgMetersPerMinute: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgMetersPerMinute,
    DataGradeAdjustedSpeedAvgFeetPerMinute: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgFeetPerMinute,
    DataGradeAdjustedSpeedMinKilometersPerHour: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinKilometersPerHour,
    DataGradeAdjustedSpeedMinMilesPerHour: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinMilesPerHour,
    DataGradeAdjustedSpeedMinFeetPerSecond: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinFeetPerSecond,
    DataGradeAdjustedSpeedMinMetersPerMinute: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinMetersPerMinute,
    DataGradeAdjustedSpeedMinFeetPerMinute: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinFeetPerMinute,
    DataGradeAdjustedSpeedMaxKilometersPerHour: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxKilometersPerHour,
    DataGradeAdjustedSpeedMaxMilesPerHour: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxMilesPerHour,
    DataGradeAdjustedSpeedMaxFeetPerSecond: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxFeetPerSecond,
    DataGradeAdjustedSpeedMaxMetersPerMinute: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxMetersPerMinute,
    DataGradeAdjustedSpeedMaxFeetPerMinute: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxFeetPerMinute,
    DataGradeAdjustedSpeedKnots: data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKnots,
    DataGradeAdjustedSpeedAvgKnots: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgKnots,
    DataGradeAdjustedSpeedMinKnots: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinKnots,
    DataGradeAdjustedSpeedMaxKnots: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxKnots,
    DataPaceMinutesPerMile: data_pace_1.DataPaceMinutesPerMile,
    DataPaceAvgMinutesPerMile: data_pace_avg_1.DataPaceAvgMinutesPerMile,
    DataPaceMinMinutesPerMile: data_pace_min_1.DataPaceMinMinutesPerMile,
    DataPaceMaxMinutesPerMile: data_pace_max_1.DataPaceMaxMinutesPerMile,
    DataGradeAdjustedPaceMinutesPerMile: data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile,
    DataGradeAdjustedPaceAvgMinutesPerMile: data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvgMinutesPerMile,
    DataGradeAdjustedPaceMinMinutesPerMile: data_grade_adjusted_pace_min_1.DataGradeAdjustedPaceMinMinutesPerMile,
    DataGradeAdjustedPaceMaxMinutesPerMile: data_grade_adjusted_pace_max_1.DataGradeAdjustedPaceMaxMinutesPerMile,
    DataSwimPaceMinutesPer100Yard: data_swim_pace_1.DataSwimPaceMinutesPer100Yard,
    DataSwimPaceAvgMinutesPer100Yard: data_swim_pace_avg_1.DataSwimPaceAvgMinutesPer100Yard,
    DataSwimPaceMinMinutesPer100Yard: data_swim_pace_min_1.DataSwimPaceMinMinutesPer100Yard,
    DataSwimPaceMaxMinutesPer100Yard: data_swim_pace_max_1.DataSwimPaceMaxMinutesPer100Yard,
    DataVerticalSpeedFeetPerSecond: data_vertical_speed_1.DataVerticalSpeedFeetPerSecond,
    DataVerticalSpeedMetersPerMinute: data_vertical_speed_1.DataVerticalSpeedMetersPerMinute,
    DataVerticalSpeedFeetPerMinute: data_vertical_speed_1.DataVerticalSpeedFeetPerMinute,
    DataVerticalSpeedMetersPerHour: data_vertical_speed_1.DataVerticalSpeedMetersPerHour,
    DataVerticalSpeedFeetPerHour: data_vertical_speed_1.DataVerticalSpeedFeetPerHour,
    DataVerticalSpeedKilometerPerHour: data_vertical_speed_1.DataVerticalSpeedKilometerPerHour,
    DataVerticalSpeedMilesPerHour: data_vertical_speed_1.DataVerticalSpeedMilesPerHour,
    DataVerticalSpeedAvgFeetPerSecond: data_vertical_speed_avg_1.DataVerticalSpeedAvgFeetPerSecond,
    DataVerticalSpeedAvgMetersPerMinute: data_vertical_speed_avg_1.DataVerticalSpeedAvgMetersPerMinute,
    DataVerticalSpeedAvgFeetPerMinute: data_vertical_speed_avg_1.DataVerticalSpeedAvgFeetPerMinute,
    DataVerticalSpeedAvgMetersPerHour: data_vertical_speed_avg_1.DataVerticalSpeedAvgMetersPerHour,
    DataVerticalSpeedAvgFeetPerHour: data_vertical_speed_avg_1.DataVerticalSpeedAvgFeetPerHour,
    DataVerticalSpeedAvgKilometerPerHour: data_vertical_speed_avg_1.DataVerticalSpeedAvgKilometerPerHour,
    DataVerticalSpeedAvgMilesPerHour: data_vertical_speed_avg_1.DataVerticalSpeedAvgMilesPerHour,
    DataVerticalSpeedMaxFeetPerSecond: data_vertical_speed_max_1.DataVerticalSpeedMaxFeetPerSecond,
    DataVerticalSpeedMaxMetersPerMinute: data_vertical_speed_max_1.DataVerticalSpeedMaxMetersPerMinute,
    DataVerticalSpeedMaxFeetPerMinute: data_vertical_speed_max_1.DataVerticalSpeedMaxFeetPerMinute,
    DataVerticalSpeedMaxMetersPerHour: data_vertical_speed_max_1.DataVerticalSpeedMaxMetersPerHour,
    DataVerticalSpeedMaxFeetPerHour: data_vertical_speed_max_1.DataVerticalSpeedMaxFeetPerHour,
    DataVerticalSpeedMaxKilometerPerHour: data_vertical_speed_max_1.DataVerticalSpeedMaxKilometerPerHour,
    DataVerticalSpeedMaxMilesPerHour: data_vertical_speed_max_1.DataVerticalSpeedMaxMilesPerHour,
    DataVerticalSpeedMinFeetPerSecond: data_vertical_speed_min_1.DataVerticalSpeedMinFeetPerSecond,
    DataVerticalSpeedMinMetersPerMinute: data_vertical_speed_min_1.DataVerticalSpeedMinMetersPerMinute,
    DataVerticalSpeedMinFeetPerMinute: data_vertical_speed_min_1.DataVerticalSpeedMinFeetPerMinute,
    DataVerticalSpeedMinMetersPerHour: data_vertical_speed_min_1.DataVerticalSpeedMinMetersPerHour,
    DataVerticalSpeedMinFeetPerHour: data_vertical_speed_min_1.DataVerticalSpeedMinFeetPerHour,
    DataVerticalSpeedMinKilometerPerHour: data_vertical_speed_min_1.DataVerticalSpeedMinKilometerPerHour,
    DataVerticalSpeedMinMilesPerHour: data_vertical_speed_min_1.DataVerticalSpeedMinMilesPerHour,
    DataIBI: data_ibi_1.DataIBI,
    DataSteps: data_steps_1.DataSteps,
    DataStepsOld: data_steps_old_1.DataStepsOld,
    DataStrydAltitude: // @todo find way to make this easy to migrate for projects that persist data based on types
    data_stryd_altitude_1.DataStrydAltitude,
    DataStrydSpeed: data_stryd_speed_1.DataStrydSpeed,
    DataStrydDistance: data_stryd_distance_1.DataStrydDistance,
    DataPoolLength: data_pool_length_1.DataPoolLength,
    DataDeviceLocation: data_device_location_1.DataDeviceLocation,
    DataPeakEPOC: data_peak_epoc_1.DataPeakEPOC,
    DataActivityTypes: data_activity_types_1.DataActivityTypes,
    DataDeviceNames: data_device_names_1.DataDeviceNames,
    DataStartAltitude: data_start_altitude_1.DataStartAltitude,
    DataEndAltitude: data_end_altitude_1.DataEndAltitude,
    DataSWOLF25m: data_swolf_25m_1.DataSWOLF25m,
    DataSWOLF50m: data_swolf_50m_1.DataSWOLF50m,
    DataAccumulatedPower: data_accumulated_power_1.DataAccumulatedPower,
    DataLeftBalance: data_left_balance_1.DataLeftBalance,
    DataRightBalance: data_right_balance_1.DataRightBalance,
    DataPowerLeft: data_power_left_1.DataPowerLeft,
    DataPowerRight: data_power_right_1.DataPowerRight,
    DataRPE: data_rpe_1.DataRPE,
    DataStanceTime: data_stance_time_1.DataStanceTime,
    DataStanceTimeBalanceRight: data_stance_time_balance_right_1.DataStanceTimeBalanceRight,
    DataStanceTimeBalanceLeft: data_stance_time_balance_left_1.DataStanceTimeBalanceLeft,
    DataStepLength: data_step_length_1.DataStepLength,
    DataVerticalRatio: data_vertical_ratio_1.DataVerticalRatio,
    DataDescription: data_description_1.DataDescription,
    DataGroundTime: data_ground_time_1.DataGroundTime,
    DataAirPower: data_air_power_1.DataAirPower,
    DataAirPowerAvg: data_air_power_avg_1.DataAirPowerAvg,
    DataAirPowerMax: data_air_power_max_1.DataAirPowerMax,
    DataAirPowerMin: data_air_power_min_1.DataAirPowerMin,
    DataGNSSDistance: data_gnss_distance_1.DataGNSSDistance,
    DataHeartRateZoneOneDuration: data_heart_rate_zone_one_duration_1.DataHeartRateZoneOneDuration,
    DataHeartRateZoneTwoDuration: data_heart_rate_zone_two_duration_1.DataHeartRateZoneTwoDuration,
    DataHeartRateZoneThreeDuration: data_heart_rate_zone_three_duration_1.DataHeartRateZoneThreeDuration,
    DataHeartRateZoneFourDuration: data_heart_rate_zone_four_duration_1.DataHeartRateZoneFourDuration,
    DataHeartRateZoneFiveDuration: data_heart_rate_zone_five_duration_1.DataHeartRateZoneFiveDuration,
    DataPowerZoneOneDuration: data_power_zone_one_duration_1.DataPowerZoneOneDuration,
    DataPowerZoneTwoDuration: data_power_zone_two_duration_1.DataPowerZoneTwoDuration,
    DataPowerZoneThreeDuration: data_power_zone_three_duration_1.DataPowerZoneThreeDuration,
    DataPowerZoneFourDuration: data_power_zone_four_duration_1.DataPowerZoneFourDuration,
    DataPowerZoneFiveDuration: data_power_zone_five_duration_1.DataPowerZoneFiveDuration,
    DataSpeedZoneOneDuration: data_speed_zone_one_duration_1.DataSpeedZoneOneDuration,
    DataSpeedZoneTwoDuration: data_speed_zone_two_duration_1.DataSpeedZoneTwoDuration,
    DataSpeedZoneThreeDuration: data_speed_zone_three_duration_1.DataSpeedZoneThreeDuration,
    DataSpeedZoneFourDuration: data_speed_zone_four_duration_1.DataSpeedZoneFourDuration,
    DataSpeedZoneFiveDuration: data_speed_zone_five_duration_1.DataSpeedZoneFiveDuration,
    DataPosition: data_position_1.DataPosition,
    DataStartPosition: data_start_position_1.DataStartPosition,
    DataEndPosition: data_end_position_1.DataEndPosition,
    DataGrade: data_grade_1.DataGrade,
    DataStartEvent: data_start_event_1.DataStartEvent,
    DataStopEvent: data_stop_event_1.DataStopEvent,
    DataStopAllEvent: data_stop_all_event_1.DataStopAllEvent,
    DataTime: data_time_1.DataTime,
    DataDistanceMiles: data_distance_1.DataDistanceMiles,
    DataMovingTime: data_moving_time_1.DataMovingTime,
    DataTimerTime: data_timer_time_1.DataTimerTime,
    DataActiveLap: data_active_lap_1.DataActiveLap,
    DataActiveLengths: data_active_lengths_1.DataActiveLengths,
    DataAnaerobicTrainingEffect: data_anaerobic_training_effect_1.DataAnaerobicTrainingEffect,
    DataTotalCycles: data_total_cycles_1.DataTotalCycles,
    DataPowerIntensityFactor: data_power_intensity_factor_1.DataPowerIntensityFactor,
    DataPowerNormalized: data_power_normalized_1.DataPowerNormalized,
    DataPowerPedalSmoothnessLeft: data_power_pedal_smoothness_left_1.DataPowerPedalSmoothnessLeft,
    DataPowerPedalSmoothnessRight: data_power_pedal_smoothness_right_1.DataPowerPedalSmoothnessRight,
    DataPowerTorqueEffectivenessLeft: data_power_torque_effectiveness_left_1.DataPowerTorqueEffectivenessLeft,
    DataPowerTorqueEffectivenessRight: data_power_torque_effectiveness_right_1.DataPowerTorqueEffectivenessRight,
    DataPowerTrainingStressScore: data_power_training_stress_score_1.DataPowerTrainingStressScore,
    DataPowerWork: data_power_work_1.DataPowerWork,
    DataRiderPositionChangeEvent: data_rider_position_change_event_1.DataRiderPositionChangeEvent,
    DataSportProfileName: data_sport_profile_name_1.DataSportProfileName,
    DataBalance: data_balance_1.DataBalance,
    DataAltitudeSmooth: data_altitude_smooth_1.DataAltitudeSmooth,
    DataAvgStrideLength: data_avg_stride_length_1.DataAvgStrideLength,
    DataCyclingSeatedTime: data_cycling_seated_time_1.DataCyclingSeatedTime,
    DataCyclingStandingTime: data_cycling_standing_time_1.DataCyclingStandingTime,
    DataGradeSmooth: data_grade_smooth_1.DataGradeSmooth,
    DataPowerDown: data_power_down_1.DataPowerDown,
    DataPowerUp: data_power_up_1.DataPowerUp,
    DataTargetPowerZone: data_target_power_zone_1.DataTargetPowerZone,
    DataTargetHeartRateZone: data_target_heart_rate_zone_1.DataTargetHeartRateZone,
    DataTargetSpeedZone: data_target_speed_zone_1.DataTargetSpeedZone,
    DataTargetDistance: data_target_distance_1.DataTargetDistance,
    DataTargetTime: data_target_time_1.DataTargetTime,
    DataTotalTrainingEffectLegacy
};
class DynamicDataLoader {
    static getDataInstanceFromDataType(dataType, opts) {
        const className = Object.keys(exports.DataStore).find(dataClass => {
            return exports.DataStore[dataClass] && exports.DataStore[dataClass].type && exports.DataStore[dataClass].type === dataType;
        });
        if (!className || !exports.DataStore[className]) {
            throw new Error(`Class type of '${dataType}' is not in the store`);
        }
        return new exports.DataStore[className](opts);
    }
    static getDataClassFromDataType(dataType) {
        const className = Object.keys(exports.DataStore).find(dataClass => {
            return exports.DataStore[dataClass] && exports.DataStore[dataClass].type && exports.DataStore[dataClass].type === dataType;
        });
        if (!className || !exports.DataStore[className]) {
            throw new Error(`Class type of '${dataType}' is not in the store`);
        }
        return exports.DataStore[className];
    }
    static isUnitDerivedDataType(dataType) {
        return this.allUnitDerivedDataTypes.indexOf(dataType) !== -1;
    }
    static isSpeedDerivedDataType(dataType) {
        return this.speedDerivedDataTypes.indexOf(dataType) !== -1;
    }
    static isBlackListedStream(dataType) {
        return [data_gnss_distance_1.DataGNSSDistance.type, data_time_1.DataTime.type].indexOf(dataType) !== -1;
    }
    /**
     * This get's the basic data types for the charts depending or not on the user datatype settings
     * There are no unit specific datatypes here so if the user has selected pace it implies metric
     */
    static getNonUnitBasedDataTypes(showAllData, dataTypesToUse) {
        // let dataTypes = DynamicDataLoader.basicDataTypes;
        // Set the datatypes to show if all is selected
        if (showAllData) {
            return [...DynamicDataLoader.basicDataTypes, ...DynamicDataLoader.advancedDataTypes];
        }
        if (!dataTypesToUse) {
            return DynamicDataLoader.basicDataTypes;
        }
        return dataTypesToUse;
    }
    /**
     * This gets the base and extended unit datatypes from a datatype array depending on the user settings
     * @param dataTypes
     * @param userUnitSettings
     */
    static getUnitBasedDataTypesFromDataTypes(dataTypes, userUnitSettings) {
        let unitBasedDataTypes = [];
        if (!userUnitSettings) {
            return unitBasedDataTypes;
        }
        if (dataTypes.indexOf(data_speed_1.DataSpeed.type) !== -1) {
            unitBasedDataTypes = unitBasedDataTypes.concat(userUnitSettings.speedUnits);
            unitBasedDataTypes = unitBasedDataTypes.concat(userUnitSettings.swimPaceUnits);
            unitBasedDataTypes = unitBasedDataTypes.concat(userUnitSettings.paceUnits);
        }
        if (dataTypes.indexOf(data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type) !== -1) {
            unitBasedDataTypes = unitBasedDataTypes.concat(userUnitSettings.gradeAdjustedSpeedUnits);
            unitBasedDataTypes = unitBasedDataTypes.concat(userUnitSettings.gradeAdjustedPaceUnits);
        }
        if (dataTypes.indexOf(data_vertical_speed_1.DataVerticalSpeed.type) !== -1) {
            unitBasedDataTypes = unitBasedDataTypes.concat(userUnitSettings.verticalSpeedUnits);
        }
        return unitBasedDataTypes;
    }
    /**
     * Gets the unitbased types
     * @param dataType
     * @param userUnitSettings
     */
    static getUnitBasedDataTypesFromDataType(dataType, userUnitSettings) {
        if (!userUnitSettings) {
            return [dataType];
        }
        if (dataType === data_speed_1.DataSpeed.type) {
            return userUnitSettings.speedUnits;
        }
        if (dataType === data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type) {
            return userUnitSettings.gradeAdjustedSpeedUnits;
        }
        if (dataType === data_pace_1.DataPace.type) {
            return userUnitSettings.paceUnits;
        }
        if (dataType === data_grade_adjusted_pace_1.DataGradeAdjustedPace.type) {
            return userUnitSettings.gradeAdjustedPaceUnits;
        }
        if (dataType === data_swim_pace_1.DataSwimPace.type) {
            return userUnitSettings.swimPaceUnits;
        }
        if (dataType === data_vertical_speed_1.DataVerticalSpeed.type) {
            return userUnitSettings.verticalSpeedUnits;
        }
        return [dataType];
    }
    /**
     * Gets back an array of the unit based data for the data that was asked
     * For example if the user has for speed selected m/s+km/h doing:
     * getUnitBasedDataFromData(speedData) will return an array of [DataSpeed, DataSpeedInKilometersPerHour] instances
     * @param data
     * @param userUnitSettings
     * @todo move to solo unit settings eg speed settings
     */
    static getUnitBasedDataFromDataInstance(data, userUnitSettings) {
        if (!userUnitSettings) {
            return [data];
        }
        switch (data.getType()) {
            // Speed
            case data_speed_1.DataSpeed.type:
                return userUnitSettings.speedUnits.reduce((accu, unit) => {
                    return [...accu, this.getDataInstanceFromDataType(unit, data.getValue(unit))];
                }, []);
            case data_speed_avg_1.DataSpeedAvg.type:
                return userUnitSettings.speedUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_speed_1.DataSpeed.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_avg_1.DataSpeedAvg.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedKilometersPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_speed_avg_1.DataSpeedAvgKilometersPerHour.type, data.getValue(unit))
                            ];
                        case data_speed_1.DataSpeedMilesPerHour.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_avg_1.DataSpeedAvgMilesPerHour.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedFeetPerSecond.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_avg_1.DataSpeedAvgFeetPerSecond.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedMetersPerMinute.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_avg_1.DataSpeedAvgMetersPerMinute.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedFeetPerMinute.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_avg_1.DataSpeedAvgFeetPerMinute.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedKnots.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_avg_1.DataSpeedAvgKnots.type, data.getValue(unit))];
                    }
                    return accu;
                }, []);
            case data_speed_max_1.DataSpeedMax.type:
                return userUnitSettings.speedUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_speed_1.DataSpeed.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_max_1.DataSpeedMax.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedKilometersPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_speed_max_1.DataSpeedMaxKilometersPerHour.type, data.getValue(unit))
                            ];
                        case data_speed_1.DataSpeedMilesPerHour.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_max_1.DataSpeedMaxMilesPerHour.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedFeetPerSecond.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_max_1.DataSpeedMaxFeetPerSecond.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedMetersPerMinute.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_max_1.DataSpeedMaxMetersPerMinute.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedFeetPerMinute.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_max_1.DataSpeedMaxFeetPerMinute.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedKnots.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_max_1.DataSpeedMaxKnots.type, data.getValue(unit))];
                    }
                    return accu;
                }, []);
            case data_speed_min_1.DataSpeedMin.type:
                return userUnitSettings.speedUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_speed_1.DataSpeed.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_min_1.DataSpeedMin.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedKilometersPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_speed_min_1.DataSpeedMinKilometersPerHour.type, data.getValue(unit))
                            ];
                        case data_speed_1.DataSpeedMilesPerHour.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_min_1.DataSpeedMinMilesPerHour.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedFeetPerSecond.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_min_1.DataSpeedMinFeetPerSecond.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedMetersPerMinute.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_min_1.DataSpeedMinMetersPerMinute.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedFeetPerMinute.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_min_1.DataSpeedMinFeetPerMinute.type, data.getValue(unit))];
                        case data_speed_1.DataSpeedKnots.type:
                            return [...accu, this.getDataInstanceFromDataType(data_speed_min_1.DataSpeedMinKnots.type, data.getValue(unit))];
                    }
                    return accu;
                }, []);
            // GradeAdjusted Speed
            case data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type:
                return userUnitSettings.gradeAdjustedSpeedUnits.reduce((accu, unit) => {
                    return [...accu, this.getDataInstanceFromDataType(unit, data.getValue(unit))];
                }, []);
            case data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg.type:
                return userUnitSettings.gradeAdjustedSpeedUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type:
                            return [...accu, this.getDataInstanceFromDataType(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg.type, data.getValue(unit))];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgKilometersPerHour.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMilesPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgMilesPerHour.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerSecond.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgFeetPerSecond.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMetersPerMinute.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgMetersPerMinute.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerMinute.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgFeetPerMinute.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKnots.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgKnots.type, data.getValue(unit))
                            ];
                    }
                    return accu;
                }, []);
            case data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax.type:
                return userUnitSettings.gradeAdjustedSpeedUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type:
                            return [...accu, this.getDataInstanceFromDataType(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax.type, data.getValue(unit))];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxKilometersPerHour.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMilesPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxMilesPerHour.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerSecond.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxFeetPerSecond.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMetersPerMinute.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxMetersPerMinute.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerMinute.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxFeetPerMinute.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKnots.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxKnots.type, data.getValue(unit))
                            ];
                    }
                    return accu;
                }, []);
            case data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin.type:
                return userUnitSettings.gradeAdjustedSpeedUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type:
                            return [...accu, this.getDataInstanceFromDataType(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin.type, data.getValue(unit))];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinKilometersPerHour.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMilesPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinMilesPerHour.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerSecond.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinFeetPerSecond.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMetersPerMinute.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinMetersPerMinute.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerMinute.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinFeetPerMinute.type, data.getValue(unit))
                            ];
                        case data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKnots.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinKnots.type, data.getValue(unit))
                            ];
                    }
                    return accu;
                }, []);
            // Pace
            case data_pace_1.DataPace.type:
                return userUnitSettings.paceUnits.reduce((accu, unit) => {
                    return [...accu, this.getDataInstanceFromDataType(unit, data.getValue(unit))];
                }, []);
            case data_pace_avg_1.DataPaceAvg.type:
                return userUnitSettings.paceUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_pace_1.DataPace.type:
                            return [...accu, this.getDataInstanceFromDataType(data_pace_avg_1.DataPaceAvg.type, data.getValue(unit))];
                        case data_pace_1.DataPaceMinutesPerMile.type:
                            return [...accu, this.getDataInstanceFromDataType(data_pace_avg_1.DataPaceAvgMinutesPerMile.type, data.getValue(unit))];
                    }
                    return accu;
                }, []);
            case data_pace_max_1.DataPaceMax.type:
                return userUnitSettings.paceUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_pace_1.DataPace.type:
                            return [...accu, this.getDataInstanceFromDataType(data_pace_max_1.DataPaceMax.type, data.getValue(unit))];
                        case data_pace_1.DataPaceMinutesPerMile.type:
                            return [...accu, this.getDataInstanceFromDataType(data_pace_max_1.DataPaceMaxMinutesPerMile.type, data.getValue(unit))];
                    }
                    return accu;
                }, []);
            case data_pace_min_1.DataPaceMin.type:
                return userUnitSettings.paceUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_pace_1.DataPace.type:
                            return [...accu, this.getDataInstanceFromDataType(data_pace_min_1.DataPaceMin.type, data.getValue(unit))];
                        case data_pace_1.DataPaceMinutesPerMile.type:
                            return [...accu, this.getDataInstanceFromDataType(data_pace_min_1.DataPaceMinMinutesPerMile.type, data.getValue(unit))];
                    }
                    return accu;
                }, []);
            // GAP Pace
            case data_grade_adjusted_pace_1.DataGradeAdjustedPace.type:
                return userUnitSettings.gradeAdjustedPaceUnits.reduce((accu, unit) => {
                    return [...accu, this.getDataInstanceFromDataType(unit, data.getValue(unit))];
                }, []);
            case data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvg.type:
                return userUnitSettings.gradeAdjustedPaceUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_grade_adjusted_pace_1.DataGradeAdjustedPace.type:
                            return [...accu, this.getDataInstanceFromDataType(data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvg.type, data.getValue(unit))];
                        case data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvgMinutesPerMile.type, data.getValue(unit))
                            ];
                    }
                    return accu;
                }, []);
            case data_grade_adjusted_pace_max_1.DataGradeAdjustedPaceMax.type:
                return userUnitSettings.gradeAdjustedPaceUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_grade_adjusted_pace_1.DataGradeAdjustedPace.type:
                            return [...accu, this.getDataInstanceFromDataType(data_grade_adjusted_pace_max_1.DataGradeAdjustedPaceMax.type, data.getValue(unit))];
                        case data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_pace_max_1.DataGradeAdjustedPaceMaxMinutesPerMile.type, data.getValue(unit))
                            ];
                    }
                    return accu;
                }, []);
            case data_grade_adjusted_pace_min_1.DataGradeAdjustedPaceMin.type:
                return userUnitSettings.gradeAdjustedPaceUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_grade_adjusted_pace_1.DataGradeAdjustedPace.type:
                            return [...accu, this.getDataInstanceFromDataType(data_grade_adjusted_pace_min_1.DataGradeAdjustedPaceMin.type, data.getValue(unit))];
                        case data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_grade_adjusted_pace_min_1.DataGradeAdjustedPaceMinMinutesPerMile.type, data.getValue(unit))
                            ];
                    }
                    return accu;
                }, []);
            // Swim
            case data_swim_pace_1.DataSwimPace.type:
                return userUnitSettings.swimPaceUnits.reduce((accu, unit) => {
                    return [...accu, this.getDataInstanceFromDataType(unit, data.getValue(unit))];
                }, []);
            case data_swim_pace_avg_1.DataSwimPaceAvg.type:
                return userUnitSettings.swimPaceUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_swim_pace_1.DataSwimPace.type:
                            return [...accu, this.getDataInstanceFromDataType(data_swim_pace_avg_1.DataSwimPaceAvg.type, data.getValue(unit))];
                        case data_swim_pace_1.DataSwimPaceMinutesPer100Yard.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_swim_pace_avg_1.DataSwimPaceAvgMinutesPer100Yard.type, data.getValue(unit))
                            ];
                    }
                    return accu;
                }, []);
            case data_swim_pace_max_1.DataSwimPaceMax.type:
                return userUnitSettings.swimPaceUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_swim_pace_1.DataSwimPace.type:
                            return [...accu, this.getDataInstanceFromDataType(data_swim_pace_max_1.DataSwimPaceMax.type, data.getValue(unit))];
                        case data_swim_pace_1.DataSwimPaceMinutesPer100Yard.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_swim_pace_max_1.DataSwimPaceMaxMinutesPer100Yard.type, data.getValue(unit))
                            ];
                    }
                    return accu;
                }, []);
            case data_swim_pace_min_1.DataSwimPaceMin.type:
                return userUnitSettings.swimPaceUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_swim_pace_1.DataSwimPace.type:
                            return [...accu, this.getDataInstanceFromDataType(data_swim_pace_min_1.DataSwimPaceMin.type, data.getValue(unit))];
                        case data_swim_pace_1.DataSwimPaceMinutesPer100Yard.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_swim_pace_min_1.DataSwimPaceMinMinutesPer100Yard.type, data.getValue(unit))
                            ];
                    }
                    return accu;
                }, []);
            // Vertical speed
            case data_vertical_speed_1.DataVerticalSpeed.type:
                return userUnitSettings.verticalSpeedUnits.reduce((accu, unit) => {
                    return [...accu, this.getDataInstanceFromDataType(unit, data.getValue(unit))];
                }, []);
            case data_vertical_speed_avg_1.DataVerticalSpeedAvg.type:
                return userUnitSettings.verticalSpeedUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_vertical_speed_1.DataVerticalSpeed.type:
                            return [...accu, this.getDataInstanceFromDataType(data_vertical_speed_avg_1.DataVerticalSpeedAvg.type, data.getValue(unit))];
                        case data_vertical_speed_1.DataVerticalSpeedFeetPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_avg_1.DataVerticalSpeedAvgFeetPerHour.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedFeetPerMinute.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_avg_1.DataVerticalSpeedAvgFeetPerMinute.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedFeetPerSecond.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_avg_1.DataVerticalSpeedAvgFeetPerSecond.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedKilometerPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_avg_1.DataVerticalSpeedAvgKilometerPerHour.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedMilesPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_avg_1.DataVerticalSpeedAvgMilesPerHour.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedMetersPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_avg_1.DataVerticalSpeedAvgMetersPerHour.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedMetersPerMinute.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_avg_1.DataVerticalSpeedAvgMetersPerMinute.type, data.getValue(unit))
                            ];
                    }
                    return accu;
                }, []);
            case data_vertical_speed_max_1.DataVerticalSpeedMax.type:
                return userUnitSettings.verticalSpeedUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_vertical_speed_1.DataVerticalSpeed.type:
                            return [...accu, this.getDataInstanceFromDataType(data_vertical_speed_max_1.DataVerticalSpeedMax.type, data.getValue(unit))];
                        case data_vertical_speed_1.DataVerticalSpeedFeetPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_max_1.DataVerticalSpeedMaxFeetPerHour.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedFeetPerMinute.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_max_1.DataVerticalSpeedMaxFeetPerMinute.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedFeetPerSecond.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_max_1.DataVerticalSpeedMaxFeetPerSecond.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedKilometerPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_max_1.DataVerticalSpeedMaxKilometerPerHour.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedMilesPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_max_1.DataVerticalSpeedMaxMilesPerHour.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedMetersPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_max_1.DataVerticalSpeedMaxMetersPerHour.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedMetersPerMinute.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_max_1.DataVerticalSpeedMaxMetersPerMinute.type, data.getValue(unit))
                            ];
                    }
                    return accu;
                }, []);
            case data_vertical_speed_min_1.DataVerticalSpeedMin.type:
                return userUnitSettings.verticalSpeedUnits.reduce((accu, unit) => {
                    switch (unit) {
                        case data_vertical_speed_1.DataVerticalSpeed.type:
                            return [...accu, this.getDataInstanceFromDataType(data_vertical_speed_min_1.DataVerticalSpeedMin.type, data.getValue(unit))];
                        case data_vertical_speed_1.DataVerticalSpeedFeetPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_min_1.DataVerticalSpeedMinFeetPerHour.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedFeetPerMinute.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_min_1.DataVerticalSpeedMinFeetPerMinute.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedFeetPerSecond.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_min_1.DataVerticalSpeedMinFeetPerSecond.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedKilometerPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_min_1.DataVerticalSpeedMinKilometerPerHour.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedMilesPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_min_1.DataVerticalSpeedMinMilesPerHour.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedMetersPerHour.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_min_1.DataVerticalSpeedMinMetersPerHour.type, data.getValue(unit))
                            ];
                        case data_vertical_speed_1.DataVerticalSpeedMetersPerMinute.type:
                            return [
                                ...accu,
                                this.getDataInstanceFromDataType(data_vertical_speed_min_1.DataVerticalSpeedMinMetersPerMinute.type, data.getValue(unit))
                            ];
                    }
                    return accu;
                }, []);
            default:
                return [data];
        }
    }
}
exports.DynamicDataLoader = DynamicDataLoader;
// @todo Convert to enums please and use them on Stream types
DynamicDataLoader.positionalDataTypes = [data_latitude_degrees_1.DataLatitudeDegrees.type, data_longitude_degrees_1.DataLongitudeDegrees.type];
DynamicDataLoader.baseDataTypes = [data_speed_1.DataSpeed.type, data_distance_1.DataDistance.type];
DynamicDataLoader.basicDataTypes = [
    data_heart_rate_1.DataHeartRate.type,
    data_altitude_1.DataAltitude.type,
    data_cadence_1.DataCadence.type,
    data_power_1.DataPower.type,
    data_pace_1.DataPace.type,
    data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type,
    data_grade_adjusted_pace_1.DataGradeAdjustedPace.type,
    data_speed_1.DataSpeed.type
];
DynamicDataLoader.advancedDataTypes = [
    data_grade_1.DataGrade.type,
    data_vertical_speed_1.DataVerticalSpeed.type,
    data_temperature_1.DataTemperature.type,
    data_sea_level_pressure_1.DataSeaLevelPressure.type,
    data_satellite_5_best_snr_1.DataSatellite5BestSNR.type,
    data_number_of_satellites_1.DataNumberOfSatellites.type,
    data_evpe_1.DataEVPE.type,
    data_ehpe_1.DataEHPE.type,
    data_altitude_gps_1.DataGPSAltitude.type,
    data_absolute_pressure_1.DataAbsolutePressure.type,
    data_peak_training_effect_1.DataPeakTrainingEffect.type,
    data_epoc_1.DataEPOC.type,
    data_energy_1.DataEnergy.type,
    data_battery_charge_1.DataBatteryCharge.type,
    data_battery_current_1.DataBatteryCurrent.type,
    data_battery_voltage_1.DataBatteryVoltage.type,
    data_battery_consumption_1.DataBatteryConsumption.type,
    data_form_power_1.DataFormPower.type,
    data_leg_stiffness_1.DataLegStiffness.type,
    data_vertical_oscillation_1.DataVerticalOscillation.type,
    data_aerobic_training_effect_1.DataAerobicTrainingEffect.type,
    data_ibi_1.DataIBI.type,
    data_stryd_altitude_1.DataStrydAltitude.type,
    data_accumulated_power_1.DataAccumulatedPower.type,
    data_stryd_altitude_1.DataStrydAltitude.type,
    data_stryd_distance_1.DataStrydDistance.type,
    data_stryd_speed_1.DataStrydSpeed.type,
    data_left_balance_1.DataLeftBalance.type,
    data_right_balance_1.DataRightBalance.type,
    data_power_left_1.DataPowerLeft.type,
    data_power_right_1.DataPowerRight.type,
    data_stance_time_1.DataStanceTime.type,
    data_stance_time_balance_left_1.DataStanceTimeBalanceLeft.type,
    data_step_length_1.DataStepLength.type,
    data_vertical_ratio_1.DataVerticalRatio.type,
    data_ground_time_1.DataGroundTime.type,
    data_air_power_1.DataAirPower.type,
    data_gnss_distance_1.DataGNSSDistance.type,
    data_distance_1.DataDistance.type
];
// @todo perhaps this can be simplified with using getValue if it becomes static of the data it self
DynamicDataLoader.dataTypeUnitGroups = {
    [data_speed_1.DataSpeed.type]: {
        [data_speed_1.DataSpeedKilometersPerHour.type]: helpers_1.convertSpeedToSpeedInKilometersPerHour,
        [data_speed_1.DataSpeedMilesPerHour.type]: helpers_1.convertSpeedToSpeedInMilesPerHour,
        [data_speed_1.DataSpeedFeetPerSecond.type]: helpers_1.convertSpeedToSpeedInFeetPerSecond,
        [data_speed_1.DataSpeedMetersPerMinute.type]: helpers_1.convertSpeedToSpeedInMetersPerMinute,
        [data_speed_1.DataSpeedFeetPerMinute.type]: helpers_1.convertSpeedToSpeedInFeetPerMinute,
        [data_speed_1.DataSpeedKnots.type]: helpers_1.convertSpeedToSpeedInKnots
    },
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type]: {
        [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour.type]: helpers_1.convertSpeedToSpeedInKilometersPerHour,
        [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMilesPerHour.type]: helpers_1.convertSpeedToSpeedInMilesPerHour,
        [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerSecond.type]: helpers_1.convertSpeedToSpeedInFeetPerSecond,
        [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMetersPerMinute.type]: helpers_1.convertSpeedToSpeedInMetersPerMinute,
        [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerMinute.type]: helpers_1.convertSpeedToSpeedInFeetPerMinute,
        [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKnots.type]: helpers_1.convertSpeedToSpeedInKnots
    },
    [data_pace_1.DataPace.type]: {
        [data_pace_1.DataPaceMinutesPerMile.type]: helpers_1.convertPaceToPaceInMinutesPerMile
    },
    [data_grade_adjusted_pace_1.DataGradeAdjustedPace.type]: {
        [data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile.type]: helpers_1.convertPaceToPaceInMinutesPerMile
    },
    [data_swim_pace_1.DataSwimPace.type]: {
        [data_swim_pace_1.DataSwimPaceMinutesPer100Yard.type]: helpers_1.convertSwimPaceToSwimPacePer100Yard
    },
    [data_vertical_speed_1.DataVerticalSpeed.type]: {
        [data_vertical_speed_1.DataVerticalSpeedFeetPerSecond.type]: helpers_1.convertSpeedToSpeedInFeetPerSecond,
        [data_vertical_speed_1.DataVerticalSpeedMetersPerMinute.type]: helpers_1.convertSpeedToSpeedInMetersPerMinute,
        [data_vertical_speed_1.DataVerticalSpeedFeetPerMinute.type]: helpers_1.convertSpeedToSpeedInFeetPerMinute,
        [data_vertical_speed_1.DataVerticalSpeedMetersPerHour.type]: helpers_1.convertSpeedToSpeedInMetersPerHour,
        [data_vertical_speed_1.DataVerticalSpeedFeetPerHour.type]: helpers_1.convertSpeedToSpeedInFeetPerHour,
        [data_vertical_speed_1.DataVerticalSpeedKilometerPerHour.type]: helpers_1.convertSpeedToSpeedInKilometersPerHour,
        [data_vertical_speed_1.DataVerticalSpeedMilesPerHour.type]: helpers_1.convertSpeedToSpeedInMilesPerHour
    },
    [data_distance_1.DataDistance.type]: {
        [data_distance_1.DataDistanceMiles.type]: helpers_1.convertMetersToMiles
    }
};
// @todo perhaps GAS?
DynamicDataLoader.speedDerivedDataTypes = [data_pace_1.DataPace.type, data_grade_adjusted_pace_1.DataGradeAdjustedPace.type, data_swim_pace_1.DataSwimPace.type];
DynamicDataLoader.dataTypeMinDataType = {
    [data_altitude_1.DataAltitude.type]: data_altitude_min_1.DataAltitudeMin.type,
    [data_heart_rate_1.DataHeartRate.type]: data_heart_rate_min_1.DataHeartRateMin.type,
    [data_speed_1.DataSpeed.type]: data_speed_min_1.DataSpeedMin.type,
    [data_speed_1.DataSpeedKilometersPerHour.type]: data_speed_min_1.DataSpeedMinKilometersPerHour.type,
    [data_speed_1.DataSpeedMilesPerHour.type]: data_speed_min_1.DataSpeedMinMilesPerHour.type,
    [data_speed_1.DataSpeedFeetPerSecond.type]: data_speed_min_1.DataSpeedMinFeetPerSecond.type,
    [data_speed_1.DataSpeedMetersPerMinute.type]: data_speed_min_1.DataSpeedMinMetersPerMinute.type,
    [data_speed_1.DataSpeedKnots.type]: data_speed_min_1.DataSpeedMinKnots.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type]: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMin.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour.type]: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinKilometersPerHour.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMilesPerHour.type]: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinMilesPerHour.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerSecond.type]: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinFeetPerSecond.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMetersPerMinute.type]: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinMetersPerMinute.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKnots.type]: data_grade_adjusted_speed_min_1.DataGradeAdjustedSpeedMinKnots.type,
    [data_pace_1.DataPace.type]: data_pace_min_1.DataPaceMin.type,
    [data_pace_1.DataPaceMinutesPerMile.type]: data_pace_min_1.DataPaceMinMinutesPerMile.type,
    [data_grade_adjusted_pace_1.DataGradeAdjustedPace.type]: data_grade_adjusted_pace_min_1.DataGradeAdjustedPaceMin.type,
    [data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile.type]: data_grade_adjusted_pace_min_1.DataGradeAdjustedPaceMinMinutesPerMile.type,
    [data_power_1.DataPower.type]: data_power_min_1.DataPowerMin.type,
    [data_cadence_1.DataCadence.type]: data_cadence_min_1.DataCadenceMin.type,
    [data_temperature_1.DataTemperature.type]: data_temperature_min_1.DataTemperatureMin.type
};
DynamicDataLoader.dataTypeMaxDataType = {
    [data_altitude_1.DataAltitude.type]: data_altitude_max_1.DataAltitudeMax.type,
    [data_heart_rate_1.DataHeartRate.type]: data_heart_rate_max_1.DataHeartRateMax.type,
    [data_speed_1.DataSpeed.type]: data_speed_max_1.DataSpeedMax.type,
    [data_speed_1.DataSpeedKilometersPerHour.type]: data_speed_max_1.DataSpeedMaxKilometersPerHour.type,
    [data_speed_1.DataSpeedMilesPerHour.type]: data_speed_max_1.DataSpeedMaxMilesPerHour.type,
    [data_speed_1.DataSpeedFeetPerSecond.type]: data_speed_max_1.DataSpeedMaxFeetPerSecond.type,
    [data_speed_1.DataSpeedMetersPerMinute.type]: data_speed_max_1.DataSpeedMaxMetersPerMinute.type,
    [data_speed_1.DataSpeedKnots.type]: data_speed_max_1.DataSpeedMaxKnots.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type]: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMax.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour.type]: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxKilometersPerHour.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMilesPerHour.type]: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxMilesPerHour.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerSecond.type]: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxFeetPerSecond.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMetersPerMinute.type]: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxMetersPerMinute.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKnots.type]: data_grade_adjusted_speed_max_1.DataGradeAdjustedSpeedMaxKnots.type,
    [data_pace_1.DataPace.type]: data_pace_max_1.DataPaceMax.type,
    [data_pace_1.DataPaceMinutesPerMile.type]: data_pace_max_1.DataPaceMaxMinutesPerMile.type,
    [data_grade_adjusted_pace_1.DataGradeAdjustedPace.type]: data_grade_adjusted_pace_max_1.DataGradeAdjustedPaceMax.type,
    [data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile.type]: data_grade_adjusted_pace_max_1.DataGradeAdjustedPaceMaxMinutesPerMile.type,
    [data_power_1.DataPower.type]: data_power_max_1.DataPowerMax.type,
    [data_cadence_1.DataCadence.type]: data_cadence_max_1.DataCadenceMax.type,
    [data_temperature_1.DataTemperature.type]: data_temperature_max_1.DataTemperatureMax.type
};
DynamicDataLoader.dataTypeAvgDataType = {
    [data_altitude_1.DataAltitude.type]: data_altitude_avg_1.DataAltitudeAvg.type,
    [data_heart_rate_1.DataHeartRate.type]: data_heart_rate_avg_1.DataHeartRateAvg.type,
    [data_speed_1.DataSpeed.type]: data_speed_avg_1.DataSpeedAvg.type,
    [data_speed_1.DataSpeedKilometersPerHour.type]: data_speed_avg_1.DataSpeedAvgKilometersPerHour.type,
    [data_speed_1.DataSpeedMilesPerHour.type]: data_speed_avg_1.DataSpeedAvgMilesPerHour.type,
    [data_speed_1.DataSpeedFeetPerSecond.type]: data_speed_avg_1.DataSpeedAvgFeetPerSecond.type,
    [data_speed_1.DataSpeedMetersPerMinute.type]: data_speed_avg_1.DataSpeedAvgMetersPerMinute.type,
    [data_speed_1.DataSpeedKnots.type]: data_speed_avg_1.DataSpeedAvgKnots.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeed.type]: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvg.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKilometersPerHour.type]: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgKilometersPerHour.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMilesPerHour.type]: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgMilesPerHour.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedFeetPerSecond.type]: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgFeetPerSecond.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedMetersPerMinute.type]: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgMetersPerMinute.type,
    [data_grade_adjusted_speed_1.DataGradeAdjustedSpeedKnots.type]: data_grade_adjusted_speed_avg_1.DataGradeAdjustedSpeedAvgKnots.type,
    [data_pace_1.DataPace.type]: data_pace_avg_1.DataPaceAvg.type,
    [data_pace_1.DataPaceMinutesPerMile.type]: data_pace_avg_1.DataPaceAvgMinutesPerMile.type,
    [data_grade_adjusted_pace_1.DataGradeAdjustedPace.type]: data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvg.type,
    [data_grade_adjusted_pace_1.DataGradeAdjustedPaceMinutesPerMile.type]: data_grade_adjusted_pace_avg_1.DataGradeAdjustedPaceAvgMinutesPerMile.type,
    [data_power_1.DataPower.type]: data_power_avg_1.DataPowerAvg.type,
    [data_cadence_1.DataCadence.type]: data_cadence_avg_1.DataCadenceAvg.type,
    [data_temperature_1.DataTemperature.type]: data_temperature_avg_1.DataTemperatureAvg.type
};
DynamicDataLoader.allUnitDerivedDataTypes = Object.keys(DynamicDataLoader.dataTypeUnitGroups).reduce((accu, key) => accu.concat(Object.keys(DynamicDataLoader.dataTypeUnitGroups[key])), []);
DynamicDataLoader.zoneStatsTypeMap = [
    {
        type: data_heart_rate_1.DataHeartRate.type,
        stats: [
            data_heart_rate_zone_one_duration_1.DataHeartRateZoneOneDuration.type,
            data_heart_rate_zone_two_duration_1.DataHeartRateZoneTwoDuration.type,
            data_heart_rate_zone_three_duration_1.DataHeartRateZoneThreeDuration.type,
            data_heart_rate_zone_four_duration_1.DataHeartRateZoneFourDuration.type,
            data_heart_rate_zone_five_duration_1.DataHeartRateZoneFiveDuration.type
        ]
    },
    {
        type: data_speed_1.DataSpeed.type,
        stats: [
            data_speed_zone_one_duration_1.DataSpeedZoneOneDuration.type,
            data_speed_zone_two_duration_1.DataSpeedZoneTwoDuration.type,
            data_speed_zone_three_duration_1.DataSpeedZoneThreeDuration.type,
            data_speed_zone_four_duration_1.DataSpeedZoneFourDuration.type,
            data_speed_zone_five_duration_1.DataSpeedZoneFiveDuration.type
        ]
    },
    {
        type: data_power_1.DataPower.type,
        stats: [
            data_power_zone_one_duration_1.DataPowerZoneOneDuration.type,
            data_power_zone_two_duration_1.DataPowerZoneTwoDuration.type,
            data_power_zone_three_duration_1.DataPowerZoneThreeDuration.type,
            data_power_zone_four_duration_1.DataPowerZoneFourDuration.type,
            data_power_zone_five_duration_1.DataPowerZoneFiveDuration.type
        ]
    }
];
