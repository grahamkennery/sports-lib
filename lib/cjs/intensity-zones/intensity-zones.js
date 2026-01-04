"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntensityZones = void 0;
const helpers_1 = require("../events/utilities/helpers");
class IntensityZones {
    constructor(type) {
        this.type = type;
    }
    toJSON() {
        const json = {
            type: this.type,
            zone1Duration: this.zone1Duration,
            zone2Duration: this.zone2Duration,
            zone3Duration: this.zone3Duration,
            zone4Duration: this.zone4Duration,
            zone5Duration: this.zone5Duration
        };
        if ((0, helpers_1.isNumber)(this.zone2LowerLimit)) {
            json.zone2LowerLimit = this.zone2LowerLimit;
        }
        if ((0, helpers_1.isNumber)(this.zone3LowerLimit)) {
            json.zone3LowerLimit = this.zone3LowerLimit;
        }
        if ((0, helpers_1.isNumber)(this.zone4LowerLimit)) {
            json.zone4LowerLimit = this.zone4LowerLimit;
        }
        if ((0, helpers_1.isNumber)(this.zone5LowerLimit)) {
            json.zone5LowerLimit = this.zone5LowerLimit;
        }
        return json;
    }
}
exports.IntensityZones = IntensityZones;
