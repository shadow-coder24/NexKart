import mongoose from "mongoose";

const bannerAdvertisementSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "#",
  },
  altText: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["homepage", "category", "sidebar", "popup"],
    default: "homepage",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  order: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

export const BannerAdvertisement = mongoose.model("BannerAdvertisement", bannerAdvertisementSchema);
