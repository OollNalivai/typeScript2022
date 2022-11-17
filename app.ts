class User {
    _login: string;
    password: string;

    set login(l: string) {
        this._login = 'user-' + l;
    }

    get login() {
        return 'no_login'
    }
}

const user = new User();
user.login = 'petr'
console.log(user);
console.log(user.login);
