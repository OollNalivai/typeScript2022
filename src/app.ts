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
        parameterIndex: number
    ) => {
        console.log(target)
        console.log(propertyKey)
        console.log(parameterIndex)
    };
}
//
// const userService = new UserService();
// userService.users = 1;
// console.log(userService.users);




