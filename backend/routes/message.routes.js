import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";

const router = express.Router();

// 📤 Send (fallback / testing)
router.post("/send", sendMessage);

// 📥 Get chat between 2 users (with pagination)
router.get("/:senderId/:receiverId", getMessages);

export default router;