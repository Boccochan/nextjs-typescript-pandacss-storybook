import type { Meta, StoryObj } from "@storybook/react";

import { css } from "#/styled-system/css";

import { Spinner } from "./Spinner";

const meta = {
  title: "components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        className={css({
          padding: "4",
          bg: "{colors.blue.400}",
          opacity: "0.5",
        })}
      >
        <Story></Story>
      </div>
    ),
  ],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Normal: Story = {};
