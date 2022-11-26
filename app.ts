class Vehicle {
    public make: string;
    private damages: string[] = [];
    private _model: string;
    protected run: number;
    #price: number;

    set model(m: string) {
        this._model = m;
        this.#price = 100;
    }

    get model() {
        return this._model;
    }

    isPriceEquel (v: Vehicle) {
        return this.#price === v.#price
    }

    addDamage(damage: string) {
        this.damages.push(damage);

        console.log(this.damages);
    }
}

class EuroTruck extends Vehicle {
    setRun(km: number) {
        this.run = km / 0.62;
        // this.damages - error
    }
}


new Vehicle().addDamage('222222');
let b = new Vehicle();
b.model = '1111111';
if (b.model) {
    console.log(b.model);
}


