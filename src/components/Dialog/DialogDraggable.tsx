"use client";
import React from "react";
import { MdClose } from "react-icons/md";

import { type DialogDraggableVariants, styles } from "./DialogDraggable.styles";
import { useDialogDraggable } from "./hooks";

type CloseButtonProps = {
  onClose?: () => void;
};

const CloseButton = (props: CloseButtonProps) => {
  if (!props.onClose) return <></>;

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

  // TODO: コメントを追加

  children: React.ReactNode;

  isOpen?: boolean;

  onClose?: () => void;
};

// TODO: 表示位置を指定できるようにする
export const DialogDraggable = (props: DialogDraggableProps) => {
  const { mouseDown, position, refDialog } = useDialogDraggable();

  if (!props.isOpen) {
    return <></>;
  }

  // TODO: 表示するときにアニメーションが欲しい

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      role="dialog"
      onMouseDown={mouseDown}
      className={styles.dialog}
      style={{
        top: position?.top,
        left: position?.left,
      }}
      ref={refDialog}
    >
      <div className={styles.wrapper({ size: props.size })}>
        <CloseButton onClose={props.onClose} />
        {props.children}
      </div>
    </div>
  );
};
