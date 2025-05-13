import { ShareErrorCode, ShareFail } from "../index";
/**
 * 错误主题
 * 注意：错误主题一般为插件名称，每个组件不同，需要使用时请更改。
 * [可选实现]
 */
export declare const UniErrorSubject = "tui-share";
/**
 * 错误信息
 * @UniError
 * [可选实现]
 */
export declare const MyAPIErrors: Map<ShareErrorCode, string>;
/**
 * 错误对象实现
 */
export declare class ShareFailImpl extends UniError implements ShareFail {
    errSubject: string;
    errMsg: string;
    errCode: ShareErrorCode;
    /**
     * 错误对象构造函数
     */
    constructor(errCode: ShareErrorCode);
}
