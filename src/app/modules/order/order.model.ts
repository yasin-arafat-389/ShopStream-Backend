import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

// Create the Mongoose schema
const OrderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Create the Mongoose model
const OrderModel = model<TOrder>('order', OrderSchema);

export { OrderModel };
