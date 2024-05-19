// @ts-check

export class Functions {
	/**
	 * @public
	 * @param {number} ms
	 */
	static timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	/**
	 * @public
	 * @param {CallableFunction} callback
	 */
	static is_async = (callback) => callback.constructor.name === 'AsyncFunction';
}
