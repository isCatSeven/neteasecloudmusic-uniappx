/** 链接验证
 * @param {string} url
 * @returns {Boolean}
 */
export declare function isURL(url: string): boolean;
/**
 * 验证十进制数字
 */
export declare const isNumber: (value: string) => boolean;
/** 字母验证
 * @param {string} str
 * @returns {Boolean}
 */
export declare function isAbc(str: string): boolean;
/** 字母或数字验证
 * @param {string} str
 * @returns {Boolean}
 */
export declare function isAbcNum(str: string): boolean;
/** 中文验证
 * @param {string} str
 * @returns {Boolean}
 */
export declare function isChinese(str: string): boolean;
/** 邮箱验证
 * @param {string} email
 * @returns {Boolean}
 */
export declare function isEmail(email: string): boolean;
/** 电话验证
 * @param {string} phone
 * @returns {Boolean}
 */
export declare function isPhone(phone: string): boolean;
/** 固定电话验证
 * @param {string} phone
 * @returns {Boolean}
 */
export declare function isLandline(phone: string): boolean;
/**
 * 验证身份证号码
 */
export declare function isIdcard(value: string): boolean;
/** 图片验证
 * @param {string} url
 * @returns {boolean}
 */
export declare function isImage(url: string): boolean;
/** 视频验证
 * @param {string} url
 * @returns {boolean}
 */
export declare function isVideo(url: string): boolean;
/** 车牌号验证
 * @param {string} no
 * @returns {boolean}
 */
export declare function isCarNo(no: string): boolean;
export declare function isEven(num: number): boolean;
/**
 * 检查是否为正确的 RGB 颜色值
 * @param r 红色
 * @param g 绿色
 * @param b 蓝色
 * @returns boolean
 */
export declare function isRGB(r: number, g: number, b: number): boolean;
/**
 * 检查是否为正确的 HSV 颜色值
 * @param h [0, 360]
 * @param s [0, 1]
 * @param v [0, 1]
 * @returns boolean
 */
export declare function isHSV(h: number, s: number, v: number): boolean;
/**
 * 检查是否为正确的 HSL 颜色值
 * @param h [0, 360]
 * @param s [0, 1]
 * @param l [0, 1]
 * @returns boolean
 */
export declare function isHSL(h: number, s: number, l: number): boolean;
/**
 * 检查一个字符串是否为有效的颜色值。
 * 支持的颜色格式包括CSS预定义的颜色名称（如'blue'）、十六进制颜色码（如'#000'或'#ffffff'）、
 * RGB颜色（如'rgb(255, 255, 255)'）和RGBA颜色（如'rgba(255, 255, 255, 0.5)'）。
 *
 * @param {ColorString} color - 要检查的颜色值字符串。
 * @returns {boolean} 如果字符串是一个有效的颜色值，则返回true，否则返回false。
 */
export declare function isColor(color: string): boolean;
