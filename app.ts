class Vehicle {
    public make: string;
    private damages: string[] = [];
    private _model: string;

    set model(m: string) {
        this._model = m;
    }

    get model() {
        return this._model;
    }

    addDamage(damage: string) {
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


