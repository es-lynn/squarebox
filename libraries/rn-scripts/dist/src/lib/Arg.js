"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Arg = /** @class */ (function () {
    function Arg() {
    }
    /**
     * Returns the first argument value (process.argv[2])
     * @throws {Error} when accepted_values does not contain argument
     */
    Arg.v_first_enum = function (accepted_values) {
        var command = process.argv[2];
        var abc = accepted_values.find(function (it) {
            var _a, _b;
            return _b = it.toLowerCase() === ((_a = command) === null || _a === void 0 ? void 0 : _a.toLowerCase()), (_b !== null && _b !== void 0 ? _b : false);
        });
        if (abc)
            return command;
        else
            throw Error("Invalid command: " + command + ". Accepted commands: " + accepted_values);
    };
    /**
     * Returns the value for a specified key
     * @throws {Error} when accepted_values does not contain argument
     */
    Arg.v_enum = function (key, accepted_values) {
        var value = this.v(key);
        var abc = accepted_values.find(function (it) {
            return it.toLowerCase() === value.toLowerCase();
        });
        if (abc)
            return value;
        else
            throw Error("Invalid value for " + key + ": " + value + ". Accepted values: " + accepted_values);
    };
    /**
     * Returns the value for a specified key, or undefined if it cannot be found
     * @throws {Error} when accepted_values does not contain argument
     */
    Arg.v_enum_null = function (key, accepted_values) {
        var value = this.v_null(key);
        if (value === undefined)
            return value;
        var find = accepted_values.find(function (it) {
            // @ts-ignore value should always be string
            return it.toLowerCase() === value.toLowerCase();
        });
        if (find)
            return value;
        else
            throw Error("Invalid value for " + key + ": " + value + ". Accepted values: [" + accepted_values + "]");
    };
    /**
     * Returns the value for a specified key
     * @throws {Error} if no value can be found for that key
     */
    Arg.v = function (key) {
        var value = null;
        process.argv.forEach(function (arg, index, array) {
            if (arg.includes('\n')) {
                arg.split('\n').forEach(function (arg) {
                    var _a = arg.split('='), k = _a[0], vs = _a.slice(1);
                    var v = vs.join('=');
                    if (k.toLowerCase().trim() === key) {
                        value = v;
                    }
                });
            }
            else {
                var _a = arg.split('='), k = _a[0], vs = _a.slice(1);
                var v = vs.join('=');
                if (k.toLowerCase() === key) {
                    value = v;
                }
            }
        });
        if (value)
            return value;
        else
            throw Error("Required parameter '" + key + "' not found. Please re-run command with '" + key + "=[value]'");
    };
    /**
     * Returns the value for a specified key, or undefined if it cannot be found
     */
    Arg.v_null = function (key) {
        var value = undefined;
        process.argv.forEach(function (arg, index, array) {
            if (arg.includes('\n')) {
                arg.split('\n').forEach(function (arg) {
                    var _a = arg.split('='), k = _a[0], vs = _a.slice(1);
                    var v = vs.join('=');
                    if (k.toLowerCase().trim() === key) {
                        value = v;
                    }
                });
            }
            else {
                var _a = arg.split('='), k = _a[0], vs = _a.slice(1);
                var v = vs.join('=');
                if (k.toLowerCase() === key) {
                    value = v;
                }
            }
        });
        return value;
    };
    /**
     * Returns the numeric value for a specified key
     * @throws {TypeError} if value is not a valid number
     */
    Arg.v_number = function (key) {
        var value = this.v(key);
        var number;
        try {
            number = parseInt(value);
            return number;
        }
        catch (e) {
            throw TypeError(key + "=" + value + " must be a number.");
        }
    };
    /**
     * Returns the numeric value for a specified key, or undefined if it cannot be found
     * @throws {TypeError} if value is not a valid number
     */
    Arg.v_number_null = function (key) {
        var value = this.v_null(key);
        if (value == null)
            return undefined;
        var number;
        try {
            number = parseInt(value);
            return number;
        }
        catch (e) {
            throw TypeError(key + "=" + value + " must be a number.");
        }
    };
    /**
    * Returns the numeric value for a specified key
    * @throws {TypeError} if value is not a valid number
    */
    Arg.v_boolean = function (key) {
        var value = this.v(key);
        if ('true' === value) {
            return true;
        }
        else if ('false' === value) {
            return false;
        }
        else {
            throw TypeError(key + "=" + value + " must be a boolean.");
        }
    };
    /**
     * Returns the numeric value for a specified key, or undefined if it cannot be found
     * @throws {TypeError} if value is not a valid number
     */
    Arg.v_boolean_null = function (key) {
        var value = this.v_null(key);
        if (value == null)
            return undefined;
        if ('true' === value) {
            return true;
        }
        else if ('false' === value) {
            return false;
        }
        else {
            return undefined;
        }
    };
    /**
     * !!! This function will convert all JSON values to strings.
     * FIXME: Make it parse JSONs properly
     */
    Arg.v_json = function (key) {
        var value = this.v(key);
        var correctJson = value.replace(/(['"])?([a-z0-9A-Z_@\-/.]+)(['"])?/g, '"$2"');
        return JSON.parse(correctJson);
    };
    Arg.v_json_null = function (key) {
        var value = this.v_null(key);
        if (value == null)
            return undefined;
        var correctJson = value.replace(/(['"])?([a-z0-9A-Z_@\-/.]+)(['"])?/g, '"$2"');
        return JSON.parse(correctJson);
    };
    return Arg;
}());
exports.default = Arg;
