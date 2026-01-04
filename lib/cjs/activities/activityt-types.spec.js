"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const activity_types_1 = require("./activity.types");
describe('ActivityTypes', () => {
    beforeEach(() => { });
    it('get the correct activity group', () => {
        expect(activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity_types_1.ActivityTypes.Running)).toBe(activity_types_1.ActivityTypeGroups.Running);
        expect(activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity_types_1.ActivityTypes.Cycling)).toBe(activity_types_1.ActivityTypeGroups.Cycling);
        expect(activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity_types_1.ActivityTypes.Crossfit)).toBe(activity_types_1.ActivityTypeGroups.Performance);
        expect(activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity_types_1.ActivityTypes.IndoorRowing)).toBe(activity_types_1.ActivityTypeGroups.IndoorSports);
        expect(activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity_types_1.ActivityTypes.Climbing)).toBe(activity_types_1.ActivityTypeGroups.OutdoorAdventures);
        expect(activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity_types_1.ActivityTypes.AlpineSkiing)).toBe(activity_types_1.ActivityTypeGroups.WinterSports);
        expect(activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity_types_1.ActivityTypes.Wakeboarding)).toBe(activity_types_1.ActivityTypeGroups.WaterSports);
        expect(activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity_types_1.ActivityTypes.Diving)).toBe(activity_types_1.ActivityTypeGroups.Diving);
        expect(activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity_types_1.ActivityTypes.Tennis)).toBe(activity_types_1.ActivityTypeGroups.TeamRacket);
        expect(activity_types_1.ActivityTypesHelper.getActivityGroupForActivityType(activity_types_1.ActivityTypes.Workout)).toBe(activity_types_1.ActivityTypeGroups.Unspecified);
    });
});
