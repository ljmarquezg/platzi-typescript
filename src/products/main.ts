import { addProduct, calcStock, products } from "./product.service";

addProduct({
    title: 'Shirt',
    description: 'This is a shirt',
    price: 10,
    stock: 100,
    size: 'l'
});

addProduct({
    title: 'Shirt',
    description: 'This is a shirt',
    price: 10,
    stock: 100,
});

console.log(products);
const totalStock = calcStock();

console.log(totalStock);