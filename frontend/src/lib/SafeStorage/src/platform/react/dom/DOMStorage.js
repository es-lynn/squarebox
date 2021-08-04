/* eslint-disable */

import { validateKeyExists } from '../../../utils/Utils';
var DOMStorage = (function () {
    function DOMStorage(storage) {
        var _this = this;
        this.getItem = function (key) {
            validateKeyExists(key, _this.getAllKeys());
            return _this.storage.getItem(key);
        };
        this.removeItem = function (key) {
            _this.storage.removeItem(key);
        };
        this.setItem = function (key, value) {
            _this.storage.setItem(key, value);
        };
        this.clear = function () {
            _this.storage.clear();
        };
        this.size = function () {
            return _this.storage.length;
        };
        this.storage = storage;
    }
    DOMStorage.prototype.getAllKeys = function () {
        var keys = [];
        for (var i = 0; i < this.storage.length; i++) {
            keys.push(this.storage.key(i));
        }
        return keys;
    };
    return DOMStorage;
}());
var DOM = function () {
    if (!window) {
        console.error('DOM not present. You can only run this code in a browser.');
    }
    return window;
};
export var DOMLocalStorage = new DOMStorage(DOM().localStorage);
export var DOMSessionStorage = new DOMStorage(DOM().sessionStorage);
