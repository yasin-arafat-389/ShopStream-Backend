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

const getSingleProduct = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProduct,
};
