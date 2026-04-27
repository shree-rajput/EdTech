import Message from "../models/messageModel.js";

// 📤 Send Message
export const sendMessage = async (req, res) => {
  try {
    const { sender, receiver, content } = req.body;

    if (!sender || !receiver || !content) {
      return res.status(400).json({ message: "All fields required" });
    }

    const message = await Message.create({
      sender,
      receiver,
      content,
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📥 Get Messages between 2 users
export const getMessages = async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;

    const messages = await Message.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId },
      ],
    })
      .sort({ createdAt: 1 })
      .populate("sender receiver", "name email");

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};