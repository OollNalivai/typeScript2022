"use strict";
class Vehicle {
    constructor() {
        this.damages = [];
    }
    set model(m) {
        this._model = m;
    }
    get model() {
        return this._model;
    }
    addDamage(damage) {
        this.damages.push(damage);
        console.log(this.damages);
    }
}
new Vehicle().addDamage('222222');
let b = new Vehicle();
b.model = '1111111';
if (b.model) {
    console.log(b.model);
}
