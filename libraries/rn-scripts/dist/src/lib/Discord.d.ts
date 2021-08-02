declare type DiscordParams = {
    webhook: string;
    title: string;
    qr_code?: string;
    description?: string;
    url?: string;
    status?: 'success' | 'error';
    fields?: object;
};
export declare function post(params: DiscordParams): Promise<void>;
export {};
