import type { MouseEvent as MouseEventReact } from "react";
import { useEffect, useRef, useState } from "react";

import { css } from "#/styled-system/css";

export const DialogDraggable = () => {
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
      className={css({
        rounded: "md",
        height: "10rem",
        width: "10rem",
        position: "fixed",
        zIndex: 10000,
        bg: "dialog.bg",
        boxShadow: "{colors.dialog.shadow}", // For some reasons, dialog.shadow does not work
      })}
      style={{
        top: position?.top,
        left: position?.left,
      }}
    >
      {/* Draggable modal */}
    </div>
  );
};
