import { action } from "@storybook/addon-actions";
// import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";
import { MdOutlineThumbUpAlt, MdPerson } from "react-icons/md";

import { IconButton } from "./IconButton";

type IconButtonProps = ComponentProps<typeof IconButton>;

const IconButtonWithIntl = ({
  size,
  disabled,
  loading,
  onClick,
  Icon,
  ...rest
}: IconButtonProps) => {
  const t = useTranslations();
  return (
    <IconButton
      size={size}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      Icon={Icon}
      aria-label={t(rest["aria-label"])}
    />
  );
};

const meta: Meta<typeof IconButton> = {
  title: "components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Icon button. Use this button only when the user can predict the behavior from the icon. For accessibility reasons, this button does not provide a tooltip. The reason why tooltips are not used is because users using screen readers will not notice them. Smartphone and tablet users will not notice the tooltip as well.",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick"] },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Specify the size of the icon",
      defaultValue: "md",
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const MdUserIcon: Story = {
  args: {
    size: "md",
    disabled: false,
    loading: false,
    onClick: action("clicked"),
    Icon: MdPerson,
    "aria-label": "Personal",
  },
  render: IconButtonWithIntl,
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
  render: IconButtonWithIntl,
};
