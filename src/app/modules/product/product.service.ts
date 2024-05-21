/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from './product.interface';
import ProductModel from './product.model';
import { validateProduct } from './product.validation';

const createProduct = async (product: TProduct) => {
  const parsedProduct = validateProduct.parse(product);

  const result = await ProductModel.create(parsedProduct);
  return result;
};

const getAllProduct = async (searchTerm: any) => {
  if (searchTerm === null) {
    const result = await ProductModel.find();
    return result;
  }

  if (searchTerm) {
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
  }
};

const getSingleProduct = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

const updateProductInfo = async (productId: string, productData: TProduct) => {
  const parsedProductData = validateProduct.parse(productData);

  const result = await ProductModel.findByIdAndUpdate(
    productId,
    parsedProductData,
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

const deleteProduct = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete(productId, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProductInfo,
  deleteProduct,
};
