module.exports = class ShoppingCart {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }
    addItem(itemName, quantity, price) {
        const item = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        }

        return this.items.push(item)
    }
    clear() {
        return this.items.splice(0, this.items.length)
    }
    total() {        
        return this.items.reduce((acc, value) => acc + value.quantity * value.pricePerUnit, 0)
    }
}

