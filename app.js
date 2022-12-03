"use strict";
class UserService {
    constructor(id) {
    }
    static getUser(id) {
        return this.db.finedById(id);
    }
    create() {
        UserService.db = {};
    }
}
(() => {
    UserService.db = '123';
})();
UserService.getUser(1);
const inst = new UserService(1);
inst.create();
