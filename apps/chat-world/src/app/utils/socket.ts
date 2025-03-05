import { io } from "socket.io-client";

const SOCKET_URL = process.env.NEXT_PUBLIC_API_SERVER;

export const socket = io(SOCKET_URL, {
  path: "/socket",
  transports: ["websocket", "polling"],
  autoConnect: false,
  reconnection: false,
});
