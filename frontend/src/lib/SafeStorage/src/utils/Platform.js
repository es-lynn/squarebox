function isBrowser() {
    if (window) {
        return true;
    }
    return false;
}
function isMobileApp() {
    return false;
}
function isDesktopApp() {
    return false;
}
export function device() {
    if (isBrowser()) {
        return 'browser';
    }
    throw Error('Not implemented');
}
