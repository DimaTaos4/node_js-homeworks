import Product from "../db/Product.js";

export const addProducts = (payload) => Product.create(payload)

export const getPopulateProducts = () => {
    return Product.find().populate("category")
}