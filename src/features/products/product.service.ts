import { Product } from "./product.models";

const products: Product[] = [
    { id: 1, name: 'ordi', price: 1200},
    { id: 2, name: 'tel', price: 18000},
    { id: 1, name: 'decodeur', price: 12003}
]

export const getAllProducts = (): Product[] => products;

export const getProductById = (id: number): Product | undefined => 
    products.find((p) => p.id === id)

