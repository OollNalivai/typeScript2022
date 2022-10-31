interface User {
    login: string,
    password?: string
}

const user: User = {
    login: 'a@a.re',
    password: '123123'
};

function multiply(first: number, second?: number): number {
    // return !second ? first * first : first * second
    if (!second) {
        return first * first;
    }
    return first * second;
}
multiply(5)

interface UserPro {
    login: string,
    password?: string
}
