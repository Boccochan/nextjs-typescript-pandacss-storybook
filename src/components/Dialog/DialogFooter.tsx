import React from "react";

import type { DialogDraggableVariants } from "./DialogDraggable.styles";
import { styles } from "./DialogFooter.styles";

type DialogFooterProps = {
  /**
   * Children elements or components passed to this component for rendering.
   */
  children: React.ReactNode;

  /**
   * The size of the component.
   */
  size: DialogDraggableVariants["size"];
};

export const DialogFooter = (props: DialogFooterProps) => {
  return (
    <div className={styles.footer({ size: props.size })}>{props.children}</div>
  );
};
