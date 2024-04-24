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
        title={props.title}
        positionX={props.positionX}
        positionY={props.positionY}
      >
        {props.children}
      </DialogDraggable>
    </DisplayBox>
  );
};

const SampleContent = () => {
  return (
    <div>
      <h3>Hello World!!</h3>
      <p>
        Say you weigh 70 kilograms and you go for a brisk walk for 1 hour. To
        calculate the calories burned during this activity, you can use the
        formula: Calories burned = Weight (kg) × Time (hours) × MET value
        Assuming the MET value for walking is 3.5, the calculation would be:
        Calories burned = 70 kg × 1 hour × 3.5 MET = 245 calories. So, during
        this 1-hour walk, you would burn approximately 245 calories
      </p>
    </div>
  );
};

export const WithCloseButton: Story = {
  args: {
    children: SampleContent(),
    size: "md",
    positionX: "center",
    positionY: "middle",
    title: "Sample",
  },
  render: WithButton,
};

export const WithoutCloseButton: Story = {
  args: {
    children: <div>Hello</div>,
    size: "md",
    isOpen: true,
    onClose: undefined,
    title: "Sample",
    positionX: "center",
    positionY: "middle",
  },
};
