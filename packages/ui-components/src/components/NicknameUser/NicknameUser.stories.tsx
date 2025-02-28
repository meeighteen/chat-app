import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { NicknameUser } from "./NicknameUser";
import { useEffect, useState } from "react";

export default {
  title: "ChatRoom/NicknameUser",
  component: NicknameUser,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof NicknameUser>;

type Story = StoryObj<typeof NicknameUser>;

const Template: StoryFn<typeof NicknameUser> = (args) => {
  const [nickname, setNickname] = useState("");

    useEffect(() => {
      if(args.value == '' || args.value.length>15) return;
      setNickname(args.value || "");
    }, [args.value]);
    
  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(nickname === "") return;
    console.log("onsubmit", nickname);
    setNickname("");
    // set the usernameContext in socket
  }

  return <form onSubmit={handleSubmit}>
    <NicknameUser value={nickname} onChange={handleChangeNickname} />
  </form>;
}

export const Default: Story = Template.bind({});
Default.args = {
  value: "",
};
