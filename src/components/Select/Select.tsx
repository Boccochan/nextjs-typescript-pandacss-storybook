import React from "react";

import { styles } from "./Select.styles";

type Option = {
  hidden?: boolean;
  value: string;
};

type SelectProps = React.JSX.IntrinsicElements["select"] & {
  options: Option[];
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, disabled, ...rest }, ref) => (
    <div className={styles.wrapper({ disabled })}>
      <select
        ref={ref}
        {...rest}
        className={styles.select()}
        disabled={disabled}
      >
        {options.map((option, index) => (
          <option key={index} hidden={option.hidden}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  ),
);

Select.displayName = "Select";
