import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");
  const [messageList, setMessageList] = useState([]);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    if (message !== "" && room !== "" && username !== "") {
      const messageData = {
        room,
        username,
        message,
        time: new Date().toLocaleTimeString(),
      };

      socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setMessage("");
    }
  };

  useEffect(() => {
    const handleMessage = (data) => {
      setMessageList((list) => [...list, data]);
    };

    socket.on("receive_message", handleMessage);

    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* 🔹 Header */}
      <div className="bg-blue-600 text-white p-4 text-xl font-semibold shadow">
        Chat App
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded w-1/3"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Room ID"
          className="border p-2 rounded w-1/3"
          onChange={(e) => setRoom(e.target.value)}
        />
        <button
          onClick={joinRoom}
          className="bg-green-500 text-white px-4 rounded"
        >
          Join
        </button>
      </div>
      {/* 🔹 Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messageList.map((msg, index) => {
          const isMe = msg.username === username;

          return (
            <div
              key={index}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg shadow 
                ${isMe ? "bg-blue-500 text-white" : "bg-white text-black"}`}
              >
                <p className="text-sm font-semibold">
                  {isMe ? "You" : msg.username}
                </p>
                <p>{msg.message}</p>
                <p className="text-xs text-right opacity-70">{msg.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🔹 Input Section */}
      <div className="p-4 bg-white border-t flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            placeholder="Type a message..."
            className="flex-1 border p-2 rounded"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-6 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
