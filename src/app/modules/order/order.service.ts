import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrder = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

const retrieveAllOrders = async () => {
  const result = await OrderModel.find();
  return result;
};

export const OrderServices = {
  createOrder,
  retrieveAllOrders,
};
