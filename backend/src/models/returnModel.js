import mongoose from "mongoose";

const returnSchema = new mongoose.Schema({
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    reason: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "processed"],
      default: "pending",
    },
    resolution: {
      type: String,
      enum: ["refund", "replacement"],
    },
    refundAmount: {
        type: Number,
        required: true,
        min: 0
    },
    refundTransactionId:{
        type: String,
        required: true,
    }
}, {timestamps: true});

export const Return = mongoose.model("Return", returnSchema);
