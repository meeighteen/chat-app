import { ComponentProps, useEffect, useRef, useState } from "react";
import MenuProfileIcon from "../icons-svg/profileMenuSVG";
import SearchMenuIcon from "../icons-svg/searchMenuSVG";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu";
import Style from "./style.module.css";
import { cx } from "class-variance-authority";

type SettingsRoomProps = {
  roomName: string;
  handleButtonSearch: () => void;
  ProfileMenuProps: ComponentProps<typeof ProfileMenu>;
  isOpenMenuProfile: boolean;
  setIsOpenMenuProfile: (isOpen: boolean) => void;
  isOpenMenuSearch: boolean;
  setIsOpenMenuSearch: (isOpen: boolean) => void;
  roomsDefault: Array<string>;
  joinRoom: (roomName: string, username: string) => void;
  handleSetCurrentRoom: (roomName: string) => void;
};
export const SettingsRoom: React.FC<SettingsRoomProps> = ({
  roomName,
  handleButtonSearch,
  ProfileMenuProps: { isConnected, username, profileStatusText, onLeaveRoom },
  isOpenMenuProfile,
  setIsOpenMenuProfile,
  isOpenMenuSearch,
  setIsOpenMenuSearch,
  roomsDefault,
  joinRoom,
  handleSetCurrentRoom,
}) => {
  const menuSearchRef = useRef<HTMLDivElement>(null);
  const menuProfileRef = useRef<HTMLDivElement>(null);

  const handleButtonMenu = () => {
    setIsOpenMenuProfile(!isOpenMenuProfile);
  };

  const handleClickRoom = (event: React.MouseEvent<HTMLElement>) => {
    const roomNameSelected = event.currentTarget.textContent || "";
    setIsOpenMenuSearch(!isOpenMenuSearch);
    joinRoom(roomNameSelected, username);
    handleSetCurrentRoom(roomNameSelected);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuSearchRef.current &&
        !menuSearchRef.current.contains(event.target as Node)
      ) {
        setIsOpenMenuSearch(false);
      }

      if (
        menuProfileRef.current &&
        !menuProfileRef.current.contains(event.target as Node)
      ) {
        setIsOpenMenuProfile(false);
      }
    }

    if (isOpenMenuSearch || isOpenMenuProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenuProfile, isOpenMenuSearch]);

  return (
    <div className={Style.topWindowChat}>
      <div className={Style.leftTopWindow}>
        <button className={Style.menuBtn} onClick={handleButtonSearch}>
          <SearchMenuIcon style={{ fill: "white" }} />
        </button>
      </div>
      <div className={Style.boxRoomName}>
        <div className={Style.roomName}>{`#${roomName}`}</div>
        <div className={Style.status}></div>
      </div>
      <div>
        <button className={Style.menuBtn} onClick={handleButtonMenu}>
          <MenuProfileIcon style={{ fill: "white" }} />
        </button>
      </div>
      <div
        className={cx({
          [Style.menuProfile]: true,
          [Style.isExpanded]: isOpenMenuProfile,
        })}
        ref={menuProfileRef}
      >
        <ProfileMenu
          onLeaveRoom={onLeaveRoom}
          isConnected={isConnected}
          username={username}
          profileStatusText={profileStatusText}
        />
      </div>

      <div
        className={cx({
          [Style.menuRooms]: true,
          [Style.isExpanded]: isOpenMenuSearch,
        })}
        ref={menuSearchRef}
      >
        <table className={Style.listRoomsCard}>
          <thead>
            <tr>
              <th>List of Rooms</th>
            </tr>
          </thead>
          <tbody>
            {roomsDefault.map((room, index) => (
              <tr key={index}>
                <td>
                  <button
                    className={cx({
                      [Style.menuBtn]: true,
                      [Style.buttonRoom]: true,
                    })}
                    onClick={(e) => handleClickRoom(e)}
                  >
                    {room}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
