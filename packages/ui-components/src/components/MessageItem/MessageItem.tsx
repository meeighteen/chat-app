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
  NEWUSER: "newuser",
};

export const MessageItem: React.FC<MessageItemProps> = ({
  message: { id, text, type = "", timestamp },
  onClickLikeIcon,
}) => {
  const [isLikedMessage, setIsLikedMessage] = useState(false);
  const [isDetailedMessage, setIsDetailedMessage] = useState(false);
  const handleOnClickLikeBtn = () => {
    setIsLikedMessage(!isLikedMessage);
    onClickLikeIcon();
  };

  const handleOnClickMessage = () => {
    setIsDetailedMessage(!isDetailedMessage);
  };

  const date = new Date(timestamp);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  const isIngoingMessage = type === TypeMessage.INGOING;
  const RenderUserMessage = () => (
    <div
      className={Style.messageWithTime}
      style={{
        textAlign: isIngoingMessage ? "left" : "right",
      }}
    >
      <div
        className={Style.messageChat}
        style={{
          flexDirection: isIngoingMessage ? "row" : "row-reverse",
        }}
      >
        <YoungAvatarIcon className={Style.profileAvatarIcon} />
        <div onClick={handleOnClickMessage} style={{ cursor: "pointer" }}>
          <MessageBox key={id} text={text} typeMessage={type} />
        </div>
        {/* <LikeIconSVG
        className={cx({
          [Style.likeIcon]: true,
          [Style.likeIcon__active]: isLikedMessage,
        })}
        onClick={handleOnClickLikeBtn}
      /> */}
      </div>
      {isDetailedMessage && (
        <p
          style={{
            paddingRight: !isIngoingMessage ? "50px" : "0",
            paddingLeft: isIngoingMessage ? "50px" : "0",
          }}
        >
          {formattedDate}
        </p>
      )}
    </div>
  );

  const RenderSystemMessage = () => (
    <div className={Style.systemMessage}>
      <p>{formattedDate}</p>
      <MessageBox key={id} text={text} typeMessage={TypeMessage.NEWUSER} />
    </div>
  );

  return Boolean(type === TypeMessage.NEWUSER) ? (
    <RenderSystemMessage />
  ) : (
    <RenderUserMessage />
  );
};
