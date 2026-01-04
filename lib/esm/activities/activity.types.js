import { DataSpeedAvg } from '../data/data.speed-avg';
import { DataPaceAvg } from '../data/data.pace-avg';
import { DataSwimPaceAvg } from '../data/data.swim-pace-avg';
import { DataPace } from '../data/data.pace';
import { DataSpeed } from '../data/data.speed';
import { DataSwimPace } from '../data/data.swim-pace';
import { DataGradeAdjustedPace } from '../data/data.grade-adjusted-pace';
import { DataGradeAdjustedPaceAvg } from '../data/data.grade-adjusted-pace-avg';
import { DataGradeAdjustedSpeed } from '../data/data.grade-adjusted-speed';
import { DataGradeAdjustedSpeedAvg } from '../data/data.grade-adjusted-speed-avg';
import { DataVerticalSpeed } from '../data/data.vertical-speed';
export class ActivityTypesHelper {
    static getActivityTypesAsUniqueArray() {
        return Array.from(new Set(Object.keys(ActivityTypes).reduce((array, key) => {
            array.push(ActivityTypes[key]); // Important get the key via the enum else it will be chaos
            return array;
        }, []))).sort((left, right) => {
            if (left < right) {
                return -1;
            }
            if (left > right) {
                return 1;
            }
            return 0;
        });
    }
    static getActivityTypeGroupsAsUniqueArray() {
        return Array.from(new Set(Object.keys(ActivityTypeGroups).reduce((array, key) => {
            array.push(ActivityTypeGroups[key]); // Important get the key via the enum else it will be chaos
            return array;
        }, []))).sort((left, right) => {
            if (left < right) {
                return -1;
            }
            if (left > right) {
                return 1;
            }
            return 0;
        });
    }
    static averageSpeedDerivedDataTypesToUseForActivityType(activityType) {
        switch (ActivityTypesHelper.getActivityGroupForActivityType(activityType)) {
            case ActivityTypeGroups.Running:
                return [DataPaceAvg.type, DataGradeAdjustedPaceAvg.type];
            case ActivityTypeGroups.TrailRunning:
                return [DataPaceAvg.type, DataGradeAdjustedPaceAvg.type, DataSpeedAvg.type, DataGradeAdjustedSpeedAvg.type];
            case ActivityTypeGroups.WaterSports:
                return [DataSpeedAvg.type, DataSwimPaceAvg.type];
            default:
                return [DataSpeedAvg.type];
        }
    }
    static speedDerivedDataTypesToUseForActivityType(activityType) {
        switch (ActivityTypesHelper.getActivityGroupForActivityType(activityType)) {
            case ActivityTypeGroups.Running:
                return [DataPace.type, DataSpeed.type];
            case ActivityTypeGroups.TrailRunning:
                return [DataPace.type, DataSpeed.type];
            case ActivityTypeGroups.WaterSports:
                return [DataSpeed.type, DataSwimPace.type];
            default:
                return [DataSpeed.type];
        }
    }
    static altiDistanceSpeedDerivedDataTypesToUseForActivityType(activityType) {
        switch (ActivityTypesHelper.getActivityGroupForActivityType(activityType)) {
            case ActivityTypeGroups.Running:
                return [DataGradeAdjustedPace.type];
            case ActivityTypeGroups.TrailRunning:
                return [DataGradeAdjustedPace.type, DataGradeAdjustedSpeed.type];
            default:
                return [];
        }
    }
    static verticalSpeedDerivedDataTypesToUseForActivityType(activityType) {
        switch (ActivityTypesHelper.getActivityGroupForActivityType(activityType)) {
            case ActivityTypeGroups.Running:
            case ActivityTypeGroups.TrailRunning:
            case ActivityTypeGroups.Cycling:
            case ActivityTypeGroups.OutdoorAdventures:
            case ActivityTypeGroups.Performance:
                return [DataVerticalSpeed.type];
            default:
                return [];
        }
    }
    /**
     * Get's back the activity group an activity belongs to or returns unspecified activity group
     * @param activityType
     * This function can also be called: Fighting with a non functional language
     */
    static getActivityGroupForActivityType(activityType) {
        return ActivityTypeGroups[ActivityTypesHelper.getActivityTypeGroupsAsUniqueArray().find(activityTypeGroupString => {
            // Could also iterate over the map
            return ActivityTypesGroupMapping.map[ActivityTypeGroups[activityTypeGroupString]].find((groupItem) => groupItem === activityType);
        }) || ActivityTypeGroups.Unspecified];
    }
}
/**
 * This enum works like a all matchers for normalized sport types between different naming across services
 *
 * It helps as you can call request an activity type with different namin eg .BackCountrySki or .BackCountrySkiing and get a uniform value
 * Also helps in case you have persited data that do not match or have been peristed wrongly
 *
 * Important: don't forget to declare the original string value aka: 'Running' = 'Running'
 *
 * @todo how do we write activity names? Is it Alpine skiing? or Alpine Skiing? For now I used uppercase each word
 */
export var ActivityTypes;
(function (ActivityTypes) {
    /**
     * Unknown sport
     */
    ActivityTypes["unknown"] = "Unknown Sport";
    ActivityTypes["Unknown sport"] = "Unknown Sport";
    ActivityTypes["Unknown Sport"] = "Unknown Sport";
    ActivityTypes["UnknownSport"] = "Unknown Sport";
    ActivityTypes["undefined"] = "Unknown Sport";
    ActivityTypes["Not specified sport"] = "Unknown Sport";
    /**
     * Other
     */
    ActivityTypes["Other"] = "Other";
    /**
     * Generic
     */
    ActivityTypes["generic"] = "Generic";
    ActivityTypes["generic_exercise"] = "Generic";
    ActivityTypes["generic_track_me"] = "Generic";
    ActivityTypes["Generic"] = "Generic";
    /**
     * Transition
     */
    ActivityTypes["transition"] = "Transition";
    ActivityTypes["Transition"] = "Transition";
    /**
     * Fitness Equipment
     */
    ActivityTypes["fitness_equipment"] = "Fitness Equipment";
    ActivityTypes["Fitness Equipment"] = "Fitness Equipment";
    ActivityTypes["FitnessEquipment"] = "Fitness Equipment";
    /**
     * Multisport
     */
    ActivityTypes["Multisport"] = "Multisport";
    ActivityTypes["MultiSport"] = "Multisport";
    ActivityTypes["multisport"] = "Multisport";
    /**
     * Virtual Running
     */
    ActivityTypes["running_virtual_activity"] = "Virtual Running";
    ActivityTypes["VirtualRun"] = "Virtual Running";
    ActivityTypes["Virtual running"] = "Virtual Running";
    ActivityTypes["Virtual Running"] = "Virtual Running";
    ActivityTypes["VirtualRunning"] = "Virtual Running";
    /**
     * Running
     */
    ActivityTypes["Run"] = "Running";
    ActivityTypes["run"] = "Running";
    ActivityTypes["running_track"] = "Running";
    ActivityTypes["running_trail"] = "Trail Running";
    ActivityTypes["Running"] = "Running";
    ActivityTypes["running"] = "Running";
    ActivityTypes["running_street"] = "Running";
    ActivityTypes["running_road"] = "Running";
    /**
     * Trail Running
     */
    ActivityTypes["TrailRunning"] = "Trail Running";
    ActivityTypes["Trail Running"] = "Trail Running";
    ActivityTypes["Trail running"] = "Trail Running";
    ActivityTypes["trail_running"] = "Trail Running";
    /**
     * Indoor Running
     */
    ActivityTypes["Indoor running"] = "Indoor Running";
    ActivityTypes["Indoor Running"] = "Indoor Running";
    ActivityTypes["IndoorRunning"] = "Indoor Running";
    ActivityTypes["running_indoor"] = "Indoor Running";
    ActivityTypes["running_indoor_running"] = "Indoor Running";
    ActivityTypes["training_indoor_running"] = "Indoor Running";
    /**
     * Cycling
     */
    ActivityTypes["Cycling"] = "Cycling";
    ActivityTypes["cycling"] = "Cycling";
    ActivityTypes["cycling_road"] = "Cycling";
    ActivityTypes["road_biking"] = "Cycling";
    ActivityTypes["cycling_track_cycling"] = "Cycling";
    ActivityTypes["cycling_gravel_cycling"] = "Cycling";
    ActivityTypes["Biking"] = "Cycling";
    ActivityTypes["biking"] = "Cycling";
    ActivityTypes["Ride"] = "Cycling";
    ActivityTypes["cycling_commuting"] = "Cycling";
    ActivityTypes["cycling_mixed_surface"] = "Cycling";
    /**
     * Indoor Cycling
     */
    ActivityTypes["cycling_indoor_cycling"] = "Indoor Cycling";
    ActivityTypes["Indoorcycling"] = "Indoor Cycling";
    ActivityTypes["indoor_cycling"] = "Indoor Cycling";
    ActivityTypes["Indoor cycling"] = "Indoor Cycling";
    ActivityTypes["IndoorCycling"] = "Indoor Cycling";
    ActivityTypes["Indoor Cycling"] = "Indoor Cycling";
    /**
     * Virtual Cycling
     */
    ActivityTypes["cycling_virtual_activity"] = "Virtual Cycling";
    ActivityTypes["VirtualRide"] = "Virtual Cycling";
    ActivityTypes["Virtual Cycling"] = "Virtual Cycling";
    ActivityTypes["VirtualCycling"] = "Virtual Cycling";
    /**
     * E-Biking
     */
    ActivityTypes["e_biking"] = "E-Biking";
    ActivityTypes["E Biking"] = "E-Biking";
    ActivityTypes["EBiking"] = "E-Biking";
    ActivityTypes["E biking"] = "E-Biking";
    ActivityTypes["EBikeRide"] = "E-Biking";
    ActivityTypes["E-Biking"] = "E-Biking";
    /**
     * Mountain biking
     */
    ActivityTypes["cycling_mountain"] = "Mountain Biking";
    ActivityTypes["MountainBiking"] = "Mountain Biking";
    ActivityTypes["Mountain Biking"] = "Mountain Biking";
    ActivityTypes["cycling_cyclocross"] = "Mountain Biking";
    ActivityTypes["mountain"] = "Mountain Biking";
    ActivityTypes["Mountain biking"] = "Mountain Biking";
    ActivityTypes["cycling_downhill"] = "Downhill Cycling";
    ActivityTypes["DownhillCycling"] = "Downhill Cycling";
    ActivityTypes["Downhill Cycling"] = "Downhill Cycling";
    /**
     * Motorcycling
     */
    ActivityTypes["motorcycling"] = "Motorcycling";
    ActivityTypes["Motorcycling"] = "Motorcycling";
    /**
     * Boating
     */
    ActivityTypes["boating"] = "Boating";
    ActivityTypes["Boating"] = "Boating";
    /**
     * Driving
     */
    ActivityTypes["driving"] = "Driving";
    ActivityTypes["Driving"] = "Driving";
    /**
     * Circuit training
     */
    ActivityTypes["Circuit training"] = "Circuit Training";
    ActivityTypes["Circuit Training"] = "Circuit Training";
    /**
     * Swimming
     */
    ActivityTypes["Swimming"] = "Swimming";
    ActivityTypes["swimming"] = "Swimming";
    ActivityTypes["Swim"] = "Swimming";
    ActivityTypes["swim"] = "Swimming";
    ActivityTypes["swimming_lap_swimming"] = "Swimming";
    /**
     * Open Water Swimming
     */
    ActivityTypes["swimming_open_water"] = "Open Water Swimming";
    ActivityTypes["Open water swimming"] = "Open Water Swimming";
    ActivityTypes["open water swimming"] = "Open Water Swimming";
    ActivityTypes["Open Water Swimming"] = "Open Water Swimming";
    ActivityTypes["OpenWaterSwimming"] = "Open Water Swimming";
    ActivityTypes["open_water"] = "Open Water Swimming";
    /**
     * Basketball
     */
    ActivityTypes["basketball"] = "Basketball";
    /**
     * Soccer
     */
    ActivityTypes["soccer"] = "Soccer";
    ActivityTypes["Soccer"] = "Soccer";
    /**
     * American Football
     */
    ActivityTypes["american_football"] = "American Football";
    ActivityTypes["American footBall"] = "American Football";
    ActivityTypes["American Football"] = "American Football";
    ActivityTypes["AmericanFootball"] = "American Football";
    /**
     * Skating
     */
    ActivityTypes["Skating"] = "Skating";
    /**
     * Aerobics
     */
    ActivityTypes["Aerobics"] = "Aerobics";
    /**
     * Yoga
     */
    ActivityTypes["training_yoga"] = "Yoga";
    ActivityTypes["yoga"] = "Yoga";
    ActivityTypes["Yoga"] = "Yoga";
    ActivityTypes["YogaPilates"] = "Yoga";
    /**
     * Pilates
     */
    ActivityTypes["fitness_equipment_pilates"] = "Pilates";
    ActivityTypes["Pilates"] = "Pilates";
    ActivityTypes["pilates"] = "Pilates";
    /**
     * Trekking
     */
    ActivityTypes["Trekking"] = "Trekking";
    ActivityTypes["Trek"] = "Trekking";
    /**
     * Walking
     */
    ActivityTypes["Walking"] = "Walking";
    ActivityTypes["walking"] = "Walking";
    ActivityTypes["walking_indoor"] = "Walking";
    ActivityTypes["Walk"] = "Walking";
    ActivityTypes["walk"] = "Walking";
    ActivityTypes["walking_casual_walking"] = "Walking";
    ActivityTypes["walking_indoor_walking"] = "Walking";
    /**
     * Sailing
     */
    ActivityTypes["Sailing"] = "Sailing";
    ActivityTypes["sailing"] = "Sailing";
    /**
     * Kayaking
     */
    ActivityTypes["Kayaking"] = "Kayaking";
    ActivityTypes["kayaking"] = "Kayaking";
    /**
     * Rafting
     */
    ActivityTypes["rafting"] = "Rafting";
    ActivityTypes["Rafting"] = "Rafting";
    /**
     * Rowing
     */
    ActivityTypes["rowing"] = "Rowing";
    ActivityTypes["Rowing"] = "Rowing";
    /**
     * Indoor Rowing
     */
    ActivityTypes["fitness_equipment_indoor_rowing"] = "Indoor Rowing";
    ActivityTypes["IndoorRowing"] = "Indoor Rowing";
    ActivityTypes["Indoor Rowing"] = "Indoor Rowing";
    ActivityTypes["indoor_rowing"] = "Indoor Rowing";
    ActivityTypes["rowing_indoor"] = "Indoor Rowing";
    ActivityTypes["rowing_indoor_rowing"] = "Indoor Rowing";
    /**
     * Climbing
     */
    ActivityTypes["Climbing"] = "Climbing";
    /**
     * Triathlon
     */
    ActivityTypes["Triathlon"] = "Triathlon";
    /**
     * Duathlon
     */
    ActivityTypes["Duathlon"] = "Duathlon";
    /**
     * Aquathlon
     */
    ActivityTypes["Aquathlon"] = "Aquathlon";
    /**
     * Alpine Skiing
     * https://en.wikipedia.org/wiki/Alpine_skiing
     */
    ActivityTypes["Alpine skiing"] = "Alpine Skiing";
    ActivityTypes["Alpine Skiing"] = "Alpine Skiing";
    ActivityTypes["AlpineSkiing"] = "Alpine Skiing";
    ActivityTypes["alpine_skiing"] = "Alpine Skiing";
    ActivityTypes["AlpineSki"] = "Alpine Skiing";
    ActivityTypes["downhill"] = "Alpine Skiing";
    ActivityTypes["Downhill skiing"] = "Alpine Skiing";
    ActivityTypes["DownhillSkiing"] = "Alpine Skiing";
    /**
     * Crosscountry Skiing
     * https://en.wikipedia.org/wiki/Cross-country_skiing
     */
    ActivityTypes["Crosscountry Skiing"] = "Crosscountry Skiing";
    ActivityTypes["Crosscountry skiing"] = "Crosscountry Skiing";
    ActivityTypes["CrosscountrySkiing"] = "Crosscountry Skiing";
    ActivityTypes["CrossCountrySkiing"] = "Crosscountry Skiing";
    ActivityTypes["cross_country_skiing"] = "Crosscountry Skiing";
    ActivityTypes["cross_country_skiing_skate_skiing"] = "Crosscountry Skiing";
    /**
     * Nordic skiing
     */
    ActivityTypes["NordicSki"] = "Nordic Skiing";
    ActivityTypes["Nordic skiing"] = "Nordic Skiing";
    ActivityTypes["Nordic Skiing"] = "Nordic Skiing";
    /**
     * Backcountry Skiing
     * https://en.wikipedia.org/wiki/Backcountry_skiing
     */
    ActivityTypes["Backcountry skiing"] = "Backcountry Skiing";
    ActivityTypes["Backcountry Skiing"] = "Backcountry Skiing";
    ActivityTypes["BackCountrySkiing"] = "Backcountry Skiing";
    ActivityTypes["BackcountrySkiing"] = "Backcountry Skiing";
    ActivityTypes["BackcountrySki"] = "Backcountry Skiing";
    ActivityTypes["cross_country_skiing_backcountry"] = "Backcountry Skiing";
    ActivityTypes["alpine_skiing_backcountry"] = "Backcountry Skiing";
    ActivityTypes["backcountry"] = "Backcountry Skiing";
    ActivityTypes["BackCountrySki"] = "Backcountry Skiing";
    /**
     * Ski Touring
     * https://en.wikipedia.org/wiki/Ski_touring
     */
    ActivityTypes["Ski Touring"] = "Ski Touring";
    ActivityTypes["SkiTouring"] = "Ski Touring";
    /**
     * Telemark Skiing
     */
    ActivityTypes["Telemark skiing"] = "Telemark Skiing";
    ActivityTypes["TelemarkSkiing"] = "Telemark Skiing";
    ActivityTypes["Telemark Skiing"] = "Telemark Skiing";
    ActivityTypes["cross_country_skiing_downhill"] = "Telemark Skiing";
    ActivityTypes["alpine_skiing_downhill"] = "Telemark Skiing";
    /**
     * Roller Skiing
     */
    ActivityTypes["Roller skiing"] = "Roller Skiing";
    ActivityTypes["RollerSki"] = "Roller Skiing";
    ActivityTypes["Roller Skiing"] = "Roller Skiing";
    /**
     * Snowboarding
     */
    ActivityTypes["Snowboarding"] = "Snowboarding";
    ActivityTypes["snowboarding"] = "Snowboarding";
    ActivityTypes["Snowboard"] = "Snowboarding";
    /**
     * Weight training
     */
    ActivityTypes["Weight Training"] = "Weight Training";
    ActivityTypes["Weight training"] = "Weight Training";
    ActivityTypes["WeightTraining"] = "Weight Training";
    /**
     * Basketball
     */
    ActivityTypes["Basketball"] = "Basketball";
    /**
     * Ice Hockey
     */
    ActivityTypes["Ice Hockey"] = "Ice Hockey";
    ActivityTypes["IceHockey"] = "Ice Hockey";
    /**
     * Volleyball
     */
    ActivityTypes["Volleyball"] = "Volleyball";
    /**
     * Football
     */
    ActivityTypes["Football"] = "Football";
    /**
     * Softball
     */
    ActivityTypes["Softball"] = "Softball";
    /**
     * Handball
     */
    ActivityTypes["Handball"] = "Handball";
    /**
     * Cheerleading
     */
    ActivityTypes["Cheerleading"] = "Cheerleading";
    /**
     * Baseball
     */
    ActivityTypes["Baseball"] = "Baseball";
    /**
     * Tennis
     */
    ActivityTypes["tennis"] = "Tennis";
    ActivityTypes["Tennis"] = "Tennis";
    ActivityTypes["tennis_match"] = "Tennis";
    /**
     * Badminton
     */
    ActivityTypes["Badminton"] = "Badminton";
    /**
     * Table Tennis
     */
    ActivityTypes["Table tennis"] = "Table Tennis";
    ActivityTypes["Table Tennis"] = "Table Tennis";
    ActivityTypes["TableTennis"] = "Table Tennis";
    /**
     * Racquet Ball
     */
    ActivityTypes["racket"] = "Racquet Ball";
    ActivityTypes["racquet_ball"] = "Racquet Ball";
    ActivityTypes["Racquet Ball"] = "Racquet Ball";
    ActivityTypes["RacquetBall"] = "Racquet Ball";
    ActivityTypes["Racquet ball"] = "Racquet Ball";
    /**
     * Squash
     */
    ActivityTypes["Squash"] = "Squash";
    /**
     * Combat sport
     */
    ActivityTypes["Combat sport"] = "Combat";
    ActivityTypes["Combat"] = "Combat";
    /**
     * Boxing
     */
    ActivityTypes["Boxing"] = "Boxing";
    /**
     * Floorball
     */
    ActivityTypes["Floorball"] = "Floorball";
    /**
     * Scuba Diving
     */
    ActivityTypes["Scuba diving"] = "Scuba Diving";
    ActivityTypes["Scuba Diving"] = "Scuba Diving";
    ActivityTypes["ScubaDiving"] = "Scuba Diving";
    /**
     * Free Diving
     */
    ActivityTypes["Free diving"] = "Free Diving";
    ActivityTypes["Free Diving"] = "Free Diving";
    ActivityTypes["FreeDiving"] = "Free Diving";
    /**
     * Diving
     */
    ActivityTypes["diving"] = "Diving";
    ActivityTypes["Diving"] = "Diving";
    ActivityTypes["diving_apnea_hunting"] = "Diving";
    /**
     * Snorkeling
     */
    ActivityTypes["Snorkeling"] = "Snorkeling";
    /**
     * Swimrun
     */
    ActivityTypes["Swimrun"] = "Swimrun";
    /**
     * Adventure Racing
     */
    ActivityTypes["Adventure Racing"] = "Adventure Racing";
    /**
     * Bowling
     */
    ActivityTypes["Bowling"] = "Bowling";
    /**
     * Cricket
     */
    ActivityTypes["Cricket"] = "Cricket";
    /**
     * Crosstrainer
     */
    ActivityTypes["Crosstrainer"] = "Crosstrainer";
    /**
     * Dancing
     */
    ActivityTypes["Dancing"] = "Dancing";
    /**
     * Golf
     */
    ActivityTypes["Golf"] = "Golf";
    ActivityTypes["golf"] = "Golf";
    /**
     * Hand Gliding
     */
    ActivityTypes["hang_gliding"] = "Hang Gliding";
    ActivityTypes["Hang gliding"] = "Hang Gliding";
    ActivityTypes["HangGliding"] = "Hang Gliding";
    ActivityTypes["Hang Gliding"] = "Hang Gliding";
    /**
     * Horseback Ridding
     */
    ActivityTypes["horseback_riding"] = "Horseback Riding";
    ActivityTypes["Horseback Riding"] = "Horseback Riding";
    ActivityTypes["HorsebackRiding"] = "Horseback Riding";
    ActivityTypes["Horseback riding"] = "Horseback Riding";
    /**
     * Gymnastics
     */
    ActivityTypes["Gymnastics"] = "Gymnastics";
    /**
     * Ice Skating
     */
    ActivityTypes["Ice Skating"] = "Ice Skating";
    ActivityTypes["IceSkating"] = "Ice Skating";
    ActivityTypes["ice_skating"] = "Ice Skating";
    ActivityTypes["ice skating"] = "Ice Skating";
    ActivityTypes["Ice skating"] = "Ice Skating";
    ActivityTypes["IceSkate"] = "Ice Skating";
    ActivityTypes["Ice Skate"] = "Ice Skating";
    /**
     * Canoeing
     */
    ActivityTypes["Canoeing"] = "Canoeing";
    /**
     * Motorsports
     */
    ActivityTypes["Motorsports"] = "Motorsports";
    /**
     * Mountaineering
     */
    ActivityTypes["Mountaineering"] = "Mountaineering";
    ActivityTypes["mountaineering"] = "Mountaineering";
    /**
     * Orienteering
     */
    ActivityTypes["Orienteering"] = "Orienteering";
    ActivityTypes["running_navigate"] = "Orienteering";
    ActivityTypes["generic_navigate"] = "Orienteering";
    /**
     * Rugby
     */
    ActivityTypes["Rugby"] = "Rugby";
    /**
     * Stretching
     */
    ActivityTypes["Stretching"] = "Stretching";
    /**
     * Strength Training
     */
    ActivityTypes["training_strength_training"] = "Strength Training";
    ActivityTypes["fitness_equipment_strength_training"] = "Strength Training";
    ActivityTypes["strength_training"] = "Strength Training";
    ActivityTypes["Strength training"] = "Strength Training";
    ActivityTypes["strength training"] = "Strength Training";
    ActivityTypes["Strength Training"] = "Strength Training";
    ActivityTypes["StrengthTraining"] = "Strength Training";
    ActivityTypes["generic_strength_training"] = "Strength Training";
    /**
     * Track and Field
     */
    ActivityTypes["TrackAndField"] = "Track and Field";
    ActivityTypes["Track and Field"] = "Track and Field";
    /**
     * Nordic walking
     */
    ActivityTypes["NordicWalking"] = "Nordic Walking";
    ActivityTypes["Nordic Walking"] = "Nordic Walking";
    ActivityTypes["Nordic walking"] = "Nordic Walking";
    /**
     * Snowshoeing
     */
    ActivityTypes["Snow shoeing"] = "Snowshoeing";
    /**
     * Windsrufing
     */
    ActivityTypes["Windsurfing/Surfing"] = "Windsurfing";
    ActivityTypes["windsurfing"] = "Windsurfing";
    ActivityTypes["Windsurfing"] = "Windsurfing";
    ActivityTypes["Windsurf"] = "Windsurfing";
    /**
     * Kettlebell
     */
    ActivityTypes["Kettlebell"] = "Kettlebell";
    /**
     * Paddling
     */
    ActivityTypes["paddling"] = "Paddling";
    ActivityTypes["Paddling"] = "Paddling";
    /**
     * Flying
     */
    ActivityTypes["flying"] = "Flying";
    ActivityTypes["Flying"] = "Flying";
    /**
     * Crossfit
     */
    ActivityTypes["Cross fit"] = "Crossfit";
    ActivityTypes["Cross Fit"] = "Crossfit";
    ActivityTypes["cross_fit"] = "Crossfit";
    ActivityTypes["Crossfit"] = "Crossfit";
    /**
     * Kitesurfing
     */
    ActivityTypes["Kitesurfing/Kiting"] = "Kitesurfing";
    ActivityTypes["kitesurfing"] = "Kitesurfing";
    ActivityTypes["Kitesurfing"] = "Kitesurfing";
    ActivityTypes["Kitesurf"] = "Kitesurfing";
    /**
     * Tactical
     */
    ActivityTypes["tactical"] = "Tactical";
    ActivityTypes["Tactical"] = "Tactical";
    /**
     * Jumpmaster
     */
    ActivityTypes["jumpmaster"] = "Jumpmaster";
    ActivityTypes["Jumpmaster"] = "Jumpmaster";
    /**
     * Boxing
     */
    ActivityTypes["boxing"] = "Boxing";
    /**
     * Floor Climbing
     */
    ActivityTypes["floor_climbing"] = "Floor Climbing";
    ActivityTypes["Floor climbing"] = "Floor Climbing";
    ActivityTypes["Floor Climbing"] = "Floor Climbing";
    ActivityTypes["FloorClimbing"] = "Floor Climbing";
    /**
     * Paragliding
     */
    ActivityTypes["Paragliding"] = "Paragliding";
    /**
     * Treadmill
     */
    ActivityTypes["fitness_equipment_treadmill"] = "Treadmill";
    ActivityTypes["running_treadmill"] = "Treadmill";
    ActivityTypes["Treadmill"] = "Treadmill";
    ActivityTypes["treadmill"] = "Treadmill";
    /**
     * Frisbee
     */
    ActivityTypes["Frisbee"] = "Frisbee";
    /**
     * Indoor Training
     */
    ActivityTypes["Indoor training"] = "Indoor Training";
    ActivityTypes["Indoor Training"] = "Indoor Training";
    ActivityTypes["IndoorTraining"] = "Indoor Training";
    /**
     * Hiking
     */
    ActivityTypes["Hiking"] = "Hiking";
    ActivityTypes["hiking_trail"] = "Hiking";
    ActivityTypes["hiking"] = "Hiking";
    ActivityTypes["hike"] = "Hiking";
    ActivityTypes["Hike"] = "Hiking";
    /**
     * Canyoning
     */
    ActivityTypes["canyoning"] = "Canyoning";
    ActivityTypes["Canyoning"] = "Canyoning";
    /**
     * Via ferrata
     */
    ActivityTypes["ViaFerrata"] = "Via Ferrata";
    ActivityTypes["Via Ferrata"] = "Via Ferrata";
    ActivityTypes["via Ferrata"] = "Via Ferrata";
    ActivityTypes["via ferrata"] = "Via Ferrata";
    /**
     * Fishing
     */
    ActivityTypes["Fishing"] = "Fishing";
    ActivityTypes["fishing"] = "Fishing";
    /**
     * Hunting
     */
    ActivityTypes["Hunting"] = "Hunting";
    ActivityTypes["hunting"] = "Hunting";
    /**
     * Route
     */
    ActivityTypes["route"] = "Route";
    ActivityTypes["Route"] = "Route";
    /**
     * Inline Skating
     */
    ActivityTypes["inline_skating"] = "Inline Skating";
    ActivityTypes["InlineSkating"] = "Inline Skating";
    ActivityTypes["Inline Skating"] = "Inline Skating";
    ActivityTypes["Inline skating"] = "Inline Skating";
    ActivityTypes["InlineSkate"] = "Inline Skating";
    /**
     * Rock Climbing
     */
    ActivityTypes["rock_climbing"] = "Rock Climbing";
    ActivityTypes["Rock Climbing"] = "Rock Climbing";
    ActivityTypes["Rock climbing"] = "Rock Climbing";
    ActivityTypes["RockClimbing"] = "Rock Climbing";
    /**
     * Sky Diving
     */
    ActivityTypes["sky_diving"] = "Sky Diving";
    ActivityTypes["Sky Diving"] = "Sky Diving";
    ActivityTypes["Sky diving"] = "Sky Diving";
    ActivityTypes["sky diving"] = "Sky Diving";
    ActivityTypes["SkyDiving"] = "Sky Diving";
    /**
     * Snowshoeing
     */
    ActivityTypes["snowshoeing"] = "Snowshoeing";
    ActivityTypes["Snowshoeing"] = "Snowshoeing";
    ActivityTypes["Snowshoe"] = "Snowshoeing";
    /**
     * Snowmobiling
     */
    ActivityTypes["snowmobiling"] = "Snowmobiling";
    ActivityTypes["Snowmobiling"] = "Snowmobiling";
    /**
     * Stand Up Paddling
     */
    ActivityTypes["stand_up_paddleboarding"] = "Stand Up Paddling";
    ActivityTypes["Standup paddling (SUP)"] = "Stand Up Paddling";
    ActivityTypes["Stand up paddling"] = "Stand Up Paddling";
    ActivityTypes["stand up paddling"] = "Stand Up Paddling";
    ActivityTypes["Stand Up Paddling"] = "Stand Up Paddling";
    ActivityTypes["Stand up Paddling"] = "Stand Up Paddling";
    ActivityTypes["StandUpPaddling"] = "Stand Up Paddling";
    /**
     * Surfing
     */
    ActivityTypes["surfing"] = "Surfing";
    ActivityTypes["Surfing"] = "Surfing";
    /**
     * Wakeboarding
     */
    ActivityTypes["wakeboarding"] = "Wakeboarding";
    ActivityTypes["Wakeboarding"] = "Wakeboarding";
    /**
     * Water Skiing
     */
    ActivityTypes["water_skiing"] = "Water Skiing";
    ActivityTypes["Water skiing"] = "Water Skiing";
    ActivityTypes["Water Skiing"] = "Water Skiing";
    ActivityTypes["WaterSkiing"] = "Water Skiing";
    /**
     * Flexibility Training
     */
    ActivityTypes["training_flexibility_training"] = "Flexibility Training";
    ActivityTypes["flexibility_training"] = "Flexibility Training";
    ActivityTypes["Flexibility Training"] = "Flexibility Training";
    ActivityTypes["FlexibilityTraining"] = "Flexibility Training";
    ActivityTypes["generic_flexibility_training"] = "Flexibility Training";
    /**
     * Training
     */
    ActivityTypes["training"] = "Training";
    ActivityTypes["Training"] = "Training";
    /**
     * Cardio Training
     */
    ActivityTypes["cardio_training"] = "Cardio Training";
    ActivityTypes["training_cardio_training"] = "Cardio Training";
    ActivityTypes["Cardio Training"] = "Cardio Training";
    ActivityTypes["CardioTraining"] = "Cardio Training";
    ActivityTypes["fitness_equipment_cardio_training"] = "Cardio Training";
    /**
     * Elliptical trainer
     */
    ActivityTypes["fitness_equipment_elliptical"] = "Elliptical Trainer";
    ActivityTypes["Elliptical trainer"] = "Elliptical Trainer";
    ActivityTypes["Elliptical"] = "Elliptical Trainer";
    ActivityTypes["EllipticalTrainer"] = "Elliptical Trainer";
    ActivityTypes["Elliptical Trainer"] = "Elliptical Trainer";
    /**
     * Hand Cycle
     */
    ActivityTypes["Handcycle"] = "Hand Cycle";
    ActivityTypes["Hand cycle"] = "Hand Cycle";
    ActivityTypes["Hand Cycle"] = "Hand Cycle";
    /**
     * Stair Stepper
     */
    ActivityTypes["StairStepper"] = "Stair Stepper";
    ActivityTypes["Stair Stepper"] = "Stair Stepper";
    /**
     * Velomobile
     */
    ActivityTypes["Velomobile"] = "Velomobile";
    /**
     * Wheel Chair
     */
    ActivityTypes["Wheelchair"] = "Wheel Chair";
    ActivityTypes["Wheel chair"] = "Wheel Chair";
    ActivityTypes["Wheel Chair"] = "Wheel Chair";
    ActivityTypes["Workout"] = "Workout";
    ActivityTypes["generic_match"] = "Match";
    ActivityTypes["Match"] = "Match";
})(ActivityTypes || (ActivityTypes = {}));
export var ActivityTypeGroups;
(function (ActivityTypeGroups) {
    ActivityTypeGroups["Running"] = "Running";
    ActivityTypeGroups["Trail Running"] = "Trail Running";
    ActivityTypeGroups["TrailRunning"] = "Trail Running";
    ActivityTypeGroups["Cycling"] = "Cycling";
    ActivityTypeGroups["Swimming"] = "Swimming";
    ActivityTypeGroups["Performance"] = "Performance";
    ActivityTypeGroups["Indoor Sports"] = "Indoor Sports";
    ActivityTypeGroups["IndoorSports"] = "Indoor Sports";
    ActivityTypeGroups["Outdoor Adventures"] = "Outdoor Adventures";
    ActivityTypeGroups["OutdoorAdventures"] = "Outdoor Adventures";
    ActivityTypeGroups["Winter Sports"] = "Winter Sports";
    ActivityTypeGroups["WinterSports"] = "Winter Sports";
    ActivityTypeGroups["Water Sports"] = "Water Sports";
    ActivityTypeGroups["WaterSports"] = "Water Sports";
    ActivityTypeGroups["Diving"] = "Diving";
    ActivityTypeGroups["Team Racket"] = "Team Racket";
    ActivityTypeGroups["TeamRacket"] = "Team Racket";
    ActivityTypeGroups["Unspecified"] = "Unspecified";
})(ActivityTypeGroups || (ActivityTypeGroups = {}));
export class ActivityTypesGroupMapping {
}
ActivityTypesGroupMapping.map = {
    [ActivityTypeGroups.Running]: [
        ActivityTypes.Running,
        ActivityTypes.Treadmill,
        ActivityTypes.IndoorRunning,
        ActivityTypes.VirtualRunning
        // @todo add more
    ],
    [ActivityTypeGroups.TrailRunning]: [
        ActivityTypes.TrailRunning
        // @todo add more
    ],
    [ActivityTypeGroups.Cycling]: [
        ActivityTypes.Cycling,
        ActivityTypes.IndoorCycling,
        ActivityTypes.MountainBiking,
        ActivityTypes.Biking,
        ActivityTypes.VirtualCycling,
        ActivityTypes.EBiking,
        ActivityTypes.DownhillCycling
        // @todo add more
    ],
    [ActivityTypeGroups.Swimming]: [ActivityTypes.Swimming, ActivityTypes.OpenWaterSwimming],
    [ActivityTypeGroups.Performance]: [
        ActivityTypes.Crossfit,
        ActivityTypes.Orienteering,
        ActivityTypes.RollerSki,
        ActivityTypes.TrackAndField,
        ActivityTypes.Triathlon,
        ActivityTypes.Multisport
        // @todo add more
    ],
    [ActivityTypeGroups.IndoorSports]: [
        ActivityTypes.Gymnastics,
        ActivityTypes.Yoga,
        ActivityTypes.Stretching,
        ActivityTypes.Kettlebell,
        ActivityTypes.IndoorRowing,
        ActivityTypes.Floorball,
        ActivityTypes.Dancing,
        ActivityTypes.Crosstrainer,
        ActivityTypes.WeightTraining,
        ActivityTypes.StrengthTraining,
        ActivityTypes.Training,
        ActivityTypes.FlexibilityTraining
        // @todo add more
    ],
    [ActivityTypeGroups.OutdoorAdventures]: [
        ActivityTypes.Walking,
        ActivityTypes.Hiking,
        ActivityTypes.NordicWalking,
        ActivityTypes.HorsebackRiding,
        ActivityTypes.Climbing,
        ActivityTypes.RockClimbing,
        ActivityTypes.Canyoning,
        ActivityTypes.ViaFerrata
        // @todo add more
    ],
    [ActivityTypeGroups.WinterSports]: [
        ActivityTypes.CrosscountrySkiing,
        ActivityTypes.BackCountrySkiing,
        ActivityTypes.AlpineSkiing,
        ActivityTypes.TelemarkSkiing,
        ActivityTypes.Snowboarding,
        ActivityTypes.Snowshoeing,
        ActivityTypes.SkiTouring,
        ActivityTypes.IceSkating,
        ActivityTypes.BackCountrySki,
        ActivityTypes.NordicSki
        // @todo add more
    ],
    [ActivityTypeGroups.WaterSports]: [
        ActivityTypes.Rowing,
        ActivityTypes.Surfing,
        ActivityTypes.Kitesurfing,
        ActivityTypes.Wakeboarding,
        ActivityTypes.Sailing,
        ActivityTypes.Canoeing,
        ActivityTypes.Kayaking,
        ActivityTypes.Paddling,
        ActivityTypes.StandUpPaddling
        // @todo add more
    ],
    [ActivityTypeGroups.Diving]: [ActivityTypes.Diving, ActivityTypes.ScubaDiving, ActivityTypes.FreeDiving],
    [ActivityTypeGroups.TeamRacket]: [
        ActivityTypes.Golf,
        // ActivityTypes.Soccer,
        ActivityTypes.AmericanFootball,
        ActivityTypes.Football,
        ActivityTypes.Badminton,
        ActivityTypes.Baseball,
        ActivityTypes.Basketball,
        ActivityTypes.Bowling,
        ActivityTypes.Handball,
        ActivityTypes.IceHockey,
        ActivityTypes.Rugby,
        ActivityTypes.Softball,
        ActivityTypes.Squash,
        ActivityTypes.RacquetBall,
        ActivityTypes.TableTennis,
        ActivityTypes.Tennis
        // @todo add more
    ],
    [ActivityTypeGroups.Unspecified]: []
};
export class ActivityTypesMoving {
    /**
     * Provides speed threshold by sport to compute moving time
     * @param activityType
     */
    static getSpeedThreshold(activityType) {
        const threshold = this.SPORTS_MOVING_SPEED_THRESHOLD_MAP.get(ActivityTypesHelper.getActivityGroupForActivityType(activityType));
        return threshold && Number.isFinite(threshold) ? threshold : this.DEFAULT_MOVING_SPEED_THRESHOLD;
    }
}
/**
 * Holds moving speed threshold in m/s per sport group
 */
ActivityTypesMoving.SPORTS_MOVING_SPEED_THRESHOLD_MAP = new Map([
    [ActivityTypeGroups.Running, 1.5 / 3.6],
    [ActivityTypeGroups.Cycling, 4 / 3.6],
    [ActivityTypeGroups.Swimming, 0.3] // 30 cm/s
]);
ActivityTypesMoving.DEFAULT_MOVING_SPEED_THRESHOLD = 0.3; // m/s
export class StravaGPXTypes {
}
StravaGPXTypes.map = new Map([
    [1, ActivityTypes.Cycling],
    [2, ActivityTypes.AlpineSki],
    [3, ActivityTypes.BackCountrySki],
    [4, ActivityTypes.Hiking],
    [6, ActivityTypes.InlineSkate],
    [7, ActivityTypes.NordicSki],
    [9, ActivityTypes.Running],
    [10, ActivityTypes.Walking],
    [12, ActivityTypes.Snowboard],
    [13, ActivityTypes.Snowshoeing],
    [16, ActivityTypes.Swimming],
    [17, ActivityTypes.VirtualCycling],
    [18, ActivityTypes.EBikeRide],
    [23, ActivityTypes.Rowing],
    [53, ActivityTypes.VirtualRunning]
]);
