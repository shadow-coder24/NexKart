import mongoose from "mongoose";
import { Product } from "./productModel.js";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity must be at least 1"],
        },
        priceAtPurchase: {
          type: Number,
          required: true,
        },
      },
    ],

    subtotal: { type: Number, required: true },
    tax: { type: Number, default: 0 }, // percentage
    discount: { type: Number, default: 0 }, // flat amount
    total: { type: Number, required: true },

    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled", "returned"],
      default: "pending",
    },

    shippingAddress: {
      fullName: { type: String, required: true },
      addressLine1: { type: String, required: true },
      addressLine2: { type: String },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
      phone: { type: String, required: true },
    },

    trackingDetails: {
      courier: { type: String },
      trackingNumber: { type: String },
      status: { type: String, default: "label_created" },
      estimatedDelivery: { type: Date },
    },

    deletedAt: { type: Date },
  },
  { timestamps: true }
);

orderSchema.pre("save", function (next) {
  if (!this.products || this.products.length === 0) {
    this.subtotal = 0;
    this.total = 0;
    return next();
  }

  this.subtotal = this.products.reduce(
    (acc, item) => acc + item.quantity * item.priceAtPurchase,
    0
  );

  const taxAmount = (this.subtotal * (this.tax || 0)) / 100;
  const discountAmount = this.discount || 0;
  this.total = this.subtotal + taxAmount - discountAmount;

  next();
});

orderSchema.post("save", async function (doc, next) {
  try {
    for (const item of doc.products) {
      await Product.findByIdAndUpdate(
        item.product,
        { $inc: { stock: -item.quantity } }, 
        { new: true }
      );
    }
    next();
  } catch (err) {
    console.error("❌ Stock decrease failed:", err);
    next(err);
  }
});

orderSchema.post("findOneAndUpdate", async function (doc, next) {
  try {
    if (!doc) return next();

    if (["cancelled", "returned"].includes(doc.status)) {
      for (const item of doc.products) {
        await Product.findByIdAndUpdate(
          item.product,
          { $inc: { stock: item.quantity } }, 
          { new: true }
        );
      }
    }

    next();
  } catch (err) {
    console.error("❌ Stock restock failed:", err);
    next(err);
  }
});

export const Order = mongoose.model("Order", orderSchema);
