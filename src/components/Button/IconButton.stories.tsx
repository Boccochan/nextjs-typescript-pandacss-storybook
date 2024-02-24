import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";
import { MdOutlineThumbUpAlt, MdPerson } from "react-icons/md";

import { IconButton } from "./IconButton";
import { styles } from "./IconButton.styles";

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
      "IconButton allows users to take an action with a single click.",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick"] },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: styles.button.variantMap.size,
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
