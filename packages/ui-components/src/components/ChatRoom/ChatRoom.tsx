import { ComponentProps, useEffect, useRef, useState } from "react";
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
  readonly handleJoinRoom: (roomName: string, username: string) => void;
  readonly handleSetCurrentRoom: (roomName: string) => void;
}

export const ChatRoom: React.FC<ChatRoomProps> = ({
  messages,
  roomName,
  ProfileMenuProps,
  emitMessage,
  handleJoinRoom,
  handleSetCurrentRoom,
}) => {
  const [input, setInput] = useState("");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [roomsDefault, setRoomsDefault] = useState<Array<string>>([
    "Global",
    "Latinoamerica",
    "Musica",
    "Deportes",
    "Games",
  ]);

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
    emitMessage(roomName, ProfileMenuProps.username, input);
  };

  const handleOnClickLikeIcon = () => {
    console.log("Like icon clicked");
  };

  const handleButtonSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  return (
    <>
      <div
        className={cx({
          [Style.chatRoom]: true,
          [Style.blurEffect]: isOpenMenu,
        })}
      >
        <SettingsRoom
          roomName={roomName}
          handleButtonSearch={handleButtonSearch}
          ProfileMenuProps={ProfileMenuProps}
          isOpenMenuProfile={isOpenMenu}
          setIsOpenMenuProfile={setIsOpenMenu}
          isOpenMenuSearch={isOpenSearch}
          setIsOpenMenuSearch={setIsOpenSearch}
          roomsDefault={roomsDefault}
          joinRoom={handleJoinRoom}
          handleSetCurrentRoom={handleSetCurrentRoom}
        />
        <div
          className={cx({
            [Style.bodyChatRoomContainer]: true,
            [Style.blurEffect]: isOpenMenu || isOpenSearch,
          })}
        >
          <div className={cx({ [Style.bodyChatRoom]: true })}>
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
        </div>

        <form
          onSubmit={handleSubmitInputMessage}
          className={cx({
            [Style.footerWindowChat]: true,
            [Style.blurEffect]: isOpenMenu || isOpenSearch,
          })}
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
