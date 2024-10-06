export type Sizes = 's' | 'm' | 'l';

export type Product = {
    title: string,
    description: string,
    price: number
    stock: number
    size?: Sizes
};