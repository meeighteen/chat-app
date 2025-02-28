import Style from "./style.module.css";

type InputMessageProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  // handleSendMessage: (input: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputMessage: React.FC<InputMessageProps> = ({
  value,
  onChange,
  onKeyDown,
  ...props
}) => {
  return (
    <input
      className={Style.inputMessage}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type="text"
      {...props}
    />
  );
};
