class Resp<D, E> {
    // data?: D;
    // error?: E;

    constructor(public data?: D,public error?: E) {
        // if (data) {
        //     this.data = data;
        // }
        // if (error) {
        //     this.error = error;
        // }
    }
}

const res = new Resp<string, number>('data', 0);
console.log(res);

class HTTPResp<F> extends Resp<string, number> {
    code: F;

    setCode(code: F) {
        this.code = code;

    }
}

const res2 = new HTTPResp('2312', 111);
console.log(res2.error);
