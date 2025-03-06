import MapIconSVG from "../icons-svg/mapsIconSVG";
import MessageBoxIcon from "../icons-svg/messageBoxIconSVG";
import Style from "./style.module.css";

type ProfileMenuProps = {
  username: string;
  isConnected: boolean;
  profileStatusText: string;
  onLeaveRoom: (roomID: string, userID: string) => void;
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
        <h3>Profile Info</h3>
        <div>
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
        <div className={Style.profileName}>
          <div className={Style.countryInfo}>
            <MapIconSVG width={20} height={20} />
            <div className={Style.flagCountry}>{`🇵🇪`}</div>
          </div>
          <div style={{ height: "20px", alignContent:"center"
           }}>{username}</div>
        </div>
        <p className={Style.profileStatusText}>
          <MessageBoxIcon className={Style.messageBoxIcon} />
          {`"${profileStatusText}"`}
        </p>
      </div>
      <button
        className={Style.leaveRoomBtn}
        onClick={() => onLeaveRoom}
        disabled
      >
        Leave room
      </button>
    </div>
  );
};
