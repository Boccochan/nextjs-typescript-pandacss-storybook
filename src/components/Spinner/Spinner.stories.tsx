import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { css } from "#/styled-system/css";

import { Spinner } from "./Spinner";

const meta = {
  title: "components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Spinner displays the status while processing.",
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    color: { control: "select", options: ["light", "plain"] },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Plain: Story = {
  args: {
    size: "md",
    color: "plain",
  },
};

type SpinnerProps = ComponentProps<typeof Spinner>;

const WithBg = (props: SpinnerProps) => {
  return (
    <div className={css({ bg: "{colors.blue.500}" })}>
      <Spinner {...props} />
    </div>
  );
};

export const Light: Story = {
  args: {
    size: "md",
    color: "light",
  },
  render: WithBg,
};
