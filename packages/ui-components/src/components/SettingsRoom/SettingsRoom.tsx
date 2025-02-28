import MenuProfileIcon from "../icons-svg/profileMenuSVG";
import SearchMenuIcon from "../icons-svg/searchMenuSVG";
import Style from "./style.module.css";

type SettingsRoomProps = {
  username: string;
  handleButtonMenu: () => void;
  handleButtonSearch: () => void;
};
export const SettingsRoom: React.FC<SettingsRoomProps> = ({
  username,
  handleButtonMenu,
  handleButtonSearch,
}) => {
  return (
    <div className={Style.topWindowChat}>
      <div className={Style.leftTopWindow}>
        <button className={Style.menuBtn} onClick={handleButtonSearch}>
          <SearchMenuIcon />
        </button>
      </div>
      <div className={Style.boxUserName}>
        <div className={Style.userName}>{username}</div>
        <div className={Style.status}></div>
      </div>
      <div>
        <button className={Style.menuBtn} onClick={handleButtonMenu}>
          <MenuProfileIcon />
        </button>
      </div>
    </div>
  );
};
