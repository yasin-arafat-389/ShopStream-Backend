/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createNewProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.createProduct(req.body);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!!',
      details: error.message,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProduct();

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!!',
      details: error.message,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getSingleProduct(req.params.productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!!',
      details: error.message,
    });
  }
};

export const ProductControllers = {
  createNewProduct,
  getAllProduct,
  getSingleProduct,
};
