enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILD
}

enum StatusCodeStr {
    SUCCESS = 'a',
    IN_PROCESS = 'c',
    FAILD = 'f'
}

enum StatusCodeGeter {
    SUCCESS = 1,
    IN_PROCESS = 'h',
    FAILD = 'f'
}

const res = {
    message: 'Платеж успешен',
    status: StatusCode.SUCCESS
}

function action(status: StatusCodeGeter) {
    console.log('res = ' + status )
}

const enum Roles {
    ADMIN = 1,
    USER = 2
}

const res2 = Roles.ADMIN;

action(StatusCodeGeter.FAILD)

console.log(res.status === StatusCode.SUCCESS);
