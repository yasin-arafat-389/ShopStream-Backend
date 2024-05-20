import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// Create new product route
router.post('/api/products', ProductControllers.createNewProduct);

export const ProductRoutes = router;
