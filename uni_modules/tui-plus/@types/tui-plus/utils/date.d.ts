export declare class TuiDate {
    constructor();
    /**
     * 转日期对象
     * @param date 时间
     */
    toDate(date: string): Date;
    /**
     * 现在 yyyy-MM-dd HH:mm:ss
     */
    now(): string;
    /**
     * 当前时间戳
     */
    timestamp(): number;
    /**
     * 今年
     */
    nowYear(): number;
    /**
     * 去年
     */
    lastYear(): number;
    /**
     * 明年
     */
    nextYear(): number;
    /**
     * 年月日数据 数据太大 不建议使用
     * @param min 最小年份偏移
     * @param max 最大年份偏移
     */
    years(min: number, max: number): UTSJSONObject[];
    /**
     * 本月
     * @param n n为负则代表取前n月，为正则代表取后n月，0则为本月
     */
    month(n?: number): string;
    /**
     * 上个月
     */
    lastMonth(): string;
    /**
     * 下个月
     */
    nextMonth(): string;
    /**
     * 月份天数
     */
    monthDays(year: number, month: number): number;
    /**
     * 指定日期当月的所有日期
     * @param date 时间
     */
    monthDates(date: string): string[];
    /**
     * 2个月份之间所有月份
     * @param smonth 开始月份
     * @param emonth 结束月份
     */
    months(smonth: string, emonth: string): string[];
    /**
     * 本周几
     */
    week(): string;
    /**
     * 周几
     */
    weekName(day: number, format: string): string;
    /**
     * 本周所有日期
     */
    weeks(): string[];
    /**
     * 今天
     * @param n n为负则代表取前n天，为正则代表取后n天，0则为今天
     */
    today(n?: number): string;
    /**
     * 昨天
     */
    yesterday(): string;
    /**
     * 明天
     */
    tomorrow(): string;
    /**
     * 2个日期之间所有日期
     * @param sdate 开始日期
     * @param edate 结束日期
     */
    dates(sdate: string, edate: string): string[];
    /**
     * 当前时间
     */
    time(): string;
    /**
     * 比较
     * @param sdate 开始日期
     * @param edate 结束日期
     * @param equal 是否等于
     * @returns 如果 sdate 小于 edate（或等于），则返回 true，否则返回 false
     */
    compare(sdate: string, edate: string, equal?: boolean): boolean;
    /**
     * 转时间戳
     * @param date 时间
     */
    toTimestamp(date: string): number;
    /**
     * 转毫秒
     * @param time 时间
     */
    toMillisecond(time: string): number;
}
