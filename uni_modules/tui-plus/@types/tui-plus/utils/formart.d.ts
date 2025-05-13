export declare function priceFormat(price: string, decimals?: number, thousandsSeparator?: string, decimalPoint?: string): string;
export declare function sensitiveWordFilter(name: string, decimalPoint?: string): string;
/**
 * 大写金额
 *
 * @param {String} money
 * @returns {String}
 */
export declare function upperMoney(money: string): string;
/**
 * 格式化金额
 *
 * @param {String} money
 * @param {Boolean} wfz true 万分制 false 千分制
 * @returns {String}
 */
export declare function fmtMoney(money: string, wfz: boolean): string;
export declare function diffdate(time: number): string;
export declare function timeToDate(time: number): string;
export declare function dateFormat(formatStr: string, timeSource: Map<string, string>): string;
export declare function timeFormat(dateTime?: string, formatStr?: string): string;
export declare function parseTimeData(time: number, formatStr?: string): string;
export declare function objTimeData(time: number): UTSJSONObject;
export declare function encodeBase64(str: string): string;
export declare function decodeBase64(str: string): string;
