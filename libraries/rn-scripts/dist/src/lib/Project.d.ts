export default class Project {
    static write_gradle(file_path: string, build_number?: number, version_name?: string): void;
    static write_xcode(project_name: string, build_number?: number, version_name?: string): void;
    private static write_xcode_project;
    private static write_xcode_info;
    private static find_all_info_plist_paths;
    static find_xcode_proj(project: string): string;
    private static set_plist_string;
}
