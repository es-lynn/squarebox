interface Options {
    type: 'apk' | 'aab';
    params?: object;
}
export default class Build {
    static android(opt: Options): Promise<void>;
    private static parse_type;
    private static parse_gradle_params;
}
export {};
