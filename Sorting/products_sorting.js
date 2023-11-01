"use strict";

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Sour Patch Kids", price: 4.99 },
    { product: "Sour Patch Belts", price: 3.49 },
    { product: "Snickers", price: 1.99 },
    { product: "Hershey Chocolate Bar", price: 2.49 },
    { product: "Chunky", price: 0.99 },
    { product: "Raisinets", price: 2.19 },
];

products.sort(function(a,b) {
    if (a.product < b.product) return -1;
    else if (a.product == b.product) return 0;
    else return 1;
})

let numProducts = products.length;
for(let i = 0; i < numProducts; i++) {
    console.log(products[i].product);
}

console.log("----------------");

products.sort(function(a,b) {
    if (a.product > b.product) return -1;
    else if (a.product == b.product) return 0;
    else return 1;
});

for(let i = 0; i < numProducts; i++) {
    console.log(products[i].product);
}