// @ts-check

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
	constructor(id, callback, debounce = false) {
		this.id = id;
		this.callback = callback;
		this.debounce = debounce;
	}
	/** @type {string} */
	id;
	/** @type {()=>(any|Promise<any>)} */
	callback;
	/** @type {number|false} */
	debounce;
}
