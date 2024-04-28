import React from "react";

import type { DialogDraggableVariants } from "./DialogDraggable.styles";
import { styles } from "./DialogFooter.styles";

type DialogFooterProps = {
  children: React.ReactNode;

  size: DialogDraggableVariants["size"];
};

export const DialogFooter = (props: DialogFooterProps) => {
  return (
    <div className={styles.footer({ size: props.size })}>{props.children}</div>
  );
};
