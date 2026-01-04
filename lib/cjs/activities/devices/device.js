"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const helpers_1 = require("../../events/utilities/helpers");
class Device {
    constructor(type) {
        this.type = type || 'Unknown';
    }
    toJSON() {
        return {
            type: this.type,
            index: (0, helpers_1.isNumber)(this.index) ? this.index || null : null,
            batteryStatus: this.batteryStatus || null,
            name: this.name || null,
            batteryVoltage: this.batteryVoltage || null,
            manufacturer: this.manufacturer || null,
            serialNumber: this.serialNumber || null,
            product: this.product || null,
            swInfo: this.swInfo || null,
            hwInfo: this.hwInfo || null,
            antDeviceNumber: this.antDeviceNumber || null,
            antTransmissionType: this.antTransmissionType || null,
            antNetwork: this.antNetwork || null,
            sourceType: this.sourceType || null,
            cumOperatingTime: this.cumOperatingTime || null
        };
    }
}
exports.Device = Device;
