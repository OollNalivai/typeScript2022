"use strict";
function logID(id) {
    console.log(id);
}
const a = logID(1);
function multiply(f, s) {
    if (!s) {
        return f * f;
    }
    return f * s;
}
const f1 = () => {
};
const f2 = () => {
    return true;
};
const b = f2();
