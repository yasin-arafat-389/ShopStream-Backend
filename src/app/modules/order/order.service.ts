import ProductModel from '../product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrder = async (order: TOrder) => {
  const { productId, quantity } = order;

  // Find the product by its ID
  const product = await ProductModel.findById(productId);

  // If the product doesn't exist, throw an error
  if (!product) {
    throw new Error('Product not found');
  }

  // Check if the available quantity in the inventory is less than the ordered quantity
  if (product.inventory.quantity < quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  // Create a new order instance with the provided order data
  const newOrder = new OrderModel(order);

  // Reduce the inventory quantity by the ordered quantity
  product.inventory.quantity -= quantity;

  // Update the inStock status based on the updated quantity
  product.inventory.inStock = product.inventory.quantity > 0;

  // Save the updated product inventory to the database
  await product.save();

  // Save the new order to the database
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
