import { Router } from "express";

import { addProductController, getAllProductController, getProductByIdController, changeProductByIdController, deleteProductByIdController } from "../controllers/products.controller.js";


const productsRouter = Router()

productsRouter.get("/", getAllProductController)

productsRouter.get("/:id", getProductByIdController)

productsRouter.post("/", addProductController)

productsRouter.put("/:id", changeProductByIdController)

productsRouter.delete("/:id", deleteProductByIdController)

export default productsRouter