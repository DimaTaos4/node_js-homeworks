import Product from "../db/Product.js"

export const addProduct = (payload) => Product.create(payload)

export const getAllProducts = () => Product.find()

export const getProductById = id => Product.findById(id)

export const changeProductById = (id, payload) => Product.findByIdAndUpdate(id, payload, { new: true })

export const deleteProductById = id => Product.findByIdAndDelete(id)