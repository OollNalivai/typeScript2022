"use strict";
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function sortDataFun(data, directionType = { direction: 'increase' }) {
    switch (directionType.direction) {
        case 'increase':
            return data.sort((a, b) => a.id - b.id);
        case 'decrease':
            return data.sort((a, b) => b.id - a.id);
    }
}
console.log(sortDataFun(data));
console.log(sortDataFun(data, { direction: 'increase' }));
console.log(sortDataFun(data, { direction: 'decrease' }));
