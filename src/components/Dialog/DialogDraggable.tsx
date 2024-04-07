import type { MouseEvent as MouseEventReact } from "react";
import { useEffect, useRef, useState } from "react";

import { css } from "#/styled-system/css";

export const DialogDraggable = () => {
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  }>();
  const isDragging = useRef<boolean>();
  const offset = useRef<{
    offsetX: number;
    offsetY: number;
  }>();

  useEffect(() => {
    const disableDragging = () => {
      isDragging.current = false;
    };

    const mousemove = (e: MouseEvent) => {
      if (!isDragging.current || offset.current === undefined) return;

      setPosition({
        top: e.clientY - offset.current.offsetY,
        left: e.clientX - offset.current.offsetX,
      });
    };

    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", disableDragging);

    // In some cases, user interactions might trigger a drag event
    // rather than a mousemove event.
    document.addEventListener("dragend", disableDragging);

    return () => {
      document.removeEventListener("mouseup", disableDragging);
      document.removeEventListener("dragend", disableDragging);
      document.removeEventListener("mousemove", mousemove);
    };
  }, []);

  const mouseDown = (e: MouseEventReact<HTMLDivElement>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    offset.current = { offsetX, offsetY };
    isDragging.current = true;
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      role="dialog"
      onMouseDown={mouseDown}
      className={css({
        border: "1px solid {colors.body.border}",
        height: "10rem",
        width: "10rem",
        position: "fixed",
        zIndex: 10000,
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
