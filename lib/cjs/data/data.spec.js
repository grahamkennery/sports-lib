"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_interface_1 = require("./data.interface");
const data_temperature_1 = require("./data.temperature");
describe('Data', () => {
    let data;
    beforeEach(() => {
        data = new data_temperature_1.DataTemperature(60);
    });
    it('should get the type correctly', () => {
        expect(data.getType()).toBe('Temperature');
    });
    it('should get the value correctly', () => {
        expect(data.getValue()).toBe(60);
    });
    it('should get the unit correctly', () => {
        expect(data.getUnit()).toBe('°C');
    });
    it('should get the unit system correctly', () => {
        expect(data.getUnitSystem()).toBe(data_interface_1.UnitSystem.Metric);
    });
    it('should export correctly to JSON', () => {
        expect(data.toJSON()).toEqual({
            Temperature: 60
        });
    });
});
