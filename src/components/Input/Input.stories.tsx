import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { css } from "#/styled-system/css";

import { Input } from "./Input";
import { styles } from "./Input.styles";

type Props = ComponentProps<typeof Input>;

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
      <Input {...props} />
    </div>
  );
};

const meta: Meta<typeof Input> = {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Input component is a component that is used to receive input from the user.",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick", "placeholder"] },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: styles.input.variantMap.size,
    },
    width: {
      control: "select",
      options: styles.input.variantMap.width,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    size: "md",
    width: "full",
    color: "basic",
    placeholder: "Input some text",
    disabled: false,
    readOnly: false,
    invalid: false,
  },
  render: DisplayBox,
};

export const Invalid: Story = {
  args: {
    size: "md",
    width: "full",
    color: "danger",
    placeholder: "Input some text",
    disabled: false,
    readOnly: false,
    invalid: true,
  },
  render: DisplayBox,
};
