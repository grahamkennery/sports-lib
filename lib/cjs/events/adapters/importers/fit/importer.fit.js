"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventImporterFIT = void 0;
const event_1 = require("../../../event");
const activity_1 = require("../../../../activities/activity");
const lap_1 = require("../../../../laps/lap");
const creator_1 = require("../../../../creators/creator");
const activity_types_1 = require("../../../../activities/activity.types");
const data_duration_1 = require("../../../../data/data.duration");
const data_energy_1 = require("../../../../data/data.energy");
const data_distance_1 = require("../../../../data/data.distance");
const importer_fit_suunto_device_names_1 = require("./importer.fit.suunto.device.names");
const importer_fit_garmin_profile_mapper_1 = require("./importer.fit.garmin.profile.mapper");
const data_pause_1 = require("../../../../data/data.pause");
const data_cadence_avg_1 = require("../../../../data/data.cadence-avg");
const data_power_avg_1 = require("../../../../data/data.power-avg");
const data_speed_avg_1 = require("../../../../data/data.speed-avg");
const data_cadence_max_1 = require("../../../../data/data.cadence-max");
const data_power_max_1 = require("../../../../data/data.power-max");
const data_ascent_1 = require("../../../../data/data.ascent");
const data_descent_1 = require("../../../../data/data.descent");
const data_heart_rate_avg_1 = require("../../../../data/data.heart-rate-avg");
const data_heart_rate_max_1 = require("../../../../data/data.heart-rate-max");
const data_speed_max_1 = require("../../../../data/data.speed-max");
const lap_types_1 = require("../../../../laps/lap.types");
const data_heart_rate_min_1 = require("../../../../data/data.heart-rate-min");
const data_power_min_1 = require("../../../../data/data.power-min");
const data_aerobic_training_effect_1 = require("../../../../data/data-aerobic-training-effect");
const importer_fit_mapper_1 = require("./importer.fit.mapper");
const helpers_1 = require("../../../utilities/helpers");
const event_utilities_1 = require("../../../utilities/event.utilities");
const ibi_stream_1 = require("../../../../streams/ibi-stream");
const device_1 = require("../../../../activities/devices/device");
const importer_fit_ant_plus_device_names_1 = require("./importer.fit.ant-plus.device.names");
const data_recovery_time_1 = require("../../../../data/data.recovery-time");
const data_peak_epoc_1 = require("../../../../data/data.peak-epoc");
const data_feeling_1 = require("../../../../data/data.feeling");
const data_temperature_max_1 = require("../../../../data/data.temperature-max");
const data_temperature_min_1 = require("../../../../data/data.temperature-min");
const data_temperature_avg_1 = require("../../../../data/data.temperature-avg");
const data_speed_min_1 = require("../../../../data/data.speed-min");
const data_cadence_min_1 = require("../../../../data/data.cadence-min");
const data_swolf_25m_1 = require("../../../../data/data.swolf-25m");
const data_description_1 = require("../../../../data/data.description");
const data_vo2_max_1 = require("../../../../data/data.vo2-max");
const intensity_zones_1 = require("../../../../intensity-zones/intensity-zones");
const data_heart_rate_1 = require("../../../../data/data.heart-rate");
const data_power_1 = require("../../../../data/data.power");
const data_speed_1 = require("../../../../data/data.speed");
const data_heart_rate_zone_one_duration_1 = require("../../../../data/data.heart-rate-zone-one-duration");
const data_heart_rate_zone_two_duration_1 = require("../../../../data/data.heart-rate-zone-two-duration");
const data_heart_rate_zone_three_duration_1 = require("../../../../data/data.heart-rate-zone-three-duration");
const data_heart_rate_zone_four_duration_1 = require("../../../../data/data.heart-rate-zone-four-duration");
const data_heart_rate_zone_five_duration_1 = require("../../../../data/data.heart-rate-zone-five-duration");
const data_power_zone_one_duration_1 = require("../../../../data/data.power-zone-one-duration");
const data_power_zone_two_duration_1 = require("../../../../data/data.power-zone-two-duration");
const data_power_zone_three_duration_1 = require("../../../../data/data.power-zone-three-duration");
const data_power_zone_four_duration_1 = require("../../../../data/data.power-zone-four-duration");
const data_power_zone_five_duration_1 = require("../../../../data/data.power-zone-five-duration");
const data_speed_zone_one_duration_1 = require("../../../../data/data.speed-zone-one-duration");
const data_speed_zone_two_duration_1 = require("../../../../data/data.speed-zone-two-duration");
const data_speed_zone_three_duration_1 = require("../../../../data/data.speed-zone-three-duration");
const data_speed_zone_four_duration_1 = require("../../../../data/data.speed-zone-four-duration");
const data_speed_zone_five_duration_1 = require("../../../../data/data.speed-zone-five-duration");
const empty_event_sports_libs_error_1 = require("../../../../errors/empty-event-sports-libs.error");
const data_start_event_1 = require("../../../../data/data.start-event");
const data_stop_event_1 = require("../../../../data/data.stop-event");
const data_stop_all_event_1 = require("../../../../data/data.stop-all-event");
const data_moving_time_1 = require("../../../../data/data.moving-time");
const activity_utilities_1 = require("../../../utilities/activity.utilities");
const data_timer_time_1 = require("../../../../data/data.timer-time");
const data_total_cycles_1 = require("../../../../data/data-total-cycles");
const data_pool_length_1 = require("../../../../data/data.pool-length");
const data_active_lengths_1 = require("../../../../data/data-active-lengths");
const data_active_lap_1 = require("../../../../data/data-active-lap");
const data_swolf_50m_1 = require("../../../../data/data.swolf-50m");
const file_type_enum_1 = require("../../file-type.enum");
const data_power_torque_effectiveness_left_1 = require("../../../../data/data.power-torque-effectiveness-left");
const data_power_torque_effectiveness_right_1 = require("../../../../data/data.power-torque-effectiveness-right");
const data_power_pedal_smoothness_left_1 = require("../../../../data/data.power-pedal-smoothness-left");
const data_power_pedal_smoothness_right_1 = require("../../../../data/data.power-pedal-smoothness-right");
const data_power_normalized_1 = require("../../../../data/data.power-normalized");
const data_power_intensity_factor_1 = require("../../../../data/data.power-intensity-factor");
const data_power_training_stress_score_1 = require("../../../../data/data.power-training-stress-score");
const data_power_work_1 = require("../../../../data/data.power-work");
const data_cycling_standing_time_1 = require("../../../../data/data.cycling-standing-time");
const data_cycling_seated_time_1 = require("../../../../data/data.cycling-seated-time");
const data_cycling_position_1 = require("../../../../data/data.cycling-position");
const data_rider_position_change_event_1 = require("../../../../data/data.rider-position-change-event");
const data_stance_time_1 = require("../../../../data/data.stance-time");
const data_vertical_oscillation_1 = require("../../../../data/data.vertical-oscillation");
const data_vertical_ratio_1 = require("../../../../data/data.vertical-ratio");
const data_avg_stride_length_1 = require("../../../../data/data.avg-stride-length");
const data_anaerobic_training_effect_1 = require("../../../../data/data-anaerobic-training-effect");
const importer_fit_wahoo_device_names_1 = require("./importer.fit.wahoo.device.names");
const importer_fit_coros_device_names_1 = require("./importer.fit.coros.device.names");
const importer_fit_srm_device_names_1 = require("./importer.fit.srm.device.names");
const activity_parsing_options_1 = require("../../../../activities/activity-parsing-options");
const importer_fit_hammerhead_device_names_1 = require("./importer.fit.hammerhead.device.names");
const importer_fit_lezyne_device_names_1 = require("./importer.fit.lezyne.device.names");
const importer_fit_magellan_device_names_1 = require("./importer.fit.magellan.device.names");
const importer_fit_saris_device_names_1 = require("./importer.fit.saris.device.names");
const parsing_event_lib_error_1 = require("../../../../errors/parsing-event-lib.error");
const data_power_down_1 = require("../../../../data/data.power-down");
const data_power_up_1 = require("../../../../data/data.power-up");
const importer_fit_development_device_names_1 = require("./importer.fit.development.device.names");
// eslint-disable-next-line @typescript-eslint/no-var-requires
// @ts-ignore
const fit_file_parser_1 = __importDefault(require("fit-file-parser"));
// Threshold to detect that session.timestamp are not trustable (when exceeding 15% of session.total_elapsed_time)
const INVALID_DATES_ELAPSED_TIME_RATIO_THRESHOLD = 1.15;
class EventImporterFIT {
    static getFromArrayBuffer(arrayBuffer, options = activity_parsing_options_1.ActivityParsingOptions.DEFAULT, name = 'New Event') {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const fitFileParser = new fit_file_parser_1.default({
                    force: true,
                    speedUnit: 'm/s',
                    lengthUnit: 'm',
                    temperatureUnit: 'celsius',
                    elapsedRecordField: false,
                    mode: 'both'
                });
                fitFileParser.parse(arrayBuffer, (error, fitDataObject) => {
                    if (error) {
                        // For now, assume any error from parser on this file means it's broken/empty in a way we treat as EmptyEventLibError
                        // to satisfy existing tests. Or ideally we wrap in a generic EventLibError.
                        // But test expects EmptyEventLibError.
                        reject(new empty_event_sports_libs_error_1.EmptyEventLibError());
                        return;
                    }
                    if (!fitDataObject || !fitDataObject.sessions) {
                        reject(new empty_event_sports_libs_error_1.EmptyEventLibError());
                        return;
                    }
                    // Iterate over the sessions and create their activities
                    const activities = fitDataObject.sessions.map((sessionObject) => {
                        // Get the activity from the sessionObject
                        const activity = this.getActivityFromSessionObject(sessionObject, fitDataObject, options);
                        // Go over the laps
                        sessionObject.laps.forEach((sessionLapObject, index) => {
                            activity.addLap(this.getLapFromSessionLapObject(sessionLapObject, activity, index));
                        });
                        // Go over the hr zone info
                        if (sessionObject.time_in_hr_zone && sessionObject.time_in_hr_zone.length) {
                            // Add the stats
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_hr_zone[0])) {
                                activity.addStat(new data_heart_rate_zone_one_duration_1.DataHeartRateZoneOneDuration(sessionObject.time_in_hr_zone[0]));
                            }
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_hr_zone[1])) {
                                activity.addStat(new data_heart_rate_zone_two_duration_1.DataHeartRateZoneTwoDuration(sessionObject.time_in_hr_zone[1]));
                            }
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_hr_zone[2])) {
                                activity.addStat(new data_heart_rate_zone_three_duration_1.DataHeartRateZoneThreeDuration(sessionObject.time_in_hr_zone[2]));
                            }
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_hr_zone[3])) {
                                activity.addStat(new data_heart_rate_zone_four_duration_1.DataHeartRateZoneFourDuration(sessionObject.time_in_hr_zone[3]));
                            }
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_hr_zone[4])) {
                                activity.addStat(new data_heart_rate_zone_five_duration_1.DataHeartRateZoneFiveDuration(sessionObject.time_in_hr_zone[4]));
                            }
                            const hrIntensityZones = new intensity_zones_1.IntensityZones(data_heart_rate_1.DataHeartRate.type);
                            hrIntensityZones.zone1Duration = sessionObject.time_in_hr_zone[0] || 0;
                            hrIntensityZones.zone2Duration = sessionObject.time_in_hr_zone[1] || 0;
                            hrIntensityZones.zone3Duration = sessionObject.time_in_hr_zone[2] || 0;
                            hrIntensityZones.zone4Duration = sessionObject.time_in_hr_zone[3] || 0;
                            hrIntensityZones.zone5Duration = sessionObject.time_in_hr_zone[4] || 0;
                            activity.intensityZones.push(hrIntensityZones);
                        }
                        // Go over the power zone info
                        if (sessionObject.time_in_power_zone && sessionObject.time_in_power_zone.length) {
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_power_zone[0])) {
                                activity.addStat(new data_power_zone_one_duration_1.DataPowerZoneOneDuration(sessionObject.time_in_power_zone[0]));
                            }
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_power_zone[1])) {
                                activity.addStat(new data_power_zone_two_duration_1.DataPowerZoneTwoDuration(sessionObject.time_in_power_zone[1]));
                            }
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_power_zone[2])) {
                                activity.addStat(new data_power_zone_three_duration_1.DataPowerZoneThreeDuration(sessionObject.time_in_power_zone[2]));
                            }
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_power_zone[3])) {
                                activity.addStat(new data_power_zone_four_duration_1.DataPowerZoneFourDuration(sessionObject.time_in_power_zone[3]));
                            }
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_power_zone[4])) {
                                activity.addStat(new data_power_zone_five_duration_1.DataPowerZoneFiveDuration(sessionObject.time_in_power_zone[4]));
                            }
                            const powerIntensityZones = new intensity_zones_1.IntensityZones(data_power_1.DataPower.type);
                            powerIntensityZones.zone1Duration = sessionObject.time_in_power_zone[0] || 0;
                            powerIntensityZones.zone2Duration = sessionObject.time_in_power_zone[1] || 0;
                            powerIntensityZones.zone3Duration = sessionObject.time_in_power_zone[2] || 0;
                            powerIntensityZones.zone4Duration = sessionObject.time_in_power_zone[3] || 0;
                            powerIntensityZones.zone5Duration = sessionObject.time_in_power_zone[4] || 0;
                            activity.intensityZones.push(powerIntensityZones);
                        }
                        // Go over the speed zone info
                        if (sessionObject.time_in_speed_zone && sessionObject.time_in_speed_zone.length) {
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_speed_zone[0])) {
                                activity.addStat(new data_speed_zone_one_duration_1.DataSpeedZoneOneDuration(sessionObject.time_in_speed_zone[0]));
                            }
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_speed_zone[1])) {
                                activity.addStat(new data_speed_zone_two_duration_1.DataSpeedZoneTwoDuration(sessionObject.time_in_speed_zone[1]));
                            }
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_speed_zone[2])) {
                                activity.addStat(new data_speed_zone_three_duration_1.DataSpeedZoneThreeDuration(sessionObject.time_in_speed_zone[2]));
                            }
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_speed_zone[3])) {
                                activity.addStat(new data_speed_zone_four_duration_1.DataSpeedZoneFourDuration(sessionObject.time_in_speed_zone[3]));
                            }
                            if ((0, helpers_1.isNumber)(sessionObject.time_in_speed_zone[4])) {
                                activity.addStat(new data_speed_zone_five_duration_1.DataSpeedZoneFiveDuration(sessionObject.time_in_speed_zone[4]));
                            }
                            const speedIntensityZones = new intensity_zones_1.IntensityZones(data_speed_1.DataSpeed.type);
                            speedIntensityZones.zone1Duration = sessionObject.time_in_speed_zone[0] || 0;
                            speedIntensityZones.zone2Duration = sessionObject.time_in_speed_zone[1] || 0;
                            speedIntensityZones.zone3Duration = sessionObject.time_in_speed_zone[2] || 0;
                            speedIntensityZones.zone4Duration = sessionObject.time_in_speed_zone[3] || 0;
                            speedIntensityZones.zone5Duration = sessionObject.time_in_speed_zone[4] || 0;
                            activity.intensityZones.push(speedIntensityZones);
                        }
                        // Add the events
                        fitDataObject.events
                            .filter((activityEvent) => {
                            return activityEvent.timestamp >= activity.startDate && activityEvent.timestamp <= activity.endDate;
                        })
                            .forEach((activityEvent) => {
                            if (activityEvent.event === 'timer') {
                                switch (activityEvent.event_type) {
                                    case 'start':
                                        activity.addEvent(new data_start_event_1.DataStartEvent(activity.getDateIndex(activityEvent.timestamp)));
                                        break;
                                    case 'stop':
                                        activity.addEvent(new data_stop_event_1.DataStopEvent(activity.getDateIndex(activityEvent.timestamp)));
                                        break;
                                    case 'stop_all':
                                        activity.addEvent(new data_stop_all_event_1.DataStopAllEvent(activity.getDateIndex(activityEvent.timestamp)));
                                        break;
                                    default:
                                        break;
                                }
                            }
                            else if (activityEvent.event === 'power_down') {
                                activity.addEvent(new data_power_down_1.DataPowerDown(activity.getDateIndex(activityEvent.timestamp)));
                            }
                            else if (activityEvent.event === 'power_up') {
                                activity.addEvent(new data_power_up_1.DataPowerUp(activity.getDateIndex(activityEvent.timestamp)));
                            }
                            else if (activityEvent.event === 'rider_position_change') {
                                const positionChange = activityEvent.data;
                                if (positionChange === data_cycling_position_1.RiderPosition.SEATED ||
                                    positionChange === data_cycling_position_1.RiderPosition.STANDING ||
                                    positionChange === data_cycling_position_1.RiderPosition.TRANSITION_TO_SEATED ||
                                    positionChange === data_cycling_position_1.RiderPosition.TRANSITION_TO_STANDING) {
                                    activity.addEvent(new data_rider_position_change_event_1.DataRiderPositionChangeEvent(activity.getDateIndex(activityEvent.timestamp), positionChange));
                                }
                            }
                        });
                        // Get the samples..
                        // Test if activity is lengths based
                        // Indeed when based on lengths, an activity do not provides samples under records object (e.g. Pool swimming activities)
                        // Note: this is how Strava generate streams for this kind of activities
                        const isLengthsBased = this.isLengthsBased(sessionObject);
                        const samples = isLengthsBased
                            ? this.generateSamplesFromLengths(sessionObject)
                            : fitDataObject.records.filter((record) => {
                                return record.timestamp >= activity.startDate && record.timestamp <= activity.endDate;
                            });
                        // Setup sample info which could be use when getting sample values
                        const hasPowerMeter = samples.findIndex((sample) => Number.isFinite((0, helpers_1.isNumber)(sample.power) ? sample.power : (0, helpers_1.isNumber)(sample.Power) ? sample.Power : sample.RP_Power)) !== -1;
                        const samplesInfo = { hasPowerMeter: hasPowerMeter };
                        importer_fit_mapper_1.FITSampleMapper.forEach(sampleMapping => {
                            // @todo not sure if we need to check for number only ...
                            const subjectSamples = (samples.filter((sample) => (0, helpers_1.isNumber)(sampleMapping.getSampleValue(sample, samplesInfo))));
                            if (subjectSamples.length) {
                                // When we create a stream here it has the length of the activity elapsed time (end-start) filled with nulls.
                                // We keep nulls in order to preserve the array length.
                                activity.addStream(activity.createStream(sampleMapping.dataType));
                                subjectSamples.forEach(subjectSample => {
                                    activity.addDataToStream(sampleMapping.dataType, new Date(subjectSample.timestamp), sampleMapping.getSampleValue(subjectSample, samplesInfo));
                                });
                            }
                        });
                        return activity;
                    });
                    // If there are no activities to parse ....
                    if (!activities.length) {
                        reject(new empty_event_sports_libs_error_1.EmptyEventLibError());
                        return;
                    }
                    // Get the HRV to IBI if exist
                    if (fitDataObject.hrv && fitDataObject.hrv.length) {
                        activities.forEach((activity) => {
                            let timeSum = 0;
                            const ibiData = fitDataObject.hrv
                                .reduce((ibiArray, hrvRecord) => ibiArray.concat(hrvRecord.time), [])
                                .map((ibi) => ibi * 1000)
                                .filter((ibi) => {
                                // debugger;
                                // Some Garmin devices return a record of 65.535 (65535) for some reason so exlcude those
                                if (ibi === 65535) {
                                    // timeSum += ibi;
                                    return false;
                                }
                                timeSum += ibi;
                                const ibiDataDate = new Date(activities[0].startDate.getTime() + timeSum);
                                return ibiDataDate >= activity.startDate && ibiDataDate <= activity.endDate;
                            });
                            // set the IBI
                            activity.addStream(new ibi_stream_1.IBIStream(ibiData));
                        });
                    }
                    // Parse the device infos
                    if (fitDataObject.device_infos && fitDataObject.device_infos.length) {
                        activities.forEach(activity => {
                            activity.creator.devices = this.getDeviceInfos(fitDataObject.device_infos);
                        });
                    }
                    // Create an event
                    // @todo check if the start and end date can derive from the file
                    const event = new event_1.Event(name, activities[0].startDate, activities[activities.length - 1].endDate, file_type_enum_1.FileType.FIT);
                    activities.forEach(activity => event.addActivity(activity));
                    // debugger;
                    event_utilities_1.EventUtilities.generateStatsForAll(event);
                    // debugger;
                    resolve(event);
                });
            });
        });
    }
    /**
     * Tell if an activity is lengths based (e.g. Pool swimming activities)
     * @param sessionObject
     * @private
     */
    static isLengthsBased(sessionObject) {
        var _a;
        return ((_a = sessionObject.laps) === null || _a === void 0 ? void 0 : _a.filter((lap) => { var _a; return (_a = lap.lengths) === null || _a === void 0 ? void 0 : _a.length; }).length) > 1;
    }
    /**
     * Generate streams samples based on lengths on an activity
     * When based on lengths, an activity do not provides sample under records object
     * @param sessionObject
     * @private
     */
    static generateSamplesFromLengths(sessionObject) {
        if (!this.isLengthsBased(sessionObject)) {
            throw new parsing_event_lib_error_1.ParsingEventLibError('Trying to get samples from activities lengths, but no lengths is available');
        }
        let samples = [];
        // Loop on every laps to catch every lengths where data is (speed, cadence, hr, ...)
        sessionObject.laps.forEach((lap) => {
            var _a;
            // Loop on every laps
            if ((_a = lap.lengths) === null || _a === void 0 ? void 0 : _a.length) {
                // Get length in meters from lap total distance and total number of lengths
                // We will use it to generate the distance stream below
                const lengthMeters = lap.total_distance / lap.lengths.length;
                // For each length of every laps build the streams data we will need for a later use
                lap.lengths.forEach((length) => {
                    // Resolve start/end date of current length
                    const lengthStartDate = length.start_time;
                    const lengthEndDate = new Date(lengthStartDate.getTime() + (length.total_timer_time || length.total_elapsed_time || 0) * 1000);
                    if (lengthEndDate.getTime() <= lengthStartDate.getTime()) {
                        return;
                    }
                    // Generate a stream from length start date to end date filled by null values
                    let lengthStream = Array(activity_utilities_1.ActivityUtilities.getDataLength(lengthStartDate, lengthEndDate)).fill(null);
                    // Define distance step to be used for distance stream
                    const lengthStepSize = lengthMeters / (lengthStream.length - 1);
                    // Generate the length stream based on data we have on current length
                    lengthStream = lengthStream.map((value, index) => {
                        var _a;
                        return {
                            timestamp: new Date(lengthStartDate.getTime() + index * 1000),
                            distance: (((_a = samples[samples.length - 1]) === null || _a === void 0 ? void 0 : _a.distance) || 0) + lengthStepSize * index,
                            speed: length.avg_speed || lap.avg_speed,
                            cadence: length.avg_cadence || length.avg_swimming_cadence || lap.avg_cadence,
                            heart_rate: length.avg_heart_rate || lap.avg_heart_rate
                        };
                    });
                    // Append to existing samples
                    samples = samples.concat(lengthStream);
                });
            }
        });
        return samples;
    }
    static getDeviceInfos(deviceInfos) {
        return deviceInfos.map((deviceInfo) => {
            const device = new device_1.Device(deviceInfo.device_type);
            device.index = deviceInfo.device_index;
            device.name = importer_fit_ant_plus_device_names_1.ImporterFitAntPlusDeviceNames[deviceInfo.ant_device_number] || deviceInfo.ant_device_number;
            device.batteryStatus = deviceInfo.battery_status;
            device.batteryVoltage = deviceInfo.battery_voltage;
            device.manufacturer = deviceInfo.manufacturer;
            device.serialNumber = deviceInfo.serial_number;
            device.product = deviceInfo.product;
            device.swInfo = deviceInfo.software_version;
            device.hwInfo = deviceInfo.hardware_version;
            device.antDeviceNumber = deviceInfo.ant_device_number;
            device.antTransmissionType = deviceInfo.ant_transmission_type;
            device.antNetwork = deviceInfo.ant_network;
            device.sourceType = deviceInfo.source_type;
            device.cumOperatingTime = deviceInfo.cum_operating_time;
            return device;
        });
    }
    static getLapFromSessionLapObject(sessionLapObject, activity, lapIndex) {
        var _a, _b, _c;
        const startDate = (sessionLapObject === null || sessionLapObject === void 0 ? void 0 : sessionLapObject.start_time) ||
            ((_a = sessionLapObject === null || sessionLapObject === void 0 ? void 0 : sessionLapObject.records[0]) === null || _a === void 0 ? void 0 : _a.timestamp) ||
            ((sessionLapObject === null || sessionLapObject === void 0 ? void 0 : sessionLapObject.total_elapsed_time) &&
                new Date(sessionLapObject.timestamp.getTime() - sessionLapObject.total_elapsed_time * 1000)) ||
            null;
        const endDate = (sessionLapObject === null || sessionLapObject === void 0 ? void 0 : sessionLapObject.timestamp) ||
            (((_b = sessionLapObject.records) === null || _b === void 0 ? void 0 : _b.length) > 0 &&
                ((_c = sessionLapObject.records[sessionLapObject.records.length - 1]) === null || _c === void 0 ? void 0 : _c.timestamp)) ||
            (sessionLapObject.start_time &&
                sessionLapObject.total_elapsed_time &&
                new Date(sessionLapObject.start_time.getTime() + sessionLapObject.total_elapsed_time * 1000)) ||
            null;
        const lap = new lap_1.Lap(startDate, endDate, // Some dont have a timestamp
        lapIndex + 1, lap_types_1.LapTypes[sessionLapObject.lap_trigger] || lap_types_1.LapTypes.unknown);
        // Set the calories
        if (sessionLapObject.total_calories) {
            lap.addStat(new data_energy_1.DataEnergy(sessionLapObject.total_calories));
        }
        // Add stats to the lap
        this.getStatsFromObject(sessionLapObject, activity, true).forEach(stat => lap.addStat(stat));
        return lap;
    }
    static getActivityFromSessionObject(sessionObject, fitDataObject, options) {
        /**
         * Provides start/end date based on records available in given session object first, then in parent fit object
         */
        const getStartEndDatesFromRecords = (sessionObject, fitDataObject) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            let startDate = null;
            let endDate = null;
            // Try to get from session first
            if (((_a = sessionObject === null || sessionObject === void 0 ? void 0 : sessionObject.laps) === null || _a === void 0 ? void 0 : _a.length) > 0 && // Current session has laps
                ((_b = sessionObject.laps[0].records) === null || _b === void 0 ? void 0 : _b.length) > 0 && // Current session has records in first lap
                ((_c = sessionObject.laps[sessionObject.laps.length - 1].records) === null || _c === void 0 ? void 0 : _c.length) > 0 // Current session has records in last lap
            ) {
                const firstLapRecords = sessionObject.laps[0].records;
                const firstRecordTimeStamp = (_d = firstLapRecords[0]) === null || _d === void 0 ? void 0 : _d.timestamp;
                if (firstRecordTimeStamp) {
                    startDate = firstRecordTimeStamp;
                }
                const lastLapRecords = sessionObject.laps[sessionObject.laps.length - 1].records;
                const lastRecordTimeStamp = (_e = lastLapRecords[lastLapRecords.length - 1]) === null || _e === void 0 ? void 0 : _e.timestamp;
                if (lastRecordTimeStamp) {
                    endDate = lastRecordTimeStamp;
                }
            }
            // Then from parent fit object first
            if ((!startDate || !endDate) && ((_f = fitDataObject.records) === null || _f === void 0 ? void 0 : _f.length)) {
                startDate = ((_g = fitDataObject.records[0]) === null || _g === void 0 ? void 0 : _g.timestamp) || null;
                endDate = ((_h = fitDataObject.records[fitDataObject.records.length - 1]) === null || _h === void 0 ? void 0 : _h.timestamp) || null;
            }
            return [startDate, endDate];
        };
        // For some unknown reasons... the fit provided total_timer_time & total_elapsed_time could be inverted..
        // Just invert fields if that's the case
        this.swapTimesIfRequired(sessionObject);
        // Start finding out total elapsed time from fit dedicated fields
        const totalElapsedTime = sessionObject.total_elapsed_time || sessionObject.total_timer_time || 0;
        // Pick start/end date values
        let startDate = sessionObject.start_time || getStartEndDatesFromRecords(sessionObject, fitDataObject)[0] || null;
        let endDate = sessionObject.timestamp ||
            (startDate && totalElapsedTime && new Date(startDate.getTime() + totalElapsedTime * 1000)) ||
            getStartEndDatesFromRecords(sessionObject, fitDataObject)[1] ||
            null;
        // Some fit files have wrong dates for session.timestamp && session.start_time and those miss an elapsed time
        // Get dates from records in that case
        if (!totalElapsedTime // Elapsed time missing
        ) {
            const [startDateResult, endDateResult] = getStartEndDatesFromRecords(sessionObject, fitDataObject);
            if (startDateResult) {
                startDate = startDateResult;
            }
            if (endDateResult) {
                endDate = endDateResult;
            }
        }
        // Now verify the start/end date compliance,
        // If for some reason this happens, get from records too
        if (endDate <= startDate) {
            const [startDateResult, endDateResult] = getStartEndDatesFromRecords(sessionObject, fitDataObject);
            if (startDateResult) {
                startDate = startDateResult;
            }
            if (endDateResult) {
                endDate = endDateResult;
            }
        }
        const elapsedTimeFromDates = (+endDate - +startDate) / 1000; // Get elapsed calculated from dates
        // Test case where sometime elapsed time (calculated from dates) can be very high comparing to computed totalElapsedTime
        // If elapsed time (calculated from dates) is detected as "strange" then use elapsed time from fit fields instead
        // @see test case implying 'fixtures/rides/fit/5319808632.fit' fit file
        if (elapsedTimeFromDates / totalElapsedTime > INVALID_DATES_ELAPSED_TIME_RATIO_THRESHOLD) {
            if (totalElapsedTime) {
                endDate = new Date(sessionObject.start_time.getTime() + totalElapsedTime * 1000);
            }
        }
        // Re-test potential updated activity duration against max accepted duration
        if (+endDate - +startDate > options.maxActivityDurationDays * 24 * 60 * 60 * 1000) {
            endDate = new Date(sessionObject.start_time.getTime() + totalElapsedTime * 1000);
        }
        if (!startDate || !endDate) {
            throw new parsing_event_lib_error_1.ParsingEventLibError('Cannot parse start and end dates');
        }
        else {
            // Create an activity
            const activity = new activity_1.Activity(startDate, endDate, this.getActivityTypeFromSessionObject(sessionObject), this.getCreatorFromFitDataObject(fitDataObject), options);
            // Set the activity stats
            this.getStatsFromObject(sessionObject, activity, false).forEach(stat => activity.addStat(stat));
            return activity;
        }
    }
    /**
     * For some unknown reasons... the fit provided total_timer_time & total_elapsed_time could be inverted..
     * Just swap them if that's the case
     */
    static swapTimesIfRequired(object) {
        if ((0, helpers_1.isNumber)(object.total_timer_time) &&
            (0, helpers_1.isNumber)(object.total_elapsed_time) &&
            object.total_elapsed_time < object.total_timer_time) {
            const realTimerTime = object.total_elapsed_time;
            const realElapsedTime = object.total_timer_time;
            object.total_timer_time = realTimerTime;
            object.total_elapsed_time = realElapsedTime;
        }
    }
    static getActivityTypeFromSessionObject(session) {
        const activityTypeKey = session.sub_sport && session.sub_sport !== 'generic' ? `${session.sport}_${session.sub_sport}` : session.sport;
        let activityType = activity_types_1.ActivityTypes[activityTypeKey];
        if (!activityType || activityType === activity_types_1.ActivityTypes.unknown) {
            // Fallback to Garmin SDK mappings
            const sportName = importer_fit_garmin_profile_mapper_1.GarminProfileMapper.getSportName(session.sport);
            const subSportName = session.sub_sport && session.sub_sport !== 'generic'
                ? importer_fit_garmin_profile_mapper_1.GarminProfileMapper.getSubSportName(session.sub_sport)
                : null;
            if (sportName || subSportName) {
                // Try to find in ActivityTypes using the name from Garmin SDK
                const nameKey = subSportName ? `${sportName}_${subSportName}` : sportName;
                activityType =
                    activity_types_1.ActivityTypes[nameKey] ||
                        activity_types_1.ActivityTypes[sportName] ||
                        nameKey;
            }
        }
        return activityType || session.sport || activity_types_1.ActivityTypes.unknown;
    }
    // @todo move this to a mapper
    static getStatsFromObject(object, activity, isLap) {
        const stats = [];
        // For some unknown reasons... the fit provided total_timer_time & total_elapsed_time could be inverted..
        // Just invert fields if that's the case
        this.swapTimesIfRequired(object);
        // TOTAL ELAPSED TIME on Object (activity, lap...)
        let elapsedTime = 0;
        if ((0, helpers_1.isNumber)(object.total_elapsed_time)) {
            elapsedTime = object.total_elapsed_time;
        }
        else if ((object.timestamp - object.start_time) / 1000) {
            elapsedTime = (object.timestamp - object.start_time) / 1000;
        }
        // 0 should be not included aha it's not legit to have a 0 for total timer time
        // And that typically is a device error we should look at the samples
        // Since start and end date are inclusive for sample size eg at time [0] there can be a value
        if (!elapsedTime) {
            elapsedTime = activity_utilities_1.ActivityUtilities.getDataLength(activity.startDate, activity.endDate) - 1;
        }
        stats.push(new data_duration_1.DataDuration(Math.round(elapsedTime * 100) / 100));
        // TOTAL TIMER TIME on Object (activity, lap...)
        let timerTime = 0;
        if ((0, helpers_1.isNumber)(object.total_timer_time)) {
            timerTime = object.total_timer_time;
        }
        // If timer time is unknown then assign elapsedTime value
        if (!timerTime) {
            timerTime = elapsedTime;
        }
        stats.push(new data_timer_time_1.DataTimerTime(Math.round(timerTime * 100) / 100));
        // Moving TIME on Object (activity, lap...)
        let movingTime = 0;
        if (object.lengths && object.lengths.length > 0) {
            object.lengths.forEach((lengthVal) => {
                if (lengthVal.length_type === 'active') {
                    movingTime += lengthVal.total_timer_time;
                }
            });
        }
        else if (object.records && object.records.length > 0) {
            const speedThreshold = activity_types_1.ActivityTypesMoving.getSpeedThreshold(activity.type);
            object.records.forEach((record, index) => {
                var _a;
                if ((record.speed || record.enhanced_speed) > speedThreshold) {
                    const previousRecordTime = ((_a = object.records[index - 1]) === null || _a === void 0 ? void 0 : _a.timestamp) || object.start_time || object.records[0].timestamp;
                    movingTime += (record.timestamp.getTime() - previousRecordTime.getTime()) / 1000;
                }
            });
        }
        if (isLap) {
            // In case we moved (distance > 0) & moving time is invalid, then set it to timer time value
            if (object.total_distance > 0 && (!movingTime || movingTime > timerTime)) {
                movingTime = timerTime;
            }
        }
        // Append moving stat only if moving time has been detected
        // We need that to compute total global moving time later
        if (movingTime > 0) {
            stats.push(new data_moving_time_1.DataMovingTime(Math.round(movingTime * 100) / 100));
        }
        // Pause TIME on Object (activity, lap...)
        const pause = elapsedTime > movingTime && movingTime > 0 ? Math.round((elapsedTime - movingTime) * 100) / 100 : 0;
        stats.push(new data_pause_1.DataPause(pause));
        // Assign is active lap status
        stats.push(new data_active_lap_1.DataActiveLap(!!(object.total_distance || object.avg_speed)));
        if ((0, helpers_1.isNumberOrString)(object.total_distance)) {
            stats.push(new data_distance_1.DataDistance(object.total_distance));
        }
        else {
            stats.push(new data_distance_1.DataDistance(0));
        }
        // Heart Rate
        if ((0, helpers_1.isNumberOrString)(object.avg_heart_rate)) {
            stats.push(new data_heart_rate_avg_1.DataHeartRateAvg(object.avg_heart_rate));
        }
        if ((0, helpers_1.isNumberOrString)(object.min_heart_rate)) {
            stats.push(new data_heart_rate_min_1.DataHeartRateMin(object.min_heart_rate));
        }
        if ((0, helpers_1.isNumberOrString)(object.max_heart_rate)) {
            stats.push(new data_heart_rate_max_1.DataHeartRateMax(object.max_heart_rate));
        }
        // Cadence
        if ((0, helpers_1.isNumberOrString)(object.avg_cadence)) {
            stats.push(new data_cadence_avg_1.DataCadenceAvg(object.avg_cadence));
        }
        if ((0, helpers_1.isNumberOrString)(object.min_cadence)) {
            stats.push(new data_cadence_min_1.DataCadenceMin(object.min_cadence));
        }
        if ((0, helpers_1.isNumberOrString)(object.max_cadence)) {
            stats.push(new data_cadence_max_1.DataCadenceMax(object.max_cadence));
        }
        // Power
        if ((0, helpers_1.isNumberOrString)(object.avg_power)) {
            stats.push(new data_power_avg_1.DataPowerAvg(object.avg_power));
        }
        if ((0, helpers_1.isNumberOrString)(object.min_power)) {
            stats.push(new data_power_min_1.DataPowerMin(object.min_power));
        }
        if ((0, helpers_1.isNumberOrString)(object.max_power)) {
            stats.push(new data_power_max_1.DataPowerMax(object.max_power));
        }
        if (Number.isFinite(object.normalized_power)) {
            stats.push(new data_power_normalized_1.DataPowerNormalized(object.normalized_power));
        }
        if (Number.isFinite(object.intensity_factor)) {
            stats.push(new data_power_intensity_factor_1.DataPowerIntensityFactor(object.intensity_factor));
        }
        if (Number.isFinite(object.training_stress_score)) {
            stats.push(new data_power_training_stress_score_1.DataPowerTrainingStressScore(object.training_stress_score));
        }
        if (Number.isFinite(object.total_work)) {
            stats.push(new data_power_work_1.DataPowerWork(Math.round(object.total_work / 1000)));
        }
        if (Number.isFinite(object.avg_left_torque_effectiveness)) {
            stats.push(new data_power_torque_effectiveness_left_1.DataPowerTorqueEffectivenessLeft(object.avg_left_torque_effectiveness));
        }
        if (Number.isFinite(object.avg_right_torque_effectiveness)) {
            stats.push(new data_power_torque_effectiveness_right_1.DataPowerTorqueEffectivenessRight(object.avg_right_torque_effectiveness));
        }
        if (Number.isFinite(object.avg_left_pedal_smoothness)) {
            stats.push(new data_power_pedal_smoothness_left_1.DataPowerPedalSmoothnessLeft(object.avg_left_pedal_smoothness));
        }
        if (Number.isFinite(object.avg_right_pedal_smoothness)) {
            stats.push(new data_power_pedal_smoothness_right_1.DataPowerPedalSmoothnessRight(object.avg_right_pedal_smoothness));
        }
        // Speed
        if ((0, helpers_1.isNumberOrString)(object.avg_speed)) {
            stats.push(new data_speed_avg_1.DataSpeedAvg(object.avg_speed));
        }
        if ((0, helpers_1.isNumberOrString)(object.min_speed)) {
            stats.push(new data_speed_min_1.DataSpeedMin(object.min_speed));
        }
        if ((0, helpers_1.isNumberOrString)(object.max_speed)) {
            stats.push(new data_speed_max_1.DataSpeedMax(object.max_speed));
        }
        // Keep latest , enhanced @todo this can create a bug
        if ((0, helpers_1.isNumberOrString)(object.enhanced_avg_speed)) {
            stats.push(new data_speed_avg_1.DataSpeedAvg(object.enhanced_avg_speed));
        }
        if ((0, helpers_1.isNumberOrString)(object.enhanced_min_speed)) {
            stats.push(new data_speed_min_1.DataSpeedMin(object.enhanced_min_speed));
        }
        if ((0, helpers_1.isNumberOrString)(object.enhanced_max_speed)) {
            stats.push(new data_speed_max_1.DataSpeedMax(object.enhanced_max_speed));
        }
        // Temperature
        if ((0, helpers_1.isNumberOrString)(object.avg_temperature)) {
            stats.push(new data_temperature_avg_1.DataTemperatureAvg(object.avg_temperature));
        }
        if ((0, helpers_1.isNumberOrString)(object.min_temperature)) {
            stats.push(new data_temperature_min_1.DataTemperatureMin(object.min_temperature));
        }
        if ((0, helpers_1.isNumberOrString)(object.max_temperature)) {
            stats.push(new data_temperature_max_1.DataTemperatureMax(object.max_temperature));
        }
        // Ascent
        if ((0, helpers_1.isNumberOrString)(object.total_ascent)) {
            stats.push(new data_ascent_1.DataAscent(object.total_ascent));
        }
        // Descent
        if ((0, helpers_1.isNumberOrString)(object.total_descent)) {
            stats.push(new data_descent_1.DataDescent(object.total_descent));
        }
        // Calories
        if ((0, helpers_1.isNumberOrString)(object.total_calories)) {
            stats.push(new data_energy_1.DataEnergy(object.total_calories));
        }
        // Total training effect = Aerobic training effect
        if ((0, helpers_1.isNumberOrString)(object.total_training_effect)) {
            stats.push(new data_aerobic_training_effect_1.DataAerobicTrainingEffect(object.total_training_effect));
        }
        // Total training anaerobic effect
        if ((0, helpers_1.isNumberOrString)(object.total_anaerobic_effect)) {
            stats.push(new data_anaerobic_training_effect_1.DataAnaerobicTrainingEffect(object.total_anaerobic_effect));
        }
        // Vo2Max
        if ((0, helpers_1.isNumberOrString)(object.estimated_vo2_max)) {
            stats.push(new data_vo2_max_1.DataVO2Max(object.estimated_vo2_max));
        }
        // Peak Epoc
        if ((0, helpers_1.isNumberOrString)(object.peak_epoc)) {
            stats.push(new data_peak_epoc_1.DataPeakEPOC(object.peak_epoc));
        }
        // Recovery time
        if ((0, helpers_1.isNumberOrString)(object.recovery_time)) {
            stats.push(new data_recovery_time_1.DataRecoveryTime(object.recovery_time));
        }
        // Feeling
        if ((0, helpers_1.isNumberOrString)(object.feeling)) {
            stats.push(new data_feeling_1.DataFeeling(object.feeling));
        }
        // Pool length
        if ((0, helpers_1.isNumberOrString)(object.pool_length)) {
            let poolLength = object.pool_length;
            if (object.pool_length_unit) {
                poolLength = object.pool_length_unit.match(/metric/i) ? object.pool_length : object.pool_length * 0.9144; // Convert to meters from yards when not metric
            }
            stats.push(new data_pool_length_1.DataPoolLength(poolLength));
        }
        // Average SWOLF in 25m and 50m pool
        if ((activity.type === activity_types_1.ActivityTypes.Swimming || activity.type === activity_types_1.ActivityTypes.OpenWaterSwimming) &&
            ((0, helpers_1.isNumberOrString)(object.avg_speed) || (0, helpers_1.isNumberOrString)(object.enhanced_avg_speed)) &&
            (0, helpers_1.isNumberOrString)(object.avg_cadence)) {
            const avgPace100m = 100 / (object.avg_speed || object.enhanced_avg_speed);
            if (Number.isFinite(avgPace100m) && Number.isFinite(object.avg_cadence)) {
                const avgCadence = object.avg_cadence;
                const swolf25m = activity_utilities_1.ActivityUtilities.computeSwimSwolf(avgPace100m, avgCadence, 25);
                stats.push(new data_swolf_25m_1.DataSWOLF25m(swolf25m));
                const swolf50m = activity_utilities_1.ActivityUtilities.computeSwimSwolf(avgPace100m, avgCadence, 50);
                stats.push(new data_swolf_50m_1.DataSWOLF50m(swolf50m));
            }
        }
        // Active lengths
        if ((0, helpers_1.isNumberOrString)(object.num_active_lengths)) {
            stats.push(new data_active_lengths_1.DataActiveLengths(object.num_active_lengths));
        }
        // Total cycle
        if ((0, helpers_1.isNumberOrString)(object.total_cycles)) {
            stats.push(new data_total_cycles_1.DataTotalCycles(object.total_cycles));
        }
        // Description
        if ((0, helpers_1.isNumberOrString)(object.description)) {
            stats.push(new data_description_1.DataDescription(object.description));
        }
        // Cycling dynamics
        if (Number.isFinite(object.time_standing)) {
            const standingTime = Math.round(object.time_standing);
            stats.push(new data_cycling_standing_time_1.DataCyclingStandingTime(standingTime));
            const seatedTime = Math.round(timerTime - standingTime);
            stats.push(new data_cycling_seated_time_1.DataCyclingSeatedTime(seatedTime));
        }
        // Running dynamics
        if (Number.isFinite(object.avg_stance_time)) {
            stats.push(new data_stance_time_1.DataStanceTime(object.avg_stance_time));
        }
        if (Number.isFinite(object.avg_vertical_oscillation)) {
            stats.push(new data_vertical_oscillation_1.DataVerticalOscillation(object.avg_vertical_oscillation));
        }
        if (Number.isFinite(object.avg_vertical_ratio)) {
            stats.push(new data_vertical_ratio_1.DataVerticalRatio(object.avg_vertical_ratio));
        }
        if (Number.isFinite(object.avg_step_length)) {
            const avgStrideLengthMeters = object.avg_step_length / 1000;
            stats.push(new data_avg_stride_length_1.DataAvgStrideLength(Math.round(avgStrideLengthMeters * 100) / 100));
        }
        return stats;
    }
    static getCreatorFromFitDataObject(fitDataObject) {
        const toStartCase = (str) => {
            return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
        };
        const formatDeviceName = (manufacturer, productName, recognizedName, recognizedBrand, isDevelopment = false) => {
            let name = '';
            if (recognizedBrand && recognizedName) {
                name = `${toStartCase(recognizedBrand)} ${recognizedName}`;
            }
            else if (recognizedBrand && !recognizedName && productName) {
                if (productName.match(new RegExp(`${recognizedBrand}`, 'gi'))) {
                    productName = productName.replace(new RegExp(`${recognizedBrand}`, 'gi'), '').trim();
                }
                name = `${toStartCase(recognizedBrand)} ${productName}`;
            }
            else if (recognizedBrand && !recognizedName && !productName) {
                name = `${toStartCase(recognizedBrand)}`;
            }
            else if (manufacturer && !recognizedBrand && !recognizedName && !productName && !isDevelopment) {
                const formattedManufacturer = manufacturer.replace(new RegExp('[-_]', 'gi'), ' ').trim();
                name = `${toStartCase(formattedManufacturer)}`;
            }
            else if (!recognizedBrand && recognizedName) {
                name = `${recognizedName}`;
            }
            else {
                name = 'Unknown';
            }
            return name;
        };
        let creator;
        let recognizedName = null;
        const manufacturer = fitDataObject.file_ids[0].manufacturer;
        const productId = fitDataObject.file_ids[0].product || null;
        const productName = fitDataObject.file_ids[0].product_name || null;
        switch (manufacturer) {
            case 'suunto': {
                recognizedName = importer_fit_suunto_device_names_1.ImporterFitSuuntoDeviceNames[productId];
                creator = new creator_1.Creator(formatDeviceName(manufacturer, productName, recognizedName, 'Suunto'), productId);
                break;
            }
            case 'coros': {
                recognizedName = importer_fit_coros_device_names_1.ImporterFitCorosDeviceNames[productId];
                creator = new creator_1.Creator(formatDeviceName(manufacturer, productName, recognizedName, 'Coros'), productId);
                break;
            }
            case 'garmin': {
                recognizedName = importer_fit_garmin_profile_mapper_1.GarminProfileMapper.getDeviceName(productId);
                creator = new creator_1.Creator(formatDeviceName(manufacturer, productName, recognizedName, 'Garmin'), productId);
                break;
            }
            case 'wahoo_fitness': {
                recognizedName = importer_fit_wahoo_device_names_1.ImporterFitWahooDeviceNames[productId];
                creator = new creator_1.Creator(formatDeviceName(manufacturer, productName, recognizedName, 'Wahoo'), productId);
                break;
            }
            case 'hammerhead': {
                recognizedName = importer_fit_hammerhead_device_names_1.ImporterFitHammerheadDeviceNames[productId];
                creator = new creator_1.Creator(formatDeviceName(manufacturer, productName, recognizedName, 'Hammerhead'), productId);
                break;
            }
            case 'lezyne': {
                recognizedName = importer_fit_lezyne_device_names_1.ImporterFitLezyneDeviceNames[productId];
                creator = new creator_1.Creator(formatDeviceName(manufacturer, productName, recognizedName, 'Lezyne'), productId);
                break;
            }
            case 'magellan': {
                recognizedName = importer_fit_magellan_device_names_1.ImporterFitMagellanDeviceNames[productId];
                creator = new creator_1.Creator(formatDeviceName(manufacturer, productName, recognizedName, 'Magellan'), productId);
                break;
            }
            case 'saris': {
                recognizedName = importer_fit_saris_device_names_1.ImporterFitSarisDeviceNames[productId];
                creator = new creator_1.Creator(formatDeviceName(manufacturer, productName, recognizedName, 'Saris'), productId);
                break;
            }
            case 'srm': {
                recognizedName = importer_fit_srm_device_names_1.ImporterFitSrmDeviceNames[productId];
                creator = new creator_1.Creator(formatDeviceName(manufacturer, productName, recognizedName, 'SRM'), productId);
                break;
            }
            case 'zwift': {
                recognizedName = 'Zwift';
                creator = new creator_1.Creator(recognizedName);
                break;
            }
            case 'virtualtraining': {
                recognizedName = 'Rouvy';
                creator = new creator_1.Creator(recognizedName);
                break;
            }
            case 'the_sufferfest': {
                recognizedName = `Wahoo SYSTM`;
                creator = new creator_1.Creator(recognizedName, productId);
                break;
            }
            case 'stryd': {
                recognizedName = `Stryd`;
                creator = new creator_1.Creator(recognizedName, productId, fitDataObject.file_creator.software_version, fitDataObject.file_creator.hardware_version, fitDataObject.file_ids[0].serial_number);
                break;
            }
            case 'development': {
                recognizedName = importer_fit_development_device_names_1.ImporterFitDevelopmentDeviceNames[productId];
                creator = new creator_1.Creator(formatDeviceName(manufacturer, productName, recognizedName, null, true), productId);
                creator.isRecognized = typeof recognizedName === 'string' || recognizedName === null;
                break;
            }
            default: {
                // Try to find if it's a numeric Garmin mapping that was missed
                const manufacturerName = typeof manufacturer === 'number' ? importer_fit_garmin_profile_mapper_1.GarminProfileMapper.getManufacturerName(manufacturer) : manufacturer;
                if (manufacturerName === 'garmin') {
                    recognizedName = importer_fit_garmin_profile_mapper_1.GarminProfileMapper.getDeviceName(productId);
                }
                creator = new creator_1.Creator(formatDeviceName(manufacturer, productName, recognizedName, manufacturerName === 'garmin' ? 'Garmin' : null), productId);
            }
        }
        creator.manufacturer = manufacturer;
        creator.isRecognized = creator.isRecognized || !!recognizedName;
        if (fitDataObject.file_creator && (0, helpers_1.isNumberOrString)(fitDataObject.file_creator.hardware_version)) {
            creator.hwInfo = String(fitDataObject.file_creator.hardware_version);
        }
        if (fitDataObject.file_creator && (0, helpers_1.isNumberOrString)(fitDataObject.file_creator.software_version)) {
            creator.swInfo = String(fitDataObject.file_creator.software_version);
        }
        else if (fitDataObject.device_info && (0, helpers_1.isNumberOrString)(fitDataObject.device_info.software_version)) {
            creator.swInfo = String(fitDataObject.device_info.software_version);
        }
        if (fitDataObject.file_ids[0] && (0, helpers_1.isNumberOrString)(fitDataObject.file_ids[0].serial_number)) {
            creator.serialNumber = fitDataObject.file_ids[0].serial_number;
        }
        // If creator name is a number ONLY (e.g. product number), then flag it as 'Unknown'
        if (Number.isFinite(creator.name) || creator.name.match(/^\d+$/)) {
            creator.name = `Unknown`;
        }
        return creator;
    }
}
exports.EventImporterFIT = EventImporterFIT;
