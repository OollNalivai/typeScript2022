type Modifier = 'read' | 'update' | 'create';

type USerRoles = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier
}

type ModifierToAccess<Type> = {
    [Property in keyof Type]: boolean;
}

type UserAccess1 = {
    customers?: boolean,
    projects?: boolean,
    adminPanel?: boolean
}
