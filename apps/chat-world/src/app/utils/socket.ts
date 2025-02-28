import { io } from "socket.io-client";

const SOCKET_URL = "https://chat-world-server.onrender.com"; // Replace with your backend URL

export const socket = io(SOCKET_URL, {
  path: "/socket",
  transports: ["websocket", "polling"],
  autoConnect: false,
  reconnection: false,
});
