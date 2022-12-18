"use strict";
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function sortDataFun(data, directionType = { direction: 'increase' }) {
    data.sort((a, b) => a.id - b.id);
    if (directionType.direction == 'increase') {
        console.log(data);
        return data;
    }
    else {
        data = data.reverse();
        console.log(data);
        return data;
    }
}
sortDataFun(data);
sortDataFun(data, { direction: 'increase' });
sortDataFun(data, { direction: 'decrease' });
