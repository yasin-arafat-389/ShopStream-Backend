import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// Create new product route
router.post('/api/products', ProductControllers.createNewProduct);

// Get all products route
router.get('/api/products', ProductControllers.getAllProduct);

export const ProductRoutes = router;
