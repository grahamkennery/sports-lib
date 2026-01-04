var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EventImporterGPX } from './importer.gpx';
import xmldom from '@xmldom/xmldom';
describe('importer.gpx', () => {
    it('parses gpx without name', () => __awaiter(void 0, void 0, void 0, function* () {
        const gpxString = `<?xml version="1.0" encoding="UTF-8"?>
        <gpx creator="Garmin Connect" version="1.1"
          xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/11.xsd"
          xmlns:ns3="http://www.garmin.com/xmlschemas/TrackPointExtension/v1"
          xmlns="http://www.topografix.com/GPX/1/1"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns2="http://www.garmin.com/xmlschemas/GpxExtensions/v3">
          <metadata>
            <link href="connect.garmin.com">
              <text>Garmin Connect</text>
            </link>
            <time>2019-09-29T13:58:25.000Z</time>
          </metadata>
          <trk>
            <type>road_biking</type>
          </trk>
        </gpx> `;
        const result = yield EventImporterGPX.getFromString(gpxString, xmldom.DOMParser);
        expect(result.getFirstActivity().name).toEqual('');
    }));
    it('parses gpx with name', () => __awaiter(void 0, void 0, void 0, function* () {
        const gpxString = `<?xml version="1.0" encoding="UTF-8"?>
        <gpx creator="Garmin Connect" version="1.1"
          xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/11.xsd"
          xmlns:ns3="http://www.garmin.com/xmlschemas/TrackPointExtension/v1"
          xmlns="http://www.topografix.com/GPX/1/1"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns2="http://www.garmin.com/xmlschemas/GpxExtensions/v3">
          <metadata>
            <link href="connect.garmin.com">
              <text>Garmin Connect</text>
            </link>
            <time>2019-09-29T13:58:25.000Z</time>
          </metadata>
          <trk>
            <name>Meylan Road Cycling</name>
            <type>road_biking</type>
          </trk>
        </gpx> `;
        const result = yield EventImporterGPX.getFromString(gpxString, xmldom.DOMParser);
        expect(result.getFirstActivity().name).toEqual('Meylan Road Cycling');
    }));
});
