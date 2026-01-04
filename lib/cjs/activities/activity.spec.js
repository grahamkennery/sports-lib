"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const activity_1 = require("./activity");
const data_heart_rate_1 = require("../data/data.heart-rate");
const data_altitude_1 = require("../data/data.altitude");
const activity_types_1 = require("./activity.types");
const creator_1 = require("../creators/creator");
const stream_1 = require("../streams/stream");
const data_distance_1 = require("../data/data.distance");
const data_stop_event_1 = require("../data/data.stop-event");
const data_start_event_1 = require("../data/data.start-event");
const data_stop_all_event_1 = require("../data/data.stop-all-event");
describe('Activity', () => {
    let activity;
    beforeEach(() => {
        // New activity that ends +6m and is 10s duration from new Date(0)
        activity = new activity_1.Activity(new Date(0), new Date(new Date(0).getTime() + 10000), activity_types_1.ActivityTypes.Running, new creator_1.Creator('Test'));
        activity.setID('123');
    });
    it('should get streams based on time', () => {
        activity.addStream(new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, 500, null, 502, null, 600, 700]));
        activity.addStream(new stream_1.Stream(data_distance_1.DataDistance.type, [0, 10, 20, 30, 40, 50, 60]));
        expect(activity.getStreamDataTypesBasedOnTime([data_altitude_1.DataAltitude.type])).toEqual({
            0: {
                Altitude: 200
            },
            1000: {
                Altitude: 500
            },
            3000: {
                Altitude: 502
            },
            5000: {
                Altitude: 600
            },
            6000: {
                Altitude: 700
            }
        });
        expect(activity.getStreamDataTypesBasedOnTime([data_distance_1.DataDistance.type])).toEqual({
            0: { Distance: 0 },
            1000: { Distance: 10 },
            2000: { Distance: 20 },
            3000: { Distance: 30 },
            4000: { Distance: 40 },
            5000: { Distance: 50 },
            6000: { Distance: 60 }
        });
        expect(activity.getStreamDataTypesBasedOnTime([data_altitude_1.DataAltitude.type, data_distance_1.DataDistance.type])).toEqual({
            0: {
                Altitude: 200,
                Distance: 0
            },
            1000: { Altitude: 500, Distance: 10 },
            2000: { Distance: 20 },
            3000: { Altitude: 502, Distance: 30 },
            4000: { Distance: 40 },
            5000: { Altitude: 600, Distance: 50 },
            6000: { Altitude: 700, Distance: 60 }
        });
    });
    it('should get streams based on another stream', () => {
        activity.addStream(new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, 500, null, 502, null, 500, 700]));
        activity.addStream(new stream_1.Stream(data_heart_rate_1.DataHeartRate.type, [60, 70, 80, null, null, null, 120]));
        activity.addStream(new stream_1.Stream(data_distance_1.DataDistance.type, [0, 10, 20, 30, 40, 50, 60]));
        expect(activity.getStreamDataTypesBasedOnDataType(data_distance_1.DataDistance.type, [data_altitude_1.DataAltitude.type])).toEqual([
            {
                Altitude: 200,
                Distance: 0
            },
            {
                Altitude: 500,
                Distance: 10
            },
            {
                Altitude: null,
                Distance: 20
            },
            {
                Altitude: 502,
                Distance: 30
            },
            {
                Altitude: null,
                Distance: 40
            },
            {
                Altitude: 500,
                Distance: 50
            },
            {
                Altitude: 700,
                Distance: 60
            }
        ]);
        expect(activity.getStreamDataTypesBasedOnDataType(data_distance_1.DataDistance.type, [data_heart_rate_1.DataHeartRate.type, data_altitude_1.DataAltitude.type])).toEqual([
            {
                Altitude: 200,
                Distance: 0,
                'Heart Rate': 60
            },
            {
                Altitude: 500,
                Distance: 10,
                'Heart Rate': 70
            },
            {
                Altitude: null,
                Distance: 20,
                'Heart Rate': 80
            },
            {
                Altitude: 502,
                Distance: 30,
                'Heart Rate': null
            },
            {
                Altitude: null,
                Distance: 40,
                'Heart Rate': null
            },
            {
                Altitude: 500,
                Distance: 50,
                'Heart Rate': null
            },
            {
                Altitude: 700,
                Distance: 60,
                'Heart Rate': 120
            }
        ]);
        expect(activity.getStreamDataTypesBasedOnDataType(data_altitude_1.DataAltitude.type, [data_distance_1.DataDistance.type, data_heart_rate_1.DataHeartRate.type])).toEqual([
            {
                Altitude: 200,
                Distance: 0,
                'Heart Rate': 60
            },
            {
                Altitude: 500,
                Distance: 10,
                'Heart Rate': 70
            },
            {
                Altitude: 502,
                Distance: 30,
                'Heart Rate': null
            },
            {
                Altitude: 500,
                Distance: 50,
                'Heart Rate': null
            },
            {
                Altitude: 700,
                Distance: 60,
                'Heart Rate': 120
            }
        ]);
    });
    describe('Trainer flagging', () => {
        it('should flag activities to be performed on a trainer', () => {
            // Given
            const types = [
                activity_types_1.ActivityTypes.VirtualRun,
                activity_types_1.ActivityTypes.VirtualCycling,
                activity_types_1.ActivityTypes.Treadmill,
                activity_types_1.ActivityTypes.IndoorCycling,
                activity_types_1.ActivityTypes.IndoorRunning,
                activity_types_1.ActivityTypes.IndoorRowing,
                activity_types_1.ActivityTypes.Crosstrainer,
                activity_types_1.ActivityTypes.EllipticalTrainer,
                activity_types_1.ActivityTypes.FitnessEquipment,
                activity_types_1.ActivityTypes.StairStepper
            ];
            // When, Then
            types.forEach(type => {
                const fakeActivity = new activity_1.Activity(new Date(), new Date(), type, new creator_1.Creator('John doo'));
                expect(fakeActivity.isTrainer()).toBeTruthy();
            });
        });
        it('should NOT flag activities to be performed on a trainer', () => {
            // Given
            const types = [
                activity_types_1.ActivityTypes.Aerobics,
                activity_types_1.ActivityTypes.AlpineSkiing,
                activity_types_1.ActivityTypes.AmericanFootball,
                activity_types_1.ActivityTypes.Aquathlon,
                activity_types_1.ActivityTypes.BackcountrySkiing,
                activity_types_1.ActivityTypes.Badminton,
                activity_types_1.ActivityTypes.Baseball,
                activity_types_1.ActivityTypes.Basketball,
                activity_types_1.ActivityTypes.Boxing,
                activity_types_1.ActivityTypes.Canoeing,
                activity_types_1.ActivityTypes.CardioTraining,
                activity_types_1.ActivityTypes.Climbing,
                activity_types_1.ActivityTypes.Combat,
                activity_types_1.ActivityTypes.Cricket,
                activity_types_1.ActivityTypes.Crossfit,
                activity_types_1.ActivityTypes.CrosscountrySkiing,
                activity_types_1.ActivityTypes.Cycling,
                activity_types_1.ActivityTypes.Dancing,
                activity_types_1.ActivityTypes.Diving,
                activity_types_1.ActivityTypes.DownhillSkiing,
                activity_types_1.ActivityTypes.Driving,
                activity_types_1.ActivityTypes.Duathlon,
                activity_types_1.ActivityTypes.EBikeRide,
                activity_types_1.ActivityTypes.Fishing,
                activity_types_1.ActivityTypes.FlexibilityTraining,
                activity_types_1.ActivityTypes.FloorClimbing,
                activity_types_1.ActivityTypes.Floorball,
                activity_types_1.ActivityTypes.Flying,
                activity_types_1.ActivityTypes.Football,
                activity_types_1.ActivityTypes.FreeDiving,
                activity_types_1.ActivityTypes.Frisbee,
                activity_types_1.ActivityTypes.Generic,
                activity_types_1.ActivityTypes.Golf,
                activity_types_1.ActivityTypes.Gymnastics,
                activity_types_1.ActivityTypes.Handcycle,
                activity_types_1.ActivityTypes.Handball,
                activity_types_1.ActivityTypes.HangGliding,
                activity_types_1.ActivityTypes.Hiking,
                activity_types_1.ActivityTypes.HorsebackRiding,
                activity_types_1.ActivityTypes.IceHockey,
                activity_types_1.ActivityTypes.IceSkating,
                activity_types_1.ActivityTypes.IndoorTraining,
                activity_types_1.ActivityTypes.InlineSkating,
                activity_types_1.ActivityTypes.Kayaking,
                activity_types_1.ActivityTypes.Kettlebell,
                activity_types_1.ActivityTypes.Kitesurfing,
                activity_types_1.ActivityTypes.Motorcycling,
                activity_types_1.ActivityTypes.Motorsports,
                activity_types_1.ActivityTypes.MountainBiking,
                activity_types_1.ActivityTypes.Mountaineering,
                activity_types_1.ActivityTypes.NordicWalking,
                activity_types_1.ActivityTypes.OpenWaterSwimming,
                activity_types_1.ActivityTypes.Orienteering,
                activity_types_1.ActivityTypes.Paddling,
                activity_types_1.ActivityTypes.Paragliding,
                activity_types_1.ActivityTypes.Rafting,
                activity_types_1.ActivityTypes.RockClimbing,
                activity_types_1.ActivityTypes.RollerSki,
                activity_types_1.ActivityTypes.Rowing,
                activity_types_1.ActivityTypes.Rugby,
                activity_types_1.ActivityTypes.Running,
                activity_types_1.ActivityTypes.Sailing,
                activity_types_1.ActivityTypes.ScubaDiving,
                activity_types_1.ActivityTypes.Skating,
                activity_types_1.ActivityTypes.SkiTouring,
                activity_types_1.ActivityTypes.SkyDiving,
                activity_types_1.ActivityTypes.Snorkeling,
                activity_types_1.ActivityTypes.Snowboarding,
                activity_types_1.ActivityTypes.Snowmobiling,
                activity_types_1.ActivityTypes.Snowshoeing,
                activity_types_1.ActivityTypes.Soccer,
                activity_types_1.ActivityTypes.Softball,
                activity_types_1.ActivityTypes.Squash,
                activity_types_1.ActivityTypes.StandUpPaddling,
                activity_types_1.ActivityTypes.StrengthTraining,
                activity_types_1.ActivityTypes.Stretching,
                activity_types_1.ActivityTypes.Surfing,
                activity_types_1.ActivityTypes.Swimming,
                activity_types_1.ActivityTypes.Swimrun,
                activity_types_1.ActivityTypes.TableTennis,
                activity_types_1.ActivityTypes.Tactical,
                activity_types_1.ActivityTypes.TelemarkSkiing,
                activity_types_1.ActivityTypes.Tennis,
                activity_types_1.ActivityTypes.TrackAndField,
                activity_types_1.ActivityTypes.TrailRunning,
                activity_types_1.ActivityTypes.Training,
                activity_types_1.ActivityTypes.Trekking,
                activity_types_1.ActivityTypes.Triathlon,
                activity_types_1.ActivityTypes.UnknownSport,
                activity_types_1.ActivityTypes.Velomobile,
                activity_types_1.ActivityTypes.Volleyball,
                activity_types_1.ActivityTypes.Wakeboarding,
                activity_types_1.ActivityTypes.Walking,
                activity_types_1.ActivityTypes.WaterSkiing,
                activity_types_1.ActivityTypes.WeightTraining,
                activity_types_1.ActivityTypes.Wheelchair,
                activity_types_1.ActivityTypes.Windsurfing,
                activity_types_1.ActivityTypes.Workout,
                activity_types_1.ActivityTypes.Yoga,
                activity_types_1.ActivityTypes.YogaPilates
            ];
            // When, Then
            types.forEach(type => {
                const fakeActivity = new activity_1.Activity(new Date(), new Date(), type, new creator_1.Creator('John doo'));
                expect(fakeActivity.isTrainer()).toBeFalsy();
            });
        });
    });
    it('should get the time stream', () => {
        activity.addStreams([
            //                                   0     1    2       3       4         5    6     7    8 9 and 10 are not set
            new stream_1.Stream(data_altitude_1.DataAltitude.type, [200, null, 502, Infinity, -Infinity, NaN, 0]),
            new stream_1.Stream(data_distance_1.DataDistance.type, [0, null, 600, 700, 800, null, NaN, 900, Infinity])
        ]);
        expect(activity.generateTimeStream().getData()).toEqual([0, null, 2, 3, 4, null, 6, 7, 8, null, null]);
        expect(activity.generateTimeStream().getData(true)).toEqual([0, 2, 3, 4, 6, 7, 8]);
        expect(activity.generateTimeStream().getData(false)).toEqual([0, null, 2, 3, 4, null, 6, 7, 8, null, null]);
    });
    it('should set the correct sample sizes', () => {
        const stream = activity.createStream(data_altitude_1.DataAltitude.type);
        expect(stream.getData().length).toBe(11);
    });
    it('should get and set the correct sample keys and ', () => {
        const stream = activity.createStream(data_altitude_1.DataAltitude.type);
        activity.addStream(stream);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(0), 0);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(500), 5);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(1040), 10);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(2010), 20);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(2060), 30);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(2080), 35);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(3000), 40);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(4000), 50);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(5000), 60);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(6300), 70);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(7000), 80);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(8000), 90);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(9000), 100);
        activity.addDataToStream(data_altitude_1.DataAltitude.type, new Date(10000), 110);
        expect(stream.getData()).toEqual([0, 10, 35, 40, 50, 60, 70, 80, 90, 100, 110]);
    });
    it('should get events correctly', () => {
        activity.addEvent(new data_stop_event_1.DataStopEvent(1));
        activity.addEvent(new data_stop_event_1.DataStopEvent(1));
        activity.addEvent(new data_start_event_1.DataStartEvent(1));
        activity.addEvent(new data_start_event_1.DataStartEvent(1));
        activity.addEvent(new data_stop_all_event_1.DataStopAllEvent(1));
        expect(activity.getAllEvents().length).toBe(5);
        expect(activity.getStartEvents().length).toBe(2);
        expect(activity.getStopEvents().length).toBe(2);
        expect(activity.getStopAllEvents().length).toBe(1);
    });
    it('should set all events', () => {
        activity.setAllEvents([
            new data_stop_event_1.DataStopEvent(1),
            new data_stop_event_1.DataStopEvent(1),
            new data_start_event_1.DataStartEvent(1),
            new data_start_event_1.DataStartEvent(1),
            new data_stop_all_event_1.DataStopAllEvent(1)
        ]);
        expect(activity.getAllEvents().length).toBe(5);
        expect(activity.getStartEvents().length).toBe(2);
        expect(activity.getStopEvents().length).toBe(2);
        expect(activity.getStopAllEvents().length).toBe(1);
    });
});
