import React from "react";

import { InputBase } from ".";
import type { InputBuilderVariants } from "./InputBuilder.styles";
import { styles } from "./InputBuilder.styles";

type BasicProps = React.JSX.IntrinsicElements["div"];

type InputBuilderProps = BasicProps & {
  /**
   * The size of the component.
   */
  size?: InputBuilderVariants["size"];

  /**
   * The width of input. The width of the Input component can be fixed.
   */
  width?: InputBuilderVariants["size"];
};

export const InputBuilder = React.forwardRef<HTMLDivElement, InputBuilderProps>(
  ({ size, width, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest} className={styles.inputBuilder({ size, width })}>
        <InputBase />
      </div>
    );
  },
);

InputBuilder.displayName = "InputBuilder";
