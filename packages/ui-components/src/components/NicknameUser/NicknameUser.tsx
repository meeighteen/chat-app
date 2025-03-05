import { InputMessage } from "../InputMessage/InputMessage";
import Style from "./style.module.css";

type NicknameUserProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const NicknameUser: React.FC<NicknameUserProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className={Style.nicknameModal}>
      <label className={Style.nicknameLabel}>Create a nickname</label>
      <InputMessage
        value={value}
        onChange={onChange}
        style={{ width: "200px", textAlign: "center" }}
        maxLength={15}
      />
      <button type="submit" className={Style.sendNicknameBtn}>
        Let's chat
      </button>
    </div>
  );
};
