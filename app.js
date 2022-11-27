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
}
