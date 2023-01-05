type Modifier = 'read' | 'update' | 'create';

type USerRoles = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier
}

type ModifierToAccess<Type> = {
    +readonly [Property in keyof Type
        as Exclude<
        `canAccess${string & Property}`, 'canAccessadminPanel'>]-?: boolean;
    // + - модификаторы для свойств
    // уюрали ненужный тип canAccessadminPanel
}

type UserAccess2 = ModifierToAccess<USerRoles>

type UserAccess1 = {
    customers?: boolean,
    projects?: boolean,
    adminPanel?: boolean
}
