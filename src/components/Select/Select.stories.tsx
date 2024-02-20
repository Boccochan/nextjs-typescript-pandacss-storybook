import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { css } from "#/styled-system/css";

import { Select } from "./Select";

type SelectProps = ComponentProps<typeof Select>;

const DisplayBox = (props: SelectProps) => {
  return (
    <div
      className={css({
        width: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        borderColor: "body.border",
        borderWidth: "1px",
        borderRadius: "md",
        position: "relative",
        _before: {
          position: "absolute",
          content: '"Parent component"',
          top: "-3.5",
          left: "10px",
          bg: "body.bg",
          padding: "0 4px",
          color: "body.text",
        },
      })}
    >
      <Select {...props} />
    </div>
  );
};

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
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    width: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "full", "auto"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Normal: Story = {
  args: {
    disabled: false,
    size: "md",
    width: "auto",
    options: [
      { hidden: true, id: "Select", value: "Select" },
      { id: "Apple", value: "Apple" },
      {
        id: "International Consolidated Airlines Group SA",
        value: "International Consolidated Airlines Group SA",
      },
      { id: "Amazon", value: "Amazon" },
      { id: "Meta", value: "Meta" },
      { id: "Google", value: "Google" },
    ],
  },
  render: DisplayBox,
};

export const Empty: Story = {
  args: {
    size: "md",
    width: "auto",
    disabled: false,
    options: [],
  },
  render: DisplayBox,
};

export const Selected: Story = {
  args: {
    size: "md",
    width: "auto",
    disabled: false,
    options: [
      { hidden: true, id: "Select", value: "Select" },
      { id: "Apple", value: "Apple" },
      {
        id: "International Consolidated Airlines Group SA",
        value: "International Consolidated Airlines Group SA",
      },
      { id: "Amazon", value: "Amazon", isSelected: true },
      { id: "Meta", value: "Meta" },
      { id: "Google", value: "Google" },
    ],
  },
  render: DisplayBox,
};

export const Loading: Story = {
  args: {
    size: "md",
    width: "auto",
    disabled: false,
    loading: true,
    options: [
      { hidden: true, id: "Select", value: "Select" },
      { id: "Apple", value: "Apple" },
      {
        id: "International Consolidated Airlines Group SA",
        value: "International Consolidated Airlines Group SA",
      },
      { id: "Amazon", value: "Amazon", isSelected: true },
      { id: "Meta", value: "Meta" },
      { id: "Google", value: "Google" },
    ],
  },
  render: DisplayBox,
};
