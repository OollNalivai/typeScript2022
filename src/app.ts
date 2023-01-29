interface UserServiceInterface {
    users: number;

    getUserInDatabase(): number;
}

class UserService implements UserServiceInterface {
    @Max(100)
    users: number = 1000;

    getUserInDatabase(): number {
        throw new Error('ERROR');
    }
}

function Max(max: number) {
    return (
        target: Object,
        propertyKey: string | symbol,
    ) => {
        let value: number;
        const setter = function (newValue: number) {
            if (newValue > max) {
                console.log(`Нельзя установить значение больше ${max}`);
            } else {
                value = newValue;
            }
        };
        const getter = function () {
            console.log('значение присвоено')
            return value;
        };

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}

const userService = new UserService();
userService.users = 1;
console.log(userService.users);
userService.users = 1000;
console.log(userService.users);



