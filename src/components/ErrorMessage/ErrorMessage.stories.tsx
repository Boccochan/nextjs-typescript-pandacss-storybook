import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Input } from "@/components/Input";
import { Label } from "@/components/Label";

import { ErrorMessage } from "./ErrorMessage";
import { styles } from "./ErrorMessage.styles";

const meta: Meta<typeof ErrorMessage> = {
  title: "components/ErrorMessage",
  component: ErrorMessage,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "The error message component displays error messages.",
    layout: "centered",
    docs: {
      controls: { exclude: ["disabled", "onClick", "placeholder"] },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: styles.errorMessage.variantMap.size,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Basic: Story = {
  args: {
    size: "md",
    text: "This is error message!!",
  },
};

type Props = ComponentProps<typeof ErrorMessage>;

const InputAndLabel = (props: Props) => (
  <Label name={"Sample"}>
    <Input width="md" invalid={props.text != undefined} />
    <ErrorMessage {...props} />
  </Label>
);

export const WithInvalidInputAndLabel: Story = {
  args: {
    text: "This is error message",
    size: "md",
  },
  render: InputAndLabel,
};

export const WithdInputAndLabel: Story = {
  args: {
    text: undefined,
    size: "md",
  },
  render: InputAndLabel,
};
