class User {
    _login: string;
    _password: string;
    createdAt: Date;

    set login(l: string) {
        this._login = 'user-' + l;
        this.createdAt = new Date();
    }

    get login() {
        return this._login
    }

    async getPassword(p: string) {
        // await
    }

    // set password(p: string) {
    //     //sync
    // }
}

const user = new User();
user.login = 'petr'
console.log(user);
console.log(user.login);
