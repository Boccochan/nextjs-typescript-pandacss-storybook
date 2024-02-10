import type { Meta, StoryObj } from "@storybook/react";

import { css } from "#/styled-system/css";

import { Spinner } from "./Spinner";

const meta = {
  title: "components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        className={css({
          padding: "4",
          bg: "{colors.blue.500}",
          opacity: "0.7",
        })}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Normal: Story = {};
