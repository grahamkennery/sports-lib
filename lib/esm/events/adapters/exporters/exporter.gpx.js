import { DataLatitudeDegrees } from '../../../data/data.latitude-degrees';
import { DataDistance } from '../../../data/data.distance';
import { DataHeartRate } from '../../../data/data.heart-rate';
import { DataCadence } from '../../../data/data.cadence';
import { DataTemperature } from '../../../data/data.temperature';
import { DataPower } from '../../../data/data.power';
import { DataAltitude } from '../../../data/data.altitude';
import { DataSpeed } from '../../../data/data.speed';
import { DataLongitudeDegrees } from '../../../data/data.longitude-degrees';
import { DataTime } from '../../../data/data.time';
import { buildGPX, GarminBuilder } from 'gpx-builder';
const { Point, Metadata, Person, Copyright, Link, Track, Segment } = GarminBuilder.MODELS;
export class EventExporterGPX {
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
                const timeStream = activity.generateTimeStream([DataLatitudeDegrees.type, DataLongitudeDegrees.type]);
                // @todo it should make an activity copy
                activity.addStream(timeStream);
                const segment = new Segment(activity
                    .getStreamDataTypesBasedOnDataType(DataLatitudeDegrees.type, [
                    DataLongitudeDegrees.type,
                    DataTime.type,
                    DataDistance.type,
                    DataHeartRate.type,
                    DataCadence.type,
                    DataTemperature.type,
                    DataPower.type,
                    DataAltitude.type,
                    DataSpeed.type
                ])
                    .reduce((pointsArray, data, index, array) => {
                    pointsArray.push(new Point(data[DataLatitudeDegrees.type], data[DataLongitudeDegrees.type], {
                        ele: data[DataAltitude.type] || undefined,
                        time: new Date(activity.startDate.getTime() + data[DataTime.type] * 1000),
                        hr: data[DataHeartRate.type],
                        power: data[DataPower.type] || undefined,
                        speed: data[DataSpeed.type] || undefined,
                        atemp: data[DataTemperature.type] || undefined,
                        cad: data[DataCadence.type] || undefined,
                        extensions: {
                            power: data[DataPower.type] || undefined,
                            distance: data[DataDistance.type] || undefined
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
