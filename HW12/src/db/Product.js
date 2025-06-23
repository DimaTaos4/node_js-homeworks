import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 8,
    },
}, { versionKey: false, timestamps: true })

const Product = model("product", productSchema)
export default Product 