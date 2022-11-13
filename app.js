"use strict";
class User {
    constructor(nameOrAge, age) {
        if (typeof nameOrAge === 'string') {
            this.name = nameOrAge;
        }
        else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const user = new User('Vasia');
const user2 = new User();
const user3 = new User(33);
const user4 = new User('Vasia', 33);
console.log(user);
