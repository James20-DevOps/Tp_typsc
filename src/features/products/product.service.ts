import { pool } from "../../db/db";
import { Product } from "./product.models";


const products: Product[] = [
    { id: 1, name: 'ordi', price: 1200},
    { id: 2, name: 'tel', price: 18000},
    { id: 1, name: 'decodeur', price: 12003}
]


export const getAllProducts = async (): Promise<Product[]> => {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM products');
        return res.rows;
    } finally {
        client.release();
    }
};

export const getProductById = async (id: number): Promise<Product | undefined> => {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM products WHERE id = $1', [id]);
        return res.rows[0];
    } finally {
        client.release();
    }
};
