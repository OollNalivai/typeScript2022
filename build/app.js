"use strict";
const form = {
    name: 'Losha',
    password: '1234'
};
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Должен быть длиннее 5 симоволов' }
};
