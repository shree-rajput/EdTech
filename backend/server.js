import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import conncetToSocket from './controller/socket.controller.js';
import { connectDB } from "./config/db.js";
import messageRoutes from "./routes/message.routes.js";
import { createServer } from "http";
import { socketHandler } from "./sockets/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();
const server = createServer(app);
const io = conncetToSocket(server);
// 🔹 Middlewares
app.use(express.json({ limit: "40kb" }));
app.set("port", process.env.PORT || PORT);
app.use(cors());
app.use(express.urlencoded({ limit: "40kb", extended: true }));
// 🔹 Rout
app.use("/api/v1/messages", messageRoutes);
// 🔹 DB Connection
connectDB();
// 🔹 Start Server
server.listen(app.get("port"), () => {
        console.log(`server is running on port ${app.get("port")}`);
    });