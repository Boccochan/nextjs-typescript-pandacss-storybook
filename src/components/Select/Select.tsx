import React from "react";

import { styles } from "./Select.styles";
type SelectProps = React.JSX.IntrinsicElements["select"] & {
  options: string[];
};

// TODO: Set style to allow button.
// TODO: Check if options should be options.
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...rest }, ref) => (
    <select ref={ref} {...rest} className={styles.select()}>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  ),
);

Select.displayName = "Select";
