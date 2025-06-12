import { Router } from "express";
import { getAppsController, addAppsController } from "../controllers/apps.controller.js";
const appRouter = Router()

appRouter.get('/', getAppsController)
appRouter.post('/', addAppsController)
export default appRouter