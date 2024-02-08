import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { Button } from "./Button";
type ButtonProps = ComponentProps<typeof Button>;

const ButtonWithIntl = ({ color, size, label, ...rest }: ButtonProps) => {
  const t = useTranslations();
  return <Button color={color} size={size} label={t(label)} {...rest} />;
};

const meta = {
  title: "components/Button",
  component: ButtonWithIntl,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "select", options: ["primary", "danger"] },
    size: { control: "select", options: ["md", "lg"] },
  },
} satisfies Meta<typeof ButtonWithIntl>;

export default meta;
type Story = StoryObj<typeof ButtonWithIntl>;

export const Primary: Story = {
  args: {
    color: "primary",
    size: "md",
    label: "hello",
    disabled: false,
    loading: false,
    onSubmit: action("clicked"),
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    size: "md",
    label: "hello",
    disabled: false,
    loading: false,
    onSubmit: action("clicked"),
  },
};
