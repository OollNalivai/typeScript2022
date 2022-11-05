let input: unknown;

input = 3;
input = ['asd', 'asd'];

function run(i: unknown) {
    if (typeof i == 'number') {
        i++;
    } else {
        i;
    }
    return console.log(i);
}

run(input);

async function getData() {
    try {
        await fetch('');
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function getDataForce() {
    try {
        await fetch('');
    } catch (error) {
        const e = error as Error;
        console.log(e.message); // только если 100% понимаешь .что ошибка, иначе код упадет
    }
}

type U1 = unknown | number

type I1 = unknown & string
