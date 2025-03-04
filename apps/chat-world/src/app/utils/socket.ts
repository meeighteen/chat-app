import { io } from "socket.io-client";

const SOCKET_URL = process.env.API_SOCKET_SERVER;

export const socket = io(SOCKET_URL, {
  path: "/socket",
  transports: ["websocket", "polling"],
  autoConnect: false,
  reconnection: false,
});
