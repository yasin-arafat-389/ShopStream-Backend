import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// Create new product route
router.post('/', ProductControllers.createNewProduct);

// Get all products route
router.get('/', ProductControllers.getAllProduct);

// Get product by ID route
router.get('/:productId', ProductControllers.getSingleProduct);

// Update product information route
router.put('/:productId', ProductControllers.updateProductInfo);

// Update product information route
router.delete('/:productId', ProductControllers.deleteProduct);

export const ProductRoutes = router;
