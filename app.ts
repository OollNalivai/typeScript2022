class Product {
    id: number;
    title: string;
    price: number;

    constructor(
        id: number,
        title: string,
        price: number
    ) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}

class Delivery {
    date: Date;
    address?: string;
    shopId?: number;

    constructor(address: string, date: Date);
    constructor(shopId: number);
    constructor(addressOrShopId: string | number, date: Date = new Date()) {
        this.date = date;
        if (typeof addressOrShopId === 'string') {
            this.address = addressOrShopId;
        } else if (typeof addressOrShopId === 'number') {
            this.shopId = addressOrShopId;
        }
    }
}

const user1 = new Delivery(222);
const user2 = new Delivery('234234', new Date(),);

class Cart {
    products: Product[] = [];
    delivery: Delivery;
}
