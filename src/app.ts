interface UserInterface {
    name: string;
    age: number;
}

type KeyOfUser = keyof UserInterface;

const key: KeyOfUser = 'name';

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user: UserInterface = {
    name: 'Koko',
    age: 2
};

const userName = getValue(user, 'name');
