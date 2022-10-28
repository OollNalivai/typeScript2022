type httpMethod = 'post' | 'get';

function fetchWidthAuth(url: string, method: httpMethod): 1 | -1 {
    console.log(method);
    return -1;
}

type User = {
    name: string,
    age: number,
    skills: string[]
}

type Role = {
    name: string
    id: number
}

type UserWithRole = User & Role;
let use: UserWithRole = {
    name: 'Poly',
    age: 22,
    skills: ['1', '2'],
    id: 2
};

type UserWithRole_2 = {
    user: User,
    role: Role
}
