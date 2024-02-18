import React from "react";

// import { css } from "#/styled-system/css";
import type { SelectVariants } from "./Select.styles";
import { styles } from "./Select.styles";

type Option = {
  /**
   * Hidden this option on dropdown menu.
   */
  hidden?: boolean;

  /**
   * The id is set as 'key' of option tag.
   */
  id: string;

  /**
   * The value is shown at dropdown menu.
   */
  value: string;
};

type SelectProps = Omit<React.JSX.IntrinsicElements["select"], "size"> & {
  /**
   * The size of the component.
   */
  size?: SelectVariants["size"];

  /**
   * The width of select box. The width of the Select component can be fixed.
   */
  width?: SelectVariants["width"];

  /**
   * The options of the select.
   */
  options: Option[];
};

// TODO: Loading state
// TODO: Readonly

/**
 * - The Select component uses pure HTML select tags to avoid complex Javascript implementations.
 * - There is a limit to the width of options.
 * - If you need a richer menu, consider to implement another component.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, disabled, size, width, ...rest }, ref) => {
    const isDisabled = disabled || options.length === 0;

    return (
      <div
        className={styles.wrapper({
          disabled: isDisabled,
          width,
        })}
      >
        <select
          ref={ref}
          {...rest}
          className={styles.select({ size, width })}
          disabled={isDisabled}
        >
          {options.map((option) => (
            <option key={option.id} hidden={option.hidden} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    );
  },
);

Select.displayName = "Select";
