import { Meta, StoryObj } from "@storybook/react";
import { MessageBox } from "./MessageBox";

export default {
  title: "ChatRoom/MessageBox",
  component: MessageBox,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof MessageBox>;

type Story = StoryObj<typeof MessageBox>;

export const Primary: Story = {
  args: {
    text: "Hola mundo!",
  },
};
