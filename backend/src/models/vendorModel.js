import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    shopName: {
        type: String,
        required: true,
        trim: true,
    },
    shopAddress: {
        type: String,
        required: true,
        trim: true,
    },
    shopDescription: {
        type: String,
        required: true,
        trim: true,
    },
    shopImage: {
        type: String,
        required: true,
        trim: true,
    },
    gstNumber: {
        type: String,
        required: true,
        trim: true,
    },
    bankAccount: {
        accountHolderName: {
            type: String,
            required: true,
            trim: true,
        },
        accountNumber: {
            type: String,
            required: true,
            trim: true,
        },
        ifscCode: {
            type: String,
            required: true,
            trim: true,
        },
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    }],
}, {timestamps: true});

export const Vendor = mongoose.model("Vendor", vendorSchema);
