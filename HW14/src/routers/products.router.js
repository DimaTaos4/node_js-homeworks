import { Router } from "express";
import { addProductsController, getPopulateProductsController } from "../controllers/products.controller.js";

const productsRouter = Router()

productsRouter.post("/", addProductsController)

productsRouter.get("/", getPopulateProductsController)

export default productsRouter