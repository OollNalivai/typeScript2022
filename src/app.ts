import 'reflect-metadata';

interface UserServiceInterface {
    getUserInDatabase(): number;
}

class UserService implements UserServiceInterface {
    private _users: number;

    getUserInDatabase(): number {
        return this._users;
    }

    setUserInDatabase(@Positive() num: number): void {
        this._users = num;
    }
}

function Positive() {
    return (
        target: Object,
        propertyKey: string | symbol,
        _: number
    ) => {
        console.log(Reflect.getOwnMetadata("design:type", target, propertyKey));
        console.log(Reflect.getOwnMetadata("design:paramtypes", target, propertyKey));
        console.log(Reflect.getOwnMetadata("design:returntype", target, propertyKey));
    };
}

//
const userService = new UserService();
console.log(userService);
// userService.users = 1;
// console.log(userService.users);




