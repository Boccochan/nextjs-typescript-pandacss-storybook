import React from "react";

import type { InputBaseVariants } from "./InputBase.styles";
import { styles } from "./InputBase.styles";

type BasicProps = Omit<
  React.JSX.IntrinsicElements["input"],
  "size" | "width" | "invalid"
>;

type InputBaseProps = BasicProps & {
  /**
   * The size of the component.
   */
  size?: InputBaseVariants["size"];
};

/**
 * - The width of the InputBase component is always 100%. The parent component of the InputBase component should decide the width
 */
export const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ size, ...rest }, ref) => (
    <input {...rest} ref={ref} className={styles.inputBase({ size })} />
  ),
);

InputBase.displayName = "InputBase";
