/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createNewProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.createProduct(req.body);

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
};

export const ProductControllers = {
  createNewProduct,
};
