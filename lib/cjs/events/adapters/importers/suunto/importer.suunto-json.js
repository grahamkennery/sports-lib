"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuuntoSampleMapper = exports.SuuntoIntensityZonesMapper = exports.SuuntoSettingsMapper = exports.EventImporterSuuntoJSON = void 0;
const event_1 = require("../../../event");
const activity_1 = require("../../../../activities/activity");
const creator_1 = require("../../../../creators/creator");
const lap_1 = require("../../../../laps/lap");
const data_altitude_1 = require("../../../../data/data.altitude");
const data_cadence_1 = require("../../../../data/data.cadence");
const data_heart_rate_1 = require("../../../../data/data.heart-rate");
const data_speed_1 = require("../../../../data/data.speed");
const data_vertical_speed_1 = require("../../../../data/data.vertical-speed");
const data_temperature_1 = require("../../../../data/data.temperature");
const data_sea_level_pressure_1 = require("../../../../data/data.sea-level-pressure");
const data_latitude_degrees_1 = require("../../../../data/data.latitude-degrees");
const data_longitude_degrees_1 = require("../../../../data/data.longitude-degrees");
const data_power_1 = require("../../../../data/data.power");
const data_altitude_gps_1 = require("../../../../data/data.altitude-gps");
const data_absolute_pressure_1 = require("../../../../data/data.absolute-pressure");
const data_ehpe_1 = require("../../../../data/data.ehpe");
const data_evpe_1 = require("../../../../data/data.evpe");
const data_number_of_satellites_1 = require("../../../../data/data.number-of-satellites");
const data_satellite_5_best_snr_1 = require("../../../../data/data.satellite-5-best-snr");
const intensity_zones_1 = require("../../../../intensity-zones/intensity-zones");
const data_ibi_1 = require("../../../../data/ibi/data.ibi");
const importer_suunto_activity_ids_1 = require("./importer.suunto.activity.ids");
const importer_suunto_device_names_1 = require("./importer.suunto.device.names");
const data_duration_1 = require("../../../../data/data.duration");
const data_altitude_max_1 = require("../../../../data/data.altitude-max");
const data_distance_1 = require("../../../../data/data.distance");
const data_ascent_time_1 = require("../../../../data/data.ascent-time");
const data_descent_time_1 = require("../../../../data/data.descent-time");
const data_descent_1 = require("../../../../data/data.descent");
const data_ascent_1 = require("../../../../data/data.ascent");
const data_epoc_1 = require("../../../../data/data.epoc");
const data_energy_1 = require("../../../../data/data.energy");
const data_feeling_1 = require("../../../../data/data.feeling");
const data_recovery_time_1 = require("../../../../data/data.recovery-time");
const data_vo2_max_1 = require("../../../../data/data.vo2-max");
const data_pause_1 = require("../../../../data/data.pause");
const data_heart_rate_avg_1 = require("../../../../data/data.heart-rate-avg");
const data_heart_rate_max_1 = require("../../../../data/data.heart-rate-max");
const data_heart_rate_min_1 = require("../../../../data/data.heart-rate-min");
const data_cadence_avg_1 = require("../../../../data/data.cadence-avg");
const data_cadence_max_1 = require("../../../../data/data.cadence-max");
const data_cadence_min_1 = require("../../../../data/data.cadence-min");
const data_power_avg_1 = require("../../../../data/data.power-avg");
const data_power_max_1 = require("../../../../data/data.power-max");
const data_power_min_1 = require("../../../../data/data.power-min");
const data_speed_avg_1 = require("../../../../data/data.speed-avg");
const data_speed_max_1 = require("../../../../data/data.speed-max");
const data_speed_min_1 = require("../../../../data/data.speed-min");
const data_temperature_avg_1 = require("../../../../data/data.temperature-avg");
const data_temperature_max_1 = require("../../../../data/data.temperature-max");
const data_temperature_min_1 = require("../../../../data/data.temperature-min");
const data_vertical_speed_avg_1 = require("../../../../data/data.vertical-speed-avg");
const data_vertical_speed_max_1 = require("../../../../data/data.vertical-speed-max");
const data_vertical_speed_min_1 = require("../../../../data/data.vertical-speed-min");
const data_altitude_avg_1 = require("../../../../data/data.altitude-avg");
const data_altitude_min_1 = require("../../../../data/data.altitude-min");
const data_fused_location_1 = require("../../../../data/data.fused-location");
const activity_types_1 = require("../../../../activities/activity.types");
const lap_types_1 = require("../../../../laps/lap.types");
const data_pace_avg_1 = require("../../../../data/data.pace-avg");
const data_pace_max_1 = require("../../../../data/data.pace-max");
const data_pace_min_1 = require("../../../../data/data.pace-min");
const data_fused_altitude_1 = require("../../../../data/data.fused-altitude");
const data_battery_charge_1 = require("../../../../data/data.battery-charge");
const data_battery_current_1 = require("../../../../data/data.battery-current");
const data_battery_voltage_1 = require("../../../../data/data.battery-voltage");
const helpers_1 = require("../../../utilities/helpers");
const event_utilities_1 = require("../../../utilities/event.utilities");
const data_alti_baro_profile_1 = require("../../../../data/data.alti-baro-profile");
const data_auto_lap_distance_1 = require("../../../../data/data.auto-lap-distance");
const data_auto_lap_duration_1 = require("../../../../data/data.auto-lap-duration");
const data_auto_pause_used_1 = require("../../../../data/data.auto-pause-used");
const data_bike_pod_used_1 = require("../../../../data/data.bike-pod-used");
const data_enabled_navigation_systems_1 = require("../../../../data/data.enabled-navigation-systems");
const data_foot_pod_used_1 = require("../../../../data/data.foot-pod-used");
const data_heart_rate_used_1 = require("../../../../data/data.heart-rate-used");
const data_power_pod_used_1 = require("../../../../data/data.power-pod-used");
const data_store_1 = require("../../../../data/data.store");
const ibi_stream_1 = require("../../../../streams/ibi-stream");
const data_steps_1 = require("../../../../data/data.steps");
const data_pool_length_1 = require("../../../../data/data.pool-length");
const data_device_location_1 = require("../../../../data/data.device-location");
const data_aerobic_training_effect_1 = require("../../../../data/data-aerobic-training-effect");
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
const file_type_enum_1 = require("../../file-type.enum");
const activity_parsing_options_1 = require("../../../../activities/activity-parsing-options");
class EventImporterSuuntoJSON {
    static getFromJSONString(jsonString, options = activity_parsing_options_1.ActivityParsingOptions.DEFAULT) {
        return new Promise((resolve, reject) => {
            const eventJSONObject = JSON.parse(jsonString);
            // debugger;
            // Create a creator and pass it to all activities (later)
            const creator = new creator_1.Creator(importer_suunto_device_names_1.ImporterSuuntoDeviceNames[eventJSONObject.DeviceLog.Device.Name] || // Try to get a listed name
                eventJSONObject.DeviceLog.Device.Name // If not fallback to typed
            );
            creator.serialNumber = eventJSONObject.DeviceLog.Device.SerialNumber;
            creator.hwInfo = eventJSONObject.DeviceLog.Device.Info.HW;
            creator.swInfo = eventJSONObject.DeviceLog.Device.Info.SW;
            // Go over the samples and get the ones with activity start times
            const activityStartEventSamples = eventJSONObject.DeviceLog.Samples.filter((sample) => {
                return sample.Events && sample.Events[0] && sample.Events[0].Activity;
            });
            // Check if there is a Fused Altitude event
            const fusedAltitudeEventSamples = eventJSONObject.DeviceLog.Samples.filter((sample) => {
                return sample.Events && sample.Events[0] && sample.Events[0].Altitude;
            });
            // Get the lap start events
            const lapEventSamples = eventJSONObject.DeviceLog.Samples.filter((sample) => {
                return (sample.Events &&
                    sample.Events[0] &&
                    sample.Events[0].Lap &&
                    sample.Events[0].Lap.Type !== 'Start' &&
                    sample.Events[0].Lap.Type !== 'Stop');
            });
            // Get the stop event
            const stopEventSample = eventJSONObject.DeviceLog.Samples.find((sample) => {
                return sample.Events && sample.Events[0] && sample.Events[0].Lap && sample.Events[0].Lap.Type === 'Stop';
            });
            // Add the stop event to the laps since it's also a lap stop event
            if (stopEventSample) {
                lapEventSamples.push(stopEventSample);
            }
            // Get the activity windows
            const activityWindows = eventJSONObject.DeviceLog.Windows
                ? eventJSONObject.DeviceLog.Windows.filter((windowObj) => {
                    return windowObj.Window.Type === 'Activity';
                }).map((activityWindow) => activityWindow.Window)
                : [];
            // Get the lap windows
            const lapWindows = eventJSONObject.DeviceLog.Windows
                ? eventJSONObject.DeviceLog.Windows.filter((windowObj) => {
                    return windowObj.Window.Type === 'Lap' || windowObj.Window.Type === 'Autolap';
                }).map((lapWindow) => lapWindow.Window)
                : [];
            // Create the activities
            const activities = activityStartEventSamples.map((activityStartEventSample, index) => {
                const activity = new activity_1.Activity(new Date(activityStartEventSample.TimeISO8601), activityStartEventSamples.length - 1 === index
                    ? new Date(stopEventSample ? stopEventSample.TimeISO8601 : eventJSONObject.DeviceLog.Header.TimeISO8601)
                    : new Date(activityStartEventSamples[index + 1].TimeISO8601), activity_types_1.ActivityTypes[(importer_suunto_activity_ids_1.ImporterSuuntoActivityIds[activityStartEventSample.Events[0].Activity.ActivityType])], creator, options);
                // Set the end date to the stop event time if the activity is the last or the only one else set it on the next itery time
                // Create the stats these are a 1:1 ref arrays
                if (activityWindows[index]) {
                    this.getStats(activityWindows[index]).forEach(stat => {
                        activity.addStat(stat);
                    });
                }
                // Add the pause from end date minurs start date and removing the duration as widows do not contain the pause time
                if (!activity.getDuration()) {
                    activity.setDuration(new data_duration_1.DataDuration((activity.endDate.getTime() - activity.startDate.getTime()) / 1000));
                }
                activity.setPause(new data_pause_1.DataPause((activity.endDate.getTime() - activity.startDate.getTime()) / 1000 - activity.getDuration().getValue()));
                // Set the zones for the activity @todo fix
                this.setIntensityZones(activity, eventJSONObject.DeviceLog.Header);
                // Add the fused altitude event
                if (fusedAltitudeEventSamples.length) {
                    activity.addStat(new data_fused_altitude_1.DataFusedAltitude(true));
                }
                return activity;
            });
            // If nothing found
            if (!activities.length) {
                activities.push(new activity_1.Activity(new Date(eventJSONObject.DeviceLog.Header.DateTime), new Date(new Date(eventJSONObject.DeviceLog.Header.DateTime).getTime() +
                    eventJSONObject.DeviceLog.Header.Duration * 1000), activity_types_1.ActivityTypes.unknown, creator, options));
            }
            // set the start dates of all lap types to the start of the first activity
            const lapStartDatesByType = lapEventSamples.reduce((lapStartDatesByTypeObject, lapEventSample, index) => {
                // If its a stop event then set the start date to the previous
                if (lapEventSample.Events[0].Lap.Type === 'Stop' && lapEventSamples.length > 1) {
                    lapStartDatesByTypeObject[lapEventSample.Events[0].Lap.Type] = new Date(lapEventSamples[index - 1].TimeISO8601);
                    return lapStartDatesByTypeObject;
                }
                lapStartDatesByTypeObject[lapEventSample.Events[0].Lap.Type] = activities[0].startDate;
                return lapStartDatesByTypeObject;
            }, {});
            const laps = lapEventSamples.reduce((lapArray, lapEventSample, lapIndex) => {
                // if there is only one lap then skip it's the whole activity
                if (lapEventSamples.length === 1) {
                    return lapArray;
                }
                // Set the end date
                const lapEndDate = new Date(lapEventSample.TimeISO8601);
                // Set the start date.
                // Set it for the next run
                const lap = new lap_1.Lap(lapStartDatesByType[lapEventSample.Events[0].Lap.Type], lapEndDate, lapIndex + 1, lap_types_1.LapTypes[lapEventSample.Events[0].Lap.Type]);
                lapStartDatesByType[lapEventSample.Events[0].Lap.Type] = lapEndDate;
                if (lapWindows[lapIndex]) {
                    this.getStats(lapWindows[lapIndex]).forEach(stat => {
                        lap.addStat(stat);
                    });
                }
                // Add the pause from end date minurs start date and removing the duration as widows do not contain the pause time
                if (!lap.getDuration()) {
                    lap.setDuration(new data_duration_1.DataDuration((lap.endDate.getTime() - lap.startDate.getTime()) / 1000));
                }
                lap.setPause(new data_pause_1.DataPause((lap.endDate.getTime() - lap.startDate.getTime()) / 1000 - lap.getDuration().getValue()));
                lapArray.push(lap);
                return lapArray;
            }, []);
            // Add the laps to the belonging activity. If a lap starts or stops at the activity date delta then it belong to the acitvity
            // @todo move laps to event so we don't have cross border laps to acivities and decouple them
            activities.forEach((activity) => {
                laps
                    .filter((lap) => {
                    // If the lap start belongs to the activity
                    if (lap.startDate <= activity.endDate && lap.startDate >= activity.startDate) {
                        return true;
                    }
                    // if the lap end belongs also...
                    if (lap.endDate >= activity.startDate && lap.endDate <= activity.endDate) {
                        return true;
                    }
                    return false;
                })
                    .forEach((activityLap) => {
                    activity.addLap(activityLap);
                });
            });
            // Add the samples that belong to the activity and the ibi data.
            activities.forEach((activity) => {
                // Get the samples that belong to this activity
                const activitySamples = eventJSONObject.DeviceLog.Samples.filter((sample) => new Date(sample.TimeISO8601) >= activity.startDate && new Date(sample.TimeISO8601) <= activity.endDate);
                // debugger;
                // Check if there is fused Location
                activity.addStat(new data_fused_location_1.DataFusedLocation(false));
                activity.addStat(new data_fused_location_1.DataFusedLocation(activitySamples.filter((sample) => this.hasFusedLocData(sample)).length > 0));
                // Should filter on type and create the samples
                this.setStreamsForActivity(activity, activitySamples);
            });
            // Add the ibiData
            if (eventJSONObject.DeviceLog['R-R'] && eventJSONObject.DeviceLog['R-R'].Data) {
                // prepare the data array per activity removing the offset
                activities.forEach((activity) => {
                    let timeSum = 0;
                    const ibiData = eventJSONObject.DeviceLog['R-R'].Data.filter((ibi) => {
                        timeSum += ibi;
                        const ibiDataDate = new Date(activities[0].startDate.getTime() + timeSum);
                        return ibiDataDate >= activity.startDate && ibiDataDate <= activity.endDate;
                    });
                    // set the HR
                    // @todo perhaps create new 'types'
                    const existingHRStream = activity.getAllStreams().find(stream => stream.type === data_heart_rate_1.DataHeartRate.type);
                    if (existingHRStream) {
                        activity.removeStream(existingHRStream);
                    }
                    this.setStreamsForActivity(activity, this.getHRSamplesFromIBIData(activity, ibiData));
                    activity.addStream(new ibi_stream_1.IBIStream(ibiData));
                });
            }
            // Create an event
            // @todo check if start and end date can derive from the json
            const event = new event_1.Event('', activities[0].startDate, activities[activities.length - 1].endDate, file_type_enum_1.FileType.SUUNTO);
            activities.forEach(activity => event.addActivity(activity));
            // Populate the event stats from the Header Object // @todo maybe remove
            this.getStats(eventJSONObject.DeviceLog.Header).forEach(stat => {
                event.addStat(stat);
            });
            // Get the settings and add it to all activities as it's logical
            if (eventJSONObject.DeviceLog.Header.Settings) {
                this.getSettings(eventJSONObject.DeviceLog.Header.Settings).forEach(stat => {
                    event.getActivities().forEach(activity => activity.addStat(stat));
                });
            }
            if (activities.length === 1) {
                const stats = this.getStats(eventJSONObject.DeviceLog.Header).filter(stat => stat instanceof data_steps_1.DataSteps ||
                    stat instanceof data_vo2_max_1.DataVO2Max ||
                    stat instanceof data_device_location_1.DataDeviceLocation ||
                    stat instanceof data_pool_length_1.DataPoolLength);
                stats.forEach(stat => activities[0].addStat(stat));
            }
            // @todo see how we can have those event stats persisted as the below generation wipes those off.
            // Generate stats
            event_utilities_1.EventUtilities.generateStatsForAll(event);
            resolve(event);
        });
    }
    static hasFusedLocData(sample) {
        return !!sample.Inertial || !!sample.GpsRef;
    }
    static setIntensityZones(activity, object) {
        exports.SuuntoIntensityZonesMapper.forEach(intensityZonesMap => {
            if (!object[intensityZonesMap.sampleField]) {
                return;
            }
            const zones = new intensity_zones_1.IntensityZones(intensityZonesMap.dataType);
            zones.zone1Duration = object[intensityZonesMap.sampleField].Zone1Duration;
            zones.zone2Duration = object[intensityZonesMap.sampleField].Zone2Duration;
            zones.zone2LowerLimit = intensityZonesMap.convertSampleValue(object[intensityZonesMap.sampleField].Zone2LowerLimit);
            zones.zone3Duration = object[intensityZonesMap.sampleField].Zone3Duration;
            zones.zone3LowerLimit = intensityZonesMap.convertSampleValue(object[intensityZonesMap.sampleField].Zone3LowerLimit);
            zones.zone4Duration = object[intensityZonesMap.sampleField].Zone4Duration;
            zones.zone4LowerLimit = intensityZonesMap.convertSampleValue(object[intensityZonesMap.sampleField].Zone4LowerLimit);
            zones.zone5Duration = object[intensityZonesMap.sampleField].Zone5Duration;
            zones.zone5LowerLimit = intensityZonesMap.convertSampleValue(object[intensityZonesMap.sampleField].Zone5LowerLimit);
            activity.intensityZones.push(zones);
            switch (intensityZonesMap.dataType) {
                case data_heart_rate_1.DataHeartRate.type:
                    activity.addStat(new data_heart_rate_zone_one_duration_1.DataHeartRateZoneOneDuration(zones.zone1Duration));
                    activity.addStat(new data_heart_rate_zone_two_duration_1.DataHeartRateZoneTwoDuration(zones.zone2Duration));
                    activity.addStat(new data_heart_rate_zone_three_duration_1.DataHeartRateZoneThreeDuration(zones.zone3Duration));
                    activity.addStat(new data_heart_rate_zone_four_duration_1.DataHeartRateZoneFourDuration(zones.zone4Duration));
                    activity.addStat(new data_heart_rate_zone_five_duration_1.DataHeartRateZoneFiveDuration(zones.zone5Duration));
                    break;
                case data_power_1.DataPower.type:
                    activity.addStat(new data_power_zone_one_duration_1.DataPowerZoneOneDuration(zones.zone1Duration));
                    activity.addStat(new data_power_zone_two_duration_1.DataPowerZoneTwoDuration(zones.zone2Duration));
                    activity.addStat(new data_power_zone_three_duration_1.DataPowerZoneThreeDuration(zones.zone3Duration));
                    activity.addStat(new data_power_zone_four_duration_1.DataPowerZoneFourDuration(zones.zone4Duration));
                    activity.addStat(new data_power_zone_five_duration_1.DataPowerZoneFiveDuration(zones.zone5Duration));
                    break;
                case data_speed_1.DataSpeed.type:
                    activity.addStat(new data_speed_zone_one_duration_1.DataSpeedZoneOneDuration(zones.zone1Duration));
                    activity.addStat(new data_speed_zone_two_duration_1.DataSpeedZoneTwoDuration(zones.zone2Duration));
                    activity.addStat(new data_speed_zone_three_duration_1.DataSpeedZoneThreeDuration(zones.zone3Duration));
                    activity.addStat(new data_speed_zone_four_duration_1.DataSpeedZoneFourDuration(zones.zone4Duration));
                    activity.addStat(new data_speed_zone_five_duration_1.DataSpeedZoneFiveDuration(zones.zone5Duration));
                    break;
            }
        });
    }
    static getHRSamplesFromIBIData(activity, ibiData) {
        // activity.ibiData = new IBIData(ibiData);
        // @todo optimize
        // Create a second IBIData so we can have filtering on those with keeping the original
        const samples = [];
        new data_ibi_1.IBIData(ibiData)
            .lowLimitBPMFilter()
            .highLimitBPMFilter()
            .movingMedianFilter()
            .lowPassFilter()
            .getAsBPM()
            .forEach((value, key, map) => {
            samples.push({
                TimeISO8601: new Date(activity.startDate.getTime() + key).toISOString(),
                HR: value / 60
            });
        });
        return samples;
    }
    static setStreamsForActivity(activity, samples) {
        exports.SuuntoSampleMapper.forEach(sampleMapping => {
            const subjectSamples = samples.filter(sample => (0, helpers_1.isNumberOrString)(sample[sampleMapping.sampleField]));
            if (subjectSamples.length) {
                activity.addStream(activity.createStream(sampleMapping.dataType));
                subjectSamples.forEach(subjectSample => {
                    activity.addDataToStream(sampleMapping.dataType, new Date(subjectSample.TimeISO8601), sampleMapping.convertSampleValue(subjectSample[sampleMapping.sampleField]));
                });
            }
        });
    }
    static getSettings(settings) {
        const stats = [];
        exports.SuuntoSettingsMapper.forEach(settingsMapping => {
            if (settingsMapping.getValue(settings) !== null && settingsMapping.getValue(settings) !== undefined) {
                stats.push(data_store_1.DynamicDataLoader.getDataInstanceFromDataType(settingsMapping.dataType, settingsMapping.getValue(settings)));
            }
        });
        return stats;
    }
    // @todo convert this to a mapping as well
    static getStats(object) {
        const stats = [];
        if ((0, helpers_1.isNumber)(object.Distance)) {
            stats.push(new data_distance_1.DataDistance(object.Distance));
        }
        if ((0, helpers_1.isNumberOrString)(object.AscentTime)) {
            stats.push(new data_ascent_time_1.DataAscentTime(object.AscentTime));
        }
        if ((0, helpers_1.isNumberOrString)(object.DescentTime)) {
            stats.push(new data_descent_time_1.DataDescentTime(object.DescentTime));
        }
        if ((0, helpers_1.isNumberOrString)(object.Ascent)) {
            stats.push(new data_ascent_1.DataAscent(object.Ascent));
        }
        if ((0, helpers_1.isNumberOrString)(object.Descent)) {
            stats.push(new data_descent_1.DataDescent(object.Descent));
        }
        if ((0, helpers_1.isNumberOrString)(object.StepCount)) {
            stats.push(new data_steps_1.DataSteps(object.StepCount));
        }
        if ((0, helpers_1.isNumberOrString)(object.MAXVO2)) {
            stats.push(new data_vo2_max_1.DataVO2Max(object.MAXVO2));
        }
        if ((0, helpers_1.isNumberOrString)(object.PoolLength)) {
            stats.push(new data_pool_length_1.DataPoolLength(object.PoolLength));
        }
        if ((0, helpers_1.isNumberOrString)(object.DeviceLocation)) {
            stats.push(new data_device_location_1.DataDeviceLocation(object.DeviceLocation));
        }
        if ((0, helpers_1.isNumberOrString)(object.EPOC)) {
            stats.push(new data_epoc_1.DataEPOC(object.EPOC));
        }
        if ((0, helpers_1.isNumberOrString)(object.Energy)) {
            stats.push(new data_energy_1.DataEnergy((object.Energy * 0.239) / 1000));
        }
        if ((0, helpers_1.isNumberOrString)(object.Feeling)) {
            stats.push(new data_feeling_1.DataFeeling(object.Feeling));
        }
        if ((0, helpers_1.isNumberOrString)(object.PeakTrainingEffect)) {
            stats.push(new data_aerobic_training_effect_1.DataAerobicTrainingEffect(object.PeakTrainingEffect));
        }
        if ((0, helpers_1.isNumberOrString)(object.RecoveryTime)) {
            stats.push(new data_recovery_time_1.DataRecoveryTime(object.RecoveryTime));
        }
        if ((0, helpers_1.isNumberOrString)(object.MAXVO2)) {
            stats.push(new data_vo2_max_1.DataVO2Max(object.MAXVO2));
        }
        let pauseDuration = 0;
        if ((0, helpers_1.isNumberOrString)(object.PauseDuration)) {
            pauseDuration = object.PauseDuration;
        }
        stats.push(new data_pause_1.DataPause(pauseDuration));
        stats.push(new data_duration_1.DataDuration(object.Duration - pauseDuration));
        // double case
        if (Array.isArray(object.Altitude)) {
            if ((0, helpers_1.isNumber)(object.Altitude[0].Avg)) {
                stats.push(new data_altitude_avg_1.DataAltitudeAvg(object.Altitude[0].Avg));
            }
            if ((0, helpers_1.isNumber)(object.Altitude[0].Max)) {
                stats.push(new data_altitude_max_1.DataAltitudeMax(object.Altitude[0].Max));
            }
            if ((0, helpers_1.isNumber)(object.Altitude[0].Min)) {
                stats.push(new data_altitude_min_1.DataAltitudeMin(object.Altitude[0].Min));
            }
        }
        else if (object.Altitude) {
            if ((0, helpers_1.isNumber)(object.Altitude.Max)) {
                stats.push(new data_altitude_max_1.DataAltitudeMax(object.Altitude.Max));
            }
            if ((0, helpers_1.isNumber)(object.Altitude.Min)) {
                stats.push(new data_altitude_min_1.DataAltitudeMin(object.Altitude.Min));
            }
        }
        if (Array.isArray(object.HR)) {
            if ((0, helpers_1.isNumber)(object.HR[0].Avg)) {
                stats.push(new data_heart_rate_avg_1.DataHeartRateAvg(object.HR[0].Avg * 60));
            }
            if ((0, helpers_1.isNumber)(object.HR[0].Max)) {
                stats.push(new data_heart_rate_max_1.DataHeartRateMax(object.HR[0].Max * 60));
            }
            if ((0, helpers_1.isNumber)(object.HR[0].Min)) {
                stats.push(new data_heart_rate_min_1.DataHeartRateMin(object.HR[0].Min * 60));
            }
        }
        if (Array.isArray(object.Cadence)) {
            if ((0, helpers_1.isNumber)(object.Cadence[0].Avg)) {
                stats.push(new data_cadence_avg_1.DataCadenceAvg(object.Cadence[0].Avg * 60));
            }
            if ((0, helpers_1.isNumber)(object.Cadence[0].Max)) {
                stats.push(new data_cadence_max_1.DataCadenceMax(object.Cadence[0].Max * 60));
            }
            if ((0, helpers_1.isNumber)(object.Cadence[0].Min)) {
                stats.push(new data_cadence_min_1.DataCadenceMin(object.Cadence[0].Min * 60));
            }
        }
        if (Array.isArray(object.Power)) {
            if ((0, helpers_1.isNumber)(object.Power[0].Avg)) {
                stats.push(new data_power_avg_1.DataPowerAvg(object.Power[0].Avg));
            }
            if ((0, helpers_1.isNumber)(object.Power[0].Max)) {
                stats.push(new data_power_max_1.DataPowerMax(object.Power[0].Max));
            }
            if ((0, helpers_1.isNumber)(object.Power[0].Min)) {
                stats.push(new data_power_min_1.DataPowerMin(object.Power[0].Min));
            }
        }
        if (Array.isArray(object.Speed)) {
            if ((0, helpers_1.isNumber)(object.Speed[0].Avg)) {
                stats.push(new data_speed_avg_1.DataSpeedAvg(object.Speed[0].Avg));
                stats.push(new data_pace_avg_1.DataPaceAvg((0, helpers_1.convertSpeedToPace)(object.Speed[0].Avg)));
            }
            if ((0, helpers_1.isNumber)(object.Speed[0].Max)) {
                stats.push(new data_speed_max_1.DataSpeedMax(object.Speed[0].Max));
                stats.push(new data_pace_max_1.DataPaceMax((0, helpers_1.convertSpeedToPace)(object.Speed[0].Max)));
            }
            if ((0, helpers_1.isNumber)(object.Speed[0].Min)) {
                stats.push(new data_speed_min_1.DataSpeedMin(object.Speed[0].Min));
                stats.push(new data_pace_min_1.DataPaceMin((0, helpers_1.convertSpeedToPace)(object.Speed[0].Min)));
            }
        }
        if (Array.isArray(object.Temperature)) {
            if ((0, helpers_1.isNumber)(object.Temperature[0].Avg)) {
                stats.push(new data_temperature_avg_1.DataTemperatureAvg(object.Temperature[0].Avg - 273.15));
            }
            if ((0, helpers_1.isNumber)(object.Temperature[0].Max)) {
                stats.push(new data_temperature_max_1.DataTemperatureMax(object.Temperature[0].Max - 273.15));
            }
            if (object.Temperature[0].Min !== null) {
                stats.push(new data_temperature_min_1.DataTemperatureMin(object.Temperature[0].Min - 273.15));
            }
        }
        if (object.hasOwnProperty('VerticalSpeed')) {
            // Double action here
            if (Array.isArray(object.VerticalSpeed)) {
                if ((0, helpers_1.isNumber)(object.VerticalSpeed[0].Avg)) {
                    stats.push(new data_vertical_speed_avg_1.DataVerticalSpeedAvg(object.VerticalSpeed[0].Avg));
                }
                if ((0, helpers_1.isNumber)(object.VerticalSpeed[0].Max)) {
                    stats.push(new data_vertical_speed_max_1.DataVerticalSpeedMax(object.VerticalSpeed[0].Max));
                }
                if ((0, helpers_1.isNumber)(object.VerticalSpeed[0].Min)) {
                    stats.push(new data_vertical_speed_min_1.DataVerticalSpeedMin(object.VerticalSpeed[0].Min));
                }
            }
            else {
                if ((0, helpers_1.isNumber)(object.VerticalSpeed)) {
                    stats.push(new data_vertical_speed_avg_1.DataVerticalSpeedAvg(object.VerticalSpeed));
                }
            }
        }
        return stats;
    }
}
exports.EventImporterSuuntoJSON = EventImporterSuuntoJSON;
exports.SuuntoSettingsMapper = [
    {
        dataType: data_alti_baro_profile_1.DataAltiBaroProfile.type,
        getValue: (settings) => {
            return settings['AltiBaroProfile'];
        }
    },
    {
        dataType: data_auto_lap_distance_1.DataAutoLapDistance.type,
        getValue: (settings) => {
            if (!settings['AutoLap']) {
                return null;
            }
            return settings['AutoLap']['Distance'];
        }
    },
    {
        dataType: data_auto_lap_duration_1.DataAutoLapDuration.type,
        getValue: (settings) => {
            if (!settings['AutoLap']) {
                return null;
            }
            return settings['AutoLap']['Duration'];
        }
    },
    {
        dataType: data_auto_pause_used_1.DataAutoPauseUsed.type,
        getValue: (settings) => {
            if (!settings['AutoPause']) {
                return null;
            }
            return settings['AutoPause']['Enabled'];
        }
    },
    {
        dataType: data_bike_pod_used_1.DataBikePodUsed.type,
        getValue: (settings) => {
            return settings['BikePodUsed'];
        }
    },
    {
        dataType: data_enabled_navigation_systems_1.DataEnabledNavigationSystems.type,
        getValue: (settings) => {
            return settings['EnabledNavigationSystems'];
        }
    },
    {
        dataType: data_foot_pod_used_1.DataFootPodUsed.type,
        getValue: (settings) => {
            return settings['FootPodUsed'];
        }
    },
    // {
    //   dataType: DataFusedAltitude.type,
    //   getValue: (settings: any) => {
    //     return settings['FusedAltiUsed'];
    //   },
    // },
    {
        dataType: data_heart_rate_used_1.DataHeartRateUsed.type,
        getValue: (settings) => {
            return settings['HrUsed'];
        }
    },
    {
        dataType: data_power_pod_used_1.DataPowerPodUsed.type,
        getValue: (settings) => {
            return settings['PowerPodUsed'];
        }
    }
];
exports.SuuntoIntensityZonesMapper = [
    {
        dataType: data_heart_rate_1.DataHeartRate.type,
        sampleField: 'HrZones',
        convertSampleValue: (value) => Number(value * 60)
    },
    {
        dataType: data_power_1.DataPower.type,
        sampleField: 'PowerZones',
        convertSampleValue: (value) => Number(value)
    },
    {
        dataType: data_speed_1.DataSpeed.type,
        sampleField: 'SpeedZones',
        convertSampleValue: (value) => Number(value)
    }
];
exports.SuuntoSampleMapper = [
    {
        dataType: data_latitude_degrees_1.DataLatitudeDegrees.type,
        sampleField: 'Latitude',
        convertSampleValue: (value) => Number(value * (180 / Math.PI))
    },
    {
        dataType: data_longitude_degrees_1.DataLongitudeDegrees.type,
        sampleField: 'Longitude',
        convertSampleValue: (value) => Number(value * (180 / Math.PI))
    },
    {
        dataType: data_heart_rate_1.DataHeartRate.type,
        sampleField: 'HR',
        convertSampleValue: (value) => Number(value * 60)
    },
    {
        dataType: data_distance_1.DataDistance.type,
        sampleField: 'Distance',
        convertSampleValue: (value) => Number(value)
    },
    {
        dataType: data_absolute_pressure_1.DataAbsolutePressure.type,
        sampleField: 'AbsPressure',
        convertSampleValue: (value) => Number(value / 100)
    },
    {
        dataType: data_sea_level_pressure_1.DataSeaLevelPressure.type,
        sampleField: 'SeaLevelPressure',
        convertSampleValue: (value) => Number(value / 100)
    },
    {
        dataType: data_altitude_gps_1.DataGPSAltitude.type,
        sampleField: 'GPSAltitude',
        convertSampleValue: (value) => Number(value)
    },
    {
        dataType: data_altitude_1.DataAltitude.type,
        sampleField: 'Altitude',
        convertSampleValue: (value) => Number(value)
    },
    {
        dataType: data_cadence_1.DataCadence.type,
        sampleField: 'Cadence',
        convertSampleValue: (value) => Number(value * 60)
    },
    {
        dataType: data_power_1.DataPower.type,
        sampleField: 'Power',
        convertSampleValue: (value) => Number(value)
    },
    {
        dataType: data_speed_1.DataSpeed.type,
        sampleField: 'Speed',
        convertSampleValue: (value) => Number(value)
    },
    {
        dataType: data_temperature_1.DataTemperature.type,
        sampleField: 'Temperature',
        convertSampleValue: (value) => Number(value - 273.15)
    },
    {
        dataType: data_vertical_speed_1.DataVerticalSpeed.type,
        sampleField: 'VerticalSpeed',
        convertSampleValue: (value) => Number(value)
    },
    {
        dataType: data_ehpe_1.DataEHPE.type,
        sampleField: 'EHPE',
        convertSampleValue: (value) => Number(value)
    },
    {
        dataType: data_evpe_1.DataEVPE.type,
        sampleField: 'EVPE',
        convertSampleValue: (value) => Number(value)
    },
    {
        dataType: data_number_of_satellites_1.DataNumberOfSatellites.type,
        sampleField: 'NumberOfSatellites',
        convertSampleValue: (value) => Number(value)
    },
    {
        dataType: data_satellite_5_best_snr_1.DataSatellite5BestSNR.type,
        sampleField: 'Satellite5BestSNR',
        convertSampleValue: (value) => Number(value)
    },
    {
        dataType: data_battery_charge_1.DataBatteryCharge.type,
        sampleField: 'BatteryCharge',
        convertSampleValue: (value) => Number(value * 100)
    },
    {
        dataType: data_battery_current_1.DataBatteryCurrent.type,
        sampleField: 'BatteryCurrent',
        convertSampleValue: (value) => Number(value)
    },
    {
        dataType: data_battery_voltage_1.DataBatteryVoltage.type,
        sampleField: 'BatteryVoltage',
        convertSampleValue: (value) => Number(value)
    }
];
