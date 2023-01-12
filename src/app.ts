class User {
    constructor(public id: number, public name: string) {
    }
}

function getData(id: number): User {
    return new User(id, 'Loshapio');
}

type RT = ReturnType<typeof getData> // User
type RT2 = ReturnType<() => void> // void
type RT3 = ReturnType<<T>() => T> // unknown
type RT4 = ReturnType<<T extends string>() => T> // string

type PT = Parameters<typeof getData>[0] // number
