class User {
    constructor(public id: number, public name: string) {
    }
}

type CP = ConstructorParameters<typeof User> //  [id: number, name: string ]
type IT = InstanceType<typeof User> // User
