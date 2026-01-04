"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DurationClassAbstract = void 0;
const stats_class_abstract_1 = require("../stats/stats.class.abstract");
const data_pause_1 = require("../data/data.pause");
const data_duration_1 = require("../data/data.duration");
const data_timer_time_1 = require("../data/data.timer-time");
const data_moving_time_1 = require("../data/data.moving-time");
class DurationClassAbstract extends stats_class_abstract_1.StatsClassAbstract {
    constructor(startDate, endDate) {
        super();
        this.startDate = startDate;
        this.endDate = endDate;
    }
    getDuration() {
        return this.stats.get(data_duration_1.DataDuration.type);
    }
    getTimer() {
        return this.stats.get(data_timer_time_1.DataTimerTime.type);
    }
    getMovingTime() {
        return this.stats.get(data_moving_time_1.DataMovingTime.type);
    }
    getPause() {
        return this.stats.get(data_pause_1.DataPause.type);
    }
    setDuration(duration) {
        this.stats.set(data_duration_1.DataDuration.type, duration);
    }
    setTimer(duration) {
        this.stats.set(data_timer_time_1.DataTimerTime.type, duration);
    }
    setMovingTime(duration) {
        this.stats.set(data_moving_time_1.DataMovingTime.type, duration);
    }
    setPause(pause) {
        this.stats.set(data_pause_1.DataPause.type, pause);
    }
}
exports.DurationClassAbstract = DurationClassAbstract;
