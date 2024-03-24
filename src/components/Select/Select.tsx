import React from "react";

import { Spinner } from "../Spinner";
import { Options } from "./Options";
import type { SelectVariants } from "./Select.styles";
import { styles } from "./Select.styles";

type OptionProps = {
  /**
   * Hidden this option on dropdown menu.
   */
  hidden?: boolean;

  /**
   * The current selected option.
   */
  isSelected?: boolean;

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
   * If the option data is fetched from backend, consider the width option.
   */
  width?: SelectVariants["width"];

  /**
   * The options of the select.
   */
  options: OptionProps[];

  /**
   * If true, the component is disabled and show a spinner.
   * Enable the loading flag while fetching option data from the backend.
   * When using the loading flag, specify a width other than auto.
   */
  loading?: boolean;
};

/**
 * - The Select component uses pure HTML select tags to avoid complex Javascript implementations.
 * - There is a limit to the width of options.
 * - If you need a richer menu, consider to implement another component.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, disabled, size, width, loading, ...rest }, ref) => {
    const isDisabled = disabled || options.length === 0 || loading;
    const selectedOption = options
      .filter((option) => option.isSelected)
      .shift()?.value;

    return (
      <div
        className={styles.wrapper({
          disabled: isDisabled,
        })}
      >
        <select
          ref={ref}
          {...rest}
          className={styles.select({ size, width })}
          disabled={isDisabled}
          value={selectedOption}
        >
          <Options loading={loading} options={options} />
        </select>

        {loading && (
          <div className={styles.spinner}>
            <Spinner size={size} />
          </div>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
