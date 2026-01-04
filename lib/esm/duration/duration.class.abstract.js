import { StatsClassAbstract } from '../stats/stats.class.abstract';
import { DataPause } from '../data/data.pause';
import { DataDuration } from '../data/data.duration';
import { DataTimerTime } from '../data/data.timer-time';
import { DataMovingTime } from '../data/data.moving-time';
export class DurationClassAbstract extends StatsClassAbstract {
    constructor(startDate, endDate) {
        super();
        this.startDate = startDate;
        this.endDate = endDate;
    }
    getDuration() {
        return this.stats.get(DataDuration.type);
    }
    getTimer() {
        return this.stats.get(DataTimerTime.type);
    }
    getMovingTime() {
        return this.stats.get(DataMovingTime.type);
    }
    getPause() {
        return this.stats.get(DataPause.type);
    }
    setDuration(duration) {
        this.stats.set(DataDuration.type, duration);
    }
    setTimer(duration) {
        this.stats.set(DataTimerTime.type, duration);
    }
    setMovingTime(duration) {
        this.stats.set(DataMovingTime.type, duration);
    }
    setPause(pause) {
        this.stats.set(DataPause.type, pause);
    }
}
