import { TProduct } from './product.interface';
import ProductModel from './product.model';

const createProduct = async (student: TProduct) => {
  const result = await ProductModel.create(student);
  return result;
};

export const ProductServices = {
  createProduct,
};
