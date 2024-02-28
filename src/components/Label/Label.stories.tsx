import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Input } from "@/components/Input";
import { Select } from "@/components/Select";

import { Label } from "./Label";
import { styles } from "./Label.styles";

const meta: Meta<typeof Label> = {
  title: "components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "The InputLabel represents a caption for the other components, such as Input. ",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick", "placeholder"] },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: styles.label.variantMap.size,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Basic: Story = {
  args: {
    name: "hello",
  },
};

type Props = ComponentProps<typeof Label>;

const LabelWithInput = (props: Props) => (
  <Label {...props}>
    <Input />
  </Label>
);

// TODO: When width is fixed, label is put the besides of input.
export const WithInput: Story = {
  args: {
    name: "hello",
    size: "md",
  },
  render: LabelWithInput,
};

const LabelWithSelect = (props: Props) => (
  <Label {...props}>
    <Select
      options={[
        { id: "apple", value: "Apple" },
        { id: "microsoft", value: "Microsoft" },
      ]}
    />
  </Label>
);

export const WithSelect: Story = {
  args: {
    name: "hello",
    size: "md",
  },
  render: LabelWithSelect,
};
