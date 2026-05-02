import { Router } from "express";
const router = Router();
// import User from "../model/User.js";
import { RegisterUser, verifyotp , LoginUser } from "../controller/auth.controller.js";

router.post("/register" , RegisterUser);
router.post("/login" , LoginUser);
router.post('/verify-email' , verifyotp);
export default router;