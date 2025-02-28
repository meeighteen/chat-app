"use client";

import { createContext, useContext, useState } from "react";
import { socket } from "@/app/utils/socket";

interface SocketContextType {
  currentRoomId: string;
  setCurrentRoomId: (roomId: string) => void;
  userId: string;
  setUserId: (userId: string) => void;
  joinRoom: (roomId: string, userId: string) => void;
  emitMessage: (roomId: string, userId: string, text: string) => void;
  leaveRoom: (roomId: string, userId: string) => void;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentRoomId, setCurrentRoomId] = useState<string>("roomDefault");
  const [userId, setUserId] = useState<string>("");

  socket.connect();

  const joinRoom = (roomId: string, userId: string) => {
    socket.emit("joinRoom", {
      user: userId,
      room: roomId,
    });
    setCurrentRoomId(roomId);
  };

  const leaveRoom = (roomId: string, userId: string) => {
    socket.emit("joinRoom", {
      user: userId,
      room: roomId,
    });
  };

  const emitMessage = (roomId: string, userId: string, text: string) => {
    socket.emit("sendMessage", {
      room: roomId,
      user: userId,
      text: text,
    });
  };

  return (
    <SocketContext.Provider
      value={{
        userId,
        setUserId,
        currentRoomId,
        setCurrentRoomId,
        joinRoom,
        leaveRoom,
        emitMessage,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};
