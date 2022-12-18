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
    data.sort((a, b) => a.id - b.id);
    if (directionType.direction == 'increase') {
        console.log(data);
        return data;
    } else {
        data = data.reverse();
        console.log(data);
        return data;
    }

}

sortDataFun(data);
sortDataFun(data, {direction: 'increase'});
sortDataFun(data, {direction: 'decrease'});
