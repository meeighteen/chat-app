import React from "react";
import { cx } from "class-variance-authority";
import Style from "./style.module.css";

type MessageBoxProps = {
  text: string;
  typeMessage?: string;
};

export const MessageBox: React.FC<MessageBoxProps> = ({
  text,
  typeMessage,
}) => {
  return (
    <div
      className={cx({
        [Style.ingoing]: typeMessage === "ingoing",
        [Style.outgoing]: typeMessage === "outgoing",
        [Style.newuser]: typeMessage === "newuser",
        [Style.messageBox]: true,
      })}
    >
      <p className={Style.paragraphMessage}>{text}</p>
    </div>
  );
};
