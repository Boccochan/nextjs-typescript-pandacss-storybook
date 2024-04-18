"use client";
import type { MouseEvent as MouseEventReact } from "react";
import React, { useCallback } from "react";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";

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

type UseDialogDraggableProps = {
  onClose?: () => void;
};

const useDialogDraggable = (props: UseDialogDraggableProps) => {
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  }>();
  const dragging = useRef<{
    offsetX: number;
    offsetY: number;
  }>();
  const clickedMouse = useRef<ReturnType<typeof setTimeout>>();
  const refDialog = useRef<HTMLDivElement>(null);
  const [dialogAnimation, setDialogAnimation] = useState(true);

  const close = useCallback(() => {
    if (!props.onClose) return;
    setDialogAnimation(false);

    // Wait for closing animation
    setTimeout(() => {
      props.onClose && props.onClose();
      setDialogAnimation(true);
      reset();
    }, 200);
  }, [props]);

  useEffect(() => {
    const disableDragging = () => {
      dragging.current = undefined;
      clearTimeout(clickedMouse.current);
      clickedMouse.current = undefined;
    };

    const mousemove = (e: MouseEvent) => {
      if (dragging.current === undefined) return;
      // Dragging dialog
      setPosition({
        top: e.clientY - dragging.current.offsetY,
        left: e.clientX - dragging.current.offsetX,
      });
    };

    // To handle mouse events outside of the component, use addEventListener.
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", disableDragging);
    document.addEventListener("dragend", disableDragging);

    return () => {
      document.removeEventListener("mouseup", disableDragging);
      document.removeEventListener("dragend", disableDragging);
      document.removeEventListener("mousemove", mousemove);
    };
  }, [close]);

  const mouseDown = (e: MouseEventReact<HTMLDivElement>) => {
    if (!refDialog || !refDialog.current) {
      return;
    }

    if (clickedMouse.current) {
      clearTimeout(clickedMouse.current);
      clickedMouse.current = undefined;
    }

    const { clientX, clientY } = e;
    const { top, left } = refDialog.current.getBoundingClientRect();

    clickedMouse.current = setTimeout(() => {
      // Record the distance of the mouse from the dialog top
      // and left after 100msec after clicking.
      // offsetX and offsetY of e are offsets from the parent
      // component. To calculate the distance the dialog moves
      // using the offset from the current mouse location to the
      // top/left of the dialog
      dragging.current = {
        offsetX: clientX - left,
        offsetY: clientY - top,
      };
    }, 100);
  };

  const reset = () => {
    setPosition(undefined);
    dragging.current = undefined;
    if (clickedMouse.current) {
      clearTimeout(clickedMouse.current);
      clickedMouse.current = undefined;
    }
  };

  return { mouseDown, refDialog, position, close, dialogAnimation } as const;
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
  const { mouseDown, dialogAnimation, position, refDialog, close } =
    useDialogDraggable({ onClose: props.onClose });

  if (!props.isOpen) {
    return <></>;
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      role="dialog"
      onMouseDown={mouseDown}
      className={styles.dialog({
        dialogAnimation,
        size: props.size,
      })}
      style={{
        top: position?.top,
        left: position?.left,
      }}
      ref={refDialog}
    >
      <div className={styles.wrapper({ size: props.size })}>
        {props.onClose && <CloseButton onClose={close} />}
        {props.children}
      </div>
    </div>
  );
};
