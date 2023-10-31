"use strict";

let lunch = [
             {item: 'Steak & Eggs', price: 15.99},
             {item: 'Kale Salad', price: 12.99},
             {item: 'Iced Green Tea', price: 2.50}
];

    let sum = 0;
    
    let numFoodItems = lunch.length;
    for (let i = 0; i < numFoodItems; i++) {
        sum += lunch[i].price;
    }

console.log('Food Total:  $' + sum);

let tax = sum * 0.08;

console.log('Tax:    $' + tax.toFixed(2));

let tip = sum * 0.18;

console.log('Tip:    $' + tip.toFixed(2));

let grandTotal = sum + tax + tip;

console.log('Grand Total:   $' + grandTotal.toFixed(2));
