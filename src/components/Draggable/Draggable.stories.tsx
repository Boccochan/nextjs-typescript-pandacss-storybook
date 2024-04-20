import type { Meta, StoryObj } from "@storybook/react";

import { css } from "#/styled-system/css";

import { Draggable } from "./Draggable";

const meta: Meta<typeof Draggable> = {
  title: "components/Draggable",
  component: Draggable,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Plain and draggable components.",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick"] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Draggable>;

export const Basic: Story = {
  args: {
    children: <div>Hello</div>,
    className: css({ bg: "blue.300", padding: 8 }),
    style: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  },
};
