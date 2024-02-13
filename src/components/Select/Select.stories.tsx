// import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

// import { useTranslations } from "next-intl";
// import type { ComponentProps } from "react";
// import { MdOutlineThumbUpAlt, MdPerson } from "react-icons/md";
import { Select } from "./Select";

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
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Enabled: Story = {
  args: {
    options: ["Apple", "Microsoft", "Amazon", "Meta", "Google"],
  },
};

// export const MdOutlineThumbUpAltIcon: Story = {
//   args: {
//     size: "md",
//     disabled: false,
//     loading: false,
//     onClick: action("clicked"),
//     Icon: MdOutlineThumbUpAlt,
//     "aria-label": "Good button",
//   },
//   render: IconButtonWithIntl,
// };