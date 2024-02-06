import type { Meta, StoryObj } from "@storybook/react";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { Button } from "./Button";
type ButtonProps = ComponentProps<typeof Button>;

// TODO: Move into decorator
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
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
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
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    size: "md",
    label: "hello",
    disabled: false,
  },
};
