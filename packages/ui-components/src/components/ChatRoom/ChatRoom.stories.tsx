import { Meta, StoryObj } from "@storybook/react";
import { ChatRoom } from "./ChatRoom";

export default {
  title: "ChatRoom/ChatRoom",
  component: ChatRoom,
  argTypes: {},
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ChatRoom>;

type Story = StoryObj<typeof ChatRoom>;

export const Primary: Story = {
  args: {
    messages: [
      {
        id: "1",
        user: "user",
        text: "text",
        timestamp: 1234567890,
        type: "ongoing",
      },
      {
        id: "2",
        user: "user",
        text: "text",
        timestamp: 1234567890,
        type: "ingoing",
      },
      {
        id: "3",
        user: "user",
        text: "text",
        timestamp: 1234567890,
        type: "ingoing",
      },
      {
        id: "4",
        user: "user",
        text: "text",
        timestamp: 1234567890,
        type: "ongoing",
      },
    ],
    roomName: "roomName",
    ProfileMenuProps: {
      username: "John Doe",
      isConnected: true,
      profileStatusText: "I love this chat!",
      onLeaveRoom: function (): void {
        throw new Error("Function not implemented.");
      },
    },
    emitMessage: () => {},
  },
};
