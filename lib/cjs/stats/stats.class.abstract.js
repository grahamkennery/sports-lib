"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsClassAbstract = void 0;
const id_abstract_class_1 = require("../id/id.abstract.class");
const data_distance_1 = require("../data/data.distance");
class StatsClassAbstract extends id_abstract_class_1.IDClass {
    constructor() {
        super(...arguments);
        this.stats = new Map(); // this could just be an array
    }
    getDistance() {
        return this.stats.get(data_distance_1.DataDistance.type);
    }
    getStat(statType) {
        return this.stats.get(statType);
    }
    getStats() {
        return this.stats;
    }
    getStatsAsArray() {
        return Array.from(this.stats.values());
    }
    removeStat(statType) {
        this.stats.delete(statType);
    }
    clearStats() {
        this.stats.clear();
    }
    setDistance(distance) {
        this.stats.set(data_distance_1.DataDistance.type, distance);
    }
    addStat(stat) {
        this.stats.set(stat.getType(), stat);
    }
}
exports.StatsClassAbstract = StatsClassAbstract;
