import MenuProfileIcon from "../icons-svg/profileMenuSVG";
import SearchMenuIcon from "../icons-svg/searchMenuSVG";
import Style from "./style.module.css";

type SettingsRoomProps = {
  roomName: string;
  handleButtonMenu: () => void;
  handleButtonSearch: () => void;
};
export const SettingsRoom: React.FC<SettingsRoomProps> = ({
  roomName,
  handleButtonMenu,
  handleButtonSearch,
}) => {
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
    </div>
  );
};
