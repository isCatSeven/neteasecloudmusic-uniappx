export declare class TuiHoverClass {
    hoverState: boolean;
    hoverdom: any;
    traget: any;
    istouch: boolean;
    hoverPcMoveListener: (e: UniMouseEvent) => void;
    hoverPcEndListener: (_: UniMouseEvent) => void;
    hoverPcStartListener: (e: UniMouseEvent) => void;
    hoverStartListener: (e: UniTouchEvent) => void;
    hoverMoveListener: (e: UniTouchEvent) => void;
    hoverEndListener: (_: UniTouchEvent) => void;
    hoverCancelListener: (_: UniTouchEvent) => void;
    startCallbackWrapper: any;
    moveCallbackWrapper: any;
    endCallbackWrapper: any;
    cancelCallbackWrapper: any;
    constructor();
    setHover(ins: ComponentPublicInstance): void;
    clearHover(ins: ComponentPublicInstance): void;
}
