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
};
export const SettingsRoom: React.FC<SettingsRoomProps> = ({
  roomName,
  handleButtonSearch,
  ProfileMenuProps: { isConnected, username, profileStatusText, onLeaveRoom },
  isOpenMenuProfile,
  setIsOpenMenuProfile
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleButtonMenu = () => {
    setIsOpenMenuProfile(!isOpenMenuProfile);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenMenuProfile(false);
      }
    }

    if (isOpenMenuProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenuProfile]);

  return (
    <div className={Style.topWindowChat}>
      <div className={Style.leftTopWindow}>
        <button className={Style.menuBtn} onClick={handleButtonSearch}>
          <SearchMenuIcon style={{ fill: "white" }} />
        </button>
      </div>
      <div className={Style.boxRoomName}>
        <div className={Style.roomName}>{roomName}</div>
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
        ref={menuRef}
      >
        <ProfileMenu
          onLeaveRoom={onLeaveRoom}
          isConnected={isConnected}
          username={username}
          profileStatusText={profileStatusText}
        />
      </div>
    </div>
  );
};
