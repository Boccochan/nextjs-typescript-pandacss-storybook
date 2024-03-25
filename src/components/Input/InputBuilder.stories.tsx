import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { css } from "#/styled-system/css";

// import { styles } from "./InputBase.styles";
import { InputBuilder } from "./InputBuilder";

type Props = ComponentProps<typeof InputBuilder>;

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
      <InputBuilder {...props} />
    </div>
  );
};

const meta: Meta<typeof InputBuilder> = {
  title: "components/InputBuilder",
  component: InputBuilder,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Fix document",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick", "placeholder"] },
    },
  },
  argTypes: {
    // size: {
    //   control: "select",
    //   options: styles.inputBase.variantMap.size,
    // },
  },
};

export default meta;
type Story = StoryObj<typeof InputBuilder>;

export const Basic: Story = {
  args: {
    // placeholder: "Input some text",
    // disabled: false,
    // readOnly: false,
  },
  render: DisplayBox,
};

// export const Disabled: Story = {
//   args: {
//     placeholder: "Input some text",
//     disabled: true,
//     readOnly: false,
//   },
//   render: DisplayBox,
// };

// export const ReadOnly: Story = {
//   args: {
//     placeholder: "Input some text",
//     disabled: false,
//     readOnly: true,
//   },
//   render: DisplayBox,
// };
