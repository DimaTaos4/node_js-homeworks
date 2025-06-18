import { Router } from "express";
import { addNutzerController, changePasswordController, getNutzersController, deleteNutzerController } from "../controllers/nutzers.controller.js";
const nutzerRouter = Router()
nutzerRouter.get("/", getNutzersController)
nutzerRouter.post('/register', addNutzerController)
nutzerRouter.put('/register/:id/password', changePasswordController)
nutzerRouter.delete('/register/:id/delete', deleteNutzerController)
export default nutzerRouter