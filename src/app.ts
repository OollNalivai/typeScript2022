class Form {
    constructor(public name: string) {
    }
}

abstract class SaveForm<T> {
    save(form: Form) {
        const res = this.fill(form);
        this.log(res);
        this.send(res);
    }

    protected abstract fill(form: Form): T;

    protected log(data: T): void {
        console.log(data);
    }

    protected abstract send(data: T): void
}

class FirstAPI {

}
