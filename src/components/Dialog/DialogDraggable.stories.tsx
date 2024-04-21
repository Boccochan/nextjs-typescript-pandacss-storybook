import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { DisplayBox } from "@/storybooklib";

import { Button } from "../Button";
import { DialogDraggable } from "./DialogDraggable";
import { styles } from "./DialogDraggable.styles";
import { useDialog } from "./hooks";

type Props = ComponentProps<typeof DialogDraggable>;

const meta: Meta<typeof DialogDraggable> = {
  title: "components/DialogDraggable",
  component: DialogDraggable,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Button allows users to take an action with a single click.",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick"] },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: styles.wrapper.variantMap.size,
    },
  },
};

export default meta;
type Story = StoryObj<typeof DialogDraggable>;

const WithButton = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDialog();
  return (
    <DisplayBox>
      <Button
        label="Open Draggable Dialog"
        onClick={onOpen}
        disabled={isOpen}
      />
      <DialogDraggable
        isOpen={isOpen}
        onClose={onClose}
        size={props.size}
        position={props.position}
      >
        {props.children}
      </DialogDraggable>
    </DisplayBox>
  );
};

export const WithCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
  },
  render: WithButton,
};

export const CenterTopWithCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    position: { x: "center", y: "top" },
  },
  render: WithButton,
};

export const CenterBottomWithCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    position: { x: "center", y: "bottom" },
  },
  render: WithButton,
};

export const LeftMiddleWithCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    position: { x: "left", y: "middle" },
  },
  render: WithButton,
};

export const LeftTopWithCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    position: { x: "left", y: "top" },
  },
  render: WithButton,
};

export const LeftBottomWithCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    position: { x: "left", y: "bottom" },
  },
  render: WithButton,
};

export const RightMiddleWithCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    position: { x: "right", y: "middle" },
  },
  render: WithButton,
};

export const RightTopWithCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    position: { x: "right", y: "top" },
  },
  render: WithButton,
};

export const RightBottomWithCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    position: { x: "right", y: "bottom" },
  },
  render: WithButton,
};

export const WithoutCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    isOpen: true,
    onClose: undefined,
  },
};

export const CenterTopWithoutCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    isOpen: true,
    onClose: undefined,
    position: { x: "center", y: "top" },
  },
};

export const LeftTopWithoutCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    isOpen: true,
    onClose: undefined,
    position: { x: "left", y: "top" },
  },
};

export const RightTopWithoutCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    isOpen: true,
    onClose: undefined,
    position: { x: "right", y: "top" },
  },
};

export const LeftMiddleWithoutCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    isOpen: true,
    onClose: undefined,
    position: { x: "left", y: "middle" },
  },
};

export const RightMiddleWithoutCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    isOpen: true,
    onClose: undefined,
    position: { x: "right", y: "middle" },
  },
};

export const CenterBottomWithoutCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    isOpen: true,
    onClose: undefined,
    position: { x: "center", y: "bottom" },
  },
};

export const LeftBottomWithoutCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    isOpen: true,
    onClose: undefined,
    position: { x: "left", y: "bottom" },
  },
};

export const RightBottomWithoutCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    isOpen: true,
    onClose: undefined,
    position: { x: "right", y: "bottom" },
  },
};
