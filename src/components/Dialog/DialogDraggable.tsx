"use client";
import type { MouseEvent as MouseEventReact } from "react";
import React from "react";
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

const useDialogDraggable = () => {
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

  useEffect(() => {
    const disableDragging = () => {
      dragging.current = undefined;
      clearTimeout(clickedMouse.current);
      clickedMouse.current = undefined;
    };

    const mousemove = (e: MouseEvent) => {
      if (dragging.current === undefined) return;
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
  }, []);

  const mouseDown = (e: MouseEventReact<HTMLDivElement>) => {
    if (!refDialog || !refDialog.current) {
      throw Error("BUG: set ref to dialog.");
    }

    if (clickedMouse.current) {
      clearTimeout(clickedMouse.current);
      clickedMouse.current = undefined;
    }

    const { clientX, clientY } = e;
    const { top, left } = refDialog.current.getBoundingClientRect();

    clickedMouse.current = setTimeout(() => {
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

  return { mouseDown, refDialog, position, reset } as const;
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

export const DialogDraggable = (props: DialogDraggableProps) => {
  const { mouseDown, position, refDialog, reset } = useDialogDraggable();
  const [open, setOpen] = useState(true); // For animation

  if (!props.isOpen) {
    return <></>;
  }

  const close = () => {
    setOpen(false);

    // Wait for closing animation
    setTimeout(() => {
      props.onClose && props.onClose();
      setOpen(true);
      reset();
    }, 200);
  };

  // TODO: 表示するときにアニメーションが欲しい
  // TODO: 初回表示された位置が画面内に納まるように
  // TODO: 画面外をクリックしたら閉じる
  // TODO: 表示位置を指定できるようにする

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      role="dialog"
      onMouseDown={mouseDown}
      className={styles.dialog({ open })}
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
