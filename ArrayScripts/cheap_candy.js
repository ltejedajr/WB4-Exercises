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

// Which candies costs less than $4.00?
let cheaperCandies = [];
let numProducts = products.length;

for (let i = 0; i < numProducts; i++) {
    let productInfo = products[i];
    if (productInfo.price <= 4.00) {

        cheaperCandies.push(productInfo.product);
    
    }
}

console.log('The candies that cost less than $4.00 are: ');
for (let i = 0; i < cheaperCandies.length; i++) {
    console.log(cheaperCandies[i]);
}

// Which candies have "M&M" in its name?
let mAndM = [];

for (let i = 0; i < numProducts; i++) {
    let productInfo = products[i];
    if (productInfo.product.includes("M&Ms")) {

        mAndM.push(productInfo.product);
    }

}

console.log('The candies that have "M&M" in their names are: ');
for (let i = 0; i < mAndM.length; i++) {
    console.log(mAndM[i]);
}

// Do we carry "Swedish Fish"?
let swedishFish = [];

for (let i = 0; i < numProducts; i++) {
    let productInfo = products[i];
    if (productInfo.product == "Swedish Fish") {

        swedishFish.push(productInfo.product);
    }
}

for (let i = 0; i < swedishFish.length; i++) {
    console.log('Yes, we do carry ' + swedishFish[i] + '.');
}