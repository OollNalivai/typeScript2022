interface UserServiceInterface {
    users: number;

    getUserInDatabase(): number;
}

@CreatedAt()
class UserService implements UserServiceInterface {
    users: number = 1000;

    getUserInDatabase(): number {
        return this.users;
    }
}

function CreatedAt() {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            createdAt = new Date().toString();
        };
    };
}

type CreatedAt = {
    createdAt: Date;
}


console.log(new UserService());
console.log((new UserService() as UserServiceInterface & CreatedAt).createdAt);

