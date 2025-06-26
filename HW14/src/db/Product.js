import { Schema, model } from "mongoose";

const productsSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minlength: 2,
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true
    }
}, { versionKey: false, timestamps: true })

const Product = model("product", productsSchema)
export default Product