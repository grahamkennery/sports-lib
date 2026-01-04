"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lap = void 0;
const duration_class_abstract_1 = require("../duration/duration.class.abstract");
class Lap extends duration_class_abstract_1.DurationClassAbstract {
    constructor(startDate, endDate, lapId, type) {
        super(startDate, endDate);
        this.lapId = lapId;
        this.type = type;
    }
    getStartIndex(activity) {
        return activity.getDateIndex(this.startDate);
    }
    getEndIndex(activity) {
        return activity.getDateIndex(this.endDate);
    }
    toJSON(activity) {
        const stats = {};
        this.stats.forEach((value, key) => {
            Object.assign(stats, value.toJSON());
        });
        return {
            lapId: this.lapId,
            startDate: this.startDate.getTime(),
            endDate: this.endDate.getTime(),
            startIndex: activity ? this.getStartIndex(activity) : null,
            endIndex: activity ? this.getEndIndex(activity) : null,
            type: this.type,
            stats: stats
        };
    }
}
exports.Lap = Lap;
