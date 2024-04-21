import type { Meta, StoryObj } from "@storybook/react";
import { useFormatter } from "next-intl";
import type { ComponentProps } from "react";
import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

import { extractIntegerFromString } from "@/lib";
import { DisplayBox } from "@/storybooklib";

import { InputBuilder } from "./InputBuilder";
import { styles } from "./InputBuilder.styles";

type Props = ComponentProps<typeof InputBuilder>;

const Component = (props: Props) => {
  return (
    <DisplayBox>
      <InputBuilder {...props} />
    </DisplayBox>
  );
};

const meta: Meta<typeof InputBuilder> = {
  title: "components/InputBuilder",
  component: InputBuilder,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "InputBuilder is capable of constructing complex Input component.",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick", "placeholder"] },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: styles.inputBuilder.variantMap.size,
    },
    width: {
      control: "select",
      options: styles.inputBuilder.variantMap.width,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputBuilder>;

export const Basic: Story = {
  args: {
    placeholder: "Input some text",
    disabled: false,
    readOnly: false,
    size: "md",
    width: "full",
  },
  render: Component,
};

export const Disabled: Story = {
  args: {
    placeholder: "Input some text",
    disabled: true,
    readOnly: false,
    size: "md",
    width: "full",
  },
  render: Component,
};

export const ReadOnly: Story = {
  args: {
    placeholder: "Input some text",
    disabled: false,
    readOnly: true,
    size: "md",
    width: "full",
  },
  render: Component,
};

export const WithStartIcon: Story = {
  args: {
    placeholder: "Input some text",
    disabled: false,
    readOnly: false,
    size: "md",
    width: "full",
    StartIcon: MdAccountCircle,
  },
  render: Component,
};

export const WithEndIcon: Story = {
  args: {
    placeholder: "Input some text",
    disabled: false,
    readOnly: false,
    size: "md",
    width: "full",
    EndIcon: RiEyeCloseLine,
  },
  render: Component,
};

const InputNumberComponent = (props: Props) => {
  const [value, setValue] = React.useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(extractIntegerFromString(e.target.value));
  };

  return (
    <DisplayBox>
      <InputBuilder {...props} value={value} onChange={onChange} />
    </DisplayBox>
  );
};

export const InputIntegerNumber: Story = {
  args: {
    placeholder: "Input integer number",
    disabled: false,
    readOnly: false,
    size: "md",
    width: "full",
  },
  render: InputNumberComponent,
};

const InputNumberWithCommaFormatComponent = (props: Props) => {
  const [value, setValue] = React.useState<string>("");
  const format = useFormatter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = extractIntegerFromString(e.target.value);
    setValue(result);
  };

  const onBlur = () => {
    setValue(value && format.number(Number(value)));
  };

  const onFocus = () => {
    setValue(extractIntegerFromString(value));
  };

  return (
    <DisplayBox>
      <InputBuilder
        {...props}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </DisplayBox>
  );
};

export const InputIntegerNumberWithCommaFormat: Story = {
  args: {
    placeholder: "Input integer number",
    disabled: false,
    readOnly: false,
    size: "md",
    width: "full",
  },
  render: InputNumberWithCommaFormatComponent,
};
