import { Schema, model } from 'mongoose';
import { z } from 'zod';
import { TInventory, TProduct, TVariant } from './product.interface';

// Create Zod schemas
const VariantSchemaZod = z.object({
  type: z.string(),
  value: z.string(),
});

const InventorySchemaZod = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const ProductSchemaZod = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantSchemaZod),
  inventory: InventorySchemaZod,
});

// Create Mongoose schemas
const VariantSchema = new Schema<TVariant>(
  {
    type: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false },
);

const InventorySchema = new Schema<TInventory>(
  {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { _id: false },
);

const ProductSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [VariantSchema], required: true },
  inventory: { type: InventorySchema, required: true },
});

// Pre-save hook for validation
ProductSchema.pre<TProduct>('save', function (next) {
  const result = ProductSchemaZod.safeParse(this);

  if (!result.success) {
    const errorMessages = result.error.errors
      .map((error) => `${error.path.join('.')} - ${error.message}`)
      .join(', ');
    next(new Error(`Validation error: ${errorMessages}`));
  } else {
    next();
  }
});

const ProductModel = model<TProduct>('product', ProductSchema);

export default ProductModel;
