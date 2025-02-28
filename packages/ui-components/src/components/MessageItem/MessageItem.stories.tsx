import { Meta, StoryObj } from "@storybook/react";
import { MessageItem } from "./MessageItem";

export default {
  title: "ChatRoom/MessageItem",
  component: MessageItem,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof MessageItem>;

type Story = StoryObj<typeof MessageItem>;

export const Outgoing: Story = {
  args: {
    message: {
      id: "1",
      text: "Hello, how are you?",
      user: "sadsd",
      timestamp: Date.now(),
      type: "outgoing",
    },
    onClickLikeIcon: () => {
      console.log("Like icon clicked");
    },
  },
};

export const Ingoing: Story = {
  args: {
    message: {
      id: "1",
      text: "Hello, how are you?",
      user: "sadsd",
      timestamp: Date.now(),
      type: "ingoing",
    },
    onClickLikeIcon: () => {
      console.log("Like icon clicked");
    },
  },
};
