// @ts-check

/**
 * @description
 * debouncing `first in first out` in conjuction with [_QueueFIFO](#_queuefifo)
 * ```js
 * // @ts-check
 * import { _QueueFIFO, _QueueObjectFIFO } from '@html_first/simple_queue';
 *
 * $queue = new _QueueFIFO();
 * $queue.assign( ...new _QueueObjectFIFO({
 * 	...options
 * }));
 * ```
 */
export class _QueueObjectFIFO {
	/**
	 * @param {()=>(any|Promise<any>)} callback
	 * @param {number|false} [debounce]
	 * - in ms
	 */
	constructor(callback, debounce = false) {
		this.detail = [callback, debounce];
	}
	/** @type {[callback:()=>(any|Promise<any>),debounce:(number|false)]} */
	detail;
}
