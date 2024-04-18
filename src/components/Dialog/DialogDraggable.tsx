"use client";
import React, { useCallback } from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";

import { Draggable } from "../Draggable";
import { type DialogDraggableVariants, styles } from "./DialogDraggable.styles";

type CloseButtonProps = {
  onClose?: () => void;
};

const CloseButton = (props: CloseButtonProps) => {
  return (
    <button
      className={styles.closeButton()}
      onClick={props.onClose}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <MdClose />
    </button>
  );
};

type DialogDraggableProps = {
  /**
   * The size of the component.
   */
  size?: DialogDraggableVariants["size"];

  /**
   * Children elements or components passed to this component for rendering.
   */
  children: React.ReactNode;

  /**
   * The dialog opens when this flag is true.
   */
  isOpen?: boolean;

  /**
   * Called when the close button is clicked.
   */
  onClose?: () => void;
};
/**
 * - A draggable dialog
 * - Clicking outside the dialog does not close the dialog
 */
export const DialogDraggable = (props: DialogDraggableProps) => {
  const [dialogAnimation, setDialogAnimation] = useState(true);

  const close = useCallback(() => {
    if (!props.onClose) return;
    setDialogAnimation(false);

    // Wait for closing animation
    setTimeout(() => {
      props.onClose && props.onClose();
      setDialogAnimation(true);
    }, 200);
  }, [props]);

  if (!props.isOpen) {
    return <></>;
  }

  return (
    <Draggable
      className={styles.dialog({
        dialogAnimation,
        size: props.size,
      })}
    >
      <div className={styles.wrapper({ size: props.size })}>
        {props.onClose && <CloseButton onClose={close} />}
        {props.children}
      </div>
    </Draggable>
  );
};
