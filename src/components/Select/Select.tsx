import React from "react";

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
   * If true, the select width will be 100%.
   */
  isFullWidth?: SelectVariants["isFullWidth"];

  /**
   * The options of the select.
   */
  options: Option[];
};

// TODO: Sotrybook fullWidth
// TODO: Loading state
// TODO: Support fixed width
// TODO: Options padding when not fullWidth
// TODO: Readonly

/**
 * - The Select component uses pure HTML select tags to avoid complex Javascript implementations.
 * - If you need a richer menu, implement it in another component.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, disabled, size, isFullWidth, ...rest }, ref) => (
    <div
      className={styles.wrapper({
        disabled: disabled || options.length === 0,
        isFullWidth,
      })}
    >
      <select
        ref={ref}
        {...rest}
        className={styles.select({ size, isFullWidth })}
        disabled={disabled || options.length === 0}
      >
        {options.map((option) => (
          <option key={option.id} hidden={option.hidden} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  ),
);

Select.displayName = "Select";
