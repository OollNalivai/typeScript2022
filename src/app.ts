interface UserServiceInterface {
    users: number;

    getUserInDatabase(): number;
}

class UserService implements UserServiceInterface {
    users: number = 1000;

    @Log
    getUserInDatabase(): number {
        throw new Error('ERROR');
    }
}

function Log(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    descriptor.value = () => {
        console.log('NO ERROR');
    }
    // return {
    //     enumerable: true
    // }
}

console.log(new UserService().getUserInDatabase());


