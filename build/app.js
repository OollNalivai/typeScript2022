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
        return 0;
    }
}
exports.DeliveryShop = DeliveryShop;
