"use strict";
function toString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case 'string':
            return data;
        case 'number':
        case 'boolean':
        case 'symbol':
        case 'function':
        case 'bigint':
            return data.toString();
        case 'object':
            return JSON.stringify(data);
    }
    return undefined;
}
console.log(toString(123132));
console.log(toString('123132'));
console.log(toString(false));
console.log(toString(function a() { }));
console.log(toString({ '13': 23, 444: 'asdasd', a: { 'a': '3231' } }));
console.log(toString(['23', '2334212']));
