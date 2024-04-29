import React from "react";

import type { DialogFooterVariants } from "./DialogContent.styles";
import { styles } from "./DialogContent.styles";

type DialogContentProps = {
  /**
   * The size of the component.
   */
  size: DialogFooterVariants["size"];

  /**
   * Children elements or components passed to this component for rendering.
   */
  children: React.ReactNode;
};

export const DialogContent = (props: DialogContentProps) => {
  return (
    <div className={styles.content({ size: props.size })}>{props.children}</div>
  );
};
