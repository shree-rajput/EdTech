import { Router } from "express";
const router = Router();
import User from "../models/User.js";
import { RegisterUser } from "../controller/user.controller.js";

router.post("/register" , RegisterUser);

export default router;