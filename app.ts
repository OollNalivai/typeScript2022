class User {

    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const user = new User('Vasia');
console.log(user);
user.name = 'Pedro';
console.log(user);

class Admin {
    role: number;
}

const admin = new Admin();
admin.role = 1;
