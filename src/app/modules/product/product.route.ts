import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/api/products', ProductControllers.createNewProduct);

export const ProductRoutes = router;
