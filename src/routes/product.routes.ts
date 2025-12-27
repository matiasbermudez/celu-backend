import express from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import rolMiddleware from '../middlewares/rol.middleware';
import { getProducts, createProduct } from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.get('/allproducts', getProducts);

productRouter.post('/newproduct', authMiddleware, rolMiddleware(['admin']), createProduct);
export default productRouter;