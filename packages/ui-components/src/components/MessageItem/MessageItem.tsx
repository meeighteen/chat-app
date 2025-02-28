import React, { useState } from "react";
import { Message } from "../../types/ChatRoom";
import { MessageBox } from "../MessageBox/MessageBox";
import Style from "./style.module.css";
import YoungAvatarIcon from "../icons-svg/youngAvatarSVG";
import LikeIconSVG from "../icons-svg/likeIconSVG";
import { cx } from "class-variance-authority";

type MessageItemProps = {
  message: Message;
  onClickLikeIcon: () => void;
};

const TypeMessage: Record<string, string> = {
  INGOING: "ingoing",
  OUTGOING: "outgoing",
};

export const MessageItem: React.FC<MessageItemProps> = ({
  message: { id, text, type },
  onClickLikeIcon,
}) => {
  const [isLikedMessage, setIsLikedMessage] = useState(false);
  const handleOnClickLikeBtn = () => {
    setIsLikedMessage(!isLikedMessage);
    onClickLikeIcon();
  };

  const isIngoingMessage = Boolean(type === TypeMessage.INGOING);

  return (
    <div
      className={Style.messageChat}
      style={{
        flexDirection: isIngoingMessage ? "row" : "row-reverse",
      }}
    >
      <YoungAvatarIcon className={Style.profileAvatarIcon} />
      <MessageBox key={id} text={text} isIngoing={isIngoingMessage} />
      <LikeIconSVG
        className={cx({
          [Style.likeIcon]: true,
          [Style.likeIcon__active]: isLikedMessage,
        })}
        onClick={handleOnClickLikeBtn}
      />
    </div>
  );
};
