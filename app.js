"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(addressOrShopId, dateDelivery = new Date()) {
        this.dateDelivery = dateDelivery;
        if (typeof addressOrShopId === 'string') {
            this.address = addressOrShopId;
        }
        else if (typeof addressOrShopId === 'number') {
            this.shopId = addressOrShopId;
        }
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProductById(id) {
        this.products = this.products.filter((product) => product.id !== id);
        console.log(this.products);
    }
    getSum() {
        return this.products.reduce((acc, cur) => acc + cur.price, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length === 0) {
            throw new Error('Нет продуктов, привезти пустой пакет?');
        }
        if (this.delivery === undefined) {
            throw new Error('Нет данных по доставке, рил, куда везти?');
        }
        console.log('Плати деньги, еда выезжает.');
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(0, '21312', 20));
cart.addProduct(new Product(1, '21312', 20));
cart.addProduct(new Product(2, '21312', 20));
cart.addProduct(new Product(3, '21312', 20));
cart.deleteProductById(2);
console.log(cart.getSum());
cart.setDelivery(new Delivery('234234', new Date()));
cart.checkOut();
