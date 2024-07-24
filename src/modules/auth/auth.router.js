import { Router } from "express";
import * as authController from "./controller/auth.controller.js";
import auth from "../../middleware/auth.js";
const router = Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);

export default router;
