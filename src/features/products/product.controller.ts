import { Request, Response } from "express";
import { getAllProducts, getProductById } from "./product.service";


type Params = { id: string}

export const getProducts = (req: Request, res: Response) => {
    res.json(getAllProducts());
};

export const getProduct = (req: Request<Params>, res:Response) => {
    const id = parseInt(req.params.id);
    const product = getProductById(id);
    if (!product) {
        return res.status(404).json({error: 'produit non trouvé'})
    }

    res.json(product)
}