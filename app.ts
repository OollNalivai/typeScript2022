function logID(id: string | number): void {
    console.log(id);
}

const a = logID(1);

function multiply(f: number, s?: number) {
    if(!s) {
        return f * f;
    }
    return f * s;
}

type voidFunc = () => void

const f1: voidFunc = () => {

}

const f2: voidFunc = () => {
    return true
}

const b = f2();

const skills = ['dev', 'DevOps']

const user = {
    sk: ['Feed']
}

skills.forEach((skill) => {
    user.sk.push(skill)
})
console.log(user)
