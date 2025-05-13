import { TuiSkinTheme } from "../index";
export declare const skinTheme: any;
export declare function b(type?: string, effect?: string, bgcolor?: string, ispre?: boolean): string;
export declare function c(type?: string, effect?: string, textcolor?: string, ispre?: boolean): string;
export declare function ttc(type?: string, effect?: string, textcolor?: string, ispre?: boolean): string;
export declare function bc(type?: string, effect?: string, color?: string, option?: string, ispre?: boolean): string;
export declare function ra(type?: string, size?: string, option?: string, ispre?: boolean): string;
export declare function ps(type?: string, size?: string, option?: string, ispre?: boolean): string;
export declare function ms(type?: string, size?: string, option?: string, ispre?: boolean): string;
export declare function pts(type?: string, size?: string, ispre?: boolean): string;
export declare function pg(bgcolor?: string, ispre?: boolean): string;
export declare function vg(bgcolor?: string, ispre?: boolean): string;
export declare function TuiCreateTheme(): TuiSkinTheme;
export declare class TuiTheme {
    create(): TuiSkinTheme;
    getCurSkinTheme(): TuiSkinTheme;
    updateCurSkinTheme(e: TuiSkinTheme): void;
    add(e: TuiSkinTheme): void;
    remove(id: string): void;
    update(id: string, e: TuiSkinTheme): void;
    getCachethemeList(): TuiSkinTheme[];
    getTheme(e: string): TuiSkinTheme;
}
export declare class TuiGetThemeDefault {
    component: ComponentPublicInstance;
    constructor(e: ComponentPublicInstance);
    private getProps;
    getUserStyle(name: string): string;
    themeBackgroundColor(): string;
    themeForegroundColor(): string;
    themeColor(): string;
    themeBorder(): string;
    themeFontSize(): string;
    themeRadius(): string;
    themePadding(): string;
    themeMargin(): string;
}
