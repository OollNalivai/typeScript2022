abstract class DeliveryItem {
    items: DeliveryItem[]

    addItem(item: DeliveryItem) {
        this.items.push(item)
    }

    abstract getPrice(): number
}

export class DeliveryShop extends DeliveryItem {
    constructor(public deliveryFee: number) {
        super();
    }

    getPrice(): number {
        return 0
    }
}
