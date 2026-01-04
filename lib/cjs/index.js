"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsLib = void 0;
const importer_gpx_1 = require("./events/adapters/importers/gpx/importer.gpx");
const importer_tcx_1 = require("./events/adapters/importers/tcx/importer.tcx");
const importer_fit_1 = require("./events/adapters/importers/fit/importer.fit");
const importer_suunto_json_1 = require("./events/adapters/importers/suunto/importer.suunto-json");
const importer_json_1 = require("./events/adapters/importers/json/importer-json");
class SportsLib {
    /**
     * Parses and returns an event using GPX format
     * @param gpxString
     * @param options
     * @param domParser custom DOMParser (case of NodeJs usage)
     */
    static importFromGPX(gpxString, domParser, options) {
        return importer_gpx_1.EventImporterGPX.getFromString(gpxString, domParser, options);
    }
    /**
     * Parses and returns an event using TCX format
     * @param xmlDocument
     * @param options
     */
    static importFromTCX(xmlDocument, options) {
        return importer_tcx_1.EventImporterTCX.getFromXML(xmlDocument, options);
    }
    /**
     * Parses and returns an event using FIT format
     * @param arrayBuffer
     * @param options
     */
    static importFromFit(arrayBuffer, options) {
        return importer_fit_1.EventImporterFIT.getFromArrayBuffer(arrayBuffer, options);
    }
    /**
     * Parses and returns an event using Suunto format
     * @param jsonString
     * @param options
     */
    static importFromSuunto(jsonString, options) {
        return importer_suunto_json_1.EventImporterSuuntoJSON.getFromJSONString(jsonString, options);
    }
    /**
     * Parses and returns an event using native format (SportsLib exported format)
     * @param json EventJSONInterface
     */
    static importFromJSON(json) {
        return importer_json_1.EventImporterJSON.getEventFromJSON(json);
    }
}
exports.SportsLib = SportsLib;
__exportStar(require("./activities/activity.interface"), exports);
__exportStar(require("./activities/activity.json.interface"), exports);
__exportStar(require("./activities/activity.types"), exports);
__exportStar(require("./constants/constants"), exports);
__exportStar(require("./data/data-aerobic-training-effect"), exports);
__exportStar(require("./data/data.absolute-pressure"), exports);
__exportStar(require("./data/data.accumulated-power"), exports);
__exportStar(require("./data/data.activity-types"), exports);
__exportStar(require("./data/data.air-power"), exports);
__exportStar(require("./data/data.altitude"), exports);
__exportStar(require("./data/data.altitude-avg"), exports);
__exportStar(require("./data/data.altitude-gps"), exports);
__exportStar(require("./data/data.altitude-max"), exports);
__exportStar(require("./data/data.altitude-min"), exports);
__exportStar(require("./data/data.ascent"), exports);
__exportStar(require("./data/data.cadence-avg"), exports);
__exportStar(require("./data/data.cadence-max"), exports);
__exportStar(require("./data/data.cadence-min"), exports);
__exportStar(require("./data/data.descent"), exports);
__exportStar(require("./data/data.description"), exports);
__exportStar(require("./data/data.device-names"), exports);
__exportStar(require("./data/data.distance"), exports);
__exportStar(require("./data/data.duration"), exports);
__exportStar(require("./data/data.ehpe"), exports);
__exportStar(require("./data/data.energy"), exports);
__exportStar(require("./data/data.epoc"), exports);
__exportStar(require("./data/data.evpe"), exports);
__exportStar(require("./data/data.feeling"), exports);
__exportStar(require("./data/data.grade-adjusted-pace"), exports);
__exportStar(require("./data/data.grade-adjusted-pace-avg"), exports);
__exportStar(require("./data/data.grade-adjusted-speed"), exports);
__exportStar(require("./data/data.grade-adjusted-speed-avg"), exports);
__exportStar(require("./data/data.heart-rate"), exports);
__exportStar(require("./data/data.heart-rate-avg"), exports);
__exportStar(require("./data/data.heart-rate-max"), exports);
__exportStar(require("./data/data.heart-rate-min"), exports);
__exportStar(require("./data/data.ibi"), exports);
__exportStar(require("./data/data.interface"), exports);
__exportStar(require("./data/data.latitude-degrees"), exports);
__exportStar(require("./data/data.left-balance"), exports);
__exportStar(require("./data/data.longitude-degrees"), exports);
__exportStar(require("./data/data.moving-time"), exports);
__exportStar(require("./data/data.pace"), exports);
__exportStar(require("./data/data.pace-avg"), exports);
__exportStar(require("./data/data.peak-epoc"), exports);
__exportStar(require("./data/data.peak-training-effect"), exports);
__exportStar(require("./data/data.position.interface"), exports);
__exportStar(require("./data/data.power"), exports);
__exportStar(require("./data/data.power-avg"), exports);
__exportStar(require("./data/data.power-left"), exports);
__exportStar(require("./data/data.power-max"), exports);
__exportStar(require("./data/data.power-min"), exports);
__exportStar(require("./data/data.power-right"), exports);
__exportStar(require("./data/data.recovery-time"), exports);
__exportStar(require("./data/data.right-balance"), exports);
__exportStar(require("./data/data.rpe"), exports);
__exportStar(require("./data/data.sea-level-pressure"), exports);
__exportStar(require("./data/data.speed"), exports);
__exportStar(require("./data/data.speed-avg"), exports);
__exportStar(require("./data/data.speed-max"), exports);
__exportStar(require("./data/data.speed-min"), exports);
__exportStar(require("./data/data.start-position"), exports);
__exportStar(require("./data/data.store"), exports);
__exportStar(require("./data/data.stryd-altitude"), exports);
__exportStar(require("./data/data.stryd-distance"), exports);
__exportStar(require("./data/data.stryd-speed"), exports);
__exportStar(require("./data/data.swim-pace"), exports);
__exportStar(require("./data/data.swim-pace-avg"), exports);
__exportStar(require("./data/data.swim-pace-max"), exports);
__exportStar(require("./data/data.temperature"), exports);
__exportStar(require("./data/data.temperature-avg"), exports);
__exportStar(require("./data/data.temperature-max"), exports);
__exportStar(require("./data/data.temperature-min"), exports);
__exportStar(require("./data/data.vertical-speed"), exports);
__exportStar(require("./data/data.vertical-speed-avg"), exports);
__exportStar(require("./data/data.vo2-max"), exports);
__exportStar(require("./data/ibi/data.ibi"), exports);
__exportStar(require("./events/adapters/exporters/exporter.gpx"), exports);
__exportStar(require("./events/adapters/exporters/exporter-json"), exports);
__exportStar(require("./events/adapters/importers/fit/importer.fit"), exports);
__exportStar(require("./events/adapters/importers/gpx/importer.gpx"), exports);
__exportStar(require("./events/adapters/importers/json/importer-json"), exports);
__exportStar(require("./events/adapters/importers/suunto/importer.suunto-json"), exports);
__exportStar(require("./events/adapters/importers/suunto/importer.suunto.sml"), exports);
__exportStar(require("./events/adapters/importers/tcx/importer.tcx"), exports);
__exportStar(require("./events/event.interface"), exports);
__exportStar(require("./events/event.json.interface"), exports);
__exportStar(require("./events/utilities/activity.utilities"), exports);
__exportStar(require("./events/utilities/event.utilities"), exports);
__exportStar(require("./events/utilities/helpers"), exports);
__exportStar(require("./geodesy/adapters/geolib.adapter"), exports);
__exportStar(require("./laps/lap.interface"), exports);
__exportStar(require("./laps/lap.types"), exports);
__exportStar(require("./meta-data/event-meta-data.interface"), exports);
__exportStar(require("./meta-data/meta-data"), exports);
__exportStar(require("./privacy/privacy.class.interface"), exports);
__exportStar(require("./service-tokens/oauth1-service-token.interface"), exports);
__exportStar(require("./service-tokens/oauth2-service-token.interface"), exports);
__exportStar(require("./stats/stats.class.interface"), exports);
__exportStar(require("./streams/compressed.stream.interface"), exports);
__exportStar(require("./streams/stream"), exports);
__exportStar(require("./streams/stream.interface"), exports);
__exportStar(require("./tiles/tile.settings.interface"), exports);
__exportStar(require("./users/settings/dashboard/user.dashboard.settings.interface"), exports);
__exportStar(require("./users/settings/user.app.settings.interface"), exports);
__exportStar(require("./users/settings/user.chart.settings.interface"), exports);
__exportStar(require("./users/settings/user.map.settings.interface"), exports);
__exportStar(require("./users/settings/user.my-tracks.settings.interface"), exports);
__exportStar(require("./users/settings/user.settings.interface"), exports);
__exportStar(require("./users/settings/user.summaries.settings.interface"), exports);
__exportStar(require("./users/settings/user.unit.settings.interface"), exports);
__exportStar(require("./users/user"), exports);
__exportStar(require("./users/user.export-to-csv.settings.interface"), exports);
__exportStar(require("./users/user.service.meta.interface"), exports);
