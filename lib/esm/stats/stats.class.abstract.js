import { IDClass } from '../id/id.abstract.class';
import { DataDistance } from '../data/data.distance';
export class StatsClassAbstract extends IDClass {
    constructor() {
        super(...arguments);
        this.stats = new Map(); // this could just be an array
    }
    getDistance() {
        return this.stats.get(DataDistance.type);
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
        this.stats.set(DataDistance.type, distance);
    }
    addStat(stat) {
        this.stats.set(stat.getType(), stat);
    }
}
