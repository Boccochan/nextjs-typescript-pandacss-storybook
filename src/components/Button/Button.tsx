import React from "react";

import { button, type ButtonVariants } from "./Button.styles";

type Props = ButtonVariants & React.JSX.IntrinsicElements["button"];

type ButtonProps = Props & {
  label: string;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, size, label, ...rest }, ref) => (
    <button ref={ref} {...rest} className={button({ color, size })}>
      {label}
    </button>
  ),
);

Button.displayName = "Button";
