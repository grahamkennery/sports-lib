"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPEBorgCR10SCale = exports.DataRPE = void 0;
const data_number_1 = require("./data.number");
class DataRPE extends data_number_1.DataNumber {
    getDisplayValue() {
        return RPEBorgCR10SCale[Math.ceil(this.getValue())]
            ? RPEBorgCR10SCale[Math.ceil(this.getValue())]
            : `Other ${this.getValue()}`;
    }
}
exports.DataRPE = DataRPE;
DataRPE.type = 'Rated Perceived Exertion';
var RPEBorgCR10SCale;
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
})(RPEBorgCR10SCale = exports.RPEBorgCR10SCale || (exports.RPEBorgCR10SCale = {}));
