import { TProduct } from './product.interface';
import ProductModel from './product.model';

const createProduct = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProduct = async () => {
  const result = await ProductModel.find();
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
};
