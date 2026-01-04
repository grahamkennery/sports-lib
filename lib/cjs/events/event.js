"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const duration_class_abstract_1 = require("../duration/duration.class.abstract");
const privacy_class_interface_1 = require("../privacy/privacy.class.interface");
const activity_types_1 = require("../activities/activity.types");
const data_activity_types_1 = require("../data/data.activity-types");
const data_device_names_1 = require("../data/data.device-names");
class Event extends duration_class_abstract_1.DurationClassAbstract {
    constructor(name, startDate, endDate, srcFileType, privacy, description, isMerge = false) {
        super(startDate, endDate);
        this.privacy = privacy_class_interface_1.Privacy.Private;
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
        const activityTypesStat = this.getStat(data_activity_types_1.DataActivityTypes.type);
        if (!activityTypesStat) {
            throw new Error(`Event with id ${this.getID()} has no activity types`);
        }
        return activityTypesStat.getValue();
    }
    getActivityTypesAsString() {
        const activityTypesStat = this.getStat(data_activity_types_1.DataActivityTypes.type);
        if (!activityTypesStat) {
            throw new Error(`Event with id ${this.getID()} has no activity types`);
        }
        return activityTypesStat.getValue().length > 1
            ? `${this.getUniqueStringWithMultiplier(activityTypesStat
                .getValue()
                .map((activityType) => activity_types_1.ActivityTypes[activityType]))}`
            : activity_types_1.ActivityTypes[activityTypesStat.getDisplayValue()];
    }
    getDeviceNamesAsString() {
        const deviceNamesStat = this.getStat(data_device_names_1.DataDeviceNames.type);
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
exports.Event = Event;
