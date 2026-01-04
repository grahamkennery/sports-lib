"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creator = void 0;
class Creator {
    constructor(name, productId, manufacturer, swInfo, hwInfo, serialNumber, isRecognized) {
        this.devices = [];
        this.name = name;
        if (productId) {
            this.productId = productId;
        }
        if (manufacturer) {
            this.manufacturer = manufacturer;
        }
        if (swInfo) {
            this.swInfo = swInfo;
        }
        if (hwInfo) {
            this.hwInfo = hwInfo;
        }
        if (serialNumber) {
            this.serialNumber = serialNumber;
        }
        this.isRecognized = !!isRecognized;
    }
    toJSON() {
        return {
            name: this.name,
            manufacturer: this.manufacturer,
            isRecognized: this.isRecognized,
            productId: this.productId,
            serialNumber: this.serialNumber ? this.serialNumber : null,
            swInfo: this.swInfo ? this.swInfo : null,
            hwInfo: this.hwInfo ? this.hwInfo : null,
            devices: this.devices.reduce((devicesArray, device) => {
                devicesArray.push(device.toJSON());
                return devicesArray;
            }, [])
        };
    }
}
exports.Creator = Creator;
