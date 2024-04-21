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

type PositionX = "left" | "center" | "right";
type PositionY = "top" | "bottom" | "middle";
type PostionTransform = { x?: string; y?: string };

type PositionStyle = {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  transform?: string;
};

const calcPosition = (x?: PositionX, y?: PositionY): PositionStyle => {
  const pos = { x: x ?? "center", y: y ?? "middle" };
  const positionStyle: PositionStyle = {};
  const transform: PostionTransform = { x: "0", y: "0" };
  const mergin = 4;

  if (pos.y === "top" || pos.y === "bottom") {
    positionStyle[pos.y] = mergin;
  }

  if (pos.y === "middle") {
    positionStyle.top = "50%";
    transform.y = "-50%";
  }

  if (pos.x === "left" || pos.x === "right") {
    positionStyle[pos.x] = mergin;
  }

  if (pos.x === "center") {
    positionStyle.left = "50%";
    transform.x = "-50%";
  }

  positionStyle.transform = `translate(${transform.x}, ${transform.y})`;

  return positionStyle;
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

  /**
   * Specify the initial display the horizontal position. If not specified, it will be placed in the center.
   */
  positionX?: PositionX;

  /**
   * Specify the initial display the vertical position. If not specified, it will be placed in the middle.
   */
  positionY?: PositionY;
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
      style={calcPosition(props.positionX, props.positionY)}
    >
      <div className={styles.wrapper({ size: props.size })}>
        {props.onClose && <CloseButton onClose={close} />}
        {props.children}
      </div>
    </Draggable>
  );
};
