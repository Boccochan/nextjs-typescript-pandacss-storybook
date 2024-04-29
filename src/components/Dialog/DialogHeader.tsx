import React from "react";
import { MdClose } from "react-icons/md";

import { IconButton } from "../Button";
import type { DialogHeaderVariants } from "./DialogHeader.styles";
import { styles } from "./DialogHeader.styles";

type HeaderProps = {
  /**
   * Title of this dialog.
   */
  title?: string;

  /**
   * Called when the close button is clicked.
   */
  onClose?: () => void;

  /**
   * The size of the component.
   */
  size: DialogHeaderVariants["size"];
};

/**
 * - Padding should be determined by the parent component.
 * - Inherits the font size of the parent component.
 */
export const DialogHeader = (props: HeaderProps) => {
  return (
    <div className={styles.header({ size: props.size })}>
      <h2 className={styles.title}>{props.title}</h2>
      {props.onClose && (
        <IconButton
          className={styles.icon}
          onClick={props.onClose}
          size={props.size}
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
          Icon={MdClose}
          aria-label="close"
        />
      )}
    </div>
  );
};
