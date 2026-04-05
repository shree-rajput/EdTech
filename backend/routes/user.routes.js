import { Router } from "express";
const router = Router();
import User from "../models/User.js";
import { RegisterUser, verifyotp } from "../controller/user.controller.js";

router.post("/register" , RegisterUser);
router.post("/login" , LoginUser);
router.post('/verify-email' , verifyotp);
export default router;