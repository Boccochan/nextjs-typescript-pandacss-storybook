import React from "react";

import type { DialogFooterVariants } from "./DialogContent.styles";
import { styles } from "./DialogContent.styles";

type DialogContentProps = {
  children: React.ReactNode;

  size: DialogFooterVariants["size"];
};

export const DialogContent = (props: DialogContentProps) => {
  return <div className={styles.content({})}>{props.children}</div>;
};
