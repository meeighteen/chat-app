"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ChatRoom } from "@packages/ui-components";
import { useChat } from "@/app/context/ChatContext";
import { socket } from "@/app/utils/socket";
import Style from "./style.module.css";
import { useSocket } from "@/app/context/SocketContex";
import { Login } from "../Login/login";

export const ChatRoomContainer: React.FC = () => {
  const { messages, sendMessage } = useChat();
  const {
    currentRoomId: roomID,
    setCurrentRoomId: setSelectedRoom,
    userId: userID,
    emitMessage,
    leaveRoom,
    joinRoom,
  } = useSocket();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleMessage = useCallback(
    ({ user, text, room }: { user: string; text: string; room: string }) => {
      const type = userID === user ? "outgoing" : "ingoing";
      console.log("handleMessage", user, text, type, room);
      sendMessage(user, text, type, room);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userID, messages] // Dependencies
  );

  useEffect(() => {
    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage); // Cleanup to prevent memory leaks
    };
  }, [handleMessage]); // Dependency on `handleMessage`

  return (
    <div className={Style.containerChat}>
      {!isAuthenticated ? (
        <div className={Style.login}>
          <Login setIsAuthenticated={setIsAuthenticated} />
        </div>
      ) : (
        <ChatRoom
          messages={messages.filter((message) => message.room == roomID)}
          roomName={roomID}
          emitMessage={emitMessage}
          ProfileMenuProps={{
            username: userID,
            isConnected: true,
            profileStatusText: "I am just enjoing this!",
            onLeaveRoom: leaveRoom,
          }}
          handleJoinRoom={joinRoom}
          handleSetCurrentRoom={setSelectedRoom}
        />
      )}
    </div>
  );
};
