import React from "react";

import { css } from "#/styled-system/css";

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
   * The width is the same as width of css. This width takes precedence over the size.
   */
  width?: string;

  /**
   * If true, the select width will be 100%.
   */
  isFullWidth?: SelectVariants["isFullWidth"];

  /**
   * The options of the select.
   */
  options: Option[];
};

// TODO: Loading state
// TODO: Support fixed width
// TODO: Readonly

/**
 * - The Select component uses pure HTML select tags to avoid complex Javascript implementations.
 * - If you need a richer menu, implement it in another component.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, disabled, size, width, isFullWidth, ...rest }, ref) => {
    const isDisabled = disabled || options.length === 0;

    // Can we use css for wrapper??
    const wrapperStyle = css(
      styles.wrapper.raw({
        disabled: isDisabled,
        isFullWidth,
      }),
      css.raw({ width }),
    );

    const selectStyle = css(
      styles.select.raw({ size, isFullWidth }),
      css.raw({ width }),
    );

    return (
      <div className={wrapperStyle}>
        <select
          ref={ref}
          {...rest}
          className={selectStyle}
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
