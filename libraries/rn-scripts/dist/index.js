#!/usr/bin/env node
"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Arg_1 = __importDefault(require("./src/lib/Arg"));
var build_android_1 = require("./src/build_android");
var set_ver_name_1 = require("./src/set_ver_name");
var set_build_num_1 = require("./src/set_build_num");
var replace_files_1 = require("./src/replace_files");
var discord_1 = require("./src/discord");
var test_1 = require("./src/test");
var tools_1 = require("./src/tools");
var s3_1 = require("./src/s3");
var git_1 = require("./src/git");
(function () {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var command, e_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 21, , 22]);
                    command = Arg_1.default.v_first_enum(['build_android', 'set_ver_name', 'set_build_num', 'replace_files', 'discord', 'get_version_name', 'get_build_no', 'test', 'upload', 'commit_all', 'commit_tag']);
                    if (!('build_android' === command)) return [3 /*break*/, 2];
                    return [4 /*yield*/, build_android_1.build_android()];
                case 1:
                    _d.sent();
                    return [3 /*break*/, 20];
                case 2:
                    if (!('set_ver_name' === command)) return [3 /*break*/, 3];
                    set_ver_name_1.set_ver_name();
                    return [3 /*break*/, 20];
                case 3:
                    if (!('set_build_num' === command)) return [3 /*break*/, 4];
                    set_build_num_1.set_build_num();
                    return [3 /*break*/, 20];
                case 4:
                    if (!('replace_files' === command)) return [3 /*break*/, 5];
                    replace_files_1.replace_files();
                    return [3 /*break*/, 20];
                case 5:
                    if (!('discord' === command)) return [3 /*break*/, 7];
                    return [4 /*yield*/, discord_1.discord()];
                case 6:
                    _d.sent();
                    return [3 /*break*/, 20];
                case 7:
                    if (!('get_build_no' === command)) return [3 /*break*/, 9];
                    return [4 /*yield*/, tools_1.get_build_number()];
                case 8:
                    _d.sent();
                    return [3 /*break*/, 20];
                case 9:
                    if (!('get_version_name' === command)) return [3 /*break*/, 11];
                    return [4 /*yield*/, tools_1.get_version_name()];
                case 10:
                    _d.sent();
                    return [3 /*break*/, 20];
                case 11:
                    if (!('upload' === command)) return [3 /*break*/, 13];
                    return [4 /*yield*/, s3_1.upload()];
                case 12:
                    _d.sent();
                    return [3 /*break*/, 20];
                case 13:
                    if (!('commit_all' === command)) return [3 /*break*/, 15];
                    return [4 /*yield*/, git_1.commit_all()];
                case 14:
                    _d.sent();
                    return [3 /*break*/, 20];
                case 15:
                    if (!('commit_tag' === command)) return [3 /*break*/, 17];
                    return [4 /*yield*/, git_1.commit_tag()];
                case 16:
                    _d.sent();
                    return [3 /*break*/, 20];
                case 17:
                    if (!('test' === command)) return [3 /*break*/, 19];
                    return [4 /*yield*/, test_1.test()];
                case 18:
                    _d.sent();
                    return [3 /*break*/, 20];
                case 19: throw Error('IllegalStateException: No command found, should have been validated already');
                case 20: return [3 /*break*/, 22];
                case 21:
                    e_1 = _d.sent();
                    console.error((_b = (_a = e_1) === null || _a === void 0 ? void 0 : _a.name, (_b !== null && _b !== void 0 ? _b : 'Error')) + ': ' + ((_c = e_1) === null || _c === void 0 ? void 0 : _c.message));
                    process.exit(1);
                    return [3 /*break*/, 22];
                case 22: return [2 /*return*/];
            }
        });
    });
}());
