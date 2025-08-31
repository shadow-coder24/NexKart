import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      enum: ["email", "sms", "push"],
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: ["order_update", "promotion", "system", "reminder"],
      default: "system",
    },
    expiresAt: {
      type: Date,
      default: () => Date.now() + 30 * 24 * 60 * 60 * 1000, 
    },
  },
  { timestamps: true }
);

export const Notification = mongoose.model("Notification", notificationSchema);
