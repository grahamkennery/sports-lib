"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUtilities = void 0;
const event_1 = require("../event");
const data_activity_types_1 = require("../../data/data.activity-types");
const data_device_names_1 = require("../../data/data.device-names");
const privacy_class_interface_1 = require("../../privacy/privacy.class.interface");
const data_description_1 = require("../../data/data.description");
const activity_utilities_1 = require("./activity.utilities");
class EventUtilities {
    static mergeEvents(events) {
        events.sort((eventA, eventB) => {
            return +eventA.getFirstActivity().startDate - +eventB.getFirstActivity().startDate;
        });
        const activities = events
            .reduce((activitiesArray, event) => {
            activitiesArray.push(...event.getActivities());
            return activitiesArray;
        }, [])
            .map(activity => {
            return activity.setID(null);
        });
        const event = new event_1.Event(`Merged at ${new Date().toISOString()}`, activities[0].startDate, activities[activities.length - 1].endDate, events[0].srcFileType, privacy_class_interface_1.Privacy.Private, `A merge of 2 or more activities `, true);
        event.addActivities(activities);
        this.generateStatsForAll(event);
        return event;
    }
    static generateStatsForAll(event) {
        // First generate that stats on the activity it self
        event.getActivities().forEach((activity) => {
            activity_utilities_1.ActivityUtilities.generateMissingStreamsAndStatsForActivity(activity);
        });
        this.reGenerateStatsForEvent(event);
    }
    static reGenerateStatsForEvent(event) {
        event.clearStats();
        event.startDate = event.getFirstActivity().startDate;
        event.endDate = event.getLastActivity().endDate;
        event.addStat(new data_activity_types_1.DataActivityTypes(event.getActivities().map(activity => activity.type)));
        event.addStat(new data_device_names_1.DataDeviceNames(event.getActivities().map(activity => activity.creator.name)));
        // If only one
        if (event.getActivities().length === 1) {
            event
                .getFirstActivity()
                .getStats()
                .forEach(stat => {
                event.addStat(stat);
            });
            // Add the description
            const description = event.getStat(data_description_1.DataDescription.type);
            if (description && description.getValue()) {
                event.description = description.getValue();
            }
            return;
        }
        event.startDate = event.getFirstActivity().startDate;
        event.endDate = event.getLastActivity().endDate;
        activity_utilities_1.ActivityUtilities.getSummaryStatsForActivities(event.getActivities()).forEach(stat => event.addStat(stat));
    }
}
exports.EventUtilities = EventUtilities;
