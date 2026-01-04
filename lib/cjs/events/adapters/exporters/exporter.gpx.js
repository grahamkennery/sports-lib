"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventExporterGPX = void 0;
const data_latitude_degrees_1 = require("../../../data/data.latitude-degrees");
const data_distance_1 = require("../../../data/data.distance");
const data_heart_rate_1 = require("../../../data/data.heart-rate");
const data_cadence_1 = require("../../../data/data.cadence");
const data_temperature_1 = require("../../../data/data.temperature");
const data_power_1 = require("../../../data/data.power");
const data_altitude_1 = require("../../../data/data.altitude");
const data_speed_1 = require("../../../data/data.speed");
const data_longitude_degrees_1 = require("../../../data/data.longitude-degrees");
const data_time_1 = require("../../../data/data.time");
const { buildGPX, GarminBuilder } = require('gpx-builder');
const { Point, Metadata, Person, Copyright, Link, Track, Segment } = GarminBuilder.MODELS;
class EventExporterGPX {
    constructor() {
        this.fileType = 'application/gpx+xml';
        this.fileExtension = 'gpx';
    }
    getAsString(event) {
        return new Promise((resolve, reject) => {
            const tracks = [];
            event.getActivities().forEach(activity => {
                // We cannot export activities with no positional data!
                if (!activity.hasPositionData()) {
                    return;
                }
                const timeStream = activity.generateTimeStream([data_latitude_degrees_1.DataLatitudeDegrees.type, data_longitude_degrees_1.DataLongitudeDegrees.type]);
                // @todo it should make an activity copy
                activity.addStream(timeStream);
                const segment = new Segment(activity
                    .getStreamDataTypesBasedOnDataType(data_latitude_degrees_1.DataLatitudeDegrees.type, [
                    data_longitude_degrees_1.DataLongitudeDegrees.type,
                    data_time_1.DataTime.type,
                    data_distance_1.DataDistance.type,
                    data_heart_rate_1.DataHeartRate.type,
                    data_cadence_1.DataCadence.type,
                    data_temperature_1.DataTemperature.type,
                    data_power_1.DataPower.type,
                    data_altitude_1.DataAltitude.type,
                    data_speed_1.DataSpeed.type
                ])
                    .reduce((pointsArray, data, index, array) => {
                    pointsArray.push(new Point(data[data_latitude_degrees_1.DataLatitudeDegrees.type], data[data_longitude_degrees_1.DataLongitudeDegrees.type], {
                        ele: data[data_altitude_1.DataAltitude.type] || undefined,
                        time: new Date(activity.startDate.getTime() + data[data_time_1.DataTime.type] * 1000),
                        hr: data[data_heart_rate_1.DataHeartRate.type],
                        power: data[data_power_1.DataPower.type] || undefined,
                        speed: data[data_speed_1.DataSpeed.type] || undefined,
                        atemp: data[data_temperature_1.DataTemperature.type] || undefined,
                        cad: data[data_cadence_1.DataCadence.type] || undefined,
                        extensions: {
                            power: data[data_power_1.DataPower.type] || undefined,
                            distance: data[data_distance_1.DataDistance.type] || undefined
                        }
                    }));
                    return pointsArray;
                }, []));
                tracks.push(new Track([segment], { name: activity.type }));
                // @todo it should make an activity copy
                activity.removeStream(timeStream);
            });
            const builder = new GarminBuilder();
            builder.setTracks(tracks);
            builder.setMetadata(new Metadata({
                name: event.name,
                desc: event.description,
                // author: new Person,
                copyright: new Copyright('Quantified-Self.IO ', new Date().getFullYear().toString()),
                link: new Link('https://quantified-self.io/', { text: 'Quantified Self IO', type: 'Application' }),
                time: new Date()
            }));
            builder.data.attributes.creator = event.getFirstActivity().creator.name;
            resolve(buildGPX(builder.toObject()));
        });
    }
}
exports.EventExporterGPX = EventExporterGPX;
