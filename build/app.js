"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryShop = void 0;
class DeliveryItem {
    addItem(item) {
        this.items.push(item);
    }
}
class DeliveryShop extends DeliveryItem {
    constructor(deliveryFee) {
        super();
        this.deliveryFee = deliveryFee;
    }
    getPrice() {
        return this.items.reduce((acc, i) => acc += i.getPrice(), 0) + this.deliveryFee;
    }
}
exports.DeliveryShop = DeliveryShop;
