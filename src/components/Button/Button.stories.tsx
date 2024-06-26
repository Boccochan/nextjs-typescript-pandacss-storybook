import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";
import { MdContentCopy, MdDelete, MdEmail } from "react-icons/md";

import { Button } from "./Button";
import { styles } from "./Button.styles";
type ButtonProps = ComponentProps<typeof Button>;

const ButtonWithIntl = ({ color, size, label, ...rest }: ButtonProps) => {
  const t = useTranslations();
  return <Button color={color} size={size} label={t(label)} {...rest} />;
};

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
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
    color: {
      control: "select",
      options: styles.button.variantMap.color,
    },
    variants: {
      control: "select",
      options: styles.button.variantMap.variants,
    },
    size: {
      control: "select",
      options: styles.button.variantMap.size,
    },
    width: {
      control: "select",
      options: styles.button.variantMap.width,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: "primary",
    variants: "contained",
    size: "md",
    label: "hello",
    disabled: false,
    loading: false,
    width: "auto",
    onClick: action("clicked"),
  },
  render: ButtonWithIntl,
};

export const Danger: Story = {
  args: {
    color: "danger",
    variants: "contained",
    size: "md",
    label: "hello",
    disabled: false,
    loading: false,
    width: "auto",
    onClick: action("clicked"),
  },
  render: ButtonWithIntl,
};

export const PrimaryWithMdMailIcon: Story = {
  args: {
    color: "primary",
    variants: "contained",
    size: "md",
    label: "Send",
    disabled: false,
    loading: false,
    width: "auto",
    onClick: action("clicked"),
    Icon: MdEmail,
  },
  render: ButtonWithIntl,
};

export const PrimaryWithMdContentCopyIcon: Story = {
  args: {
    color: "primary",
    variants: "contained",
    size: "md",
    label: "Copy",
    disabled: false,
    loading: false,
    width: "auto",
    onClick: action("clicked"),
    Icon: MdContentCopy,
  },
  render: ButtonWithIntl,
};

export const PrimaryWithMdDeleteIcon: Story = {
  args: {
    color: "primary",
    variants: "contained",
    size: "md",
    label: "Delete",
    disabled: false,
    loading: false,
    width: "auto",
    onClick: action("clicked"),
    Icon: MdDelete,
  },
  render: ButtonWithIntl,
};
