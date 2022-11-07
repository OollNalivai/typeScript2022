function generateError(message: string): never {
    throw new Error(message);
}

function dumpError(): never {
    while (true) {
    }
}

function rec(): never {
    return rec();
}

const a0: void = undefined;

let a: never;

type paymentAction = 'refund' | 'checkout';

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        default:
            const _: never = action;
            throw new Error('Нет такого action');
    }
}
