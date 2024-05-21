import { Schema, model } from 'mongoose';
import { z } from 'zod';
import { TOrder } from './order.interface';

// Define the Zod schema for validation
const OrderSchemaZod = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number().min(1),
});

// Create the Mongoose schema
const OrderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Pre-save hook for Zod validation
OrderSchema.pre('save', function (next) {
  const validationResult = OrderSchemaZod.safeParse(this.toObject());
  if (!validationResult.success) {
    const errorMessages = validationResult.error.errors
      .map((error) => error.message)
      .join(', ');
    next(new Error(`Validation error: ${errorMessages}`));
  } else {
    next();
  }
});

// Create the Mongoose model
const OrderModel = model<TOrder>('order', OrderSchema);

export { OrderModel };
