/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createNewOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.createOrder(req.body);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      details: error.message,
    });
  }
};

const retrieveAllOrders = async (req: Request, res: Response) => {
  try {
    if (!req.query.email) {
      const result = await OrderServices.retrieveAllOrders(null);

      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }

    if (req.query.email) {
      const result = await OrderServices.retrieveAllOrders(
        req.query.email as string,
      );

      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!!',
      details: error.message,
    });
  }
};

export const OrderControllers = {
  createNewOrder,
  retrieveAllOrders,
};
