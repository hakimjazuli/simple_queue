export class _Queue {
    /**
     * @private
     * @type {_QueueObject|{}}
     */
    private queue;
    /**
     * @private
     * @type {boolean}
     */
    private is_running;
    /**
     * @public
     * @param {_QueueObject} _queue
     */
    public assign: (_queue: _QueueObject) => void;
    /**
     * @private
     * @param {_QueueObject} _queue
     */
    private push;
    /** @private */
    private run;
}
import { _QueueObject } from './_QueueObject.mjs';
