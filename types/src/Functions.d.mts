export class Functions {
    /**
     * @public
     * @param {number} ms
     */
    public static timeout: (ms: number) => Promise<any>;
    /**
     * @public
     * @param {CallableFunction} callback
     */
    public static is_async: (callback: CallableFunction) => boolean;
}
