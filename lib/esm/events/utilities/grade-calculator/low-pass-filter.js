export class LowPassFilter {
    static smooth(values, smoothing = 0.5) {
        return new LowPassFilter(smoothing).smoothArray(values);
    }
    constructor(smoothing) {
        this._smoothing = smoothing || 0.5; // must be smaller than 1
        this._buffer = []; // FIFO queue
        this._bufferMaxSize = 10;
    }
    /**
     * Init buffer with array of values
     * @param {number[]} values
     * @returns {number[]}
     */
    init(values) {
        for (let i = 0; i < values.length; i++) {
            this.__push(values[i]);
        }
        return this._buffer;
    }
    /**
     * Add new value to buffer (FIFO queue)
     * @param {number} value
     * @returns {number}
     * @private
     */
    __push(value) {
        const removed = this._buffer.length === this._bufferMaxSize ? this._buffer.shift() : 0;
        this._buffer.push(value);
        return removed;
    }
    /**
     * Smooth value from stream
     * @param {number} nextValue
     * @returns {number}
     */
    next(nextValue) {
        // push new value to the end, and remove oldest one
        const removed = this.__push(nextValue);
        // smooth value using all values from buffer
        const result = this._buffer.reduce((last, current) => {
            return this._smoothing * current + (1 - this._smoothing) * last;
        }, removed);
        // replace smoothed value
        this._buffer[this._buffer.length - 1] = result;
        return result;
    }
    /**
     * Smooth array of values
     * @param {number[]} values
     * @returns {number[]}
     */
    smoothArray(values) {
        let value = values.filter(v => Number.isFinite(v))[0];
        if (!value) {
            return values;
        }
        for (let i = 1; i < values.length; i++) {
            if (values[i] === null) {
                continue;
            }
            const currentValue = values[i];
            value += (currentValue - value) * this._smoothing;
            values[i] = Math.round(value * 100) / 100;
        }
        return values;
    }
    get bufferMaxSize() {
        return this._bufferMaxSize;
    }
    set bufferMaxSize(value) {
        this._bufferMaxSize = value;
    }
    get buffer() {
        return this._buffer;
    }
    set buffer(value) {
        this._buffer = value;
    }
    get smoothing() {
        return this._smoothing;
    }
    set smoothing(value) {
        this._smoothing = value;
    }
}
