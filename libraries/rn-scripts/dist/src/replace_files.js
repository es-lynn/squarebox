"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Arg_1 = __importDefault(require("./lib/Arg"));
var fs = __importStar(require("fs"));
var Shell_1 = __importDefault(require("./lib/Shell"));
function replace_files() {
    var path = Arg_1.default.v('path');
    parse(path).forEach(function (it) {
        if (it[0] && it[1])
            replace(it[0], it[1]);
    });
}
exports.replace_files = replace_files;
function parse(path) {
    var file = fs.readFileSync(path, 'utf-8');
    var row = file.trim().split('\n');
    return row.map(function (it) {
        var files = it.split(/[ ]*=>[ ]*/g);
        if (files.length !== 2)
            throw Error("Invalid syntax in " + path + ". Please use the format \"file1 => file2\"");
        return [files[0], files[1]];
    });
}
function replace(file1, file2) {
    console.log("Copying " + file1 + " into " + file2);
    Shell_1.default.sh_s('cp', ['--', file1, file2]);
}
