import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { DisplayBox } from "@/storybooklib";

import { Input } from "./Input";
import { styles } from "./Input.styles";

type Props = ComponentProps<typeof Input>;

const Component = (props: Props) => {
  return (
    <DisplayBox>
      <Input {...props} />
    </DisplayBox>
  );
};

const meta: Meta<typeof Input> = {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Input component is a component that is used to receive input from the user.",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick", "placeholder"] },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: styles.input.variantMap.size,
    },
    width: {
      control: "select",
      options: styles.input.variantMap.width,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    size: "md",
    width: "full",
    color: "basic",
    placeholder: "Input some text",
    disabled: false,
    readOnly: false,
    invalid: false,
  },
  render: Component,
};

export const Invalid: Story = {
  args: {
    size: "md",
    width: "full",
    color: "danger",
    placeholder: "Input some text",
    disabled: false,
    readOnly: false,
    invalid: true,
  },
  render: Component,
};
