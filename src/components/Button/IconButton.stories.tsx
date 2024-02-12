import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";
import { MdOutlineThumbUpAlt, MdPerson } from "react-icons/md";

import { IconButton } from "./IconButton";

type ButtonProps = ComponentProps<typeof IconButton>;

const IconButtonWithIntl = ({
  color,
  size,
  Icon,
  onClick,
  ...rest
}: ButtonProps) => {
  const t = useTranslations();

  return (
    <IconButton
      color={color}
      size={size}
      aria-label={t(rest["aria-label"] ?? "")}
      Icon={Icon}
      onClick={onClick}
    />
  );
};

const meta = {
  title: "components/IconButton",
  component: IconButtonWithIntl,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
  },
} satisfies Meta<typeof IconButtonWithIntl>;

export default meta;
type Story = StoryObj<typeof IconButtonWithIntl>;

export const MdUserIcon: Story = {
  args: {
    size: "md",
    disabled: false,
    loading: false,
    onClick: action("clicked"),
    Icon: MdPerson,
    "aria-label": "Personal",
  },
};

export const MdOutlineThumbUpAltIcon: Story = {
  args: {
    size: "md",
    disabled: false,
    loading: false,
    onClick: action("clicked"),
    Icon: MdOutlineThumbUpAlt,
    "aria-label": "Good button",
  },
};
