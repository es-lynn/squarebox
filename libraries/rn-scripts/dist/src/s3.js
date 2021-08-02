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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Arg_1 = __importDefault(require("./lib/Arg"));
var s3_1 = __importDefault(require("aws-sdk/clients/s3"));
var fs = __importStar(require("fs"));
var Shell_1 = __importDefault(require("./lib/Shell"));
var crypto = __importStar(require("crypto"));
function upload() {
    return __awaiter(this, void 0, void 0, function () {
        var access_key, secret, bucket_name, file_path, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    access_key = Arg_1.default.v('access_key');
                    secret = Arg_1.default.v('secret');
                    bucket_name = Arg_1.default.v('bucket_name');
                    file_path = Arg_1.default.v('file_path');
                    return [4 /*yield*/, s3_upload(access_key, secret, bucket_name, file_path)];
                case 1:
                    url = _a.sent();
                    return [4 /*yield*/, Shell_1.default.sh_2("echo " + url)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.upload = upload;
function s3_upload(access_key, secret, bucket_name, file_path) {
    return new Promise(function (res, rej) {
        var file_content = fs.readFileSync(file_path);
        var file_name = generate_file_name(file_path);
        var bucket = new s3_1.default({
            accessKeyId: access_key,
            secretAccessKey: secret
        });
        bucket.upload({
            Bucket: bucket_name,
            Key: file_name,
            Body: file_content,
            ACL: 'public-read'
        }, function (err, data) {
            if (err)
                rej(err);
            else
                res(data.Location);
        });
    });
}
function generate_file_name(file_path) {
    return file_path.split('/').pop().replace('.', '-') + '-' + crypto.randomBytes(32).toString('hex');
}
