import cors from 'cors';
import express, { Application } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// Product routes
app.use('/', ProductRoutes);

export default app;
