import { Router } from "express";
import * as blogController from "./controller/blog.controller.js";
const router = Router();

router.post("/", blogController.addBlog);
router.get("/", blogController.getBlogs);
export default router;
