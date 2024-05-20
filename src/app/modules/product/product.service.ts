/* eslint-disable @typescript-eslint/no-explicit-any */
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

const updateProductInfo = async (productId: string, productData: TProduct) => {
  const result = await ProductModel.findByIdAndUpdate(productId, productData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteProduct = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete(productId, {
    new: true,
    runValidators: true,
  });
  return result;
};

const searchProduct = async (searchTerm: any) => {
  const regex = new RegExp(searchTerm, 'i');

  const result = await ProductModel.find({
    $or: [
      { name: { $regex: regex } },
      { description: { $regex: regex } },
      { category: { $regex: regex } },
      { tags: { $regex: regex } },
    ],
  });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProductInfo,
  deleteProduct,
  searchProduct,
};
