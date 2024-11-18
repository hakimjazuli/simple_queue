/**
 * @description
 * debouncing using `unique id` in conjuction with [_Queue](#_queue);
 * ```js
 * // @ts-check
 * import { _Queue, _QueueObject } from '@html_first/simple_queue';
 *
 * $queue = new _Queue();
 * $queue.assign( ...new _QueueObject({
 * 	...options
 * }));
 * ```
 */
export class _QueueObject {
    /**
     * @param {string} id
     * @param {()=>(any|Promise<any>)} callback
     * @param {number|false} [debounce]
     * - in ms
     */
    constructor(id: string, callback: () => (any | Promise<any>), debounce?: number | false);
    /** @type {string} */
    id: string;
    /** @type {()=>(any|Promise<any>)} */
    callback: () => (any | Promise<any>);
    /** @type {number|false} */
    debounce: number | false;
}
