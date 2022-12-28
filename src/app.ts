interface Role {
    name: string
}

interface User {
    name: string;
    roles: Role[]
}

const user: User = {
    name: 'Pol',
    roles: []
}

const nameUser = user['name']
let roleNames: 'roles' = 'roles'
// const roleNames = 'roles';

type rolesType = User['roles']
type rolesType2 = User[typeof roleNames]


