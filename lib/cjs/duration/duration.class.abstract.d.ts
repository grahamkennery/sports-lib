import { DurationClassInterface } from './duration.class.interface';
import { StatsClassAbstract } from '../stats/stats.class.abstract';
import { DataPause } from '../data/data.pause';
import { DataDuration } from '../data/data.duration';
import { DataTimerTime } from '../data/data.timer-time';
import { DataMovingTime } from '../data/data.moving-time';
export declare abstract class DurationClassAbstract extends StatsClassAbstract implements DurationClassInterface {
    startDate: Date;
    endDate: Date;
    protected constructor(startDate: Date, endDate: Date);
    getDuration(): DataDuration;
    getTimer(): DataTimerTime;
    getMovingTime(): DataMovingTime;
    getPause(): DataPause;
    setDuration(duration: DataDuration): void;
    setTimer(duration: DataTimerTime): void;
    setMovingTime(duration: DataMovingTime): void;
    setPause(pause: DataPause): void;
}
