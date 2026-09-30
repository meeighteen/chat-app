import { InputMessage } from "../InputMessage/InputMessage";
import Style from "./style.module.css";

type NicknameUserProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabledButton?: boolean;
};

export const NicknameUser: React.FC<NicknameUserProps> = ({
  value,
  onChange,
  isDisabledButton = false,
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
      <button type="submit" className={Style.sendNicknameBtn} disabled={isDisabledButton}>
        Let's chat
      </button>
    </div>
  );
};
