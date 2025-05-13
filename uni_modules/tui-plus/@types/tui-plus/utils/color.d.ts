export declare function parseColor(color: string): string;
/**
 * hexToRgba 修改透明度
 *
 * @param {String} hex 颜色值
 * @param {Number} alpha 透明度
 * @return String
 */
export declare function hexToRgba(hex: string, opacity?: number): string;
export declare function rgbaToHex(rgbaString: string): string;
/**
 * rgbToHex
 * @param {String} rgb 颜色值
 * @return String
 */
export declare function rgbToHex(rgbString: string): string;
/**
* 十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
* sHex为传入的十六进制的色值
* alpha为rgba的透明度
*/
export declare function colorToRgba(color: string, alpha: number): string;
/**
 * 求两个颜色之间的渐变值
 * @param {string} startColor 开始的颜色
 * @param {string} endColor 结束的颜色
 * @param {number} step 颜色等分的份额
 * */
export declare function colorGradient(startColor: string, endColor: string, step: number): string[];
/**
 * RGB颜色值转HSV颜色值
 * @param r 红色
 * @param g 绿色
 * @param b 蓝色
 * @returns HSV
 * @example
 * const rgbColor: RGBColor = { r: 0, g: 188, b: 121 };
 * const hsvColor: HSVColor = rgb2hsv(rgbColor);
 * console.log(hsvColor); // 输出：{ h: 159, s: 1.0, v: 0.74 }
 */
export declare function rgb2hsv(r: number, g: number, b: number): number[];
/**
 * HSV颜色值转RGB颜色值
 * @param h [0, 360]
 * @param s [0, 1]
 * @param v [0, 1]
 * @returns RGB
 * @example
 * const hsvColor: HSVColor = { h: 159, s: 1.0, v: 0.74 };
 * const rgbColor: RGBColor = hsv2rgb(hsvColor);
 * console.log(rgbColor); // 输出：{ r: 0, g: 189, b: 123 }
 */
export declare function hsv2rgb(h: number, s: number, v: number): number[];
