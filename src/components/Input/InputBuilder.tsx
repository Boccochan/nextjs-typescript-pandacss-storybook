import type { ComponentProps } from "react";
import React from "react";
import type { IconType } from "react-icons";

import { InputBase } from ".";
import type { InputBuilderVariants } from "./InputBuilder.styles";
import { styles } from "./InputBuilder.styles";
import { InputIcon } from "./InputIcon";

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

  /**
   * The StartIcon decorates the ICON at the beginning.
   */
  StartIcon?: IconType;

  /**
   * The StartIcon decorates the ICON at the ending.
   */
  EndIcon?: IconType;
};

export const InputBuilder = React.forwardRef<HTMLDivElement, InputBuilderProps>(
  ({ size, width, StartIcon, EndIcon, disabled, readOnly, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={styles.inputBuilder({ size, width, disabled, readOnly })}
      >
        <InputIcon size={size}>{StartIcon && <StartIcon />}</InputIcon>
        <InputBase
          {...rest}
          disabled={disabled}
          readOnly={readOnly}
          size={size}
        />
        <InputIcon size={size}>{EndIcon && <EndIcon />}</InputIcon>
      </div>
    );
  },
);

InputBuilder.displayName = "InputBuilder";
