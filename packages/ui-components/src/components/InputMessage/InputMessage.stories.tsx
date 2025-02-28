import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { InputMessage } from "./InputMessage";
import { ComponentProps, useEffect, useState } from "react";
import { SendMessageIcon } from "../icons-svg/sendMessageSVG";
import Style from "./style.module.css";

export default {
  title: "ChatRoom/InputMessage",
  component: InputMessage,
  argTypes: {
    value: { control: "text" },
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof InputMessage>;

type Story = StoryObj<typeof InputMessage>;

const Template: StoryFn<typeof InputMessage> = (args) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(args.value || "");
  }, [args.value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if(input === "") return;
      setInput("");
      console.log("onKeydown", input);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(input === "") return;
    setInput("");
    console.log("onsubmit", input);
  }
  return (
      <form onSubmit={handleSubmit} className={Style.footerWindowChat}>
        <InputMessage 
          value={input} 
          onChange={handleChange} 
          onKeyDown={handleKeyDown} 
          placeholder={"Type here..."}
        />
        <button type="submit" className={Style.sendButtonIcon}>
            <SendMessageIcon />
        </button>
      </form>
  );
};


export const Default: Story = Template.bind({});
Default.args = {
  value: "",
}