import { UserController } from "../controllers/index.js";
import { Router } from "express";

const router = Router();

router.post("/auth/register", UserController.register);
router.post("/auth/login", UserController.login);

export default router;
