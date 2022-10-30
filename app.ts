interface User {
    name: string,
}

interface User {
    age: number
}

const user: User = {
    name: 'ddd',
    age: 23
} // адеватное дооопределение например в библиотеке, так разделять плохая идея

type ID = string | number;

interface IDI {
    ID: string | number
}
