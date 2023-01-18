interface UserServiceInterface {
    users: number;

    getUserInDatabase(): number;
}

@setUsers(2)
@setUserAdvanced(4)
// @threeUserAdvanced
class UserService implements UserServiceInterface {
    users: number
    ;

    getUserInDatabase(): number {
        return this.users;
    }
}

function nullUser(target: Function) {
    target.prototype.users = 0;
}

function setUsers(users: number) {
    return (target: Function) => {
        target.prototype.users = users;
    };
}

function threeUserAdvanced<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 3;
    };
}

function setUserAdvanced(users: number) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            users = users;
        };
    };
}

console.log(new UserService().getUserInDatabase());


