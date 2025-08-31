import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    }],
    addedAt: {
        type: Date,
        default: Date.now,
    }
}, {timestamps: true});

export const Wishlist = mongoose.model("Wishlist", wishlistSchema);
