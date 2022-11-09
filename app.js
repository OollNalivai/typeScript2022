"use strict";
let a = 5;
let b = a.toString();
let e = new String(a).valueOf();
let f = new Boolean(a).valueOf();
let c = 'asd';
let d = +c;
let d1 = parseInt(c);
const user = {
    name: 'adasdas',
    email: 'asd@asd.asd',
    login: 'asdad'
};
const admin = Object.assign(Object.assign({}, user), { role: 1 });
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1
    };
}
