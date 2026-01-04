import { Event } from '../event';
import { DataActivityTypes } from '../../data/data.activity-types';
import { DataDeviceNames } from '../../data/data.device-names';
import { Privacy } from '../../privacy/privacy.class.interface';
import { DataDescription } from '../../data/data.description';
import { ActivityUtilities } from './activity.utilities';
export class EventUtilities {
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
        const event = new Event(`Merged at ${new Date().toISOString()}`, activities[0].startDate, activities[activities.length - 1].endDate, events[0].srcFileType, Privacy.Private, `A merge of 2 or more activities `, true);
        event.addActivities(activities);
        this.generateStatsForAll(event);
        return event;
    }
    static generateStatsForAll(event) {
        // First generate that stats on the activity it self
        event.getActivities().forEach((activity) => {
            ActivityUtilities.generateMissingStreamsAndStatsForActivity(activity);
        });
        this.reGenerateStatsForEvent(event);
    }
    static reGenerateStatsForEvent(event) {
        event.clearStats();
        event.startDate = event.getFirstActivity().startDate;
        event.endDate = event.getLastActivity().endDate;
        event.addStat(new DataActivityTypes(event.getActivities().map(activity => activity.type)));
        event.addStat(new DataDeviceNames(event.getActivities().map(activity => activity.creator.name)));
        // If only one
        if (event.getActivities().length === 1) {
            event
                .getFirstActivity()
                .getStats()
                .forEach(stat => {
                event.addStat(stat);
            });
            // Add the description
            const description = event.getStat(DataDescription.type);
            if (description && description.getValue()) {
                event.description = description.getValue();
            }
            return;
        }
        event.startDate = event.getFirstActivity().startDate;
        event.endDate = event.getLastActivity().endDate;
        ActivityUtilities.getSummaryStatsForActivities(event.getActivities()).forEach(stat => event.addStat(stat));
    }
}
