"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creator_1 = require("./creator");
describe('Creator', () => {
    let creator;
    beforeEach(() => {
        creator = new creator_1.Creator('name');
    });
    it('should export correctly to JSON', () => {
        creator.hwInfo = 'HWInfo';
        creator.swInfo = 'SWInfo';
        creator.serialNumber = 'SerialNumber';
        creator.manufacturer = 'fake';
        creator.isRecognized = true;
        creator.productId = '666';
        expect(creator.toJSON()).toEqual({
            name: 'name',
            isRecognized: true,
            productId: '666',
            manufacturer: 'fake',
            serialNumber: 'SerialNumber',
            swInfo: 'SWInfo',
            hwInfo: 'HWInfo',
            devices: []
        });
    });
});
