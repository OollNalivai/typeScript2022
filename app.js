"use strict";
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const res = new UserBuilder().setName('Vasiok');
const resAdmin = new AdminBuilder().setName('Vasiok');
let user = new UserBuilder();
if (user.isAdmin()) {
    console.log(user);
}
else {
    console.log(user);
}
