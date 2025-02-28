import React from "react";
import { cx } from "class-variance-authority";
import Style from "./style.module.css";

type MessageBoxProps = {
  text: string;
  isIngoing: boolean;
};

export const MessageBox: React.FC<MessageBoxProps> = ({ text, isIngoing }) => {
  return (
    <div
      className={cx({
        [Style.messageBox__ingoing]: isIngoing,
        [Style.messageBox]: true,
      })}
    >
      <p className={Style.paragraphMessage}>{text}</p>
    </div>
  );
};
