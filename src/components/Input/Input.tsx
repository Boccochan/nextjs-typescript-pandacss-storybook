import React from "react";

import type { InputVariants } from "./Input.styles";
import { styles } from "./Input.styles";

type InputProps = Omit<React.JSX.IntrinsicElements["input"], "size"> & {
  size?: InputVariants["size"];

  width?: InputVariants["width"];
};

// TODO: Fix input styles
// TODO: Check react-hook-forms
// TODO: Support error messages
// TODO: Word count
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size, ...rest }, ref) => (
    <input {...rest} ref={ref} className={styles.input({ size })} />
  ),
);

Input.displayName = "Input";
