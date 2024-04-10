// import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
// import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { DisplayBox } from "@/storybooklib";

import { Button } from "../Button";
import { DialogDraggable } from "./DialogDraggable";
// import { MdContentCopy, MdDelete, MdEmail } from "react-icons/md";
import { styles } from "./DialogDraggable.styles";
import { useDialog } from "./hooks";
// type ButtonProps = ComponentProps<typeof Button>;

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
    // color: {
    //   control: "select",
    //   options: styles.button.variantMap.color,
    // },
    size: {
      control: "select",
      options: styles.wrapper.variantMap.size,
    },
    // width: {
    //   control: "select",
    //   options: styles.button.variantMap.width,
    // },
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
      <DialogDraggable isOpen={isOpen} onClose={onClose} size={props.size}>
        {props.children}
      </DialogDraggable>
    </DisplayBox>
  );
};

export const Basic: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
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
