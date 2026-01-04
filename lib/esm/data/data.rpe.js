import { DataNumber } from './data.number';
export class DataRPE extends DataNumber {
    getDisplayValue() {
        return RPEBorgCR10SCale[Math.ceil(this.getValue())]
            ? RPEBorgCR10SCale[Math.ceil(this.getValue())]
            : `Other ${this.getValue()}`;
    }
}
DataRPE.type = 'Rated Perceived Exertion';
export var RPEBorgCR10SCale;
(function (RPEBorgCR10SCale) {
    RPEBorgCR10SCale[RPEBorgCR10SCale["No exertion at all"] = 0] = "No exertion at all";
    RPEBorgCR10SCale[RPEBorgCR10SCale["Very, very slight"] = 1] = "Very, very slight";
    RPEBorgCR10SCale[RPEBorgCR10SCale["Very slight"] = 2] = "Very slight";
    RPEBorgCR10SCale[RPEBorgCR10SCale["Slight"] = 3] = "Slight";
    RPEBorgCR10SCale[RPEBorgCR10SCale["Moderate"] = 4] = "Moderate";
    RPEBorgCR10SCale[RPEBorgCR10SCale["Somewhat severe"] = 5] = "Somewhat severe";
    RPEBorgCR10SCale[RPEBorgCR10SCale["Severe"] = 6] = "Severe";
    RPEBorgCR10SCale[RPEBorgCR10SCale["More than severe"] = 7] = "More than severe";
    RPEBorgCR10SCale[RPEBorgCR10SCale["Very severe"] = 8] = "Very severe";
    RPEBorgCR10SCale[RPEBorgCR10SCale["Extreme"] = 9] = "Extreme";
    RPEBorgCR10SCale[RPEBorgCR10SCale["Maximal"] = 10] = "Maximal";
})(RPEBorgCR10SCale || (RPEBorgCR10SCale = {}));
