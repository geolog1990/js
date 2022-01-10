'use strict';
/* меняем стоимость товара с помощью метода map */
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
const productsWithDiscount15 = products.map(function(product) {
    let newPrice = product.price * 0.85;
    return Object.assign({}, product, {price: newPrice});
    /*поверхностное копирование объектов в новый массив с помощью assign */
});

console.log(productsWithDiscount15);