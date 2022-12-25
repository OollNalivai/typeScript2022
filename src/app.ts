// Необходимо написать функцию группировки,
// которая принимает массив объектов
// и его ключ, производит группировку по указанному ключу и возращает
// сгруппированный объект.
// [
// 	{ group: 1, name: 'a' },
// 	{ group: 1, name: 'b' },
// 	{ group: 2, name: 'c' },
// ];
// При группироке по 'group' ---->
// {
// 	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
// 	'2': [ { group: 2, name: 'c' } ]
// }

function group<T extends Record<string, any>>(array: T[], key: keyof T ): GroupInterface<T> {
    // return array.reverse<GroupInterface<T>>((map: GroupInterface<T>, item) => {
    //     const itemKey = item[key];
    //     if() {
    //
    //     }
    // })
}

interface Data {
    group: number;
    name: string;
}

interface GroupInterface<T> {
    [key: string]: T
}

type key = string | number | symbol;

const data: Data[] = [
    {group: 1, name: 'a'},
    {group: 1, name: 'b'},
    {group: 2, name: 'c'}
];
