"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User('Vasia');
console.log(user);
user.name = 'Pedro';
console.log(user);
class Admin {
}
const admin = new Admin();
admin.role = 1;
