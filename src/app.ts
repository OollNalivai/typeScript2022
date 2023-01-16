interface UserServiceInterface {
    users: number;

    getUserInDatabase(): number;
}

class UserService implements UserServiceInterface {
    users: number = 1000;

    getUserInDatabase(): number {
        return this.users;
    }
}

function nullUser(obj: UserServiceInterface) {
    obj.users = 0;
    return obj;
}

function logUsers(obj: UserServiceInterface) {
    console.log('users =', obj.users);
    return obj;
}

console.log(new UserService().getUserInDatabase());
console.log(nullUser(new UserService()).getUserInDatabase());
console.log(logUsers(nullUser(new UserService())).getUserInDatabase());
console.log(nullUser(logUsers(new UserService())).getUserInDatabase());

