import type { ComponentProps } from "react";
import React from "react";

import { InputBase } from ".";
import type { InputBuilderVariants } from "./InputBuilder.styles";
import { styles } from "./InputBuilder.styles";

type BasicProps = ComponentProps<typeof InputBase>;

type InputBuilderProps = Omit<BasicProps, "size"> & {
  /**
   * The size of the component.
   */
  size?: InputBuilderVariants["size"];

  /**
   * The width of input. The width of the Input component can be fixed.
   */
  width?: InputBuilderVariants["width"];
};

export const InputBuilder = React.forwardRef<HTMLDivElement, InputBuilderProps>(
  ({ size, width, ...rest }, ref) => {
    return (
      <div ref={ref} className={styles.inputBuilder({ size, width })}>
        <InputBase {...rest} size={size} />
      </div>
    );
  },
);

InputBuilder.displayName = "InputBuilder";
