import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { MdOutlineThumbUpAlt, MdPerson } from "react-icons/md";

import { IconButton } from "./IconButton";

const meta = {
  title: "components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const MdUserIcon: Story = {
  args: {
    size: "md",
    disabled: false,
    loading: false,
    onClick: action("clicked"),
    Icon: MdPerson,
  },
};

export const MdOutlineThumbUpAltIcon: Story = {
  args: {
    size: "md",
    disabled: false,
    loading: false,
    onClick: action("clicked"),
    Icon: MdOutlineThumbUpAlt,
  },
};
