"use strict";
class User {
}
class Auth {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    authUser(user) {
        return this.strategy.auth(user);
    }
}
class JWTStrategy {
    auth(user) {
        return !!user.jwtToken;
    }
}
class GitHubStrategy {
    auth(user) {
        if (user.gitHubToken) {
            return true;
        }
        return false;
    }
}
const user = new User();
user.jwtToken = 'token';
const auth = new Auth(new JWTStrategy());
console.log(auth.authUser(user));
auth.setStrategy(new GitHubStrategy());
console.log(auth.authUser(user));
