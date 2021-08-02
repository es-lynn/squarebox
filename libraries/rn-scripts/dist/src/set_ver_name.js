"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Arg_1 = __importDefault(require("./lib/Arg"));
var Project_1 = __importDefault(require("./lib/Project"));
var Tools_1 = __importDefault(require("./lib/Tools"));
function set_ver_name() {
    // let xcode_path: string 			= 	Arg.v_null('xcode_path') || Project.find_xcode_proj()
    var project_name = Arg_1.default.v_null('project_name') || Tools_1.default.project_name_from_package();
    var gradle_path = Arg_1.default.v_null('gradle_path') || 'android/app/build.gradle';
    var platform = Arg_1.default.v_enum_null('platform', ['android', 'ios', 'both']) || 'both';
    var src = Arg_1.default.v_enum_null('src', ['package.json']);
    var suffix = Arg_1.default.v_null('suffix');
    var ver_name = (src === 'package.json') ?
        Tools_1.default.version_from_package() : Arg_1.default.v('name');
    if (suffix)
        ver_name = ver_name + "-" + suffix;
    if (platform !== 'ios') {
        Project_1.default.write_gradle(gradle_path, undefined, ver_name);
    }
    if (platform !== 'android') {
        Project_1.default.write_xcode(project_name, undefined, ver_name);
    }
}
exports.set_ver_name = set_ver_name;
