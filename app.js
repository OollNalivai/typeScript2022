"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Anton',
    surname: 'Pos',
    city: 'Minsk',
    age: 14,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullName(user));
