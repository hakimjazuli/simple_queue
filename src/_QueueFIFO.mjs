// @ts-check

import { Functions } from './Functions.mjs';
import { _QueueObjectFIFO } from './_QueueObjectFIFO.mjs';

export class _QueueFIFO {
	/**
	 * @private
	 * @type {_QueueObjectFIFO['detail'][]}
	 */
	queue = [];
	/**
	 * @private
	 * @type {boolean}
	 */
	is_running = false;
	/**
	 * @public
	 * @param {_QueueObjectFIFO} _queue
	 */
	assign = (_queue) => {
		this.push(_queue);
		if (!this.is_running) {
			this.run();
		}
	};
	/**
	 * @private
	 * @param {_QueueObjectFIFO} _queue
	 */
	push = (_queue) => {
		this.queue.push(_queue.detail);
	};
	/** @private */
	run = async () => {
		this.is_running = true;
		while (this.queue.length !== 0) {
			for (let i = 0; i < this.queue.length; i++) {
				const [callback, debounce_ms] = this.queue[i];
				this.queue.shift();
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
