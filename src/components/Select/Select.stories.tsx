import type { Meta, StoryObj } from "@storybook/react";
import type { ChangeEvent } from "react";
import { type ComponentProps, useState } from "react";

import { DisplayBox } from "@/storybooklib";

import { Select } from "./Select";
import { styles } from "./Select.styles";

type SelectProps = ComponentProps<typeof Select>;

const WithParent = (props: SelectProps) => {
  const [selected, setSelected] = useState<string>();

  const change = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <DisplayBox>
      <Select {...props} value={selected} onChange={change} />
    </DisplayBox>
  );
};

const meta: Meta<typeof Select> = {
  title: "components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "The Select component should be used when there are 4 or more options. Otherwise, consider radio button.",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick"] },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: styles.select.variantMap.size,
    },
    width: {
      control: "select",
      options: styles.select.variantMap.width,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  args: {
    disabled: false,
    size: "md",
    width: "auto",
    options: [
      { hidden: true, id: "Select", value: "Select" },
      { id: "Apple", value: "Apple" },
      {
        id: "International Consolidated Airlines Group SA",
        value: "International Consolidated Airlines Group SA",
      },
      { id: "Amazon", value: "Amazon" },
      { id: "Meta", value: "Meta" },
      { id: "Google", value: "Google" },
    ],
  },
  render: WithParent,
};

export const Empty: Story = {
  args: {
    size: "md",
    width: "auto",
    disabled: false,
    options: [],
  },
  render: WithParent,
};

export const Selected: Story = {
  args: {
    size: "md",
    width: "auto",
    disabled: false,
    options: [
      { hidden: true, id: "Select", value: "Select" },
      { id: "Apple", value: "Apple" },
      {
        id: "International Consolidated Airlines Group SA",
        value: "International Consolidated Airlines Group SA",
      },
      { id: "Amazon", value: "Amazon" },
      { id: "Meta", value: "Meta" },
      { id: "Google", value: "Google" },
    ],
    defaultValue: "Amazon",
  },
  render: WithParent,
};

export const Loading: Story = {
  args: {
    size: "md",
    width: "md",
    disabled: false,
    loading: true,
    options: [],
  },
  render: WithParent,
};
