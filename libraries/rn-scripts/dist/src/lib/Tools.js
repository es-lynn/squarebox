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
var Tools = /** @class */ (function () {
    function Tools() {
    }
    /**
     * @experimental Calculates and returns a version number based on git commits
     */
    Tools.version_from_git = function (head, offset) {
        var total_commits = Shell_1.default.sh_i('git', ['rev-list', '--count', 'HEAD']);
        var branch_commits_from_dev = Shell_1.default.sh_i('git', ['rev-list', '--count', head + "..HEAD"]);
        var dev_commits = total_commits - branch_commits_from_dev;
        return (dev_commits * 1000 + branch_commits_from_dev) + ((offset !== null && offset !== void 0 ? offset : 0));
    };
    /**
     * Calculates and returns a version number based on epoch timestamp / 10
     *   Note: Timestamp is divided by 10 to extend usage until year 2600 due to Android maximum BUILD_NUMBER = 2.1B
     *         This means that 2 parallel builds may conflict if they start within 10 seconds of one another
     */
    Tools.version_from_epoch = function (offset) {
        return (new Date().getTime() / 1000 / 10) + ((offset !== null && offset !== void 0 ? offset : 0));
    };
    /**
     * Returns the version string defined in package.json: {"version": "x.y.z"}
     */
    Tools.version_from_package = function () {
        var file = fs.readFileSync('package.json', 'utf-8');
        var pkg = JSON.parse(file);
        if (!pkg.version) {
            throw Error('No version defined in package.json');
        }
        return pkg.version;
    };
    Tools.project_name_from_package = function () {
        var file = fs.readFileSync('package.json', 'utf-8');
        var pkg = JSON.parse(file);
        if (!pkg.name) {
            throw Error('No project name defined in package.json');
        }
        return pkg.name;
    };
    return Tools;
}());
exports.default = Tools;
