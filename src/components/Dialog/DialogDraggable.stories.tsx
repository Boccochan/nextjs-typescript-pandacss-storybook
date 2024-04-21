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
      "This dialog is useful for interacting with users without hiding the background screen.",
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
    positionX: {
      control: "select",
      options: ["left", "center", "right"],
    },
    positionY: {
      control: "select",
      options: ["top", "middle", "bottom"],
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
        positionX={props.positionX}
        positionY={props.positionY}
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
    positionX: "center",
    positionY: "middle",
  },
  render: WithButton,
};

export const WithoutCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    isOpen: true,
    onClose: undefined,
    positionX: "center",
    positionY: "middle",
  },
};
