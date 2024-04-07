// import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

// import { useTranslations } from "next-intl";
// import type { ComponentProps } from "react";
// import { MdContentCopy, MdDelete, MdEmail } from "react-icons/md";
// import { styles } from "./Button.styles";
import { DialogDraggable } from "./DialogDraggable";
// type ButtonProps = ComponentProps<typeof Button>;

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
    // size: {
    //   control: "select",
    //   options: styles.button.variantMap.size,
    // },
    // width: {
    //   control: "select",
    //   options: styles.button.variantMap.width,
    // },
  },
};

export default meta;
type Story = StoryObj<typeof DialogDraggable>;

export const Basic: Story = {
  args: {},
};
