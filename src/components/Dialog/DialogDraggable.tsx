import type { MouseEvent as MouseEventReact } from "react";
import React, { useEffect, useRef, useState } from "react";

import { type DialogDraggableVariants, styles } from "./DialogDraggable.styles";

type DialogDraggableProps = {
  /**
   * The size of the component.
   */
  size?: DialogDraggableVariants["size"];

  children: React.ReactNode;
};

export const DialogDraggable = (props: DialogDraggableProps) => {
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  }>();
  const dragging = useRef<{
    offsetX: number;
    offsetY: number;
  }>();

  useEffect(() => {
    const disableDragging = () => {
      dragging.current = undefined;
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
    const { offsetX, offsetY } = e.nativeEvent;
    dragging.current = { offsetX, offsetY };
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      role="dialog"
      onMouseDown={mouseDown}
      className={styles.dialog({ size: props.size })}
      style={{
        top: position?.top,
        left: position?.left,
      }}
    >
      {props.children}
    </div>
  );
};
