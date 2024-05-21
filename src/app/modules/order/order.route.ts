import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

// Retrieve all orders route
router.get('/', OrderControllers.retrieveAllOrders);

// Create new order route
router.post('/', OrderControllers.createNewOrder);

export const OrderRoutes = router;
