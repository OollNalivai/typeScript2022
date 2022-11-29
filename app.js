"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(addressOrShopId, date = new Date()) {
        this.date = date;
        if (typeof addressOrShopId === 'string') {
            this.address = addressOrShopId;
        }
        else if (typeof addressOrShopId === 'number') {
            this.shopId = addressOrShopId;
        }
    }
}
const user1 = new Delivery(222);
const user2 = new Delivery('234234', new Date());
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProductById(id) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                // this.products.slice(id, 1)
            }
        }
    }
}
const cart = new Cart();
cart.addProduct(new Product(0, '21312', 23));
cart.addProduct(new Product(1, '21312', 23));
cart.addProduct(new Product(2, '21312', 23));
cart.addProduct(new Product(3, '21312', 23));
cart.deleteProductById(2);
console.log(cart.products);
