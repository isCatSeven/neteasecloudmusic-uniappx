export declare class TuiEventScroll {
    scrollTop: number;
    eventCallbackWrapper: UniCallbackWrapper | null;
    instance: ComponentPublicInstance;
    scrollEl: UniElement | null;
    callback: (e: number) => void;
    watchScroll: (e: UniScrollEvent) => void;
    constructor(ins: ComponentPublicInstance);
    onTuiEventScroll(call: (e: number) => void): void;
    dispose(): void;
    backtop(): void;
}
