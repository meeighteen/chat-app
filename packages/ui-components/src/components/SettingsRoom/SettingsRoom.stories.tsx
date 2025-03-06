import { Meta, StoryObj } from "@storybook/react";
import { SettingsRoom } from "./SettingsRoom";
import { composeStory } from "@storybook/react";
import { vi } from "vitest";

export default {
  title: "ChatRoom/SettingsRoom",
  component: SettingsRoom,
  argTypes: {},
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SettingsRoom>;

type Story = StoryObj<typeof SettingsRoom>;

export const Default: Story = {
  args: {
    roomName: "Test User",
    handleButtonSearch: () => {
      console.log("handleButtonSearch");
    },
    ProfileMenuProps: {
      isConnected: true,
      username: "Test User",
      profileStatusText: "Online",
      onLeaveRoom: () => {
        console.log("onLeaveRoom");
      },
    },
    joinRoom: (roomName) => {
      console.log(`joinRoom to ${roomName}`);
    },
    roomsDefault: ["Global", "Peru", "Deportes"],
    isOpenMenuProfile: false,
  },
};
