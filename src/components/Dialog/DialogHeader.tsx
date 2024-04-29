import React from "react";
import { MdClose } from "react-icons/md";

import type { DialogHeaderVariants } from "./DialogHeader.styles";
import { styles } from "./DialogHeader.styles";

type CloseButtonProps = {
  /**
   * Called when the close button is clicked.
   */
  onClose?: () => void;
};

const CloseButton = (props: CloseButtonProps) => {
  return (
    <button
      className={styles.icon}
      onClick={props.onClose}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <MdClose />
    </button>
  );
};

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
      {props.onClose && <CloseButton onClose={props.onClose} />}
    </div>
  );
};
