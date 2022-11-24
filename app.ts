class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Users extends Array<User> {
    searchByName(name: string) {
        return this.filter(u => u.name === name);
    }

    override toString(): string {
        return this.map(u => u.name).join(', ');
    }
}

const users = new Users();
users.push(new User('lalka'));
users.push(new User('Shakalka'));
console.log(users.toString());

class UserList {
    users: User[];

    push(u: User) {
        this.users.push(u);
    }
}


class Payment {
    time: string
    date: Date;
}

class UserWithPayment extends Payment {
    name: string;
}

class UserWithPayment2 {
    user: User;
    payment: Payment;

    constructor(user: User, payment: Payment) {
        this.user = user;
        this.payment = payment;
    }
}
