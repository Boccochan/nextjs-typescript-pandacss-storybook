import type { MouseEvent as MouseEventReact } from "react";
import React, { useEffect, useRef, useState } from "react";

import { cx } from "#/styled-system/css";

import { styles } from "./Draggable.styles";

const useDraggable = () => {
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
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const disableDragging = () => {
      dragging.current = undefined;
      clearTimeout(clickedMouse.current);
      clickedMouse.current = undefined;
      setIsDragging(false);
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
  }, []);

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
      setIsDragging(true);
    }, 100);
  };

  return { mouseDown, refDialog, position, isDragging } as const;
};

type DraggableProps = React.JSX.IntrinsicElements["div"] & {
  children: React.ReactNode;
};

export const Draggable = (props: DraggableProps) => {
  const { mouseDown, position, refDialog, isDragging } = useDraggable();
  const { className, children, style, ...rest } = props;

  const createStyle = () => {
    const { top, left, right, bottom, transform, ...styleRest } = style ?? {};

    return {
      top: position?.top ?? top,
      left: position?.left ?? left,
      right: position ? undefined : right,
      bottom: position ? undefined : bottom,
      transform: position ? "none" : transform,
      ...styleRest,
    };
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      role="dialog"
      onMouseDown={mouseDown}
      className={cx(styles.draggable({ isDragging }), className)}
      style={createStyle()}
      ref={refDialog}
      {...rest}
    >
      {children}
    </div>
  );
};
