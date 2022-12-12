"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
function createUser(name) {
    const defaultUser = new User('asdassda');
    defaultUser.role = undefined;
    switch (User.role) {
        case 'admin':
            return;
        case 'user':
            return true;
    }
}
