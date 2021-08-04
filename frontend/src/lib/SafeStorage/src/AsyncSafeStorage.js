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
var AsyncSafeStorage = (function () {
    function AsyncSafeStorage(storage, storageName, initialValue) {
        if (storageName === void 0) { storageName = 'GLOBAL'; }
        this.storage = storage;
        this.storageName = storageName + "__";
        this.initialValue = initialValue;
    }
    AsyncSafeStorage.prototype.validateKeyExists = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var keys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.storage.getAllKeys()];
                    case 1:
                        keys = _a.sent();
                        if (!keys.includes(key)) {
                            throw Error("Key: " + key + " does not exist in AsyncStorage");
                        }
                        return [2];
                }
            });
        });
    };
    AsyncSafeStorage.prototype.seed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                Object.keys(this.initialValue).forEach(function (key) {
                    _this.hasKey(key).then(function (exist) {
                        if (!exist) {
                            _this.set(key, _this.initialValue[key]);
                        }
                    });
                });
                return [2];
            });
        });
    };
    AsyncSafeStorage.prototype.clean = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.storage.getAllKeys().then(function (keys) {
                    keys
                        .filter(function (k) { return k.startsWith(_this.storageName); })
                        .forEach(function (key) {
                        if (!Object.keys(_this.initialValue)
                            .map(function (k) { return _this.storageName + k; })
                            .includes(key)) {
                            _this.storage.removeItem(key);
                        }
                    });
                });
                return [2];
            });
        });
    };
    AsyncSafeStorage.prototype.reset = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.set(key, this.initialValue[key])];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    AsyncSafeStorage.prototype.resetAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                Object.keys(this.initialValue).forEach(function (key) {
                    _this.reset(key);
                });
                return [2];
            });
        });
    };
    AsyncSafeStorage.prototype.getAllKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, this.storage
                        .getAllKeys()
                        .then(function (keys) {
                        return keys
                            .filter(function (key) { return key.startsWith(_this.storageName); })
                            .map(function (key) { return key.split(_this.storageName)[1]; });
                    })];
            });
        });
    };
    AsyncSafeStorage.prototype.hasKey = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.getAllKeys().then(function (keys) { return keys.some(function (k) { return k === key; }); })];
            });
        });
    };
    AsyncSafeStorage.prototype.set = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(value === undefined)) return [3, 2];
                        return [4, this.storage.setItem(this.storageName + key, 'undefined')];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2: return [4, this.storage.setItem(this.storageName + key, JSON.stringify(value))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    AsyncSafeStorage.prototype.get = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateKeyExists(this.storageName + key);
                        return [4, this.storage.getItem(this.storageName + key)];
                    case 1:
                        value = _a.sent();
                        if (value === 'null') {
                            return [2, null];
                        }
                        else if (value === 'undefined') {
                            return [2, undefined];
                        }
                        return [2, JSON.parse(value)];
                }
            });
        });
    };
    return AsyncSafeStorage;
}());
export { AsyncSafeStorage };
