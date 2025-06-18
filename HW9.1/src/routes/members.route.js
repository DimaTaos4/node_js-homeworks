import { Router } from "express";
import { addMembersController, loginMembersController, getProfile, changePassword, deleteAccount, changeEmail, getAdmin } from "../controllers/members.controller.js";
import { authenticate } from '../middlewares/auth.middleware.js'
import role from "../middlewares/role.middleware.js";


const membersRouter = Router()

membersRouter.post("/register", addMembersController)
membersRouter.post("/login", loginMembersController)
membersRouter.get("/profile", authenticate, getProfile)
membersRouter.put("/change-password", authenticate, changePassword)
membersRouter.delete("/delete-account", authenticate, deleteAccount)
membersRouter.put("/change-email", authenticate, changeEmail)
membersRouter.get("/admin", authenticate, role('admin'), getAdmin)

export default membersRouter