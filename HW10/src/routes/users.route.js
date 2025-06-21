import { Router } from "express"

import { userRegisterController, userLoginController, updateEmailController, deleteEmailController, updateRoleController, refreshTokenController } from "../controllers/users.controller.js"

import { authenticate, isAdmin } from "../middlewares/authenticateJWT.js"

const usersRouter = Router()

usersRouter.post("/register", userRegisterController)

usersRouter.post("/login", userLoginController)

usersRouter.put("/update-email", authenticate, updateEmailController)

usersRouter.delete("/delete-email", authenticate, deleteEmailController)

usersRouter.put("/update-role", authenticate, isAdmin, updateRoleController)

usersRouter.post("/refresh-token", refreshTokenController)


export default usersRouter