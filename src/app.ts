class User {
    gitHubToken: string;
    jwtToken: string;
}

interface AuthStrategy {
    auth(user: User): boolean;
}

class Auth {

    constructor(private strategy: AuthStrategy) {
    }

    setStrategy(strategy: AuthStrategy) {
        this.strategy = strategy;

    }

    authUser(user: User): boolean {
        return this.strategy.auth(user);
    }
}

class JWTStrategy implements AuthStrategy {
    auth(user: User): boolean {
        return !!user.jwtToken;
    }
}

class GitHubStrategy implements AuthStrategy {
    auth(user: User): boolean {
        if (user.gitHubToken) {
            // Идем в API
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
