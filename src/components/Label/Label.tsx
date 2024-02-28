import React from "react";

import type { LabelVariants } from "./Label.styles";
import { styles } from "./Label.styles";

type LabelProps = React.JSX.IntrinsicElements["label"] & {
  /**
   * The size of the Label component.
   */
  size?: LabelVariants["size"];

  name: string;

  children?: React.ReactNode;
};

export const Label = ({ name, size, children, ...rest }: LabelProps) => (
  <label {...rest} className={styles.label({ size })}>
    {name}
    {children}
  </label>
);
