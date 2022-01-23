'use strict';

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price *= 0.75;
    }
};

let Prod2 = new Product('shirt', 1000);
Prod2.make25PercentDiscount();
console.log(Prod2.name);
console.log (Prod2.price);