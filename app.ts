function generateError(message: string): never {
    throw new Error(message)
}

function dumpError(): never {
    while (true) {}
}

function rec(): never {
    return rec()
}

const a0: void = undefined

let a: never;
