"use client";

import { useSocket } from "@/app/context/SocketContex";
import { NicknameUser } from "@packages/ui-components";
import { useState } from "react";

type LoginProps = {
  setIsAuthenticated: (value: boolean) => void;
};

export const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const { setUserId, joinRoom } = useSocket();
  const [nickname, setNickname] = useState("");
  const handleOnChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname === "") return;
    setUserId(nickname);
    joinRoom("Global", nickname);
    setIsAuthenticated(true);
    setNickname("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <NicknameUser value={nickname} onChange={handleOnChangeNickname} />
    </form>
  );
};
