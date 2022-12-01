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
    private dateDelivery: Date;
    private address?: string;
    private shopId?: number;

    constructor(address: string, dateDelivery: Date);
    constructor(shopId: number);
    constructor(addressOrShopId: string | number, dateDelivery: Date = new Date()) {
        this.dateDelivery = dateDelivery;
        if (typeof addressOrShopId === 'string') {
            this.address = addressOrShopId;
        } else if (typeof addressOrShopId === 'number') {
            this.shopId = addressOrShopId;
        }
    }
}

class Cart {
    public products: Product[] = [];
    private delivery: Delivery;

    addProduct(product: Product): void {
        this.products.push(product);
    }

    deleteProductById(id: number): void {
        this.products = this.products.filter(product => product.id !== id);
        console.log(this.products);
    }

    getSum(products: Product[]): number {
        return products.reduce((acc, cur) => acc + cur.price, 0);
    }

    setDelivery(delivery: Delivery) {
        this.delivery = delivery;
    }

    checkOut() {
        if (this.products.length === 0) {
            throw new Error('Нет продуктов, привезти пустой пакет?');
        }

        if (this.delivery === undefined) {
            throw new Error('Нет данных по доставке, рил, куда везти?');
        }
        return console.log('Плати деньги, еда выезжает.')
    }
}

// const user1 = new Delivery(222);
// const user2 = new Delivery('234234', new Date());
const cart = new Cart();
cart.addProduct(new Product(0, '21312', 20));
cart.addProduct(new Product(1, '21312', 20));
cart.addProduct(new Product(2, '21312', 20));
cart.addProduct(new Product(3, '21312', 20));
cart.deleteProductById(2);
console.log(cart.getSum(cart.products));
cart.setDelivery(new Delivery('234234', new Date()))
cart.checkOut()
