/* eslint-disable */

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
var SafeStorage = (function () {
    function SafeStorage(storage, storageName, initialValue) {
        if (storageName === void 0) { storageName = 'GLOBAL'; }
        this.storage = storage;
        this.storageName = storageName + "__";
        this.initialValue = initialValue;
    }
    SafeStorage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2];
        }); });
    };
    SafeStorage.prototype.seed = function () {
        var _this = this;
        Object.keys(this.initialValue).forEach(function (key) {
            if (!_this.hasKey(key)) {
                _this.set(key, _this.initialValue[key]);
            }
        });
    };
    SafeStorage.prototype.clean = function () {
        var _this = this;
        this.storage
            .getAllKeys()
            .filter(function (k) { return k.startsWith(_this.storageName); })
            .forEach(function (key) {
            if (!Object.keys(_this.initialValue)
                .map(function (k) { return _this.storageName + k; })
                .includes(key)) {
                _this.storage.removeItem(key);
            }
        });
    };
    SafeStorage.prototype.reset = function (key) {
        this.set(key, this.initialValue[key]);
    };
    SafeStorage.prototype.resetAll = function () {
        var _this = this;
        Object.keys(this.initialValue).forEach(function (key) {
            _this.reset(key);
        });
    };
    SafeStorage.prototype.getAllKeys = function () {
        var _this = this;
        return this.storage
            .getAllKeys()
            .filter(function (key) { return key.startsWith(_this.storageName); })
            .map(function (key) { return key.split(_this.storageName)[1]; });
    };
    SafeStorage.prototype.hasKey = function (key) {
        return this.getAllKeys().some(function (k) { return k === key; });
    };
    SafeStorage.prototype.set = function (key, value) {
        if (value === undefined) {
            this.storage.setItem(this.storageName + key, 'undefined');
        }
        else {
            this.storage.setItem(this.storageName + key, JSON.stringify(value));
        }
    };
    SafeStorage.prototype.get = function (key) {
        var value = this.storage.getItem(this.storageName + key);
        if (value === 'null') {
            return null;
        }
        else if (value === 'undefined') {
            return undefined;
        }
        return JSON.parse(value);
    };
    return SafeStorage;
}());
export { SafeStorage };
