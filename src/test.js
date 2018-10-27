
const items = [
    {
        name: 'a',
        quantity: 2,
        price: 1.5
    },
    {
        name: 'b',
        quantity: 3,
        price: 5
    }
]


console.log(items.reduce((a, b) => a + b.quantity*b.price, 0))