import { Request, Response } from "express";
import { Product } from "../models/Product.model";

type ProductAttributes = {
    name: string;
    description: string;
    price: number;
    stock: number;
    image?: string;
    brand: string;
    model: string;
    state: 'new' | 'used' | 'refurbished';
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll();
        return res.status(200).json(products);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

export const createProduct = async (req: Request<{}, {}, ProductAttributes>, res: Response) => {
    try {
        const {
            name,
            description,
            price,
            stock,
            brand,
            model,
            state,
            image,
        } = req.body;

        const newProduct = await Product.create({ name, price, description, stock, brand, model, state, image });
        return res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};