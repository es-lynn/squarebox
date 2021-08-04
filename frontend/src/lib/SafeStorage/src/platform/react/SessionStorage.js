var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { SafeStorage } from '../../SafeStorage';
import { DOMSessionStorage } from './dom/DOMStorage';
var SessionStorage = (function (_super) {
    __extends(SessionStorage, _super);
    function SessionStorage(storageName, initialValue) {
        if (storageName === void 0) { storageName = 'GLOBAL'; }
        var _this = _super.call(this, DOMSessionStorage, storageName, initialValue) || this;
        _this.seed();
        _this.clean();
        return _this;
    }
    return SessionStorage;
}(SafeStorage));
export { SessionStorage };
