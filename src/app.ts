import cors from 'cors';
import express, { Application } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// Product routes
app.use('/api/products', ProductRoutes);

// Order routes
app.use('/api/orders', OrderRoutes);

export default app;
