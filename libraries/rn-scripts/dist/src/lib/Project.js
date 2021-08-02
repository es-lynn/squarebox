"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var Shell_1 = __importDefault(require("./Shell"));
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.write_gradle = function (file_path, build_number, version_name) {
        var original = fs.readFileSync(file_path, 'utf-8');
        var file = original;
        if (build_number)
            file = file.replace(/versionCode ([\d]+)?/g, "versionCode " + build_number);
        if (version_name)
            file = file.replace(/versionName (("[\d\.\w-]*)+)?/g, "versionName \"" + version_name + "\"");
        fs.writeFileSync(file_path, file, 'utf-8');
        if (original !== file) {
            fs.writeFileSync(file_path, file, 'utf-8');
            console.log("Updated " + file_path + " -"
                + (build_number ? ' versionCode:' + build_number : '')
                + (version_name ? ' versionName:' + version_name : ''));
        }
    };
    Project.write_xcode = function (project_name, build_number, version_name) {
        var _this = this;
        var info_files_path = Project.find_all_info_plist_paths(project_name);
        var project_path = Project.find_xcode_proj(project_name);
        info_files_path.forEach(function (file_path) {
            _this.write_xcode_info(file_path, build_number, version_name);
        });
        this.write_xcode_project(project_path, build_number, version_name);
    };
    Project.write_xcode_project = function (file_path, build_number, version_name) {
        var original = fs.readFileSync(file_path, 'utf-8');
        var file = original;
        if (build_number)
            file = file.replace(/CURRENT_PROJECT_VERSION = .*;/g, "CURRENT_PROJECT_VERSION = " + build_number + ";");
        if (version_name)
            file = file.replace(/MARKETING_VERSION = .*;/g, "MARKETING_VERSION = " + version_name + ";");
        if (original !== file) {
            fs.writeFileSync(file_path, file, 'utf-8');
            console.log("Updated " + file_path + " -"
                + (build_number ? ' CURRENT_PROJECT_VERSION:' + build_number : '')
                + (version_name ? ' MARKETING_VERSION:' + version_name : ''));
        }
    };
    Project.write_xcode_info = function (file_path, build_number, version_name) {
        var original = fs.readFileSync(file_path, 'utf-8');
        var file = original;
        if (build_number)
            file = Project.set_plist_string(file, 'CFBundleVersion', build_number.toString());
        if (version_name)
            file = Project.set_plist_string(file, 'CFBundleShortVersionString', version_name);
        if (original !== file) {
            fs.writeFileSync(file_path, file, 'utf-8');
            console.log("Updated " + file_path + " - "
                + (build_number ? ' CFBundleVersion:' + build_number : '')
                + (version_name ? ' CFBundleShortVersionString:' + version_name : ''));
        }
    };
    Project.find_all_info_plist_paths = function (project) {
        var paths = Shell_1.default.sh_array('find', ["ios/" + project + "*", '-type', 'f', '-name', 'Info.plist'], { shell: true });
        if (paths.length != 0)
            return paths;
        throw Error("XCode Info.plist cannot be located at ios/" + project + ". Please specify with the params \"project_name:[name]\"");
    };
    Project.find_xcode_proj = function (project) {
        var path = Shell_1.default.sh_s('find', ["ios/" + project + "*", '-type', 'f', '-name', 'project.pbxproj'], { shell: true });
        if (path.includes('project.pbxproj'))
            return path;
        throw Error("XCode project.pbxproj cannot be located at ios/" + project + ". Please specify with the params \"project_name:[name]\"");
    };
    Project.set_plist_string = function (str, key, value) {
        var match = str.match(new RegExp("<key>" + key + "<\\/key>[\\n \\t]*<string>[$()\\d\\w.\\-]*<\\/string>"));
        var match_str;
        if (!match) {
            throw Error("Unable to find key: " + key);
        }
        else {
            match_str = match[0];
        }
        var new_str = match_str.replace(/<string>[$()\d\w.-]*<\/string>/g, "<string>" + value + "</string>");
        str = str.replace(new RegExp("<key>" + key + "<\\/key>[\\n \\t]*<string>[$()\\d\\w.\\-]*<\\/string>"), new_str);
        return str;
    };
    return Project;
}());
exports.default = Project;
