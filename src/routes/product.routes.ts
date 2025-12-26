import express from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import rolMiddleware from '../middlewares/rol.middleware';
import { getProducts, createProduct } from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.get('/productos', getProducts);


export default productRouter;