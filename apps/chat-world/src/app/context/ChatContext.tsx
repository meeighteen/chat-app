"use client";

import React, { createContext, useContext, useState } from "react";

export interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: number;
}

interface ChatContextType {
  messages: Message[];
  sendMessage: (user: string, text: string, type: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (user: string, text: string, type: string) => {
    const newMessage = {
      id: Date.now().toString(),
      user,
      text,
      timestamp: Date.now(),
      type,
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
