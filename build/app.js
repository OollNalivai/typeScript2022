"use strict";
class Resp {
    constructor(data, error) {
        this.data = data;
        this.error = error;
    }
}
const res = new Resp('data', 0);
console.log(res);
class HTTPResp extends Resp {
    setCode(code) {
        this.code = code;
    }
}
const res2 = new HTTPResp('2312', 111);
console.log(res2.error);
