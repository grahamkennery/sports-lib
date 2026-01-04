"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("./event");
const activity_1 = require("../activities/activity");
const creator_1 = require("../creators/creator");
const activity_types_1 = require("../activities/activity.types");
const file_type_enum_1 = require("./adapters/file-type.enum");
describe('Event', () => {
    let event;
    beforeEach(() => {
        event = new event_1.Event('Test', new Date(0), new Date(200), file_type_enum_1.FileType.FIT);
        event.description = 'Test';
    });
    it('should add an activity', () => {
        expect(event.getActivities().length).toBe(0);
        event.addActivity(new activity_1.Activity(new Date(0), new Date(new Date(0).getTime() + 10), activity_types_1.ActivityTypes.Running, new creator_1.Creator('Test')));
        expect(event.getActivities().length).toBe(1);
    });
    it('should remove an activity', () => {
        const activity = new activity_1.Activity(new Date(0), new Date(new Date(0).getTime() + 10), activity_types_1.ActivityTypes.Running, new creator_1.Creator('Test'));
        event.addActivity(activity);
        expect(event.getActivities().length).toBe(1);
        event.removeActivity(activity);
        expect(event.getActivities().length).toBe(0);
    });
    it('should get the first and the last activity', () => {
        const activityA = new activity_1.Activity(new Date(20), new Date(30), activity_types_1.ActivityTypes.Running, new creator_1.Creator('Test'));
        const activityB = new activity_1.Activity(new Date(0), new Date(10), activity_types_1.ActivityTypes.Running, new creator_1.Creator('Test'));
        event.addActivity(activityA);
        event.addActivity(activityB);
        // Should get them sorted by date
        expect(event.getFirstActivity()).toEqual(activityB);
        expect(event.getLastActivity()).toEqual(activityA);
    });
    it('should export correctly to JSON', () => {
        const d1 = new Date(0);
        const d2 = new Date(new Date(0).getTime() + 200);
        const activity = new activity_1.Activity(d1, d2, activity_types_1.ActivityTypes.Running, new creator_1.Creator('Test'));
        event.addActivity(activity);
        event.setID('123');
        expect(event.toJSON()).toEqual({
            name: 'Test',
            description: 'Test',
            isMerge: false,
            privacy: 'private',
            srcFileType: file_type_enum_1.FileType.FIT,
            stats: {},
            activities: [activity.toJSON()],
            startDate: d1.getTime(),
            endDate: d2.getTime()
        });
    });
});
