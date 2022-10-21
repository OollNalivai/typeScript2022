"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Anton',
    surname: 'Popadan',
    city: 'Minsk',
    age: 14,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullName(user));
