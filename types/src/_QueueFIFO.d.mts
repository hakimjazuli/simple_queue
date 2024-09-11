export class _QueueFIFO {
    /**
     * @private
     * @type {_QueueObjectFIFO['detail'][]}
     */
    private queue;
    /**
     * @private
     * @type {boolean}
     */
    private is_running;
    /**
     * @public
     * @param {_QueueObjectFIFO} _queue
     */
    public assign: (_queue: _QueueObjectFIFO) => void;
    /**
     * @private
     * @param {_QueueObjectFIFO} _queue
     */
    private push;
    /** @private */
    private run;
}
import { _QueueObjectFIFO } from './_QueueObjectFIFO.mjs';
