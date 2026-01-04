import { ServiceNames } from './event-meta-data.interface';
export class SuuntoAppEventMetaData {
    constructor(serviceWorkoutID, serviceUserName, date) {
        this.serviceWorkoutID = serviceWorkoutID;
        this.serviceUserName = serviceUserName;
        this.date = date;
        this.serviceName = ServiceNames.SuuntoApp;
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
export class COROSAPIEventMetaData {
    constructor(serviceWorkoutID, serviceOpenId, serviceFITFileURI, date) {
        this.serviceWorkoutID = serviceWorkoutID;
        this.serviceOpenId = serviceOpenId;
        this.serviceFITFileURI = serviceFITFileURI;
        this.date = date;
        this.serviceName = ServiceNames.COROSAPI;
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
export class GarminHealthAPIEventMetaData {
    constructor(serviceUserID, serviceActivityFileID, serviceActivityFileType, serviceManual, serviceStartTimeInSeconds, date) {
        this.serviceUserID = serviceUserID;
        this.serviceActivityFileID = serviceActivityFileID;
        this.serviceActivityFileType = serviceActivityFileType;
        this.serviceManual = serviceManual;
        this.serviceStartTimeInSeconds = serviceStartTimeInSeconds;
        this.date = date;
        this.serviceName = ServiceNames.GarminHealthAPI;
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
