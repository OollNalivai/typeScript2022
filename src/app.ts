interface UserServiceInterface {
    users: number;

    getUserInDatabase(): number;
}

@setUsers(2)
@log()
// @setUserAdvanced(4)
// @threeUserAdvanced
class UserService implements UserServiceInterface {
    users: number = 1000;

    getUserInDatabase(): number {
        return this.users;
    }
}

function nullUser(target: Function) {
    target.prototype.users = 0;
}

function setUsers(users: number) {
    console.log('setUsers init');
    return (target: Function) => {
        console.log('setUsers run');
        target.prototype.users = users;
    };
}

function log() {
    console.log('log init');
    return (target: Function) => {
        console.log('log run')
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


