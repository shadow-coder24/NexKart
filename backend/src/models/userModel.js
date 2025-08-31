import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    phoneNumber:{
        type: Number,
        required: true,
        unique: true,
        trim: true,
        match: [/^[0-9]{10}$/, "Please enter a valid phone number"],
    },
    role: {
      type: String,
      enum: ["customer", "vendor", "admin"],
      default: "customer",
    },
}, {timestamps: true});


export const User = mongoose.model("User", userSchema);