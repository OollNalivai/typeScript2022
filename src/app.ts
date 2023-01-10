interface User {
    name: string;
    age?: number;
    email: string;
}

type partial = Partial<User>;
const p: partial = {};

type required = Required<User>
type readonly = Readonly<User>
type readonlyAndReadonly = Required<Readonly<User>>

const b: readonlyAndReadonly = {
    name: '',
    age: 3214,
    email: ''
}

// b.name = 'asdasd';
