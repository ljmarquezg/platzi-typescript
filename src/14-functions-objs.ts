(() => {
    const login = (email: string, password: string) => {
        console.log(email, password);
    }

    login('test@test.com', '1235413');

    const login2 = (data: {email: string, password: string}) => {
        console.log(data.email, data.password);
    };

    login2({
        email: 'test@test.com',
        password: '1235413'
    });

    type Sizes = 's' | 'm' | 'l';
    type Product = {
        title: string,
        description: string,
        price: number
        stock: number
        size?: Sizes

    };

    const products: Product[] = [];
    const addProduct = (data: Product) => {
        return products.push(data);
    };

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
})();