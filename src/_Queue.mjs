// @ts-check

import { _QueueObject } from './_QueueObject.mjs';
import { Functions } from './Functions.mjs';

/**
 * @description
 * queue handler with `unique id`;
 */
export class _Queue {
	/**
	 * @private
	 * @type {_QueueObject|{}}
	 */
	queue = {};
	/**
	 * @private
	 * @type {boolean}
	 */
	is_running = false;
	/**
	 * @public
	 * @param {_QueueObject} _queue
	 */
	assign = (_queue) => {
		this.push(_queue);
		if (!this.is_running) {
			this.run();
		}
	};
	/**
	 * @private
	 * @param {_QueueObject} _queue
	 */
	push = (_queue) => {
		const { callback, debounce } = _queue;
		this.queue[_queue.id] = { callback, debounce };
	};
	/** @private */
	run = async () => {
		this.is_running = true;
		while (Object.keys(this.queue).length !== 0) {
			for (const current_key in this.queue) {
				const { callback, debounce: debounce_ms } = this.queue[current_key];
				delete this.queue[current_key];
				if (debounce_ms) {
					await Functions.timeout(debounce_ms);
				}
				if (Functions.is_async(callback)) {
					await callback();
					break;
				}
				callback();
				break;
			}
		}
		this.is_running = false;
	};
}
