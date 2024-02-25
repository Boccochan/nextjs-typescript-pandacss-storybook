import React from "react";

import type { InputVariants } from "./Input.styles";
import { styles } from "./Input.styles";

type BasicProps = Omit<React.JSX.IntrinsicElements["input"], "size" | "width">;

type InputProps = BasicProps & {
  /**
   * The size of the component.
   */
  size?: InputVariants["size"];

  /**
   * The width of input. The width of the Input component can be fixed.
   */
  width?: InputVariants["width"];
};

// TODO: Check react-hook-forms
// TODO: Support error messages
// TODO: Word count
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size, width, ...rest }, ref) => (
    <input {...rest} ref={ref} className={styles.input({ size, width })} />
  ),
);

Input.displayName = "Input";
