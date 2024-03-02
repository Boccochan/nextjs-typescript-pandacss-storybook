import React from "react";

import type { InputVariants } from "./Input.styles";
import { styles } from "./Input.styles";

type BasicProps = Omit<
  React.JSX.IntrinsicElements["input"],
  "size" | "width" | "invalid"
>;

type InputProps = BasicProps & {
  /**
   * The size of the component.
   */
  size?: InputVariants["size"];

  /**
   * The width of input. The width of the Input component can be fixed.
   */
  width?: InputVariants["width"];

  /**
   * If true, the input represents invalid. If you want to put error message, consider to use the ErrorMessage component.
   */
  invalid?: InputVariants["invalid"];
};

// TODO: Check react-hook-forms
// TODO: Word count
// TODO: Support password
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size, width, invalid, ...rest }, ref) => (
    <input
      {...rest}
      ref={ref}
      className={styles.input({ size, width, invalid })}
    />
  ),
);

Input.displayName = "Input";
