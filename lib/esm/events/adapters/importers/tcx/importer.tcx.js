import { Event } from '../../../event';
import { Activity } from '../../../../activities/activity';
import { Creator } from '../../../../creators/creator';
import { Lap } from '../../../../laps/lap';
import { DataEnergy } from '../../../../data/data.energy';
import { DataDuration } from '../../../../data/data.duration';
import { DataDistance } from '../../../../data/data.distance';
import { DataPause } from '../../../../data/data.pause';
import { DataSpeedMax } from '../../../../data/data.speed-max';
import { DataHeartRateAvg } from '../../../../data/data.heart-rate-avg';
import { DataHeartRateMax } from '../../../../data/data.heart-rate-max';
import { ActivityTypes, ActivityTypesMoving } from '../../../../activities/activity.types';
import { DataSpeedAvg } from '../../../../data/data.speed-avg';
import { LapTypes } from '../../../../laps/lap.types';
import { ImporterSuuntoDeviceNames } from '../suunto/importer.suunto.device.names';
import { TCXSampleMapper } from './importer.tcx.mapper';
import { EventUtilities } from '../../../utilities/event.utilities';
import { convertSpeedToPace, isNumber } from '../../../utilities/helpers';
import { DataMovingTime } from '../../../../data/data.moving-time';
import { DataTimerTime } from '../../../../data/data.timer-time';
import { findLapExtensionValue, findTrackPointExtensionValue } from './utils.tcx';
import { DataTotalCycles } from '../../../../data/data-total-cycles';
import { DataPaceAvg } from '../../../../data/data.pace-avg';
import { ActivityUtilities } from '../../../utilities/activity.utilities';
import { DataPowerAvg } from '../../../../data/data.power-avg';
import { DataPowerMax } from '../../../../data/data.power-max';
import { DataCadenceAvg } from '../../../../data/data.cadence-avg';
import { DataActiveLap } from '../../../../data/data-active-lap';
import { DataSWOLF25m } from '../../../../data/data.swolf-25m';
import { DataSWOLF50m } from '../../../../data/data.swolf-50m';
import { FileType } from '../../file-type.enum';
import { DataCadence } from '../../../../data/data.cadence';
import { ActivityParsingOptions } from '../../../../activities/activity-parsing-options';
export class EventImporterTCX {
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
    static getFromXML(xml, options = ActivityParsingOptions.DEFAULT, name = 'New Event') {
        return new Promise((resolve, reject) => {
            // Activities
            const activities = Array.from(xml.getElementsByTagName('TrainingCenterDatabase')[0].getElementsByTagName('Activity')).map(activityElement => {
                var _a;
                // Getting activity type
                const activityType = ActivityTypes[activityElement.getAttribute('Sport') || 'unknown'];
                // TCX begins with laps, get them
                const laps = this.getLaps(activityElement.getElementsByTagName('Lap'), activityType);
                // Create activity
                const startDate = new Date(activityElement.getElementsByTagName('Lap')[0].getAttribute('StartTime'));
                const endDate = laps[laps.length - 1].endDate;
                let activity = new Activity(startDate, endDate, activityType, this.getCreator(activityElement.getElementsByTagName('Creator')[0]), options);
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
                    activity.setDistance(new DataDistance(Number(trackPointElements[trackPointElements.length - 1].getElementsByTagName('DistanceMeters')[0].textContent)));
                }
                // Setup sample info which could be use when getting sample values
                const hasPowerMeter = trackPointElements.findIndex(trackPointElement => Number.isFinite(findTrackPointExtensionValue(trackPointElement.childNodes, 'Watts'))) !== -1;
                const samplesInfo = { hasPowerMeter: hasPowerMeter };
                TCXSampleMapper.forEach(sampleMapping => {
                    // Should check the children
                    const subjectTrackPointElements = trackPointElements.filter((element) => {
                        return isNumber(sampleMapping.getSampleValue(element, samplesInfo));
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
            const event = new Event(name, activities[0].startDate, activities[activities.length - 1].endDate, FileType.TCX);
            activities.forEach(activity => event.addActivity(activity));
            EventUtilities.generateStatsForAll(event);
            resolve(event);
        });
    }
    static updateActivityTypeCaseIndoor(hasGpsData, activity) {
        if (!hasGpsData) {
            switch (activity.type) {
                case ActivityTypes.Running:
                    activity.type = ActivityTypes.IndoorRunning;
                    break;
                case ActivityTypes.Cycling:
                    activity.type = ActivityTypes.IndoorCycling;
                    break;
                case ActivityTypes.Rowing:
                    activity.type = ActivityTypes.IndoorRowing;
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
                    activity.setDuration(new DataDuration(0));
                }
                activity.getDuration().setValue(activity.getDuration().getValue() + lap.getDuration().getValue());
            }
            // Append timer time to whole activity
            if (((_b = lap.getTimer()) === null || _b === void 0 ? void 0 : _b.getValue()) > 0) {
                if (!activity.getTimer()) {
                    activity.setTimer(new DataTimerTime(0));
                }
                activity.getTimer().setValue(activity.getTimer().getValue() + lap.getTimer().getValue());
            }
            // Append moving time to whole activity
            if (((_c = lap.getMovingTime()) === null || _c === void 0 ? void 0 : _c.getValue()) > 0) {
                if (!activity.getMovingTime()) {
                    activity.setMovingTime(new DataMovingTime(0));
                }
                activity.getMovingTime().setValue(activity.getMovingTime().getValue() + lap.getMovingTime().getValue());
            }
            // Append pause time to whole activity
            if (((_d = lap.getPause()) === null || _d === void 0 ? void 0 : _d.getValue()) > 0) {
                if (!activity.getPause()) {
                    activity.setPause(new DataPause(0));
                }
                activity.getPause().setValue(activity.getPause().getValue() + lap.getPause().getValue());
            }
            // Append distance to whole activity
            if (((_e = lap.getDistance()) === null || _e === void 0 ? void 0 : _e.getValue()) > 0) {
                if (!activity.getDistance()) {
                    activity.setDistance(new DataDistance(0));
                }
                activity.getDistance().setValue(activity.getDistance().getValue() + lap.getDistance().getValue());
            }
            // Append energy to whole activity
            if (((_f = lap.getStat(DataEnergy.type)) === null || _f === void 0 ? void 0 : _f.getValue()) > 0) {
                if (!activity.getStat(DataEnergy.type)) {
                    activity.addStat(new DataEnergy(0));
                }
                activity.addStat(new DataEnergy(activity.getStat(DataEnergy.type).getValue() +
                    lap.getStat(DataEnergy.type).getValue()));
            }
            activity.addLap(lap);
        });
        // Looping on laps to assign stats to activity
        if (laps === null || laps === void 0 ? void 0 : laps.length) {
            // Getting avg speed/pace from laps:
            const lapAvgSpeeds = laps
                .filter(lap => { var _a; return ((_a = lap.getStat(DataSpeedAvg.type)) === null || _a === void 0 ? void 0 : _a.getValue()) >= 0; })
                .map(lap => { var _a; return (_a = lap.getStat(DataSpeedAvg.type)) === null || _a === void 0 ? void 0 : _a.getValue(); });
            if (lapAvgSpeeds.length) {
                const avgSpeed = ActivityUtilities.getAverage(lapAvgSpeeds);
                if (avgSpeed > 0) {
                    activity.addStat(new DataSpeedAvg(avgSpeed));
                    activity.addStat(new DataPaceAvg(convertSpeedToPace(avgSpeed)));
                }
            }
            // Cycles
            const lapTotalsCycles = laps
                .map(lap => { var _a; return ((_a = lap.getStat(DataTotalCycles.type)) === null || _a === void 0 ? void 0 : _a.getValue()) || 0; })
                .filter(count => count > 0);
            if (lapTotalsCycles.length) {
                const lapTotalCycles = ActivityUtilities.getSum(lapTotalsCycles);
                if (lapTotalCycles > 0) {
                    activity.addStat(new DataTotalCycles(lapTotalCycles));
                }
            }
            // Avg cadence
            const lapDataCadenceAverages = laps
                .map(lap => { var _a; return ((_a = lap.getStat(DataCadenceAvg.type)) === null || _a === void 0 ? void 0 : _a.getValue()) || 0; })
                .filter(cad => cad > 0);
            if (lapDataCadenceAverages.length) {
                const dataCadenceAvg = ActivityUtilities.getAverage(lapDataCadenceAverages);
                if (dataCadenceAvg > 0) {
                    activity.addStat(new DataCadenceAvg(Math.round(dataCadenceAvg)));
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
        if (!(((_a = activity.getStat(DataEnergy.type)) === null || _a === void 0 ? void 0 : _a.getValue()) > 0) &&
            activityElement.getElementsByTagName('Calories')[0]) {
            const calories = Number(activityElement.getElementsByTagName('Calories')[0].textContent);
            if (calories > 0) {
                activity.addStat(new DataEnergy(calories));
            }
        }
        if (!(((_b = activity.getStat(DataDistance.type)) === null || _b === void 0 ? void 0 : _b.getValue()) > 0) &&
            activityElement.getElementsByTagName('DistanceMeters')[0]) {
            activity.addStat(new DataDistance(Number(activityElement.getElementsByTagName('DistanceMeters')[0].textContent)));
        }
        if (activityElement.getElementsByTagName('MaximumSpeed')[0]) {
            activity.addStat(new DataSpeedMax(Number(activityElement.getElementsByTagName('MaximumSpeed')[0].textContent)));
        }
        return activity;
    }
    static getCreator(creatorElement) {
        const creator = new Creator('Unknown Device');
        if (!creatorElement) {
            return creator;
        }
        // Try to see if its a listed Suunto Device name
        if (creatorElement.getElementsByTagName('Name')[0]) {
            creator.name =
                ImporterSuuntoDeviceNames[creatorElement.getElementsByTagName('Name')[0].textContent] ||
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
            const speedThreshold = ActivityTypesMoving.getSpeedThreshold(activityType);
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
                    let speed = findTrackPointExtensionValue(trackPointElement.childNodes, 'Speed');
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
            const lap = new Lap(startDate, endDate, lapIndex + 1, LapTypes.AutoLap);
            // Add elapsed & timer stats to lap
            lap.addStat(new DataDuration(elapsedTime));
            lap.addStat(new DataTimerTime(Math.round(timerTime * 10) / 10));
            // Append moving stat only if moving time has been detected
            // We need that to compute total global moving time later
            if (movingTime > 0) {
                lap.addStat(new DataMovingTime(Math.round(movingTime * 10) / 10));
            }
            // Pause TIME on Object (activity, lap...)
            const pause = elapsedTime > movingTime ? Math.round((elapsedTime - movingTime) * 100) / 100 : 0;
            lap.setPause(new DataPause(pause));
            // Assign is active lap status
            lap.addStat(new DataActiveLap(isActiveLap));
            if (lapElement.getElementsByTagName('TriggerMethod')[0]) {
                lap.type = LapTypes[lapElement.getElementsByTagName('TriggerMethod')[0].textContent];
            }
            if (lapElement.getElementsByTagName('Calories')[0]) {
                lap.addStat(new DataEnergy(Number(lapElement.getElementsByTagName('Calories')[0].textContent)));
            }
            // Create a stats (required TCX fields)
            lap.addStat(new DataDistance(0));
            if (lapElement.getElementsByTagName('DistanceMeters')[0]) {
                lap.addStat(new DataDistance(Number(lapElement.getElementsByTagName('DistanceMeters')[0].textContent)));
            }
            // Optionals
            if (trackSpeeds.length) {
                const maxSpeed = ActivityUtilities.getMax(trackSpeeds);
                lap.addStat(new DataSpeedMax(maxSpeed));
            }
            else if (lapElement.getElementsByTagName('MaximumSpeed')[0]) {
                const maxSpeed = Number(lapElement.getElementsByTagName('MaximumSpeed')[0].textContent);
                lap.addStat(new DataSpeedMax(maxSpeed));
            }
            if (lapElement.getElementsByTagName('AverageHeartRateBpm')[0]) {
                const value = ((_b = (_a = lapElement.getElementsByTagName('AverageHeartRateBpm')[0]) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('Value')[0]) === null || _b === void 0 ? void 0 : _b.textContent) ||
                    ((_c = lapElement.getElementsByTagName('AverageHeartRateBpm')[0]) === null || _c === void 0 ? void 0 : _c.textContent);
                if (value) {
                    lap.addStat(new DataHeartRateAvg(Number(value)));
                }
            }
            if (lapElement.getElementsByTagName('MaximumHeartRateBpm')[0]) {
                const value = ((_e = (_d = lapElement.getElementsByTagName('MaximumHeartRateBpm')[0]) === null || _d === void 0 ? void 0 : _d.getElementsByTagName('Value')[0]) === null || _e === void 0 ? void 0 : _e.textContent) ||
                    ((_f = lapElement.getElementsByTagName('MaximumHeartRateBpm')[0]) === null || _f === void 0 ? void 0 : _f.textContent);
                if (value) {
                    lap.addStat(new DataHeartRateMax(Number(value)));
                }
            }
            if (lapElement.getElementsByTagName('Cadence')[0]) {
                lap.addStat(new DataCadence(Number(lapElement.getElementsByTagName('Cadence')[0].textContent)));
            }
            // Fetching activity lap speed from records or from extensions if exists according https://www8.garmin.com/xmlschemas/ActivityExtensionv2.xsd schema
            const lapAvgSpeed = trackSpeeds.length
                ? ActivityUtilities.getAverage(trackSpeeds)
                : findLapExtensionValue(lapElement.childNodes, 'AvgSpeed');
            if (lapAvgSpeed !== null) {
                lap.addStat(new DataSpeedAvg(lapAvgSpeed));
                lap.addStat(new DataPaceAvg(convertSpeedToPace(lapAvgSpeed)));
            }
            // Cycles
            const lapTotalCycle = findLapExtensionValue(lapElement.childNodes, 'Steps');
            if (lapTotalCycle !== null) {
                lap.addStat(new DataTotalCycles(lapTotalCycle));
            }
            // Avg Watts
            const lapAvgWatts = findLapExtensionValue(lapElement.childNodes, 'AvgWatts');
            if (lapAvgWatts !== null) {
                lap.addStat(new DataPowerAvg(lapAvgWatts));
            }
            // Max Watts
            const lapMaxWatts = findLapExtensionValue(lapElement.childNodes, 'MaxWatts');
            if (lapMaxWatts !== null) {
                lap.addStat(new DataPowerMax(lapMaxWatts));
            }
            // AvgRunCadence
            const lapAvgRunCadence = findLapExtensionValue(lapElement.childNodes, 'AvgRunCadence');
            if (lapAvgRunCadence !== null) {
                lap.addStat(new DataCadenceAvg(lapAvgRunCadence));
            }
            // Try to set avg cadence from total cycle if not set on swimming activities only
            if (isActiveLap &&
                (activityType === ActivityTypes.Swimming || activityType === ActivityTypes.OpenWaterSwimming) &&
                !((_g = lap.getStat(DataCadenceAvg.type)) === null || _g === void 0 ? void 0 : _g.getValue()) &&
                timerTime &&
                lapTotalCycle) {
                const lapAvgCadence = Math.round((lapTotalCycle / timerTime) * 60);
                lap.addStat(new DataCadenceAvg(lapAvgCadence));
            }
            // Average SWOLF in 25m and 50m pool
            if (isActiveLap &&
                (activityType === ActivityTypes.Swimming || activityType === ActivityTypes.OpenWaterSwimming) &&
                ((_h = lap.getStat(DataCadenceAvg.type)) === null || _h === void 0 ? void 0 : _h.getValue()) > 0 &&
                ((_j = lap.getStat(DataSpeedAvg.type)) === null || _j === void 0 ? void 0 : _j.getValue()) > 0) {
                const avgCadence = lap.getStat(DataCadenceAvg.type).getValue();
                const avgSpeed = lap.getStat(DataSpeedAvg.type).getValue();
                const avgPace100m = 100 / avgSpeed;
                const swolf25m = ActivityUtilities.computeSwimSwolf(avgPace100m, avgCadence, 25);
                lap.addStat(new DataSWOLF25m(swolf25m));
                const swolf50m = ActivityUtilities.computeSwimSwolf(avgPace100m, avgCadence, 50);
                lap.addStat(new DataSWOLF50m(swolf50m));
            }
            lapArray.push(lap);
            return lapArray;
        }, []);
    }
}
