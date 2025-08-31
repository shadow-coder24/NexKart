import mongoose from "mongoose";

const productVariantSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true, // optimize queries
    },
    variantName: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price cannot be negative"],
    },
    stock: {
      type: Number,
      required: true,
      min: [0, "Stock cannot be negative"],
    },
    attributes: {
      type: Map,
      of: String, 
      default: {},
    },
  },
  { timestamps: true }
);

productVariantSchema.index({ productId: 1, variantName: 1 }, { unique: true });

export const ProductVariant = mongoose.model("ProductVariant", productVariantSchema);
