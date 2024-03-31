import React from "react";

import type { InputIconVariants } from "./InputIcon.styles";
import { styles } from "./InputIcon.styles";

type InputIconProps = {
  children?: React.ReactNode;

  size: InputIconVariants["size"];
};

export const InputIcon = (props: InputIconProps) => {
  return (
    <div className={styles.inputIcon({ size: props.size })}>
      {props.children && props.children}
    </div>
  );
};
