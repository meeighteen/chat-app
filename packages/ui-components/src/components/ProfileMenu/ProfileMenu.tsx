import MapIconSVG from "../icons-svg/mapsIconSVG";
import MessageBoxIcon from "../icons-svg/messageBoxIconSVG";
import Style from "./style.module.css";

type ProfileMenuProps = {
  username: string;
  isConnected: boolean;
  profileStatusText: string;
  onLeaveRoom: () => void;
};

export const ProfileMenu: React.FC<ProfileMenuProps> = ({
  username,
  isConnected,
  profileStatusText,
  onLeaveRoom,
}) => {
  return (
    <div className={Style.profileMenuSection}>
      <div className={Style.profileCard}>
        <h2>Profile</h2>
        <div className={Style.customBorder}>
          <img
            src="https://wallpapers.com/images/featured-full/cool-profile-picture-87h46gcobjl5e4xu.jpg"
            alt="profile"
            className={Style.profilePicture}
          />
          <div
            className={Style.status}
            style={
              {
                "--status-color": isConnected ? "#2cc069" : "#bc0900",
              } as React.CSSProperties
            }
          ></div>
        </div>
        <div className={Style.profileName}>{username}</div>
        <p className={Style.profileStatusText}>
          <MessageBoxIcon className={Style.messageBoxIcon} />
          {`"${profileStatusText}"`}
        </p>
        <div className={Style.countryInfo}>
          <MapIconSVG />
          <span>🇵🇪</span>
        </div>
      </div>
      <button className={Style.leaveRoomBtn} onClick={onLeaveRoom}>
        Leave room
      </button>
    </div>
  );
};
