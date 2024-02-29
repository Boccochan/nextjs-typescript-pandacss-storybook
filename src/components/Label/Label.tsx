import React from "react";

import type { LabelVariants } from "./Label.styles";
import { styles } from "./Label.styles";

type LabelProps = Omit<React.JSX.IntrinsicElements["label"], "color"> & {
  /**
   * The size of the Label component.
   */
  size?: LabelVariants["size"];

  /**
   * The color of the component.
   */
  color?: LabelVariants["color"];

  /**
   * The string of the label.
   */
  name: string;

  children?: React.ReactNode;
};

export const Label = ({ name, size, color, children, ...rest }: LabelProps) => (
  <label {...rest} className={styles.label({ size, color })}>
    {name}
    {children}
  </label>
);
