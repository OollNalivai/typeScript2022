"use strict";
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUserInDatabase() {
        return this.users;
    }
}
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log('users =', obj.users);
    return obj;
}
console.log(new UserService().getUserInDatabase());
console.log(nullUser(new UserService()).getUserInDatabase());
console.log(logUsers(nullUser(new UserService())).getUserInDatabase());
console.log(nullUser(logUsers(new UserService())).getUserInDatabase());
