(() => {
    type Sizes = 's' | 'm' | 'l';
    
    function createProductToJson(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes
    ){
        return {
            title,
            createdAt,
            stock,
            size
        }
    }

    const producto1 = createProductToJson('Shirt', new Date(), 100, 's');
    console.log(producto1);

    const createProductToJson2 = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    ) =>{
        return {
            title,
            createdAt,
            stock,
            size
        }
    }

    const producto2 = createProductToJson2('Shirt', new Date(), 100);
    console.log(producto2);

})();