'use strict';
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithJPG = products.filter(function (product) {
   return product.photos != undefined && product.photos.length != 0;
});
/* Выбираем объекты с фотографиями */
console.log(productsWithJPG);

products.sort(function (a, b) {
   if (a.price < b.price) {
       return -1;
   }
   if (a.price > b.price) {
       return 1;
   }
   if (a.price = b.price) {
       return 0;
   }
});
console.log(products);
