import Message from "../model/message.model.js";

const users = {}; // userId → socketId

export const socketHandler = (io) => {
  io.on("connection", (socket) => {

    // 🔹 Register user
    socket.on("register_user", (userId) => {
      users[userId] = socket.id;
    });

    // 🔹 Send message (REAL-TIME)
    socket.on("send_message", async (data) => {
      try {
        const { sender, receiver, content } = data;

        // 🔥 DB me save (same logic as controller)
        const message = await Message.create({
          sender,
          receiver,
          content,
        });

        const receiverSocket = users[receiver];

        if (receiverSocket) {
          io.to(receiverSocket).emit("receive_message", message);
        }

        // optional: sender ko bhi confirm bhej sakte ho
        socket.emit("message_sent", message);

      } catch (err) {
        console.error(err);
      }
    });

    // 🔹 Cleanup
    socket.on("disconnect", () => {
      for (let userId in users) {
        if (users[userId] === socket.id) {
          delete users[userId];
        }
      }
    });

  });
};