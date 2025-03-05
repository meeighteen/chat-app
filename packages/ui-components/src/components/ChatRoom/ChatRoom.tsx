import { ComponentProps, useState } from "react";
import { Message } from "../../types/ChatRoom";
import { SendMessageIcon } from "../icons-svg/sendMessageSVG";
import { InputMessage } from "../InputMessage/InputMessage";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu";
import { SettingsRoom } from "../SettingsRoom/SettingsRoom";
import Style from "./style.module.css";
import { MessageItem } from "../MessageItem/MessageItem";
import { cx } from "class-variance-authority";

interface ChatRoomProps {
  readonly messages: Array<Message>;
  readonly roomName: string;
  readonly ProfileMenuProps: ComponentProps<typeof ProfileMenu>;
  readonly emitMessage: (roomID: string, userID: string, input: string) => void;
}

export const ChatRoom: React.FC<ChatRoomProps> = ({
  messages,
  roomName,
  ProfileMenuProps: { username, isConnected, profileStatusText, onLeaveRoom },
  emitMessage,
}) => {
  const [input, setInput] = useState("");

  const [isOpenMenu, setIsOpenMenu] = useState(false);

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
    if (input !== "") {
      handleSendMessage(input);
      setInput("");
    }
  };

  const handleSendMessage = (input: string) => {
    emitMessage(roomName, username, input);
  };

  const handleLeaveRoom = () => {
    onLeaveRoom(roomName, username);
  };

  const handleOnClickLikeIcon = () => {
    console.log("Like icon clicked");
  };

  const handleButtonMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleButtonSearch = () => {};

  return (
    <>
      <div className={Style.chatRoom}>
        <SettingsRoom
          roomName={roomName}
          handleButtonMenu={handleButtonMenu}
          handleButtonSearch={handleButtonSearch}
        />
        <div className={Style.bodyChatRoomContainer}>
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

          <div
            className={cx({
              [Style.menuProfile]: true,
              [Style.isExpanded]: isOpenMenu,
            })}
          >
            <ProfileMenu
              onLeaveRoom={handleLeaveRoom}
              isConnected={isConnected}
              username={username}
              profileStatusText={profileStatusText}
            />
          </div>
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
    </>
  );
};
