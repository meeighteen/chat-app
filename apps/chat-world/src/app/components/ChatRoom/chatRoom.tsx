"use client";

import React, { useEffect, useState } from "react";
import {
  MessageItem,
  SettingsRoom,
  InputMessage,
  SendMessageIcon,
} from "@packages/ui-components";
import { useChat } from "@/app/context/ChatContext";
import { socket } from "@/app/utils/socket";
import Style from "./style.module.css";
import { useSocket } from "@/app/context/SocketContex";
import { Login } from "../Login/login";

export const ChatRoom: React.FC = () => {
  const { messages, sendMessage } = useChat();
  const { currentRoomId: roomID, userId: userID, emitMessage } = useSocket();

  const [input, setInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChangeInputMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDownInputMessage = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage(input);
      setInput("");
    }
  };

  const handleSubmitInputMessage = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
    setInput("");
  };

  const handleSendMessage = (input: string) => {
    emitMessage(roomID, userID, input);
  };

  useEffect(() => {
    socket.on("message", ({ user, text }) => {
      console.log(`message from ${user} to ${userID}`);
      const type = userID === user ? "outgoing" : "ingoing" ;
      sendMessage(user, text, type);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, userID]);

  const handleOnClickLikeIcon = () => {};

  return (
    <div className={Style.containerChat}>
      {!isAuthenticated ? (
        <div className={Style.login}>
          <Login setIsAuthenticated={setIsAuthenticated} />
        </div>
      ) : (
        <div className={Style.chatRoom}>
          <SettingsRoom username={userID} handleButtonMenu={function (): void {
              throw new Error("Function not implemented.");
            } } handleButtonSearch={function (): void {
              throw new Error("Function not implemented.");
            } } />
          <div className={Style.bodyChatRoom}>
            {messages
              .slice()
              .reverse()
              .map((message, index) => (
                <MessageItem
                  key={index}
                  message={message}
                  onClickLikeIcon={handleOnClickLikeIcon}
                />
              ))}
          </div>

          <form
            onSubmit={handleSubmitInputMessage}
            className={Style.footerWindowChat}
          >
            <InputMessage
              value={input}
              onChange={handleChangeInputMessage}
              onKeyDown={handleKeyDownInputMessage}
            />
            <button type="submit" className={Style.sendButtonIcon}>
              <SendMessageIcon />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
