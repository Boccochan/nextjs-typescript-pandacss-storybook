import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { DisplayBox } from "@/storybooklib";

import { Button } from "../Button";
import { DialogContent } from "./DialogContent";
import { styles } from "./DialogContent.styles";
import { DialogDraggable } from "./DialogDraggable";
import { DialogFooter } from "./DialogFooter";
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
      options: styles.content.variantMap.size,
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
        <DialogContent size={props.size}>
          <p>
            Below is a sample message for the dialog component in Storybook.
            This message informs users about recent updates to our platform,
            including new features, bug fixes, and improvements.
          </p>
          <p>
            It also provides instructions for providing feedback and reporting
            any issues encountered. We highly value user feedback and are
            dedicated to improving our services based on your suggestions. Thank
            you for being part of our community!
          </p>
        </DialogContent>
        <DialogFooter size={props.size}>
          <Button
            label="Cancel"
            size={props.size}
            width={props.size}
            onClick={onClose}
            variants="outline"
          />
          <Button label="Send" width={props.size} size={props.size} />
        </DialogFooter>
      </DialogDraggable>
    </DisplayBox>
  );
};

export const WithCloseButton: Story = {
  args: {
    size: "md",
    positionX: "center",
    positionY: "middle",
    title: "Sample dialog",
  },
  render: WithButton,
};

const WithoutClose = (props: Props) => {
  return (
    <DialogDraggable
      isOpen={props.isOpen}
      onClose={props.onClose}
      size={props.size}
      title={props.title}
      positionX={props.positionX}
      positionY={props.positionY}
    >
      <DialogContent size={props.size}>
        <h3>Hello World!!</h3>
        <p>
          Say you weigh 70 kilograms and you go for a brisk walk for 1 hour. To
          calculate the calories burned during this activity, you can use the
          formula: Calories burned = Weight (kg) × Time (hours) × MET value
          Assuming the MET value for walking is 3.5, the calculation would be:
          Calories burned = 70 kg × 1 hour × 3.5 MET = 245 calories. So, during
          this 1-hour walk, you would burn approximately 245 calories
        </p>
      </DialogContent>
    </DialogDraggable>
  );
};

export const WithoutCloseButton: Story = {
  args: {
    size: "md",
    isOpen: true,
    onClose: undefined,
    title: "Sample",
    positionX: "center",
    positionY: "middle",
  },
  render: WithoutClose,
};
