"use client";
import React from "react";

import { InputBase } from ".";
import type { InputBuilderVariants } from "./InputBuilder.styles";
import { styles } from "./InputBuilder.styles";

type BasicProps = React.JSX.IntrinsicElements["div"];

type InputBuilderProps = BasicProps & {
  size?: InputBuilderVariants["size"];

  width?: InputBuilderVariants["size"];
};

export const InputBuilder = React.forwardRef<HTMLDivElement, InputBuilderProps>(
  ({ size, width, ...rest }, ref) => {
    const [isFocus, setIsFocus] = React.useState(false);

    return (
      <div ref={ref} {...rest} className={styles.inputBuilder({ size, width })}>
        <InputBase onFocus={() => setIsFocus((focus) => !focus)} />
      </div>
    );
  },
);

InputBuilder.displayName = "InputBuilder";
