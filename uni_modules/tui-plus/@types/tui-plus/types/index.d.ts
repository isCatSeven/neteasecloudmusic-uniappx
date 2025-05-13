export type LunarInfoType = {
    lYear: number;
    lMonth: number;
    lDay: number;
    IMonthCn: string;
    IDayCn: string;
    cYear: number;
    cMonth: number;
    cDay: number;
    gzYear?: string;
    gzMonth?: string;
    gzDay?: string;
    isToday: boolean;
    isLeap: boolean;
    nWeek?: number;
    ncWeek?: string;
    isTerm?: boolean;
    Term?: string;
    astro?: string;
};
export type CalendarDateType = {
    lYear: number;
    lMonth: number;
    lDay: number;
    IMonthCn: string;
    IDayCn: string;
    fullDate: string;
    year: number;
    month: number;
    date: number;
    day: number;
    week: number;
    astro: string;
    zodiac: string;
    gzYear: string;
    gzMonth: string;
    gzDay: string;
    disabled: boolean;
    is_today: boolean;
    data?: LunarInfoType;
};
export type TuiTreeData = {
    id: string;
    label: string;
    disabled?: boolean;
    children?: TuiTreeData[];
};
export type TuiTreeLoad = (id: string) => Promise<TuiTreeData[]>;
export type TuiTouchEvent = {
    x: number;
    y: number;
    moveX: number;
    moveY: number;
    event: UniTouchEvent;
    rect: DOMRect;
};
export type TuiFilesList = {
    name: string;
    type: string;
    id: string;
    file?: any;
    request?: any;
    realFilePath: string;
    cacheFilePath: string;
    size?: number;
    status?: 0 | 1 | 2 | 3;
    md5?: string;
};
export type TuiUploadOptions = {
    md5?: string;
    path?: string;
    url?: string;
    directory?: string;
    size?: number;
    type?: string;
    isupload?: boolean;
};
export type TuiVisibilitySensorChange = {
    ins: ComponentPublicInstance;
    state: boolean;
    mark: string;
};
export type TuiTabsOption = {
    disabled?: boolean;
    isDot?: boolean;
    title: string;
    value?: number;
};
export type TuiTabBarOption = {
    activeIcon?: string;
    inactiveIcon?: string;
    raised?: boolean;
    label?: string;
    badgeValue?: number;
};
export type TuiSubsectionOption = {
    id?: string;
    title?: string;
    icon?: string;
    iconsize?: string;
};
export type TuiSwiperEventDetail = {
    current: number;
    source: string;
    currentItemId: string;
    dxy?: number;
};
export type TuiSwiperEvent = {
    detail: TuiSwiperEventDetail;
    type: string;
    currentTarget: UniElement | null;
    target: UniElement | null;
    timeStamp: number;
    bubbles: boolean;
    cancelable: boolean;
    preventDefault: () => void;
    stopPropagation: () => void;
};
export type TuiTableSortEvent = {
    field: string;
    state: number;
};
export type TuiCheckedEvent = {
    value: string;
    state: boolean;
};
export type TuiColorChangeEvent = {
    hex: string;
    rgba: string;
};
export type TuiScrollEventDetail = {
    scrollHeight: number;
    scrollWidth: number;
    scrollLeft: number;
    scrollTop: number;
    delta: number;
    source: string;
    scrollDirection: string;
};
export type TuiScrollEvent = {
    detail: TuiScrollEventDetail;
    type: string;
    target: UniElement | null;
    timeStamp: number;
};
export type TuiPickerColumnChange = {
    item: UTSJSONObject;
    index: number;
};
export type TuiPickerCityChange = {
    values: string[];
    keys: string[];
    data: TuiPickerColumnChange[];
};
export type TuipickerDateRange = {
    year?: number[];
    month?: number[];
    day?: number[];
    hour?: number[];
    minute?: number[];
    second?: number[];
};
export type TuiSkinTheme = {
    id: string;
    name: string;
    unit: string;
    infonormal: string;
    infodark: string;
    infodisabled: string;
    infolight: string;
    primarynormal: string;
    primarydark: string;
    primarydisabled: string;
    primarylight: string;
    successnormal: string;
    successdark: string;
    successdisabled: string;
    successlight: string;
    warningnormal: string;
    warningdark: string;
    warningdisabled: string;
    warninglight: string;
    errornormal: string;
    errordark: string;
    errordisabled: string;
    errorlight: string;
    colornormal: string;
    colordark: string;
    colordisabled: string;
    colorlight: string;
    colorinverse: string;
    bgcolorview: string;
    bgcolorpage: string;
    borderbase: string;
    borderlight: string;
    borderlighter: string;
    borderextralight: string;
    radiuslarge: number;
    radiusmedium: number;
    radiussmall: number;
    radiusmini: number;
    marginlarge: number;
    marginmedium: number;
    marginsmall: number;
    marginmini: number;
    paddinglarge: number;
    paddingmedium: number;
    paddingsmall: number;
    paddingmini: number;
    sizelarge: number;
    sizemedium: number;
    sizesmall: number;
    sizemini: number;
};
/**
 * 错误码
 * 根据uni错误码规范要求，建议错误码以90开头，以下是错误码示例：
 * - 9010001 类型不对
 * - 9010002 缺少文件路径
 * - 9010003 文件路径不正确
 */
export type ShareErrorCode = 9010001 | 9010002 | 9010003 | 9010004 | -1;
export interface ShareFail extends IUniError {
    errCode: ShareErrorCode;
}
export type ShareOption = {
    type: string;
    title?: string;
    summary?: string;
    path?: string;
    imageUrl?: string;
    success?: (res: any) => void;
    fail?: (res: ShareFail) => void;
    complete?: (res: any) => void;
};
export type TuiChooseFileSuccess = {
    errSubject: string;
    errMsg: string;
    tempFilePaths: string[];
    tempFiles: TuiFilesList[];
};
export type TuiChooseFileOptions = {
    type?: 'image' | 'video' | 'all';
    extension?: string;
    count?: number;
    sourceType?: string[];
    success?: (e: TuiChooseFileSuccess) => void;
    fail?: (e: IMediaError) => void;
    complete?: (e: any) => void;
};
