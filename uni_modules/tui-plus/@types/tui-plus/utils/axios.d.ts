export declare class TuiAxios {
    reqConfig: Map<string, any>;
    task: null | RequestTask;
    requestInterceptor: any | null;
    responseInterceptor: any | null;
    constructor(reqconfig: UTSJSONObject);
    private http;
    abort(): void;
    post(path: string, data?: any): Promise<UTSJSONObject>;
    get(path: string, data?: any): Promise<UTSJSONObject>;
}
