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
  } catch (error) {
    console.log(error);
    res.send({ message: 'Something went wrong' });
  }
};

export const ProductControllers = {
  createNewProduct,
};
