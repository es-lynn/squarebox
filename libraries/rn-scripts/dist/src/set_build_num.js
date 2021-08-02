"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Arg_1 = __importDefault(require("./lib/Arg"));
var Project_1 = __importDefault(require("./lib/Project"));
var Tools_1 = __importDefault(require("./lib/Tools"));
function set_build_num() {
    var project_name = Arg_1.default.v_null('project_name') || Tools_1.default.project_name_from_package();
    var gradle_path = Arg_1.default.v_null('gradle_path') || 'android/app/build.gradle';
    var src = Arg_1.default.v_enum_null('src', ['git', 'time']);
    var platform = Arg_1.default.v_enum_null('platform', ['android', 'ios', 'both']) || 'both';
    var offset = Arg_1.default.v_number_null('offset');
    var base_num = Arg_1.default.v_number_null('base_num');
    var build_number;
    if ('git' === src)
        build_number = Tools_1.default.version_from_git('origin/develop', offset);
    else if ('time' === src)
        build_number = Tools_1.default.version_from_epoch(offset);
    else
        build_number = Arg_1.default.v_number('num');
    if (base_num)
        build_number += base_num;
    if (platform !== 'ios') {
        Project_1.default.write_gradle(gradle_path, build_number, undefined);
    }
    if (platform !== 'android') {
        Project_1.default.write_xcode(project_name, build_number, undefined);
    }
}
exports.set_build_num = set_build_num;
