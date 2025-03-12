import { Meta, StoryObj } from "@storybook/react";
import { MessageItem } from "./MessageItem";

export default {
  title: "ChatRoom/MessageItem",
  component: MessageItem,
  argTypes: {},
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MessageItem>;

type Story = StoryObj<typeof MessageItem>;

export const Outgoing: Story = {
  args: {
    message: {
      id: "1",
      text: "Hello, how are you?",
      user: "Edurne",
      timestamp: Date.now(),
      type: "outgoing",
      room: "Global",
    },
    onClickLikeIcon: () => {
      console.log("Like icon clicked");
    },
  },
};

export const Ingoing: Story = {
  args: {
    message: {
      id: "2",
      text: "Hello, how are you?",
      user: "Ellis",
      timestamp: Date.now(),
      type: "ingoing",
      room: "Global",
    },
    onClickLikeIcon: () => {
      console.log("Like icon clicked");
    },
  },
};

export const NewUser: Story = {
  args: {
    message: {
      id: "3",
      text: "Josue has joined the chat",
      user: "Josue",
      timestamp: Date.now(),
      type: "newuser",
      room: "Global",
    },
    onClickLikeIcon: () => {
      console.log("Like icon clicked");
    },
  },
};
