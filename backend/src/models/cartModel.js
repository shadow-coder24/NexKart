import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true, 
  },
  items: [
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
      price: {
        type: Number,
        required: true, // snapshot of product price
      },
    },
  ],
  subTotal: {
    type: Number,
    required: true,
    default: 0,
  },
  coupon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coupon",
  },
  discount: {
    type: Number,
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  status: {
    type: String,
    enum: ["active", "ordered", "abandoned"],
    default: "active",
  },
}, { timestamps: true });

cartSchema.pre("save", function (next) {
  const mergedItems = new Map();


  for (const item of this.items) {
    const key = item.product.toString();
    if (mergedItems.has(key)) {
      const existing = mergedItems.get(key);
      existing.quantity += item.quantity;
    } else {
      mergedItems.set(key, { ...item._doc }); 
    }
  }

  this.items = Array.from(mergedItems.values());

  this.subTotal = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  this.totalPrice = this.subTotal - this.discount;

  next();
});

export const Cart = mongoose.model("Cart", cartSchema);
