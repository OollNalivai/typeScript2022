class Product {
    constructor(
        id: number,
        title: string,
        price: number
    ) {
    }
}

class Delivery {
    date: Date;
    address: string;
    shopId: number;

    constructor(date: Date, address: string);
    constructor(date: Date, shopId: number);
    constructor(date: Date, addressOrShopId?: string | number) {
        this.date = date
        if (typeof addressOrShopId === 'string') {
            this.address = addressOrShopId;
        } else if (typeof addressOrShopId === 'number') {
            this.shopId = addressOrShopId;
        }
    }
}

const user1 = new Delivery(new Date(), 'asdasd');
const user2 = new Delivery(new Date(),22);

class Cart {
    products: any;
    delivery: any;
}
