export class _QueueObjectFIFO {
    /**
     * @param {()=>(any|Promise<any>)} callback
     * @param {number|false} [debounce]
     * - in ms
     */
    constructor(callback: () => (any | Promise<any>), debounce?: number | false);
    /** @type {[callback:()=>(any|Promise<any>),debounce:(number|false)]} */
    detail: [callback: () => (any | Promise<any>), debounce: (number | false)];
}
