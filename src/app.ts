interface UserServiceInterface {
    users: number;

    getUserInDatabase(): number;
}

class UserService implements UserServiceInterface {
    users: number = 1000;

    @Catch({rethrow: true})
    getUserInDatabase(): number {
        throw new Error('ERROR');
    }
}

function Catch({rethrow}: { rethrow: boolean } = {rethrow: false}) {
    return (
        target: Object,
        _: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        const method = descriptor.value;
        descriptor.value = async (...args: any[]) => {
            try {
                return await method?.apply(target, args);
            } catch (e) {
                if (e instanceof Error) {
                    console.log(e);
                    if (rethrow) {
                        throw e;
                    }
                }
            }
        };
    };
}

console.log(new UserService().getUserInDatabase());


