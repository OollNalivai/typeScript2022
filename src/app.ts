/* Сделать тип для результата валидации формы */

interface FormType {
    name: string;
    password: string;
}

type formMappedType<T> = {
    [Property in keyof T]: {
    isValid: true;
} | {
    isValid: false;
    errorMessage: string;
}
}

type formValidationType = formMappedType<FormType>

const form: FormType = {
    name: 'Losha',
    password: '1234'
};

const formValidation: formValidationType = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: 'Должен быть длиннее 5 симоволов'}
};
