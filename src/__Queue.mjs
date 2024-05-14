// @ts-check

/** @typedef {import('./_QueueObject.mjs')._QueueObject} _QueueObject */

export class __Queue {
	/** @type {__Queue} */
	static __;
	constructor() {
		__Queue.__ = this;
	}

	/**
	 * @private
	 * @type {_QueueObject[]}
	 */
	queue = [];
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
			this.run_queue();
		}
	};
	/**
	 * @private
	 * @param {_QueueObject} _queue
	 */
	push = (_queue) => {
		if (this.queue.length > 0 && _queue.id === this.queue[this.queue.length - 1][0]) {
			this.queue.shift();
		}
		this.queue.push(_queue);
	};
	/**
	 * @private
	 * @param {number} ms
	 */
	timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	/**
	 * @private
	 * @param {CallableFunction} callback
	 */
	is_async = (callback) => callback.constructor.name === 'AsyncFunction';
	run_queue = async () => {
		this.is_running = true;
		while (this.queue[0]) {
			const { callback, debounce } = this.queue[0];
			this.queue.shift();
			if (debounce) {
				await this.timeout(debounce);
			}
			if (this.is_async(callback)) {
				await callback();
				continue;
			}
			callback();
		}
		this.is_running = false;
	};
}
