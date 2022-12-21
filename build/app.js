"use strict";
class List {
    constructor(items) {
        this.items = items;
    }
}
class Accordion {
}
class AccordionList {
    constructor(items) {
        this.items = items;
    }
}
class ExtendedListClass extends List {
    first() {
        let [result] = this.items;
        return result;
    }
}
function ExtendedList(Base) {
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
