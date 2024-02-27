import type { Meta, StoryObj } from "@storybook/react";

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
