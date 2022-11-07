"use strict";
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) {
    }
}
function rec() {
    return rec();
}
const a0 = undefined;
let a;
function processAction(action) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        default:
            const _ = action;
            throw new Error('Нет такого action');
    }
}
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('error111');
}
