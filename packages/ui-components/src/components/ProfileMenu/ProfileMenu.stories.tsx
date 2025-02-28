import { Meta, StoryObj } from "@storybook/react";
import { ProfileMenu } from "./ProfileMenu";
import { vi } from "vitest";

export default {
  title: "ChatRoom/ProfileMenu",
  component: ProfileMenu,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof ProfileMenu>;

type Story = StoryObj<typeof ProfileMenu>;

export const Primary: Story = {
  args: {
    username: "John Doe",
    isConnected: true,
    profileStatusText:"I'm loving this.",
    onLeaveRoom: () => {
        alert("handle Leave Room");
    },
  },
};
