"use strict";
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) { }
}
function rec() {
    return rec();
}
const a0 = undefined;
let a;
