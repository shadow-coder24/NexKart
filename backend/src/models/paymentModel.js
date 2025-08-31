import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: [0, "Amount cannot be negative"],
    },
    currency: {
      type: String,
      required: true,
      default: "USD",
    },
    provider: {
      type: String,
      enum: ["stripe", "razorpay", "paypal", "bank_transfer"],
      required: true,
    },
    providerTransactionId: {
      type: String,
      required: true,
      unique: true,
    },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "debit_card", "upi", "net_banking", "paypal_balance", "bank_transfer"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    paidAt: {
      type: Date,
    },
    providerResponse: {
      type: Object,
      default: {},
    },
    refundStatus: {
      type: String,
      enum: ["not_requested", "requested", "processed", "failed"],
      default: "not_requested",
    },
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
