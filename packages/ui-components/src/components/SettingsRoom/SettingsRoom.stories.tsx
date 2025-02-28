import { Meta, StoryObj } from "@storybook/react";
import { SettingsRoom } from "./SettingsRoom";
import { composeStory } from "@storybook/react";
import { vi } from "vitest";

export default {
  title: "ChatRoom/SettingsRoom",
  component: SettingsRoom,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof SettingsRoom>;

type Story = StoryObj<typeof SettingsRoom>;

export const Default: Story = {
  args: {
    username: "Test User",
    handleButtonMenu: () => {
      console.log("handleButtonMenu")
    },
    handleButtonSearch: () => {
      console.log("handleButtonSearch")
    },
  },
};
