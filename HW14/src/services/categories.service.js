import Category from "../db/Category.js"

export const addCategories = (payload) => Category.create(payload)