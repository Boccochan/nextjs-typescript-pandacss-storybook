import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { DisplayBox } from "@/storybooklib";

import { InputBase } from "./InputBase";
import { styles } from "./InputBase.styles";

type Props = ComponentProps<typeof InputBase>;

const Component = (props: Props) => {
  return (
    <DisplayBox>
      <InputBase {...props} />
    </DisplayBox>
  );
};

const meta: Meta<typeof InputBase> = {
  title: "components/InputBase",
  component: InputBase,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "InputBase component is a component that is used to receive input from the user.",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick", "placeholder"] },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: styles.inputBase.variantMap.size,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputBase>;

export const Basic: Story = {
  args: {
    placeholder: "Input some text",
    disabled: false,
    readOnly: false,
  },
  render: Component,
};

export const Disabled: Story = {
  args: {
    placeholder: "Input some text",
    disabled: true,
    readOnly: false,
  },
  render: Component,
};

export const ReadOnly: Story = {
  args: {
    placeholder: "Input some text",
    disabled: false,
    readOnly: true,
  },
  render: Component,
};
