export function validateKeyExists(key, keyList) {
    if (!keyList.includes(key)) {
        throw Error("Key [" + key + "] does not exist in Storage");
    }
}
export function parse(value) {
    if (value === 'null') {
        return null;
    }
    else if (value === 'undefined') {
        return undefined;
    }
    return JSON.parse(value);
}
export function stringify(value) {
    if (value === undefined) {
        return 'undefined';
    }
    return JSON.stringify(value);
}
