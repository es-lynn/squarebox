"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var Shell = /** @class */ (function () {
    function Shell() {
    }
    /**
     * Executes shell command and returns output as a string
     * Also removes trailing newline.
     */
    Shell.sh_s = function (command, args, options) {
        return child_process_1.spawnSync(command, args, options).stdout.toString().replace('\n', '');
    };
    Shell.echo = function (text) {
        child_process_1.spawnSync('echo', ['text']);
    };
    /**
     * Executes shell command and returns each line output as part of a string array
     * Also removes last line
     */
    Shell.sh_array = function (command, args, options) {
        var array = child_process_1.spawnSync(command, args, options).stdout.toString().split('\n');
        array.pop();
        return array;
    };
    /**
     * Executes shell command and returns output as a number
     */
    Shell.sh_i = function (command, args, options) {
        return parseInt(child_process_1.spawnSync(command, args, options).stdout.toString());
    };
    /**
     * Returns the current directory as a string
     */
    Shell.pwd = function () {
        return this.sh_s('pwd');
    };
    /**
     * @experimental
     * Similar to sh() but arguments are sent together as one combined string instead of an array
     */
    Shell.sh_2 = function (command, options) {
        return __awaiter(this, void 0, void 0, function () {
            var a, b, c;
            return __generator(this, function (_a) {
                a = command.split(' ');
                b = a[0];
                c = [];
                a.forEach(function (it) {
                    if (it !== b) {
                        c.push(it);
                    }
                });
                return [2 /*return*/, this.sh(b, c, options)];
            });
        });
    };
    /**
     * Executes an async shell command while piping output to std:io
     */
    Shell.sh = function (command, args, options) {
        return __awaiter(this, void 0, void 0, function () {
            var process;
            return __generator(this, function (_a) {
                process = child_process_1.spawn(command, args, __assign(__assign({}, options), { stdio: 'inherit' }));
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        process.on('exit', function (code) {
                            code == 0 ? resolve() : reject(new Error('Process exited with code!=0'));
                        });
                    })];
            });
        });
    };
    /**
     * @deprecated - Please don't use this
     */
    Shell.dir_sh = function (location, command) {
        return __awaiter(this, void 0, void 0, function () {
            var pwd, a, b, c, d, i, a, b, c, d, i;
            return __generator(this, function (_a) {
                pwd = this.pwd();
                switch (location) {
                    case 'android':
                    case 'ios':
                        if (pwd.endsWith("" + location)) {
                            return [2 /*return*/, this.sh_2(command)];
                        }
                        else if (pwd.includes("/" + location + "/")) {
                            a = pwd.split('/').length - 1;
                            b = pwd.split('/').findIndex(function (it) { return it === location; });
                            c = a - b;
                            d = '';
                            for (i = 0; i < c; i++) {
                                d += '../';
                            }
                            return [2 /*return*/, this.sh_2(command, { cwd: "" + d })];
                        }
                        else {
                            return [2 /*return*/, this.sh_2(command, { cwd: "" + location })];
                        }
                        break;
                    case 'root':
                        if (pwd.includes('/android') || pwd.includes('/ios')) {
                            a = pwd.split('/').length - 1;
                            b = pwd.split('/').findIndex(function (it) { return it === 'android' || it === 'ios'; });
                            c = a - b;
                            d = '';
                            for (i = 0; i <= c; i++) {
                                d += '../';
                            }
                            return [2 /*return*/, this.sh_2(command, { cwd: "" + d })];
                        }
                        else {
                            return [2 /*return*/, this.sh_2(command, {})];
                        }
                        break;
                    default:
                        throw Error("Invalid location type: " + location);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @deprecated - Please don't use this
     * Passes in a relative path and attempts to locate it by searching current directory, child directory, or ancestors
     */
    Shell.find_path = function (relative_path) {
        var pwd = Shell.pwd();
        if (relative_path === '(root)') {
            var nested = pwd.split('/').length;
            for (var i = 0; i < nested; i++) {
                var cwd = '.' + '/..'.repeat(i);
                if (this.is_root_node_dir({ cwd: cwd })) {
                    var a = pwd.split('/');
                    var b = '';
                    for (var j = 0; j < nested - i; j++) {
                        b += a[j] + '/';
                    }
                    b = b.slice(0, b.length - 1);
                    return b;
                }
            }
            throw Error("Unable to locate package.json in ancestors of '" + pwd + "'");
        }
        else if (pwd.includes(relative_path)) {
            if (pwd.endsWith(relative_path)) {
                return pwd;
            }
            else {
                var start = pwd.indexOf(relative_path);
                var end = start + relative_path.length;
                return pwd.slice(0, end);
            }
        }
        else {
            if (child_process_1.spawnSync('test', ['-d', relative_path]).status === 0) {
                return pwd + '/' + relative_path;
            }
            else {
                throw Error("Path: '" + relative_path + "' cannot be found in '" + pwd + "'");
            }
        }
    };
    /**
     * Returns true if this is the root of a node directory
     * (root node directories are determined by the presence of package.json)
     */
    Shell.is_root_node_dir = function (options) {
        return child_process_1.spawnSync('test', ['-f', 'package.json'], options).status === 0;
    };
    return Shell;
}());
exports.default = Shell;
