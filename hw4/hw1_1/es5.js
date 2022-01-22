'use strict';
function Product (name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function() {
    this.price *= 0.75;
};

let Prod1 = new Product('shirt', 1000);
Prod1.make25PercentDiscount();
console.log(Prod1.name);
console.log(Prod1.price);