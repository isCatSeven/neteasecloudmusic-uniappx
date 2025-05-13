import { TuiUploadOptions } from '../index';
export declare function setPartenVisible(element: UniElement | null): void;
export declare function getParentElement(element: UniElement | null, nodeName: string): UniElement | null;
export declare function $dispatch(context: ComponentPublicInstance, componentName: string, eventName?: string, ...params: any[]): ComponentPublicInstance | null;
/**
 * @description 简单生成随机数
 * @param {number} 生成随机数的长度
 */
export declare function TuiGuid(len: number): string;
export declare function getPx(value: string): number;
/**
     * 格式化单位 px
     * @param {string|number} value 需要添加单位的值
     * @param {string} unit 添加的单位名 比如px
     */
export declare function addUnit(value: any, unit?: string): string;
/**
 * @description 生成随机数
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export declare function getRandomInt(min: number, max: number): number;
/**
 * @description 随机生成N位的数字
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export declare function generateRandomNumber(n: number): number;
/**
     * 查找父级或平级指定元素
     * @param {ComponentPublicInstance} context 实例
     * @param {Array} refs 查询对象ref名称
     */
export declare function $findEl(context: ComponentPublicInstance, refs: string[]): Element | null;
/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @return null
 */
export declare function debounce(func: () => void, wait?: number): void;
/**
 * 节流：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 */
export declare function throttle(func: () => void, wait: number): void;
export declare function rpx2px(value: number): number;
/**
     * 如果value小于min，取min；如果value大于max，取max
     *
     * @param {Number} min 最小值
     * @param {Number} max 最大值
     * @param {Number} value 值
     */
export declare function range(min: number, max: number, value: number): number;
/**
 * 取一个区间数
 *
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
export declare function random(min: number, max: number): number;
/**
 * @description 随机生成N位的数字
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export declare function generateRandom(n: number): number;
/**
 * 打乱数组
 *
 * @param {Array} array 需要打乱的数组
 * @returns {Array} 打乱后的数组
 */
export declare function randomArray(array: any[]): any[];
/**
 * 去除空格
 *
 * @param {String} str 需要去除空格的字符串
 * @param {String} pos both(左右)|left|right|all
 */
export declare function trim(str: string, pos: string): string;
export declare function DOMRectToMap(rect: DOMRect): Map<string, number>;
export declare function getJSONString(jo: UTSJSONObject, field: string, def?: string): string;
/**
 * 将十六进制颜色字符串标准化为标准的六字符HEX格式。
 * 如果输入是有效的三位字符HEX简写形式，它将被扩展为六字符。
 * 如果输入不是有效的HEX格式，将返回原始字符串。
 *
 * @param {string} hex - 需要标准化的十六进制颜色字符串。
 * @returns {string} - 标准化后的十六进制颜色字符串。
 */
export declare function normalizeHexColor(hex: string): string;
export declare function TuiMapSize(map: any): number;
export declare function TuiHasKey(key: string, e: any): boolean;
export declare function TuiRefToElement(ref: string, e: ComponentPublicInstance): UniElement;
export declare function getTuiUploadOptions(res: ChooseImageSuccess): Promise<TuiUploadOptions[]>;
export declare function TuiClassResolution(className: string, attr?: string): string;
export declare function drawRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number): void;
export declare function TuiGetMeasureText(text: string, fontSize: number): number;
export declare function TuiGetClassStyles(name?: string, user_class?: string): string;
export declare function TuiRegisterFontFamily(config: UTSJSONObject): void;
