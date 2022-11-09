let a = 5;
let b: string = a.toString();

let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

let c = 'asd';
let d: number = +c;
let d1: number = parseInt(c);


interface User {
    name: string;
    email: string;
    login: string;
}

const user: User = {
    name: 'adasdas',
    email: 'asd@asd.asd',
    login: 'asdad'
}

interface Admin {
    name: string,
    role: number
}

const admin: Admin = {
    ...user,
    role: 1
}

function userToAdmin (user: User): Admin {
    return {
        name: user.name,
        role: 1
    }
}
