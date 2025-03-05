"use client";

import React, { useEffect, useState } from "react";
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
    userId: userID,
    emitMessage,
    leaveRoom,
  } = useSocket();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    socket.on("message", ({ user, text }: { user: string; text: string }) => {
      console.log(`message from ${user} to ${userID}`);
      const type = userID === user ? "outgoing" : "ingoing";
      sendMessage(user, text, type);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, userID]);

  return (
    <div className={Style.containerChat}>
      {!isAuthenticated ? (
        <div className={Style.login}>
          <Login setIsAuthenticated={setIsAuthenticated} />
        </div>
      ) : (
        <ChatRoom
          messages={messages}
          roomName={roomID}
          emitMessage={emitMessage}
          ProfileMenuProps={{
            username: userID,
            isConnected: true,
            profileStatusText: "I'm a software engineer",
            onLeaveRoom: leaveRoom,
          }}
        />
      )}
    </div>
  );
};
