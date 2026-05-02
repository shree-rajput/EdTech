import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";

import connectDB from "./config/db.js";
import messageRoutes from "./routes/message.routes.js";
import { socketHandler } from "./sockets/socket.js";

dotenv.config();

const app = express();

// 🔹 Middlewares
app.use(express.json());
app.use(cors());

// 🔹 Routes
app.use("/api/messages", messageRoutes);

// 🔹 DB Connection
connectDB();

// 🔹 Create HTTP Server
const server = http.createServer(app);

// 🔹 Socket Setup
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// 🔹 Socket Logic (separate file)
socketHandler(io);

// 🔹 Basic Route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// 🔹 Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});