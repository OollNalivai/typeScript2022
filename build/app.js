"use strict";
const key = 'name';
function getValue(obj, key) {
    return obj[key];
}
const user = {
    name: 'Koko',
    age: 2
};
const userName = getValue(user, 'name');
