"use strict";
class Product {
    constructor(id, title, price) {
    }
}
class Delivery {
    constructor(date, addressOrShopId) {
        this.date = date;
        if (typeof addressOrShopId === 'string') {
            this.address = addressOrShopId;
        }
        else if (typeof addressOrShopId === 'number') {
            this.shopId = addressOrShopId;
        }
    }
}
const user1 = new Delivery(new Date(), 'asdasd');
const user2 = new Delivery(new Date(), 22);
class Cart {
}
