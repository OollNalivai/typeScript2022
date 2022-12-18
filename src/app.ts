// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию

const data = [
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'},
    {id: 3, name: 'Надя'},
];

interface inputIdObj {
    id: number;
}

type directionType = {
    direction: 'increase' | 'decrease'
}

function sortDataFun<T extends inputIdObj>(
    data: T[],
    directionType: directionType = {direction: 'increase'}): T[] {
    switch (directionType.direction) {
        case 'increase':
            return data.sort((a, b) => a.id - b.id);
        case 'decrease':
            return data.sort((a, b) => b.id - a.id);
    }
}

console.log(sortDataFun(data));
console.log(sortDataFun(data, {direction: 'increase'}));
console.log(sortDataFun(data, {direction: 'decrease'}));
