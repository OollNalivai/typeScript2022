"use strict";
const user = {
    login: 'a@a.re',
    password: '123123'
};
function multiply(first, second) {
    // return !second ? first * first : first * second
    if (!second) {
        return first * first;
    }
    return first * second;
}
multiply(5);
