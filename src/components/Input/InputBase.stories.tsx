import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { css } from "#/styled-system/css";

import { InputBase } from "./InputBase";
import { styles } from "./InputBase.styles";

type Props = ComponentProps<typeof InputBase>;

const DisplayBox = (props: Props) => {
  return (
    <div
      className={css({
        width: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        borderColor: "body.border",
        px: "4",
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
      <InputBase {...props} />
    </div>
  );
};

const meta: Meta<typeof InputBase> = {
  title: "components/InputBase",
  component: InputBase,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "InputBase component is a component that is used to receive input from the user.",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick", "placeholder"] },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: styles.inputBase.variantMap.size,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputBase>;

export const Basic: Story = {
  args: {
    placeholder: "Input some text",
    disabled: false,
    readOnly: false,
  },
  render: DisplayBox,
};

export const Disabled: Story = {
  args: {
    placeholder: "Input some text",
    disabled: true,
    readOnly: false,
  },
  render: DisplayBox,
};

export const ReadOnly: Story = {
  args: {
    placeholder: "Input some text",
    disabled: false,
    readOnly: true,
  },
  render: DisplayBox,
};
