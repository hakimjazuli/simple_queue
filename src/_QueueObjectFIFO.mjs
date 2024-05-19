// @ts-check

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
