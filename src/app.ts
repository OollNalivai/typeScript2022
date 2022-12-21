type Constructor = new (...args: any[]) => {}
type GConstructor<T = {}> = new (...args: any[]) => T

class List {
    constructor(public items: string[]) {
    }
}

class Accordion {
    isOpened: boolean;
}

class AccordionList {
    isOpened: boolean;

    constructor(public items: string[]) {
    }
}

type ListType = GConstructor<List>
type AccordionType = GConstructor<Accordion>

class ExtendedListClass extends List {
    first() {
        let [result] = this.items;
        return result;
    }
}

function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            let [result] = this.items;
            return result;
        }
    };
}

const list = ExtendedList(AccordionList);
const res = new list(['first', 'second']);
console.log(res.first());
