function getFullName(userEntity: { firstname: string, surname: string }): string {
    return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
    firstname: 'Anton',
    surname: 'Pos',
    city: 'Minsk',
    age: 14,
    skills: {
        dev: true,
        devops: true
    }
};

console.log(getFullName(user));

let client: {
    officeId: number,
    isOpened: boolean,
    contacts: {
        phone: string,
        email: string,
        address: {
            city: string
        }
    }
} = {
    'officeId': 45,
    'isOpened': false,
    'contacts': {
        'phone': '+79100000000',
        'email': 'my@email.ru',
        'address': {
            'city': 'Москва'
        }
    }
};
