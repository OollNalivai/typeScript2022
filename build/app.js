"use strict";
class PaymentAPI {
    constructor() {
        this.data = [{ id: 1, sum: 10000 }];
    }
    getPaymentDetail(id) {
        return this.data.find(d => d.id === id);
    }
}
class PaymentAccessProxy {
    constructor(api, UserId) {
        this.api = api;
        this.UserId = UserId;
    }
    getPaymentDetail(id) {
        if (this.UserId === 1) {
            return this.api.getPaymentDetail(id);
        }
        console.log('Попытка получить данные платежа!');
        return undefined;
    }
}
const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetail(1));
const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPaymentDetail(1));
