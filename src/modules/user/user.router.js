import { Router } from "express";
import * as userController from "./controller/user.controller.js";
import auth from "../../middleware/auth.js";
const router = Router();

router.get("/", userController.getUsers);
router.patch("/", auth, userController.updateUser);
router.delete("/:id", userController.deleteUser);
export default router;
