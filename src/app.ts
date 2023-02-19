interface PaymentAPIInterface {
    getPaymentDetail(id: number): PaymentDetailInterface | undefined;
}

interface PaymentDetailInterface {
    id: number;
    sum: number;
}

class PaymentAPI implements PaymentAPIInterface {
    private data = [{id: 1, sum: 10000}];

    getPaymentDetail(id: number): PaymentDetailInterface | undefined {
        return this.data.find(d => d.id === id);
    }
}

class PaymentAccessProxy implements PaymentAPIInterface {
    constructor(private api: PaymentAPI, private UserId: number) {
    }

    getPaymentDetail(id: number): PaymentDetailInterface | undefined {
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
