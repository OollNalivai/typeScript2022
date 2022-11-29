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

    addProduct(product: Product): void {
        this.products.push(product);
    }

    deleteProductById(id: number): void {
        for (let i = 0; i < this.products.length; i++ ) {
            if (this.products[i].id === id) {
                // this.products.slice(id, 1)
            }
        }

    }
}


const cart = new Cart();
cart.addProduct(new Product(0, '21312', 23))
cart.addProduct(new Product(1, '21312', 23))
cart.addProduct(new Product(2, '21312', 23))
cart.addProduct(new Product(3, '21312', 23))
cart.deleteProductById(2)
console.log(cart.products);




