import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
    match: /^[0-9]{5,10}$/, 
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  isDefault: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

addressSchema.pre("save", async function(next) {
  if (this.isDefault) {
    await mongoose.model("Address").updateMany(
      { user: this.user, _id: { $ne: this._id } },
      { $set: { isDefault: false } }
    );
  }
  next();
});

export const Address = mongoose.model("Address", addressSchema);
