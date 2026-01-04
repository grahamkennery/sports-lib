"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventImporterTCX = void 0;
const event_1 = require("../../../event");
const activity_1 = require("../../../../activities/activity");
const creator_1 = require("../../../../creators/creator");
const lap_1 = require("../../../../laps/lap");
const data_energy_1 = require("../../../../data/data.energy");
const data_duration_1 = require("../../../../data/data.duration");
const data_distance_1 = require("../../../../data/data.distance");
const data_pause_1 = require("../../../../data/data.pause");
const data_speed_max_1 = require("../../../../data/data.speed-max");
const data_heart_rate_avg_1 = require("../../../../data/data.heart-rate-avg");
const data_heart_rate_max_1 = require("../../../../data/data.heart-rate-max");
const activity_types_1 = require("../../../../activities/activity.types");
const data_speed_avg_1 = require("../../../../data/data.speed-avg");
const lap_types_1 = require("../../../../laps/lap.types");
const importer_suunto_device_names_1 = require("../suunto/importer.suunto.device.names");
const importer_tcx_mapper_1 = require("./importer.tcx.mapper");
const event_utilities_1 = require("../../../utilities/event.utilities");
const helpers_1 = require("../../../utilities/helpers");
const data_moving_time_1 = require("../../../../data/data.moving-time");
const data_timer_time_1 = require("../../../../data/data.timer-time");
const utils_tcx_1 = require("./utils.tcx");
const data_total_cycles_1 = require("../../../../data/data-total-cycles");
const data_pace_avg_1 = require("../../../../data/data.pace-avg");
const activity_utilities_1 = require("../../../utilities/activity.utilities");
const data_power_avg_1 = require("../../../../data/data.power-avg");
const data_power_max_1 = require("../../../../data/data.power-max");
const data_cadence_avg_1 = require("../../../../data/data.cadence-avg");
const data_active_lap_1 = require("../../../../data/data-active-lap");
const data_swolf_25m_1 = require("../../../../data/data.swolf-25m");
const data_swolf_50m_1 = require("../../../../data/data.swolf-50m");
const file_type_enum_1 = require("../../file-type.enum");
const data_cadence_1 = require("../../../../data/data.cadence");
const activity_parsing_options_1 = require("../../../../activities/activity-parsing-options");
class EventImporterTCX {
    /**
     * Returns active or rest state of a lap. This is pretty use-full on swim pool activities which are decomposed of many active or rest laps
     */
    static isActiveLap(lapElement) {
        const lapHasDistance = lapElement.getElementsByTagName('DistanceMeters').length > 0;
        const lapHasMaxSpeed = lapElement.getElementsByTagName('MaximumSpeed').length > 0;
        let lapDistance = 0;
        let lapMaxSpeed = 0;
        if (lapHasDistance) {
            lapDistance = Number(lapElement.getElementsByTagName('DistanceMeters')[0].textContent);
        }
        if (lapHasMaxSpeed) {
            lapMaxSpeed = Number(lapElement.getElementsByTagName('MaximumSpeed')[0].textContent);
        }
        return lapDistance > 0 || lapMaxSpeed > 0;
    }
    static getFromXML(xml, options = activity_parsing_options_1.ActivityParsingOptions.DEFAULT, name = 'New Event') {
        return new Promise((resolve, reject) => {
            // Activities
            const activities = Array.from(xml.getElementsByTagName('TrainingCenterDatabase')[0].getElementsByTagName('Activity')).map(activityElement => {
                var _a;
                // Getting activity type
                const activityType = activity_types_1.ActivityTypes[activityElement.getAttribute('Sport') || 'unknown'];
                // TCX begins with laps, get them
                const laps = this.getLaps(activityElement.getElementsByTagName('Lap'), activityType);
                // Create activity
                const startDate = new Date(activityElement.getElementsByTagName('Lap')[0].getAttribute('StartTime'));
                const endDate = laps[laps.length - 1].endDate;
                let activity = new activity_1.Activity(startDate, endDate, activityType, this.getCreator(activityElement.getElementsByTagName('Creator')[0]), options);
                // Extract activity stats from laps retrieved
                activity = this.extractAndAssignActivityStatsFromLaps(laps, activity);
                // Extract activity stats provided by the root tcx file
                activity = this.extractAndAssignActivityStatsFromTcxRootDef(activityElement, activity);
                // Creates a array of track points elements
                let hasGpsData = false;
                const trackPointElements = Array.from(activityElement.getElementsByTagName('Lap')).reduce((trackPointElementArray, lapElement) => {
                    Array.from(lapElement.getElementsByTagName('Trackpoint')).forEach(trackPointElement => {
                        trackPointElementArray.push(trackPointElement);
                        if (!hasGpsData) {
                            hasGpsData = !!trackPointElement.getElementsByTagName('Position')[0];
                        }
                    });
                    return trackPointElementArray;
                }, []);
                // Update activity type to indoor when no GPS data detected
                activity = this.updateActivityTypeCaseIndoor(hasGpsData, activity);
                if (!((_a = activity.getDistance()) === null || _a === void 0 ? void 0 : _a.getValue()) &&
                    trackPointElements.length &&
                    trackPointElements[trackPointElements.length - 1].getElementsByTagName('DistanceMeters')[0]) {
                    // If the distance from laps is 0 and there is a last track-point with distance use that
                    activity.setDistance(new data_distance_1.DataDistance(Number(trackPointElements[trackPointElements.length - 1].getElementsByTagName('DistanceMeters')[0].textContent)));
                }
                // Setup sample info which could be use when getting sample values
                const hasPowerMeter = trackPointElements.findIndex(trackPointElement => Number.isFinite((0, utils_tcx_1.findTrackPointExtensionValue)(trackPointElement.childNodes, 'Watts'))) !== -1;
                const samplesInfo = { hasPowerMeter: hasPowerMeter };
                importer_tcx_mapper_1.TCXSampleMapper.forEach(sampleMapping => {
                    // Should check the children
                    const subjectTrackPointElements = trackPointElements.filter((element) => {
                        return (0, helpers_1.isNumber)(sampleMapping.getSampleValue(element, samplesInfo));
                    });
                    if (subjectTrackPointElements.length) {
                        if (activity.hasStreamData(sampleMapping.dataType)) {
                            return;
                        }
                        activity.addStream(activity.createStream(sampleMapping.dataType));
                        subjectTrackPointElements.forEach((subjectTrackPointElement) => {
                            activity.addDataToStream(sampleMapping.dataType, new Date(subjectTrackPointElement.getElementsByTagName('Time')[0].textContent), sampleMapping.getSampleValue(subjectTrackPointElement, samplesInfo));
                        });
                    }
                });
                return activity;
            });
            // Init the event
            const event = new event_1.Event(name, activities[0].startDate, activities[activities.length - 1].endDate, file_type_enum_1.FileType.TCX);
            activities.forEach(activity => event.addActivity(activity));
            event_utilities_1.EventUtilities.generateStatsForAll(event);
            resolve(event);
        });
    }
    static updateActivityTypeCaseIndoor(hasGpsData, activity) {
        if (!hasGpsData) {
            switch (activity.type) {
                case activity_types_1.ActivityTypes.Running:
                    activity.type = activity_types_1.ActivityTypes.IndoorRunning;
                    break;
                case activity_types_1.ActivityTypes.Cycling:
                    activity.type = activity_types_1.ActivityTypes.IndoorCycling;
                    break;
                case activity_types_1.ActivityTypes.Rowing:
                    activity.type = activity_types_1.ActivityTypes.IndoorRowing;
                    break;
            }
        }
        return activity;
    }
    /**
     * Extract activity stats from laps retrieved
     */
    static extractAndAssignActivityStatsFromLaps(laps, activity) {
        // Go over the laps and start filling up the stats and creating the points
        laps.forEach((lap) => {
            var _a, _b, _c, _d, _e, _f;
            if (lap.getDuration().getValue() === 0) {
                return;
            }
            // Append duration to whole activity
            if (((_a = lap.getDuration()) === null || _a === void 0 ? void 0 : _a.getValue()) > 0) {
                if (!activity.getDuration()) {
                    activity.setDuration(new data_duration_1.DataDuration(0));
                }
                activity.getDuration().setValue(activity.getDuration().getValue() + lap.getDuration().getValue());
            }
            // Append timer time to whole activity
            if (((_b = lap.getTimer()) === null || _b === void 0 ? void 0 : _b.getValue()) > 0) {
                if (!activity.getTimer()) {
                    activity.setTimer(new data_timer_time_1.DataTimerTime(0));
                }
                activity.getTimer().setValue(activity.getTimer().getValue() + lap.getTimer().getValue());
            }
            // Append moving time to whole activity
            if (((_c = lap.getMovingTime()) === null || _c === void 0 ? void 0 : _c.getValue()) > 0) {
                if (!activity.getMovingTime()) {
                    activity.setMovingTime(new data_moving_time_1.DataMovingTime(0));
                }
                activity.getMovingTime().setValue(activity.getMovingTime().getValue() + lap.getMovingTime().getValue());
            }
            // Append pause time to whole activity
            if (((_d = lap.getPause()) === null || _d === void 0 ? void 0 : _d.getValue()) > 0) {
                if (!activity.getPause()) {
                    activity.setPause(new data_pause_1.DataPause(0));
                }
                activity.getPause().setValue(activity.getPause().getValue() + lap.getPause().getValue());
            }
            // Append distance to whole activity
            if (((_e = lap.getDistance()) === null || _e === void 0 ? void 0 : _e.getValue()) > 0) {
                if (!activity.getDistance()) {
                    activity.setDistance(new data_distance_1.DataDistance(0));
                }
                activity.getDistance().setValue(activity.getDistance().getValue() + lap.getDistance().getValue());
            }
            // Append energy to whole activity
            if (((_f = lap.getStat(data_energy_1.DataEnergy.type)) === null || _f === void 0 ? void 0 : _f.getValue()) > 0) {
                if (!activity.getStat(data_energy_1.DataEnergy.type)) {
                    activity.addStat(new data_energy_1.DataEnergy(0));
                }
                activity.addStat(new data_energy_1.DataEnergy(activity.getStat(data_energy_1.DataEnergy.type).getValue() +
                    lap.getStat(data_energy_1.DataEnergy.type).getValue()));
            }
            activity.addLap(lap);
        });
        // Looping on laps to assign stats to activity
        if (laps === null || laps === void 0 ? void 0 : laps.length) {
            // Getting avg speed/pace from laps:
            const lapAvgSpeeds = laps
                .filter(lap => { var _a; return ((_a = lap.getStat(data_speed_avg_1.DataSpeedAvg.type)) === null || _a === void 0 ? void 0 : _a.getValue()) >= 0; })
                .map(lap => { var _a; return (_a = lap.getStat(data_speed_avg_1.DataSpeedAvg.type)) === null || _a === void 0 ? void 0 : _a.getValue(); });
            if (lapAvgSpeeds.length) {
                const avgSpeed = activity_utilities_1.ActivityUtilities.getAverage(lapAvgSpeeds);
                if (avgSpeed > 0) {
                    activity.addStat(new data_speed_avg_1.DataSpeedAvg(avgSpeed));
                    activity.addStat(new data_pace_avg_1.DataPaceAvg((0, helpers_1.convertSpeedToPace)(avgSpeed)));
                }
            }
            // Cycles
            const lapTotalsCycles = laps
                .map(lap => { var _a; return ((_a = lap.getStat(data_total_cycles_1.DataTotalCycles.type)) === null || _a === void 0 ? void 0 : _a.getValue()) || 0; })
                .filter(count => count > 0);
            if (lapTotalsCycles.length) {
                const lapTotalCycles = activity_utilities_1.ActivityUtilities.getSum(lapTotalsCycles);
                if (lapTotalCycles > 0) {
                    activity.addStat(new data_total_cycles_1.DataTotalCycles(lapTotalCycles));
                }
            }
            // Avg cadence
            const lapDataCadenceAverages = laps
                .map(lap => { var _a; return ((_a = lap.getStat(data_cadence_avg_1.DataCadenceAvg.type)) === null || _a === void 0 ? void 0 : _a.getValue()) || 0; })
                .filter(cad => cad > 0);
            if (lapDataCadenceAverages.length) {
                const dataCadenceAvg = activity_utilities_1.ActivityUtilities.getAverage(lapDataCadenceAverages);
                if (dataCadenceAvg > 0) {
                    activity.addStat(new data_cadence_avg_1.DataCadenceAvg(Math.round(dataCadenceAvg)));
                }
            }
        }
        return activity;
    }
    /**
     * Extract activity stats provided by the root tcx file
     */
    static extractAndAssignActivityStatsFromTcxRootDef(activityElement, activity) {
        var _a, _b;
        if (!(((_a = activity.getStat(data_energy_1.DataEnergy.type)) === null || _a === void 0 ? void 0 : _a.getValue()) > 0) &&
            activityElement.getElementsByTagName('Calories')[0]) {
            const calories = Number(activityElement.getElementsByTagName('Calories')[0].textContent);
            if (calories > 0) {
                activity.addStat(new data_energy_1.DataEnergy(calories));
            }
        }
        if (!(((_b = activity.getStat(data_distance_1.DataDistance.type)) === null || _b === void 0 ? void 0 : _b.getValue()) > 0) &&
            activityElement.getElementsByTagName('DistanceMeters')[0]) {
            activity.addStat(new data_distance_1.DataDistance(Number(activityElement.getElementsByTagName('DistanceMeters')[0].textContent)));
        }
        if (activityElement.getElementsByTagName('MaximumSpeed')[0]) {
            activity.addStat(new data_speed_max_1.DataSpeedMax(Number(activityElement.getElementsByTagName('MaximumSpeed')[0].textContent)));
        }
        return activity;
    }
    static getCreator(creatorElement) {
        const creator = new creator_1.Creator('Unknown Device');
        if (!creatorElement) {
            return creator;
        }
        // Try to see if its a listed Suunto Device name
        if (creatorElement.getElementsByTagName('Name')[0]) {
            creator.name =
                importer_suunto_device_names_1.ImporterSuuntoDeviceNames[creatorElement.getElementsByTagName('Name')[0].textContent] ||
                    creatorElement.getElementsByTagName('Name')[0].textContent ||
                    creator.name;
        }
        if (creatorElement.getElementsByTagName('Version')[0]) {
            creator.swInfo = creatorElement.getElementsByTagName('Version')[0].textContent;
        }
        return creator;
    }
    static getLaps(lapElements, activityType) {
        return Array.from(lapElements).reduce((lapArray, lapElement, lapIndex) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            // Calculating lap time data (moving time, timer time, elapsed time...)
            const speedThreshold = activity_types_1.ActivityTypesMoving.getSpeedThreshold(activityType);
            let movingTime = 0;
            let elapsedTime = 0;
            const timerTime = lapElement.getElementsByTagName('TotalTimeSeconds').length
                ? Number(lapElement.getElementsByTagName('TotalTimeSeconds')[0].textContent)
                : 0;
            // Loop on track-points to detect moving speed
            const trackSpeeds = [];
            const trackElements = Array.from(lapElement.getElementsByTagName('Track'));
            trackElements.forEach(trackElement => {
                var _a;
                const trackPointsElements = Array.from(trackElement.getElementsByTagName('Trackpoint'));
                if (!(trackPointsElements === null || trackPointsElements === void 0 ? void 0 : trackPointsElements.length)) {
                    return;
                }
                // Setting lap elapsed time from first and last track point
                const firstTrackPoint = trackPointsElements[0];
                const lastTrackPoint = trackPointsElements[trackPointsElements.length - 1];
                // Assign elapsed time if time available on first and last point
                if ((_a = lastTrackPoint === null || lastTrackPoint === void 0 ? void 0 : lastTrackPoint.getElementsByTagName('Time')) === null || _a === void 0 ? void 0 : _a.length) {
                    elapsedTime =
                        (new Date(lastTrackPoint.getElementsByTagName('Time')[0].textContent).getTime() -
                            new Date(firstTrackPoint.getElementsByTagName('Time')[0].textContent).getTime()) /
                            1000;
                }
                // Parsing each track points to determine moving speed
                trackPointsElements.forEach((trackPointElement, index) => {
                    // Skipping first record to be able to get delta with previous one
                    if (index === 0) {
                        return;
                    }
                    // Getting current time of track point
                    const currentTime = new Date(trackPointElement.getElementsByTagName('Time')[0].textContent).getTime();
                    const previousTime = new Date(trackPointsElements[index - 1].getElementsByTagName('Time')[0].textContent).getTime();
                    const seconds = (currentTime - previousTime) / 1000;
                    let speed = (0, utils_tcx_1.findTrackPointExtensionValue)(trackPointElement.childNodes, 'Speed');
                    // Try to get m/s using delta distance if speed extension is missing
                    if (speed === null) {
                        // If distance available on track point, then compute speed with it
                        if (trackPointElement.getElementsByTagName('DistanceMeters').length &&
                            trackPointsElements[index - 1].getElementsByTagName('DistanceMeters').length) {
                            const currentDistance = Number(trackPointElement.getElementsByTagName('DistanceMeters')[0].textContent);
                            const previousDistance = Number(trackPointsElements[index - 1].getElementsByTagName('DistanceMeters')[0].textContent);
                            const meters = currentDistance - previousDistance;
                            speed = meters / seconds;
                            trackSpeeds.push(speed);
                        }
                    }
                    else {
                        trackSpeeds.push(speed);
                    }
                    // We track moving time only if speed available on track points and upper than threshold
                    if (speed !== null && speed > speedThreshold) {
                        movingTime += seconds;
                    }
                });
            });
            // Active or rest lap?
            const isActiveLap = this.isActiveLap(lapElement);
            // If no moving time detected, try to detect from active laps
            if (movingTime === 0) {
                // Lap is considered as active. Track moving time..
                if (isActiveLap) {
                    movingTime = timerTime;
                }
            }
            // If elapsed time not defined or lower than timer time then use timer time as elapsed time
            if (!elapsedTime || timerTime > elapsedTime) {
                elapsedTime = timerTime;
            }
            // Now creating the lap
            const startDate = new Date(lapElement.getAttribute('StartTime'));
            const endDate = new Date(startDate);
            endDate.setSeconds(endDate.getSeconds() + elapsedTime);
            const lap = new lap_1.Lap(startDate, endDate, lapIndex + 1, lap_types_1.LapTypes.AutoLap);
            // Add elapsed & timer stats to lap
            lap.addStat(new data_duration_1.DataDuration(elapsedTime));
            lap.addStat(new data_timer_time_1.DataTimerTime(Math.round(timerTime * 10) / 10));
            // Append moving stat only if moving time has been detected
            // We need that to compute total global moving time later
            if (movingTime > 0) {
                lap.addStat(new data_moving_time_1.DataMovingTime(Math.round(movingTime * 10) / 10));
            }
            // Pause TIME on Object (activity, lap...)
            const pause = elapsedTime > movingTime ? Math.round((elapsedTime - movingTime) * 100) / 100 : 0;
            lap.setPause(new data_pause_1.DataPause(pause));
            // Assign is active lap status
            lap.addStat(new data_active_lap_1.DataActiveLap(isActiveLap));
            if (lapElement.getElementsByTagName('TriggerMethod')[0]) {
                lap.type = lap_types_1.LapTypes[lapElement.getElementsByTagName('TriggerMethod')[0].textContent];
            }
            if (lapElement.getElementsByTagName('Calories')[0]) {
                lap.addStat(new data_energy_1.DataEnergy(Number(lapElement.getElementsByTagName('Calories')[0].textContent)));
            }
            // Create a stats (required TCX fields)
            lap.addStat(new data_distance_1.DataDistance(0));
            if (lapElement.getElementsByTagName('DistanceMeters')[0]) {
                lap.addStat(new data_distance_1.DataDistance(Number(lapElement.getElementsByTagName('DistanceMeters')[0].textContent)));
            }
            // Optionals
            if (trackSpeeds.length) {
                const maxSpeed = activity_utilities_1.ActivityUtilities.getMax(trackSpeeds);
                lap.addStat(new data_speed_max_1.DataSpeedMax(maxSpeed));
            }
            else if (lapElement.getElementsByTagName('MaximumSpeed')[0]) {
                const maxSpeed = Number(lapElement.getElementsByTagName('MaximumSpeed')[0].textContent);
                lap.addStat(new data_speed_max_1.DataSpeedMax(maxSpeed));
            }
            if (lapElement.getElementsByTagName('AverageHeartRateBpm')[0]) {
                const value = ((_b = (_a = lapElement.getElementsByTagName('AverageHeartRateBpm')[0]) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('Value')[0]) === null || _b === void 0 ? void 0 : _b.textContent) ||
                    ((_c = lapElement.getElementsByTagName('AverageHeartRateBpm')[0]) === null || _c === void 0 ? void 0 : _c.textContent);
                if (value) {
                    lap.addStat(new data_heart_rate_avg_1.DataHeartRateAvg(Number(value)));
                }
            }
            if (lapElement.getElementsByTagName('MaximumHeartRateBpm')[0]) {
                const value = ((_e = (_d = lapElement.getElementsByTagName('MaximumHeartRateBpm')[0]) === null || _d === void 0 ? void 0 : _d.getElementsByTagName('Value')[0]) === null || _e === void 0 ? void 0 : _e.textContent) ||
                    ((_f = lapElement.getElementsByTagName('MaximumHeartRateBpm')[0]) === null || _f === void 0 ? void 0 : _f.textContent);
                if (value) {
                    lap.addStat(new data_heart_rate_max_1.DataHeartRateMax(Number(value)));
                }
            }
            if (lapElement.getElementsByTagName('Cadence')[0]) {
                lap.addStat(new data_cadence_1.DataCadence(Number(lapElement.getElementsByTagName('Cadence')[0].textContent)));
            }
            // Fetching activity lap speed from records or from extensions if exists according https://www8.garmin.com/xmlschemas/ActivityExtensionv2.xsd schema
            const lapAvgSpeed = trackSpeeds.length
                ? activity_utilities_1.ActivityUtilities.getAverage(trackSpeeds)
                : (0, utils_tcx_1.findLapExtensionValue)(lapElement.childNodes, 'AvgSpeed');
            if (lapAvgSpeed !== null) {
                lap.addStat(new data_speed_avg_1.DataSpeedAvg(lapAvgSpeed));
                lap.addStat(new data_pace_avg_1.DataPaceAvg((0, helpers_1.convertSpeedToPace)(lapAvgSpeed)));
            }
            // Cycles
            const lapTotalCycle = (0, utils_tcx_1.findLapExtensionValue)(lapElement.childNodes, 'Steps');
            if (lapTotalCycle !== null) {
                lap.addStat(new data_total_cycles_1.DataTotalCycles(lapTotalCycle));
            }
            // Avg Watts
            const lapAvgWatts = (0, utils_tcx_1.findLapExtensionValue)(lapElement.childNodes, 'AvgWatts');
            if (lapAvgWatts !== null) {
                lap.addStat(new data_power_avg_1.DataPowerAvg(lapAvgWatts));
            }
            // Max Watts
            const lapMaxWatts = (0, utils_tcx_1.findLapExtensionValue)(lapElement.childNodes, 'MaxWatts');
            if (lapMaxWatts !== null) {
                lap.addStat(new data_power_max_1.DataPowerMax(lapMaxWatts));
            }
            // AvgRunCadence
            const lapAvgRunCadence = (0, utils_tcx_1.findLapExtensionValue)(lapElement.childNodes, 'AvgRunCadence');
            if (lapAvgRunCadence !== null) {
                lap.addStat(new data_cadence_avg_1.DataCadenceAvg(lapAvgRunCadence));
            }
            // Try to set avg cadence from total cycle if not set on swimming activities only
            if (isActiveLap &&
                (activityType === activity_types_1.ActivityTypes.Swimming || activityType === activity_types_1.ActivityTypes.OpenWaterSwimming) &&
                !((_g = lap.getStat(data_cadence_avg_1.DataCadenceAvg.type)) === null || _g === void 0 ? void 0 : _g.getValue()) &&
                timerTime &&
                lapTotalCycle) {
                const lapAvgCadence = Math.round((lapTotalCycle / timerTime) * 60);
                lap.addStat(new data_cadence_avg_1.DataCadenceAvg(lapAvgCadence));
            }
            // Average SWOLF in 25m and 50m pool
            if (isActiveLap &&
                (activityType === activity_types_1.ActivityTypes.Swimming || activityType === activity_types_1.ActivityTypes.OpenWaterSwimming) &&
                ((_h = lap.getStat(data_cadence_avg_1.DataCadenceAvg.type)) === null || _h === void 0 ? void 0 : _h.getValue()) > 0 &&
                ((_j = lap.getStat(data_speed_avg_1.DataSpeedAvg.type)) === null || _j === void 0 ? void 0 : _j.getValue()) > 0) {
                const avgCadence = lap.getStat(data_cadence_avg_1.DataCadenceAvg.type).getValue();
                const avgSpeed = lap.getStat(data_speed_avg_1.DataSpeedAvg.type).getValue();
                const avgPace100m = 100 / avgSpeed;
                const swolf25m = activity_utilities_1.ActivityUtilities.computeSwimSwolf(avgPace100m, avgCadence, 25);
                lap.addStat(new data_swolf_25m_1.DataSWOLF25m(swolf25m));
                const swolf50m = activity_utilities_1.ActivityUtilities.computeSwimSwolf(avgPace100m, avgCadence, 50);
                lap.addStat(new data_swolf_50m_1.DataSWOLF50m(swolf50m));
            }
            lapArray.push(lap);
            return lapArray;
        }, []);
    }
}
exports.EventImporterTCX = EventImporterTCX;
