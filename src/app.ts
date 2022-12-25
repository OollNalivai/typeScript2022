interface GroupInterface<T> {
    [key: string]: T[];
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(array: T[], key: keyof T): GroupInterface<T> {
    return array.reduce<GroupInterface<T>>((map: GroupInterface<T>, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        } else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}

interface Data {
    group: number;
    name: string;
}

const data: Data[] = [
    {group: 1, name: 'a'},
    {group: 1, name: 'b'},
    {group: 2, name: 'c'}
];

const res = group<Data>(data, 'name')
console.log(res)
