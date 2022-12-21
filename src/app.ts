type Constructor = new (...args: any[]) => {}
type GConstructor<T = {}> = new (...args: any[]) => T

class List {
    constructor(public items: string[]) {
    }

}

type ListType = GConstructor<List>

class ExtendedListClass extends List {
    first() {
        let [result] = this.items;
        return result;
    }
}

function ExtendedList<TBase extends ListType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            let [result] = this.items;
            return result;
        }
    };
}

const list = ExtendedList(List);
const res = new list(['first', 'second'])
console.log(res.first());
