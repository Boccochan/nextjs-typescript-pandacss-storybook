"use client";
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
   * The id is set as 'key' of option tag.
   */
  id: string;

  /**
   * The value is shown at dropdown menu.
   */
  value: string;
};

type SelectProps = Omit<
  React.JSX.IntrinsicElements["select"],
  "size" | "onChange"
> & {
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

  /**
   * The changeOption is called when an option is selected.
   * Use this function instead of onChange.
   *
   * @param option
   */
  changeOption: (option: OptionProps) => void;
};

/**
 * - The Select component uses pure HTML select tags to avoid complex Javascript implementations.
 * - There is a limit to the width of options.
 * - If you need a richer menu, consider to implement another component.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const {
      options,
      disabled,
      size,
      width,
      loading,
      changeOption,
      defaultValue,
      ...rest
    } = props;

    // TODO: defaultValueだけでよい? valueは?
    // propsの展開型が汚く見えるから何とかしたい。→調査
    // storybookの内容見直し
    // snapshot取り直し

    const [selected, setSelected] = React.useState(defaultValue);
    const isDisabled = disabled || options.length === 0 || loading;

    const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelected(e.target.value);

      const result = options.filter(
        (option) => option.value === e.target.value,
      );

      if (!result) throw Error(`BUG: Not found option ${e.target.value}`);

      changeOption(result[0]);
    };

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
          value={selected}
          onChange={change}
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
