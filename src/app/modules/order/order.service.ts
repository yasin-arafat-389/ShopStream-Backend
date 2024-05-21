import ProductModel from '../product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrder = async (order: TOrder) => {
  const { productId, quantity } = order;

  const product = await ProductModel.findById(productId);
  if (!product) {
    throw new Error('Product not found');
  }

  if (product.inventory.quantity < quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  const newOrder = new OrderModel(order);

  product.inventory.quantity -= quantity;
  product.inventory.inStock = product.inventory.quantity > 0;

  await product.save();
  await newOrder.save();

  return newOrder;
};

const retrieveAllOrders = async () => {
  const result = await OrderModel.find();
  return result;
};

const retrieveAllOrdersByUserEmail = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};

export const OrderServices = {
  createOrder,
  retrieveAllOrders,
  retrieveAllOrdersByUserEmail,
};
