"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarminHealthAPIEventMetaData = exports.COROSAPIEventMetaData = exports.SuuntoAppEventMetaData = void 0;
const event_meta_data_interface_1 = require("./event-meta-data.interface");
class SuuntoAppEventMetaData {
    constructor(serviceWorkoutID, serviceUserName, date) {
        this.serviceWorkoutID = serviceWorkoutID;
        this.serviceUserName = serviceUserName;
        this.date = date;
        this.serviceName = event_meta_data_interface_1.ServiceNames.SuuntoApp;
    }
    toJSON() {
        return {
            serviceWorkoutID: this.serviceWorkoutID,
            serviceName: this.serviceName,
            serviceUserName: this.serviceUserName,
            date: this.date.getTime()
        };
    }
}
exports.SuuntoAppEventMetaData = SuuntoAppEventMetaData;
class COROSAPIEventMetaData {
    constructor(serviceWorkoutID, serviceOpenId, serviceFITFileURI, date) {
        this.serviceWorkoutID = serviceWorkoutID;
        this.serviceOpenId = serviceOpenId;
        this.serviceFITFileURI = serviceFITFileURI;
        this.date = date;
        this.serviceName = event_meta_data_interface_1.ServiceNames.COROSAPI;
    }
    toJSON() {
        return {
            serviceWorkoutID: this.serviceWorkoutID,
            serviceName: this.serviceName,
            serviceOpenId: this.serviceOpenId,
            serviceFITFileURI: this.serviceFITFileURI,
            date: this.date.getTime()
        };
    }
}
exports.COROSAPIEventMetaData = COROSAPIEventMetaData;
class GarminHealthAPIEventMetaData {
    constructor(serviceUserID, serviceActivityFileID, serviceActivityFileType, serviceManual, serviceStartTimeInSeconds, date) {
        this.serviceUserID = serviceUserID;
        this.serviceActivityFileID = serviceActivityFileID;
        this.serviceActivityFileType = serviceActivityFileType;
        this.serviceManual = serviceManual;
        this.serviceStartTimeInSeconds = serviceStartTimeInSeconds;
        this.date = date;
        this.serviceName = event_meta_data_interface_1.ServiceNames.GarminHealthAPI;
    }
    toJSON() {
        return {
            serviceUserID: this.serviceUserID,
            serviceName: this.serviceName,
            serviceActivityFileID: this.serviceActivityFileID,
            serviceActivityFileType: this.serviceActivityFileType,
            serviceManual: this.serviceManual,
            serviceStartTimeInSeconds: this.serviceStartTimeInSeconds,
            date: this.date.getTime()
        };
    }
}
exports.GarminHealthAPIEventMetaData = GarminHealthAPIEventMetaData;
