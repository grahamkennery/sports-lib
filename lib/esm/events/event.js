import { DurationClassAbstract } from '../duration/duration.class.abstract';
import { Privacy } from '../privacy/privacy.class.interface';
import { ActivityTypes } from '../activities/activity.types';
import { DataActivityTypes } from '../data/data.activity-types';
import { DataDeviceNames } from '../data/data.device-names';
export class Event extends DurationClassAbstract {
    constructor(name, startDate, endDate, srcFileType, privacy, description, isMerge = false) {
        super(startDate, endDate);
        this.privacy = Privacy.Private;
        this.activities = [];
        this.name = name;
        this.srcFileType = srcFileType;
        if (privacy) {
            this.privacy = privacy;
        }
        if (description) {
            this.description = description;
        }
        this.isMerge = isMerge;
    }
    addActivity(activity) {
        this.activities.push(activity);
    }
    addActivities(activities) {
        activities.forEach(activity => this.addActivity(activity));
    }
    clearActivities() {
        this.activities = [];
    }
    removeActivity(activityToRemove) {
        this.activities = this.activities.filter(activity => activityToRemove.getID() !== activity.getID());
    }
    getActivities() {
        this.sortActivities(); // PErhaps move on adding ? Lets check performance
        return this.activities;
    }
    getFirstActivity() {
        return this.getActivities().reduce((activityA, activityB) => {
            return activityA.startDate < activityB.startDate ? activityA : activityB;
        });
    }
    getLastActivity() {
        return this.getActivities().reduce((activityA, activityB) => {
            return activityA.startDate < activityB.startDate ? activityB : activityA;
        });
    }
    getActivityTypesAsArray() {
        const activityTypesStat = this.getStat(DataActivityTypes.type);
        if (!activityTypesStat) {
            throw new Error(`Event with id ${this.getID()} has no activity types`);
        }
        return activityTypesStat.getValue();
    }
    getActivityTypesAsString() {
        const activityTypesStat = this.getStat(DataActivityTypes.type);
        if (!activityTypesStat) {
            throw new Error(`Event with id ${this.getID()} has no activity types`);
        }
        return activityTypesStat.getValue().length > 1
            ? `${this.getUniqueStringWithMultiplier(activityTypesStat
                .getValue()
                .map((activityType) => ActivityTypes[activityType]))}`
            : ActivityTypes[activityTypesStat.getDisplayValue()];
    }
    getDeviceNamesAsString() {
        const deviceNamesStat = this.getStat(DataDeviceNames.type);
        if (!deviceNamesStat) {
            throw new Error(`Event with id ${this.getID()} has no device names`);
        }
        return `${this.getUniqueStringWithMultiplier(deviceNamesStat.getValue())}`;
    }
    sortActivities() {
        this.activities.sort((activityA, activityB) => {
            return +activityA.startDate - +activityB.startDate;
        });
    }
    getUniqueStringWithMultiplier(arrayOfStrings) {
        const uniqueObject = arrayOfStrings.reduce((uniqueObj, type, index) => {
            if (!uniqueObj[type]) {
                uniqueObj[type] = 1;
            }
            else {
                uniqueObj[type] += 1;
            }
            return uniqueObj;
        }, {});
        return Object.keys(uniqueObject)
            .reduce((uniqueArray, key, index, object) => {
            if (uniqueObject[key] === 1) {
                uniqueArray.push(key);
            }
            else {
                uniqueArray.push(uniqueObject[key] + 'x ' + key);
            }
            return uniqueArray;
        }, [])
            .join(', ');
    }
    isMultiSport() {
        return !this.isMerge && this.getActivities().length > 1;
    }
    toJSON() {
        const stats = {};
        this.stats.forEach((value, key) => {
            Object.assign(stats, value.toJSON());
        });
        return {
            name: this.name,
            srcFileType: this.srcFileType,
            description: this.description || null,
            privacy: this.privacy,
            startDate: this.startDate.getTime(),
            endDate: this.endDate.getTime(),
            stats: stats,
            isMerge: this.isMerge,
            activities: this.getActivities().reduce((activities, activity) => {
                const jsonActivity = activity.toJSON();
                activities.push(jsonActivity);
                return activities;
            }, [])
        };
    }
}
