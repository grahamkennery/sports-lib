"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventImporterJSON = void 0;
const event_1 = require("../../../event");
const activity_1 = require("../../../../activities/activity");
const lap_1 = require("../../../../laps/lap");
const creator_1 = require("../../../../creators/creator");
const intensity_zones_1 = require("../../../../intensity-zones/intensity-zones");
const data_store_1 = require("../../../../data/data.store");
const lap_types_1 = require("../../../../laps/lap.types");
const activity_types_1 = require("../../../../activities/activity.types");
const stream_1 = require("../../../../streams/stream");
const data_ibi_1 = require("../../../../data/data.ibi");
const ibi_stream_1 = require("../../../../streams/ibi-stream");
const device_1 = require("../../../../activities/devices/device");
const data_time_1 = require("../../../../data/data.time");
class EventImporterJSON {
    static getEventFromJSON(json) {
        const event = new event_1.Event(json.name, new Date(json.startDate), new Date(json.endDate), json.srcFileType, json.privacy, json.description || undefined, json.isMerge || false);
        Object.keys(json.stats).forEach((statName) => {
            event.addStat(data_store_1.DynamicDataLoader.getDataInstanceFromDataType(statName, json.stats[statName]));
        });
        return event;
    }
    static getCreatorFromJSON(json) {
        const creator = new creator_1.Creator(json.name || 'Unknown Device');
        if (json.hwInfo) {
            creator.hwInfo = json.hwInfo;
        }
        if (json.swInfo) {
            creator.swInfo = json.swInfo;
        }
        if (json.serialNumber) {
            creator.serialNumber = json.serialNumber;
        }
        if (json.manufacturer) {
            creator.manufacturer = json.manufacturer;
        }
        if (json.isRecognized) {
            creator.isRecognized = json.isRecognized;
        }
        if (json.productId) {
            creator.productId = json.productId;
        }
        if (json.devices && json.devices.length) {
            json.devices.forEach(jsonDevice => creator.devices.push(this.getDeviceFromJSON(jsonDevice)));
        }
        return creator;
    }
    static getDeviceFromJSON(json) {
        const device = new device_1.Device(json.type);
        if (json.index) {
            device.index = json.index;
        }
        if (json.name) {
            device.name = json.name;
        }
        if (json.batteryStatus) {
            device.batteryStatus = json.batteryStatus;
        }
        if (json.batteryVoltage) {
            device.batteryVoltage = json.batteryVoltage;
        }
        if (json.manufacturer) {
            device.manufacturer = json.manufacturer;
        }
        if (json.serialNumber) {
            device.serialNumber = json.serialNumber;
        }
        if (json.product) {
            device.product = json.product;
        }
        if (json.swInfo) {
            device.swInfo = json.swInfo;
        }
        if (json.hwInfo) {
            device.hwInfo = json.hwInfo;
        }
        if (json.antDeviceNumber) {
            device.antDeviceNumber = json.antDeviceNumber;
        }
        if (json.antTransmissionType) {
            device.antTransmissionType = json.antTransmissionType;
        }
        if (json.antNetwork) {
            device.antNetwork = json.antNetwork;
        }
        if (json.sourceType) {
            device.sourceType = json.sourceType;
        }
        if (json.cumOperatingTime) {
            device.cumOperatingTime = json.cumOperatingTime;
        }
        return device;
    }
    static getLapFromJSON(json, lapIndex) {
        const lap = new lap_1.Lap(new Date(json.startDate), new Date(json.endDate), lapIndex + 1, lap_types_1.LapTypes[json.type]);
        Object.keys(json.stats).forEach((statName) => {
            lap.addStat(data_store_1.DynamicDataLoader.getDataInstanceFromDataType(statName, json.stats[statName]));
        });
        return lap;
    }
    static getStreamFromJSON(json) {
        if (json.type === data_ibi_1.DataIBI.type) {
            return new ibi_stream_1.IBIStream(json.data);
        }
        return new stream_1.Stream(json.type, json.data);
    }
    static getIntensityZonesFromJSON(json) {
        const zones = new intensity_zones_1.IntensityZones(json.type);
        zones.zone1Duration = json.zone1Duration;
        zones.zone2Duration = json.zone2Duration;
        zones.zone2LowerLimit = json.zone2LowerLimit;
        zones.zone3Duration = json.zone3Duration;
        zones.zone3LowerLimit = json.zone3LowerLimit;
        zones.zone4Duration = json.zone4Duration;
        zones.zone4LowerLimit = json.zone4LowerLimit;
        zones.zone5Duration = json.zone5Duration;
        zones.zone5LowerLimit = json.zone5LowerLimit;
        return zones;
    }
    static getActivityEventFromJSON(json) {
        return (data_store_1.DynamicDataLoader.getDataInstanceFromDataType(Object.keys(json)[0], Object.values(json)[0]));
    }
    static getActivityFromJSON(json) {
        const activity = new activity_1.Activity(new Date(json.startDate), new Date(json.endDate), activity_types_1.ActivityTypes[json.type], EventImporterJSON.getCreatorFromJSON(json.creator));
        Object.keys(json.stats).forEach((statName) => {
            activity.addStat(data_store_1.DynamicDataLoader.getDataInstanceFromDataType(statName, json.stats[statName]));
        });
        json.laps.forEach((lapJSON, index) => {
            activity.addLap(EventImporterJSON.getLapFromJSON(lapJSON, index));
        });
        if (Array.isArray(json.streams)) {
            json.streams.forEach((streamJson) => {
                if (streamJson.type === data_time_1.DataTime.type) {
                    return;
                }
                activity.addStream(EventImporterJSON.getStreamFromJSON(streamJson));
            });
        }
        else {
            Object.keys(json.streams).forEach(streamKey => {
                const streamJson = {
                    type: streamKey,
                    data: json.streams[streamKey]
                };
                activity.addStream(EventImporterJSON.getStreamFromJSON(streamJson));
            });
        }
        json.intensityZones.forEach(intensityZonesJSON => {
            activity.intensityZones.push(EventImporterJSON.getIntensityZonesFromJSON(intensityZonesJSON));
        });
        if (json.events) {
            json.events.forEach(activityEvent => {
                activity.addEvent(this.getActivityEventFromJSON(activityEvent));
            });
        }
        return activity;
    }
}
exports.EventImporterJSON = EventImporterJSON;
