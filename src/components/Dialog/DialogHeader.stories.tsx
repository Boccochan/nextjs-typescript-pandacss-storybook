import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { DisplayBox } from "@/storybooklib";

import { DialogHeader } from "./DialogHeader";

type Props = ComponentProps<typeof DialogHeader>;

const WithParent = (props: Props) => {
  console.log(props);
  return (
    <DisplayBox>
      <DialogHeader {...props} />
    </DisplayBox>
  );
};

const meta: Meta<typeof DialogHeader> = {
  title: "components/DialogHeader",
  component: DialogHeader,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "This dialog is useful for interacting with users without hiding the background screen.",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick"] },
    },
  },
  argTypes: {
    // positionX: {
    //   control: "select",
    //   options: ["left", "center", "right"],
    // },
    // positionY: {
    //   control: "select",
    //   options: ["top", "middle", "bottom"],
    // },
  },
};

export default meta;
type Story = StoryObj<typeof DialogHeader>;

export const Basic: Story = {
  args: {
    title: "Title",
    onClose: action("clicked"),
  },
  render: WithParent,
};

export const WithoutCloseButton: Story = {
  args: {
    title: "Title",
    onClose: undefined,
  },
  render: WithParent,
};
